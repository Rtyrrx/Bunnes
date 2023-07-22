window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let scrollPos = 100;
    let header = document.getElementById('header');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 16;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.t-shirts-blocks')];
    for (var i = currentItem; i < currentItem + 1; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 1;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}




