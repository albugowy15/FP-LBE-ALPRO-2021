function _scrollTo(curr, id) {
    let element = document.getElementById(id);
    let subtractor = 70; // getAdder(id)

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: (element) ? element.getBoundingClientRect().top + window.scrollY - subtractor : 0
    });
}

const message = function() {
    return document.getElementById("hello").innerHTML = "Welcome!!"
}

;(function () {
    setTimeout(message, 5000);
  })()