'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// // Scrolling
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); // Current Position + Current Scroll

// Old-school way
// window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
// });
// Modern way
section1.scrollIntoView({behavior: 'smooth'}); // only works in modern browsers

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     });
// });

// 1. Add event listener to common parent element
// 2. Determine which element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
        // console.log('LINK');
    }
});

// Tabbed component
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) => t.classList.remove('operations__tab--active'));
    tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

// tabs.forEach((t) => t.addEventListener('click', () => console.log('TAB'))); SLOW DO NOT USE

// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
///////////////////////////////////////

// Selecting, Creating, and Deleting Elements

// // Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// // .insertAdjacentHTML

// const header = document.querySelector('.header'); // had to manually input otherwise error

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // messsage.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//     'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message); OLD WAY
// });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); // empty
// console.log(message.style.backgroundColor); // works b/c inline style

// // getComputedStyle
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// // Setting properties
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard property
// console.log(logo.designer); // doesn't work
// console.log(logo.getAttribute('designer')); // works
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src); // absolute URL version
// console.log(logo.getAttribute('src')); // relative URL version

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // absolute URL
// console.log(link.getAttribute('href')); // URL as written in HTML '#'

// // Data attributes
// console.log(logo.dataset.versionNumber); // 3.0

// // Classes
// logo.classList.add('c');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// Don't use (overrides existing classes, only one class)
// logo.className = 'jonas'

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // // Scrolling
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); // Current Position + Current Scroll

    // Old-school way
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });
    // Modern way
    // section1.scrollIntoView({behavior: 'smooth'}); // only works in modern browsers
});

// // Types of events and event handlers
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//     alert('addEventListener: Great! You are reading the heading :D');
// };
// // Usual way
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // Old way
// // h1.onmouseenter = function (e) {
// //     alert('addEventListener: Great! You are reading the heading :D');
// // };

// Event propagation in practice
// rgb(0-255,0-255,0-255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
//     console.log(e.currentTarget === this); // true

//     // Stop propagation
//     // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
// });

// DOM traversing

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)'; // opposite of queryselector

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//     if (el !== h1) el.style.transform = 'scale(0.5)';
// });
