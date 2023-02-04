const FRIENDS_NUM = 3;

function onLoad(){

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    
	
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid center';
    for (var r=0;r<10;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<10;++c){
            var cell = tr.appendChild(document.createElement('td'));
	    cell.id = ""+r+c;
            cell.innerHTML = " ";
            cell.addEventListener('click', help);
        }
    }
    document.body.appendChild(grid);
}

function help(){
	alert(this.id);
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
