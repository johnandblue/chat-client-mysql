function parseQuote (response) {
  renderMsg(response.quoteText, 'response');
  // saveMessage('user2', response.quoteText, Date.now());
  socket.emit('new message', {user: 'user2', content: response.quoteText});
}

let socket = io();

socket.on('messages', function(msgs) {
  if (msgs) {
    msgs.forEach(function (msg) {
      renderMsgJSON(msg);
    });
    scrollWindow();
  }
});

socket.on('new message', function (msgs) {
  // console.log('msgs in client: ', msgs);
  renderMsgJSON(msgs);
});

function scrollWindow () {
  let chatDiv = document.getElementsByClassName('chatWindow')[0];
  chatDiv.scrollTop = chatDiv.scrollHeight;
}

function renderMsgJSON (msg, className) {
  const $msgHtml = $('<div>').addClass('msg').html(msg.content);
  const $msgTime = $('<div>').addClass('timestamp').html(moment.unix(msg.timestamp).calendar());
  if (className) $msgHtml.addClass(className);
  else if (msg.user === 'user1') $msgHtml.addClass('userMsg');
  $('.chatWindow').append($msgHtml).append();
  scrollWindow();
}

function renderMsg (msg, className) {
  const $msgHtml = $('<div class="msg">').html(msg);
  if (className) $msgHtml.addClass(className);
  $('.chatWindow').append($msgHtml);
  scrollWindow();
}

// function saveMessage (user, content, timestamp) {
//   $.ajax({
//     url: '/messages',
//     method: 'POST',
//     contentType: 'application/json',
//     dataType: 'json',
//     data: JSON.stringify({
//       user,
//       content,
//       timestamp
//     }),
//     success: function (data) {
//       console.log('data saved:', data);
//     },
//     error: function (err) {
//       console.log('in da error', err);
//     },
//   });
// }

function getQuote() {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote',
    type: 'GET',
    dataType: 'jsonp'
  });
}

$(document).ready(function () {
  // getMessages();
  $('#target').submit(function (event) {
    event.preventDefault();
    let userText = $('#textbox').val();
    if (userText) {
      renderMsg(userText, 'userMsg');
      $('#textbox').val('');
      // saveMessage('user1', userText, Date.now());
      socket.emit('new message', {user: 'user1', content: userText});
      getQuote();
    }
  });

  $('.clearMsgs a').click(function (event) {
    event.preventDefault();
    $.ajax({
      url: '/delete',
      success: function (data) {
        console.log('message history cleared!', data);
        $('.chatWindow').html();
      },
      error: function (err) {
        console.log(err);
      },
    });
  })
});
