//Handlebars Custom if Function
Handlebars.registerHelper('if_eq', function(a,b,opts){
  if (a == b){
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});

//Handlebars Templating for MENU
$(function () {
    // Grab the template script    
    var menuMLTemplateScript =$("#menu-template-machineLearning").html();
    var menuDSTemplateScript =$("#menu-template-dataScience").html();
    var menuDATemplateScript =$("#menu-template-dataAnalysis").html();
   
    // Compile the template
   var menuMLTemplate = Handlebars.compile(menuMLTemplateScript);
   var menuDSTemplate = Handlebars.compile(menuDSTemplateScript);
   var menuDATemplate = Handlebars.compile(menuDATemplateScript);
  
    // Pass our data to the template    
    var menuMLCompileHtml = menuMLTemplate(articles);
    var menuDSCompileHtml = menuDSTemplate(articles);
    var menuDACompileHtml = menuDATemplate(articles);
 
    // Add the compiled html to the page
   $('.mymenu-machineLearning').html(menuMLCompileHtml);
   $('.mymenu-dataScience').html(menuDSCompileHtml);
   $('.mymenu-dataAnalysis').html(menuDACompileHtml);
  });


//Handlebars TEMPLATING FOR ARTICLE INDEX PAGE
HandlebarsArticles = () => {
  // Grab the template script 
  var theTemplateScript = $("#banner-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Pass our data to the template
  var theCompiledHtml = theTemplate(articles);
  // Add the compiled html to the page
  $('.myarticle').html(theCompiledHtml);
}


//Parse the article info in cookies 
function iframeCookies(link, height) {
  Cookies.set('link', link, { expires: 7 });
  Cookies.set('height', height, { expires: 7 });
}

// After the page is load i creat the iframe and load it in the page.
window.onload = function iframeSetting() {
  // iSetting = document.querySelector('iframe')
  section = document.querySelector('#section');
  iSettingSrc = Cookies.get('link');
  iSettingHeight = Cookies.get('height');

  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", iSettingSrc);
  ifrm.setAttribute("id", "iframe");
  ifrm.style.width = "100%";
  ifrm.style.opacity="0";
  section.appendChild(ifrm);

  document.querySelector('#iframe').height=iSettingHeight;
  spinner();
}
// Query the elements to hide the spinner beccause the iframe is loaded
function spinner() {
  // Hide the loading indicator
const iframeEle = document.getElementById('iframe');
const loadingEle = document.getElementById('loading');
iframeEle.onload = function(){ 
  loadingEle.style.display = 'none';
  iframeEle.style.opacity=1;
}

};

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


// CATEGORY FILTER
	// Add Event Listerner to Button
	var catSelected = document.querySelectorAll('#category');
		
									for (let i=0; i < catSelected.length; i++){
										catSelected[i].addEventListener("click", function(){
											
									//Unselect All Button remove previous filter
											for (let i=0; i < catSelected.length; i++){
												catSelected[i].classList.remove("disabled");				
											}
									//Select the Button on which on I clicked.
										this.classList.add('disabled');

									//Look at all articles in the page
									let filter = this.getAttribute('data-filter');
									var articleSelection = document.querySelectorAll("#banner");

											  for(let i=0; i < articleSelection.length; i++){
													articleSelection[i].style.display="flex";
											  	if (articleSelection[i].classList.contains(filter) | filter == "All" ){
											 		 console.log(true);
													 articleSelection[i].style.display="flex";
											 	 }else{
													articleSelection[i].style.display="none";
												  }	 
									}
									})
								}



 // TOP HEADER MENU STICKY ON TOP               
				// When the user scrolls the page, execute myFunction
				window.onscroll = function () { myFunction() };

				// Get the header
				var header = document.getElementById("header");

				// Get the offset position of the navbar
				var sticky = header.offsetTop;

				// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
				function myFunction() {
					if (window.pageYOffset > sticky) {
						header.classList.add("sticky");
					} else {
						header.classList.remove("sticky");
					}
				}



