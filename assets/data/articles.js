Handlebars.registerHelper('if_eq', function(a,b,opts){
  if (a == b){
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});

//Handlebars Templating compile and data
$(function () {
    // Grab the template script
    var theTemplateScript = $("#banner-template").html();
    var menuMLTemplateScript =$("#menu-template-machineLearning").html();
    var menuDSTemplateScript =$("#menu-template-dataScience").html();
    var menuDATemplateScript =$("#menu-template-dataAnalysis").html();
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
    // add the person partial
    
   var menuMLTemplate = Handlebars.compile(menuMLTemplateScript);
   var menuDSTemplate = Handlebars.compile(menuDSTemplateScript);
   var menuDATemplate = Handlebars.compile(menuDATemplateScript);

    // Define our data object
  var articles = {
    "articles": [
      {
        "id": "001",
        "title": "My super Title",
        "sub-title": "Kaggle Category",
        "description": "My super Description",
        "categories": "kaggle",
        "jupiter-link":"'https://nbviewer.jupyter.org/github/anindya-saha/Machine-Learning-with-Python/blob/master/kaggle-bike-sharing-demand/kaggle-bike-sharing-demand.ipynb'",
        "iframe-height":"28600",
        "image":"images/pic10.jpg",
        "menu":"Machine Learning"
      },
      {
        "id": "002",
        "title": "My super Title 2",
        "sub-title": "Spark Category",
        "description": "My super Description 2",
        "categories": "spark",
        "jupiter-link":"'https://nbviewer.jupyter.org/github/anindya-saha/Data-Science-with-Spark/blob/master/working-with-nested-data-types/working-with-nested-data-types.ipynb'",
        "iframe-height":"1100",
        "image":"images/pic10.jpg",
        "menu":"Data Science"
      },
      {
        "id": "003",
        "title": "My super Title 3",
        "sub-title": "Spark Category",
        "description": "My super Description 3",
        "categories": "spark",
        "jupiter-link":"'https://nbviewer.jupyter.org/github/anindya-saha/Data-Science-with-Spark/blob/master/retail-db-advanced-sql-analysis/retail-database-analysis-python.ipynb'",
        "iframe-height":"6100",
        "image":"images/pic10.jpg",
        "menu":"Data Science"
      },
      {
        "id": "004",
        "title": "My super Title 4",
        "sub-title": "Spark Category",
        "description": "My super Description 4",
        "categories": "spark",
        "jupiter-link":"'https://nbviewer.jupyter.org/github/anindya-saha/Data-Science-with-Spark/blob/master/retail-db-advanced-sql-analysis/retail-database-analysis-python.ipynb'",
        "iframe-height":"6100",
        "image":"images/pic10.jpg",
        "menu":"Data Analysis"
      }
    ]
  };
  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(articles);
    var menuMLCompileHtml = menuMLTemplate(articles);
    var menuDSCompileHtml = menuDSTemplate(articles);
    var menuDACompileHtml = menuDATemplate(articles);

 
    // Add the compiled html to the page
   $('.myarticle').html(theCompiledHtml);
   $('.mymenu-machineLearning').html(menuMLCompileHtml);
   $('.mymenu-dataScience').html(menuDSCompileHtml);
   $('.mymenu-dataAnalysis').html(menuDACompileHtml);
  });


//Parse the article info in cookies 
function iframeCookies(link, height) {
  Cookies.set('link', link, { expires: 7 });
  Cookies.set('height', height, { expires: 7 });
}

//Get article info from cookies and set it in iframe
function iframeSetting() {
  iSetting = document.querySelector('iframe')
  iSetting.src = Cookies.get('link');
  iSetting.height = Cookies.get('height');
}

// Toggle Function to show hide the menu
function menuToggle() {
  var elem = document.getElementById('sidebar')
  if (elem.classList.contains("inactive")) {
    elem.classList.remove("inactive");
  }
  else {
    elem.classList.add("inactive")
  }
}


