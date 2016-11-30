function parseQuote (response) {
  renderMsg(response.quoteText, 'response');
  saveMessage('user2', response.quoteText, Date.now());
}

function getMessages () {
  $.ajax({
    url: '/messages',
    method: 'GET',
    success: function (msgs) {
      msgs.forEach(function (msg) {
        renderMsgJSON(msg);
      });
      scrollWindow();
    },
    error: function(err) {
      console.log(err);
      return;
    },
  });
}

function scrollWindow () {
  let chatDiv = document.getElementsByClassName('chatWindow')[0];
  chatDiv.scrollTop = chatDiv.scrollHeight;
}

function renderMsgJSON (msg, className) {
  const $msgHtml = $('<div class="msg">').html(msg.content);
  if (className) $msgHtml.addClass(className);
  else if (msg.userId === 'user1') $msgHtml.addClass('userMsg');
  $('.chatWindow').append($msgHtml);
  scrollWindow();
}

function renderMsg (msg, className) {
  const $msgHtml = $('<div class="msg">').html(msg);
  if (className) $msgHtml.addClass(className);
  $('.chatWindow').append($msgHtml);
  scrollWindow();
}

function saveMessage (userId, content, timeStamp) {
  $.ajax({
    url: '/messages',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      userId,
      content,
      timeStamp
    }),
    success: function (data) {
      console.log('data saved:', data);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function getQuote() {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote',
    type: 'GET',
    dataType: 'jsonp'
  });
}

$(document).ready(function () {
  getMessages();
  $('#target').submit(function (event) {
    event.preventDefault();
    let userText = $('#textbox').val();
    if (userText) {
      renderMsg(userText, 'userMsg');
      $('#textbox').val('');
      saveMessage('user1', userText, Date.now());
      getQuote();
    }
  });
});
