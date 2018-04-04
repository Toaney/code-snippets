require([
		"modules/jquery-mozu",
		"hyprlive",
		"modules/backbone-mozu",
		"modules/api"], function ($, Hypr, Backbone, api) {

		
var catalog = { '1234':
   { IsKosher: true,
     GlutenFree: true,
     isPeanutFree: true,
     DairyKosher: false,
     TreeNuts: true,
     Soy: false },
  '2345':
   { IsKosher: false,
     GlutenFree: false,
     isPeanutFree: true,
     DairyKosher: false,
     TreeNuts: true,
     Soy: false },
  '3456':
   { IsKosher: true,
     GlutenFree: true,
     isPeanutFree: true,
     DairyKosher: false,
     TreeNuts: true,
     Soy: false },
  '4567':
   { IsKosher: false,
     GlutenFree: false,
     isPeanutFree: true,
     DairyKosher: false,
     TreeNuts: true,
     Soy: false },
  '5678':
   { IsKosher: false,
     GlutenFree: true,
     isPeanutFree: true,
     DairyKosher: false,
     TreeNuts: true,
     Soy: false },
	}


	
		
		
/* 	var catalog = [
		{ name:"Buttered Popcorn", kosher:0, glutenfree:0, sugarfree:0, peanutfree:1, nutfree: 0 },	
		{ name:"Licorice", kosher:1, glutenfree:0, sugarfree:0, peanutfree:1, nutfree: 0 },
		{ name:"Sizzling Cinnamon", kosher:1, glutenfree:1, sugarfree:0, peanutfree:1, nutfree: 0 },
		{ name:"Toasted Marshmallow", kosher:1, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 0 },
		{ name:"Very Cherry", kosher:1, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 1 },
		{ name:"Berry Blue", kosher:0, glutenfree:1, sugarfree:0, peanutfree:1, nutfree: 0 },
		{ name:"Chili Mango", kosher:1, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 1 },
		{ name:"Juicy Pear", kosher:1, glutenfree:0, sugarfree:0, peanutfree:1, nutfree: 1 },
		{ name:"French Vanilla", kosher:1, glutenfree:0, sugarfree:1, peanutfree:1, nutfree: 1},
		{ name:"Top Banana", kosher:0, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 0 },	
	]; */

	//creating all products from the catalog and displaying them in the results
	function createProduct() {
		for (x in catalog) {
	
		//'pinpoint the item objects properties object'	
		var dynClasses = "ingredient-filter";	
					
					
					if (catalog[x].IsKosher == true) {
						dynClasses = dynClasses + " kosher";
					};							

					if (catalog[x].GlutenFree == true) {
						dynClasses = dynClasses + " gluten-free";
					};
					
					if (catalog[x].isPeanutFree === true) {
						dynClasses = dynClasses + " peanut-free";
					};
					
					if (catalog[x].DairyKosher === true) {
						dynClasses = dynClasses + " dairy-kosher";
					};

					if (catalog[x].TreeNuts === true) {
						dynClasses = dynClasses + " treenut-free";
					};
					
					if (catalog[x].Soy == true) {
						dynClasses = dynClasses + " soy-free";
					};
						
					if (1 == 1) {
						dynClasses = dynClasses + " test";
					};
					
			console.log(catalog[x].IsKosher)	

			var prodCard = "<div class='" + dynClasses + "' style='float:left; padding: 15px 15px 15px 15px'><a href=''><img src='https://placebear.com/150/150' alt='placebear image'><p>New Product Name</p></a></div>"	
				
			$("#matrix-results").append(prodCard);				
		}
	}

/*
	function createProduct() {
		for (i=0; i < catalog.length; i++) {
	
		//'pinpoint the item objects properties object'	
		var prodProperties = catalog[i].properties
		var dynClasses = "ingredient-filter";	
						
					if (catalog[i].prodProperties.IsKosher === true) {
						dynClasses = dynClasses + " kosher";
					};							

					if (catalog[i].prodProperties.GlutenFree === true) {
						dynClasses = dynClasses + " gluten-free";
					};
					
					if (catalog[i].prodProperties.isPeanutFree === true) {
						dynClasses = dynClasses + " peanut-free";
					};
					
					if (catalog[i].prodProperties.DairyKosher === true) {
						dynClasses = dynClasses + " dairy-kosher";
					};

					if (catalog[i].prodProperties.TreeNuts === true) {
						dynClasses = dynClasses + " treenut-free";
					};
					
					if (catalog[i].prodProperties.Soy === true) {
						dynClasses = dynClasses + " soy-free";
					};
						

			var prodCard = "<div class='" + dynClasses + "' style='float:left; padding: 15px 15px 15px 15px'><a href=''><img src='https://placebear.com/150/150' alt='placebear image'><p>New Product Name</p></a></div>"	
				
			$("#matrix-results").append(prodCard);				
		}
	}*/

	
	//checking if a checkbox is checked
	//concatenate classes of checked boxes into a string; reset all results w/ '.hide' then show the new set of results
	function checkboxChecker() {
        $('.matrix-checkbox').click(function(event) {
 			var checkedElements = ""
			
			if ($('#is-kosher').is(':checked')){
				checkedElements = checkedElements + $('#is-kosher').attr('name');
			};
			if ($('#is-gluten-free').is(':checked')){
				checkedElements = checkedElements + $('#is-gluten-free').attr('name');
			};
/* 			if ($('#is-sugar-free').is(':checked')){
				checkedElements = checkedElements + $('#is-sugar-free').attr('name');
			}; */
			if ($('#is-peanut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-peanut-free').attr('name');
			};
			if ($('#is-treenut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-treenut-free').attr('name');
			};
			if ($('#is-treenut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-treenut-free').attr('name');
			};
			if ($('#is-soy-free').is(':checked')){
				checkedElements = checkedElements + $('#is-soy-free').attr('name');
			};
			if (checkedElements == ""){ 
				checkedElements = ".ingredient-filter"
			};
			console.log(checkedElements);				
			
			$('.ingredient-filter').hide();
			$(checkedElements).show();
		});
	};
	
	
/* 	function checkboxChecker() {
        $('.matrix-checkbox').click(function(event) {
 			var checkedElements = ""
			
			if ($('#is-kosher').is(':checked')){
				checkedElements = checkedElements + $('#is-kosher').attr('name');
			};
			if ($('#is-gluten-free').is(':checked')){
				checkedElements = checkedElements + $('#is-gluten-free').attr('name');
			};
		if ($('#is-sugar-free').is(':checked')){
				checkedElements = checkedElements + $('#is-sugar-free').attr('name');
			};
			if ($('#is-peanut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-peanut-free').attr('name');
			};
			if ($('#is-treenut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-treenut-free').attr('name');
			};
			if ($('#is-treenut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-treenut-free').attr('name');
			};
			if ($('#is-soy-free').is(':checked')){
				checkedElements = checkedElements + $('#is-soy-free').attr('name');
			};
			
			console.log(checkedElements);				
			
			$('.ingredient-filter').hide();
			$(checkedElements).show();
		});
	};	 */
	
	
	
	
	
	
	//filtering for certain product attributes such as glutenfree
	//input parameter is the input catalog; facet parameter is what you are filtering for
	var tempCatalog = catalog;
	
	function filterCatalog(input, facet) {
		var functCatalog = [];
		for (i=0; i < input.length; i++){		
			if (input[i][facet] == 1) {
				functCatalog.push(input[i]);
			}	
		}
		tempCatalog = functCatalog;
		console.log(tempCatalog);
		
		$("#matrix-results").html(tempCatalog);
	}
	
	
	//run functions
	$(document).ready(function() {

	//alert(catalog[1015].IsKosher);
	
		createProduct();
		checkboxChecker();

	});
});
