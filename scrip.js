// ---------------- ADDRESS FORM ----------------

const addressbtn = document.querySelector('#address-form');
const addressclose = document.querySelector('#address-close');
const addressform = document.querySelector('.address-form');

addressbtn.addEventListener("click", function() {
    addressform.style.display = "flex";
});

addressclose.addEventListener("click", function(event) {
    event.stopPropagation();
    addressform.style.display = "none";
});


// ---------------- SLIDER ----------------

const rightBtn = document.querySelector('.fa-chevron-right');
const leftBtn = document.querySelector('.fa-chevron-left');

const images = document.querySelectorAll(
    '.slider-content-left-top img'
);

const sliderItems = document.querySelectorAll(
    '.slider-content-left-bottom li'
);

let index = 0;


// Hàm chuyển ảnh
function showSlide(newIndex) {

    // Nếu chuyển sang phải
    if (newIndex > index) {
        images[index].style.transform = 'translateX(-100%)';
        images[newIndex].style.transform = 'translateX(0)';
    }

    // Nếu chuyển sang trái
    else if (newIndex < index) {
        images[index].style.transform = 'translateX(100%)';
        images[newIndex].style.transform = 'translateX(0)';
    }

    // Xóa active khỏi ô hiện tại
    sliderItems[index].classList.remove('active');

    // Cập nhật index
    index = newIndex;

    // Thêm active vào ô mới
    sliderItems[index].classList.add('active');
}


// ---------------- NÚT PHẢI > ----------------

rightBtn.addEventListener('click', function () {

    let newIndex = index + 1;

    if (newIndex >= images.length) {
        newIndex = 0;
    }

    showSlide(newIndex);
});


// ---------------- NÚT TRÁI < ----------------

leftBtn.addEventListener('click', function () {

    let newIndex = index - 1;

    if (newIndex < 0) {
        newIndex = images.length - 1;
    }

    showSlide(newIndex);
});


// ---------------- CLICK 5 Ô PHÍA DƯỚI ----------------

sliderItems.forEach(function (item, itemIndex) {

    item.addEventListener('click', function () {

        if (itemIndex === index) {
            return;
        }

        showSlide(itemIndex);
    });

});

// ------------------------Product-Gallery-------------------

const galleryItems = document.querySelectorAll(
    '.product-gallety-content-right-top ul li:not(:last-child)'
);

galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {

        // Xóa active hiện tại
        document.querySelector(
            '.product-gallety-content-right-top ul li.active'
        )?.classList.remove('active');

        // Thêm active vào thẻ vừa click
        this.classList.add('active');
    });
});


