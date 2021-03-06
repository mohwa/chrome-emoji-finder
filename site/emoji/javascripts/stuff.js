// Generated by CoffeeScript 1.8.0
var focusOnSearch;
var clip = null;

// custom event listener
$(document).on('emoji:ready', function() {

  $(".input-search").focus();
  $(".loading").remove();

  return $(".emoji-code").attr("readonly", "readonly");

});


focusOnSearch = function(e) {
  var t;
  if (e.keyCode === 191 && !$(".input-search:focus").length) {
    $(".input-search").focus();
    t = $(".input-search").get(0);
    if (t.value.length) {
      t.selectionStart = 0;
      t.selectionEnd = t.value.length;
    }
    return false;
  }
};

$.getJSON('emojis.json', function(emojis) {

  var container = $('.emojis-container');

  $.each(emojis, function(name, keywords) {
    return container.append("<li class='result emoji-wrapper' data-clipboard-text=':" + name + ":'> <div class='emoji s_" + (name.replace(/\+/, '')) + "' title='" + name + "'>" + name + "</div> <input type='text' class='autofocus plain emoji-code' value=':" + name + ":' /> <span class='keywords'>" + name + " " + keywords + "</span> </li>");
  });

  // fire custom event
  return $(document).trigger('emoji:ready');
});


$(document).on('click', '[data-clipboard-text]', function() {

  if ($(this).attr('class').indexOf('js-clear-search') > -1){
    $(".input-search").value('');
    return false;
  }

  var text = $(this).attr('data-clipboard-text');

  clipBoardCopy(text);

  $("<div class=alert></div>").text("Copied " + text).appendTo("body").fadeIn().delay(1000).fadeOut();

});


function clipBoardCopy(text){

  text = text || '';

  var textarea = $('<textarea></textarea>');

  textarea.text(text);

  $(document.body).append(textarea);

  textarea.select();

  // called copy command
  document.execCommand('copy');

  textarea.remove();

  top.window.close();

};