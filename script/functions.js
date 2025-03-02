//Background Color
function getRandomBgColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.getElementById('bg-color-generator').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomBgColor();
});



document.addEventListener("DOMContentLoaded", function () {
    let taskNumberButton = document.getElementById("task-number");
    let navNumberButton = document.getElementById("nav-number");
    let completedButtons = document.querySelectorAll(".completed");
    

    let clickedCount = 0;

    completedButtons.forEach( function (button){
        button.addEventListener("click", function () {
            alert('Board Updated Successfully')
            let taskValue = parseInt(taskNumberButton.textContent);
            let navValue = parseInt(navNumberButton.textContent);
            let addTitle = document.getElementById('add-title');
            


            if (taskValue > 0) {
                taskNumberButton.textContent = taskValue - 1;
                navNumberButton.textContent = navValue + 1;
                let hi = document.getElementsByClassName('hi');
                this.disabled = true;
                this.style.backgroundColor = "gray";
                this.style.color = "white";
                let time = new Date();
                let now = time.toLocaleTimeString();

                // let title = document.getElementsByClassName('h4-title').innerText;
                let title = geth4Title();
                let p = document.createElement('p');
                p.style.padding = '6px';
                p.style.backgroundColor = "#F4F7FF"
                p.style.fontSize = '16px';
                p.style.borderRadius = '16px'
                p.style.paddingLeft = "8px";
                p.style.marginTop = '13px';
                
                p.innerText = `You have completed the task ${title} issue at ${now}`
                addTitle.appendChild(p);
                clickedCount++;
                if (clickedCount === completedButtons.length) {
                alert("congrat you have completed all the task");
                }
            }
        })
    })
    
});


//clear history

// let clear = document.getElementById('clear');
function clearHistory(){
    let addTitle = document.getElementById('add-title');
    let titleContainer = document.getElementById('title-container');
    titleContainer.removeChild(addTitle);
}


function geth4Title(){
    let titleContainer = document.getElementsByClassName('h4-title > h4');
    return titleContainer.innerText;
}

