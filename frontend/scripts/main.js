const btnToggle = document.querySelector('.js-toggle');
const listPriceAnnualy = document.querySelectorAll('.js-price-annually');
const listPriceMonthly = document.querySelectorAll('.js-price-monthly');

btnToggle.addEventListener('click', function(e){
    btnToggle.classList.toggle('btn-toggle--move')

    listPriceAnnualy.forEach(e => e.classList.toggle('disabled'))
    listPriceMonthly.forEach(e => e.classList.toggle('disabled'))
})