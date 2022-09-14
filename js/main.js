let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 42;
let speed = 30;

let progress = setInterval(() => {
  progressValue++;
  progressBar.style.background = `conic-gradient(
      #7797CF ${progressValue * 3.6}deg,
      #DBDBDB ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

window.onload = function() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function clickCount() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = 42;
    let speed = 30;

    let progress = setInterval(() => {
    progressValue++;
    progressBar.style.background = `conic-gradient(
        #7797CF ${progressValue * 3.6}deg,
        #DBDBDB ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
    }, speed);
}
