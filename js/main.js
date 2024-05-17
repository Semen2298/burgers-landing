document.getElementById('head-offer-btn').onclick = function () {
    document.getElementById('choose').scrollIntoView({behavior: 'smooth'});
}


let links = document.querySelectorAll('.header-menu__navigation_item > a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
}

let btn = document.getElementsByClassName('choose__burger-card_price-btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        document.getElementById('making').scrollIntoView({behavior: 'smooth'});
    }
}

let burger = document.getElementById('burger');
let firstName = document.getElementById('name');
let phone = document.getElementById('phone');

document.getElementById('making-action').onclick = function () {
    let hasError = false;

    [burger, firstName, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.border = '';
        }
    });

    if (!hasError) {
        [burger, firstName, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро с вами свяжемся!');
    }
}


let prices = document.getElementsByClassName('choose__burger-card_price');

document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 70;
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-prise') * coefficient).toFixed(1) + ' ' + newCurrency;
        
    }

}