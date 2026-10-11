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