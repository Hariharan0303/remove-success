function pop(div) {
				document.getElementById(div).style.display = 'block';
			}
			function hide(div) {
				document.getElementById(div).style.display = 'none';
			}
			//To detect escape button
			document.onkeydown = function(evt) {
				evt = evt || window.event;
				if (evt.keyCode == 27) {
					hide('popDiv');
				}
			};
	

function quick_Sort(toSortNum) {
  var toSortNum = document.getElementById("input1").value;
	if (toSortNum.length <= 1) { 
		return toSortNum;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = toSortNum.pop();
		var length = toSortNum.length;

		for (var i = 0; i < length; i++) {
			if (toSortNum[i] <= pivot) {
				left.push(toSortNum[i]);
			} else {
				right.push(toSortNum[i]);
			}
		}
         console.log("Out of loop");
		 return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
		 
		 console.log("Original array: " + myArray);
	var sortedArray = quick_Sort(toSortNum);
	console.log("Sorted array: " + sortedArray);
	document.getElementById("output").innerHTML = sortedArray;
	}
}

//multiples of x and y

function multiply() {
var sum = 0;
	var firstNum = document.getElementById("mul1").value;
	var secondNum = document.getElementById("mul2").value;
	for (var x = 0; x < 1000; x++)
    {
     if (x % firstNum === 0 || x % secondNum === 0)
     {
       sum += x;
     } 
    }

document.getElementById("output4").innerHTML = sum;
}
    
//string starts with 'java'

function startsWithJava(){
  var inputString = document.getElementById('str').value;
  //var toCheck = "java";
	if(inputString.startsWith('java'))
	{
	console.log('inside if');
	document.getElementById('output5').innerHTML = 'Yea!Its starts with java';
	}else{
	document.getElementById('output5').innerHTML = "Nope";
	}
}

//print the integer intervals

function getInt(){
	var startingNum = document.getElementById("num1").value;
	var lastNum = document.getElementById("num2").value;
	var totalNum = [];
	for (var i = startingNum; i<=lastNum; i++)
	{
	totalNum.push(i);
	}
	document.getElementById("output6").innerHTML = totalNum;
	}
	
//check array elements
	
function checkArray(){
	
    var array1 = document.getElementById("arr1").value; 
    var array2 = document.getElementById("arr2").value;  
	
	var array3 = JSON.stringify(array1);
	var array4 = JSON.stringify(array1);
	
     
	var repeatedArray = [];
    for(let i = 0; i < array3.length; i++)
	{  
        for(let j = 0; j < array4.length; j++)
		{ 
            if(array1[i] === array2[j]) 
			{ 
            repeatedArray.push(array1[i]); 
            }
            document.getElementById("output7").innerHTML = repeatedArray; 
            
        }  
	}
	alert("There is no repeated Element in given array");
}

//age calculation
function calcAge(birthYr){
	  var currentYear = new Date().getFullYear();
	  var birthYear = document.getElementById("birthYr").value;
	  var currentAge = currentYear - birthYear;
	  document.getElementById("ageCal").innerHTML = currentAge;
	  }
	  
//check before weather input is a number or a striung and proceed.

function calcVowels(text){  
	  var matchingLetter = text.match(/[aeiou]/gi);
	  document.getElementById('totalVowels').innerHTML = matchingLetter;
}

//To Check largest Number
/*function numCheck(numToCheckLar) {
    var largestNum = 0;
	for(i=0; i<=largestNum;i++) {
	  if(numToCheckLar[i]>largestNum) {
	    var largestNum = numToCheckLar[i];
      }
	}
    alert(largestNum);*/


