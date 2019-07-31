"use strict";
(function () {
	var dropLoc = document.getElementById("dropBag");
	var dragItems = document.getElementsByClassName("shop-item-image");
	console.log(dragItems);
	for (var i = 0; i < dragItems.length; i++) {
		dragItems[i].addEventListener('dragstart', onDragStart, false);
	}
	function onDragStart(evt){
		console.log("its dragging-start");
		evt.dataTransfer.setData('className',evt.target.className);
		evt.dataTransfer.setData('id',evt.target.id);
		console.log("its dragging");
	}
	
	dropLoc.ondragover = function(evt)
	{
		evt.preventDefault();
		console.log("its dragged");
	}
	
	dropLoc.ondrop = function(evt)
	{
		evt.preventDefault();
		console.log(evt);
		var targetElemClassName = evt.dataTransfer.getData('className');
		var targetElementId = evt.dataTransfer.getData("id");
		console.log(targetElemClassName, targetElementId);

		var myElement = document.getElementsByClassName(targetElemClassName);
		console.log(myElement);
		
		var displayImg = document.getElementById('added-Items');
		
		var newDiv = document.createElement('div');
		newDiv.setAttribute("class","cart-items");
		addToCart(targetElementId);
	}
})();
