// var articles = {
//     article_1: {
//         title:"article1",
//         body:"dfdfdfd",
//         categories: [],
//         link:"https://nbviewer.jupyter.org/github/anindya-saha/Machine-Learning-with-Python/blob/master/kaggle-bike-sharing-demand/kaggle-bike-sharing-demand.ipynb",
//         iframeHeight:28600,
//     }
// }


// // compile the template
// function createHTML(){
//   var rawTemplate = document.getElementById("article-template").innerHTML;
//   var compileTemplate = Handlebars.compile(rawTemplate);
//   var ourGeneratedHTML = compileTemplate(articles);

//   var myarticle = document.getElementById("myarticle");
//   myarticle.innerHTML = ourGeneratedHTML;
// }

$(function () {
    // Grab the template script
    var theTemplateScript = $("#banner-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
    // Define our data object
    var articles={
      "title": "My super Title",  
    };
  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(articles);
  
    // Add the compiled html to the page
    $('.myarticle').html(theCompiledHtml);
  });