$(document).ready(function() {
  $("#to-do-list").submit(function(event) {
    event.preventDefault();
    var input = $("#to-do").val();
    $("#list").append("<li><input type='checkbox' name='to-do'> " + input+ "</li>");
    $("#list li").unbind('click').click(function() {
      $(this).remove();
    });
  });
});
