require([
		"modules/jquery-mozu",
		"hyprlive",
		"modules/backbone-mozu",
		"modules/api"], function ($, Hypr, Backbone, api) {
	
		
	var catalog = [
		{ name:"Product 1", kosher:0, glutenfree:0, sugarfree:0, peanutfree:1, nutfree: 0 },	
		{ name:"Product 2", kosher:1, glutenfree:0, sugarfree:0, peanutfree:1, nutfree: 0 },
		{ name:"Product 3", kosher:1, glutenfree:1, sugarfree:0, peanutfree:1, nutfree: 0 },
		{ name:"Product 4", kosher:1, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 0 },
		{ name:"Product 5", kosher:1, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 1 },
		{ name:"Product 6", kosher:0, glutenfree:1, sugarfree:0, peanutfree:1, nutfree: 0 },
		{ name:"Product 7", kosher:1, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 1 },
		{ name:"Product 8", kosher:1, glutenfree:0, sugarfree:0, peanutfree:1, nutfree: 1 },
		{ name:"Product 9", kosher:1, glutenfree:0, sugarfree:1, peanutfree:1, nutfree: 1},
		{ name:"Product 10", kosher:0, glutenfree:1, sugarfree:1, peanutfree:1, nutfree: 0 },	
	];

	//creating all products from the catalog and displaying them in the results
	function createProduct() {
	
		for (i=0; i<catalog.length; i++) {
			var dynClasses = "ingredient-filter";
		
			if (catalog[i]["kosher"] == 1) { dynClasses = dynClasses + " kosher" };
			if (catalog[i]["glutenfree"] == 1) { dynClasses = dynClasses + " gluten-free" };
			if (catalog[i]["sugarfree"] == 1) { dynClasses = dynClasses + " sugar-free" };
			if (catalog[i]["peanutfree"] == 1) { dynClasses = dynClasses + " peanut-free" };
			if (catalog[i]["nutfree"] == 1) { dynClasses = dynClasses + " nut-free" };	

			var prodCard = "<div class='" + dynClasses + "' style='float:left; padding: 15px 15px 15px 15px'><a href=''><img src='https://placebear.com/150/150' alt='placebear image'><p>New Product Name</p></a></div>"	

		$("#matrix-results").append(prodCard);				
		}

	}
	
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
			if ($('#is-sugar-free').is(':checked')){
				checkedElements = checkedElements + $('#is-sugar-free').attr('name');
			};
			if ($('#is-peanut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-peanut-free').attr('name');
			};
			if ($('#is-nut-free').is(':checked')){
				checkedElements = checkedElements + $('#is-nut-free').attr('name');
			};	
			console.log(checkedElements);				
			
			$('.ingredient-filter').hide();
			$(checkedElements).show();
		});
	};
	
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

		createProduct();
		checkboxChecker();

	});
});
