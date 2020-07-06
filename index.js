// jshint esversion:6

$(".mode").click(function()
{
  if($("#theme").attr("href")=="css/styles.css")
  $("#theme").attr("href","css/styles1.css");
  else
  $("#theme").attr("href","css/styles.css");
});
