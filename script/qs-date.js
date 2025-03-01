document.getElementById("qs-page").addEventListener('click', function(){
    window.location.href ='question.html';
})

let currentDate = new Date().toDateString();
let date = document.getElementById('date');
date.innerText = `${currentDate}`;





