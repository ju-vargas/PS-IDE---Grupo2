const eat = document.getElementById("eat");
const drink = document.getElementById("drink");

drink.addEventListener("click", function(){
    document.getElementById("menu-content-list-2-display").style.display = 'none'; 
    document.getElementById("menu-content-list-display").style.display = 'block'; 
    document.getElementById("drink").style.backgroundColor = "gray"; 
    document.getElementById("drink").style.color = "white"; 
    document.getElementById("eat").style.backgroundColor = "#f7f5f2"; 
    document.getElementById("eat").style.color = "black"; 
    document.getElementById("menu-content-list").style.height = '460px';
});

eat.addEventListener("click", function(){
    document.getElementById("menu-content-list-2-display").style.display = 'block'; 
    document.getElementById("menu-content-list-display").style.display = 'none'; 
    document.getElementById("eat").style.backgroundColor = "gray"; 
    document.getElementById("eat").style.color = "white"; 
    document.getElementById("drink").style.backgroundColor = "#f7f5f2"; 
    document.getElementById("drink").style.color = "black"; 
    document.getElementById("menu-content-list").style.height = '505px';
});

