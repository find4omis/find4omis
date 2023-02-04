const FRIENDS_NUM = 3;

function onLoad(){

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var OMInums = [];
    var Othernums = [];
    while(OMInums.length < 4){
 	var num1 = Math.floor(Math.random() * 7);
	var num2 = Math.floor(Math.random() * 7);
	var numCombined = num1.toString()+num2.toString();
	if(!OMInums.includes(numCombined)){
	     OMInums.push(numCombined);
	     console.log("nomi", numCombined);
	}
    }
    while(Othernums.length < 4){
 	var num1 = Math.floor(Math.random() * 7);
	var num2 = Math.floor(Math.random() * 7);
	var numCombined = num1.toString()+num2.toString();
	if(!OMInums.includes(numCombined) && !Othernums.includes(numCombined)){
	     Othernums.push(numCombined);
	     console.log("not omi", numCombined);
	}
    }
	
	
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid center';
    for (var r=0;r<8;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<8;++c){
            var cell = tr.appendChild(document.createElement('td'));
	    cell.id = ""+r+""+c;
	    if(OMInums.includes(cell.id)){
		cell.className = "omi";
	    }
	    if(Othernums.includes(cell.id)){
		cell.className = "notomi";
	    }
            cell.innerHTML = " ";
            cell.addEventListener('click', help);
        }
    }
    document.body.appendChild(grid);
}

function help(){
	if(this.className === "omi"){
	        var img = document.createElement('img');
    		img.setAttribute('src', '/media/omi.png');
		this.className = this.className + " hasomi";
    		this.appendChild(img);
	}
	else if(this.className === "notomi"){
	        var img = document.createElement('img');
    		img.setAttribute('src', '/media/brother.png');
		this.className = this.className + " hasnotomi";
    		this.appendChild(img);
	}
	else if(!this.className.includes("has")) {
		this.className = "yousuck";
	}
}

/*
function onClick(event){
    var img = document.createElement('img');
    img.setAttribute('src', '/media/egg.png');
    img.setAttribute('height', '100vh');
    img.setAttribute('style', 'position: absolute; top: '+(event.clientY-20)+'px; left: '+(event.clientX-20)+'px;');
    document.body.appendChild(img);
    
    var h2 = document.createElement('h2');
    h2.textContent = "oh no I have egg on me!";
    document.body.appendChild(h2);
   
}*/
