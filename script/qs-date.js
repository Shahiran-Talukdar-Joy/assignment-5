// go to question page
document.getElementById("qs-page").addEventListener('click', function(){
    window.location.href ='question.html';
})


// back to desk
function goBack(){
    return window.location.href="./index.html";
}

let currentDate = new Date().toDateString();
let date = document.getElementById('date');
date.innerText = `${currentDate}`;

