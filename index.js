// jshint esversion:6

$(".mode").click(function()
{
  if($("#theme").attr("href")=="styles.css")
  $("#theme").attr("href","styles1.css");
  else
  $("#theme").attr("href","styles.css");
});
