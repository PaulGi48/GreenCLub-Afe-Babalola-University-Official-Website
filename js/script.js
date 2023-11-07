$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };
  
  scaleFix();
  // Menu Android
  if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

var currentYear = (new Date).getFullYear();
  $(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
  });

  $(function(){
  $('.sf-menu').superfish({autoArrows: true})
})


var screen_width = $(window).width();
if (screen_width <= 576) {
  $('div.navbar').hide();
} else {
  $('div.navbar').show();
}

function showArticle(articleNumber) {
  const popup = document.getElementById("article-popup");
  const articleTitle = document.getElementById("article-title");
  const articleContent = document.getElementById("article-content");

  // You can replace the following with actual article data
  const articles = [
      {
          title: "Article Title 1",
          content: "Full content of Article 1 goes here...",
      },
      {
          title: "Article Title 2",
          content: "Full content of Article 2 goes here...",
      },
      // Add more articles as needed
  ];

  articleTitle.textContent = articles[articleNumber - 1].title;
  articleContent.textContent = articles[articleNumber - 1].content;

  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("article-popup");
  popup.style.display = "none";
}