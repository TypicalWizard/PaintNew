var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("lime");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("blueviolet");
colorCircles[6] = document.getElementById("saddlebrown");
colorCircles[7] = document.getElementById("black");

var targetColor="red";
colorCircles[0].style.height = "60px"; 
colorCircles[0].style.width = "60px";

var list = document.getElementById("list"); 
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas); 

function pickColor(e){
	console.log(e.target.tagName);

	if (e.target.tagName=="LI"){
		if (e.target.id=="red"){
			targetColor="red"
		}

		else if (e.target.id=="blue"){
			targetColor="blue"
		}

		else if (e.target.id=="lime"){
			targetColor="lime"
		}

		else if (e.target.id=="yellow"){
			targetColor="yellow"
		}

		else if (e.target.id=="cyan"){
			targetColor="cyan"
		}

		else if (e.target.id=="blueviolet"){
			targetColor="blueviolet"
		}

		else if (e.target.id=="saddlebrown"){
			targetColor="saddlebrown"
		}

		else if (e.target.id=="black"){
			targetColor="black"
		}

		else if (e.target.id=="white"){
			targetColor="white"
		}

		for (var i=0; i<=9; i++)
			colorCircles[1].style.height="50px";
			colorCircles[1].style.width="50px";
		}
		e.target.style.height = "60px";
		e.target.style.width = "60px";
	}

function drawOnCanvas(e){
	if (e.which==1){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, 20,0, Math.PI*2);
		canvasContext.fill();
	}
}
