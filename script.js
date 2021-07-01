

var btn = document.getElementById('submit');
var invalid = document.getElementById('invalid');
var error_img = document.getElementById('error-img');
var input = document.getElementById('email');


btn.addEventListener('click', function(){

    
    if(input.nodeValue != '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'){
        error_img.style.display = 'block';
        invalid.innerHTML = "Please povide a valid email"
        input.style.border = '2px solid red'

    }
    else{
        error_img.style.display = 'none';
        invalid.innerHTML = ""
    }

});




    