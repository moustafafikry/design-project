
let spans2 = document.querySelectorAll(".stats .container .box .one");
let sectionStats = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY =  sectionStats.offsetTop) {
        if (!started) {
            spans2.forEach((num) => startCount(num));
        }
    }
    started = true;
}

    
function startCount (el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
            el.textContent++;
            if (el.textContent === goal) {
                clearInterval(count);
        }
    }, 2000 / goal);
}
