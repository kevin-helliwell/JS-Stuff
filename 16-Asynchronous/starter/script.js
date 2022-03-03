'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const REST_COUNTRIES = 'https://restcountries.com/v3/name';

// OLD WAY getCountryData function
// function getCountryData(countryName) {
//     const request = new XMLHttpRequest();

//     console.log('open...');
//     request.open('GET', `${REST_COUNTRIES}/${countryName}`);

//     console.log('send...');
//     request.send();

//     console.log('waiting for response...');
//     request.addEventListener('load', function () {
//         console.log('got a response!');
//         const country = JSON.parse(this.responseText)[0];
//         console.log(country);

//         const currency_key = Object.keys(country.currencies)[0];
//         const currency = country.currencies[currency_key].name;

//         const language_key = Object.keys(country.languages)[0];
//         const language = country.languages[language_key];

//         const population = `${(country.population / 1_000_000).toFixed(2)} M`;

//         const html = `
//       <article class="country">
//       <img class="country__img" src="${country.flags[0]}"/>
//       <div class="country__data">
//         <h3 class="country__name">${country.name.common}</h3>
//         <h4 class="country__region">${country.region}</h4>
//         <p class="country__row"><span>👫</span>${population}</p>
//         <p class="country__row"><span>🗣️</span>${language}</p>
//         <p class="country__row"><span>💰</span>${currency}</p>
//       </div>
//     </article>
//       `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('spain');
// getCountryData('estonia');
// getCountryData('lebanon');
// getCountryData('usa');
// getCountryData('iceland');
// getCountryData('canada');

const renderCountry = function (data, className = '') {
    const html = `
      <article class="country ${className}">
        <img class="country__img" src="${Object.values(data.flags)[0]}" />
        <div class="country__data">
          <h3 class="country__name">${Object.values(data.name)[0]}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
              1
          )} people</p>
          <p class="country__row"><span>🗣️</span>${[...Object.values(data.languages)]}</p> 
          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
      </article>
      `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
    //AJAX Call Country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText); // console.log(data); // Render Country 1
        renderCountry(data); // Get Neighbours AS ALPHA

        const neighbours = [...data.borders]; // Check if no neighbour
        if (!neighbours) return;

        neighbours.forEach(alphaNeighbour => {
            // AJAX Call Neighbours Country Name
            const request2 = new XMLHttpRequest();
            request2.open('GET', `https://restcountries.com/v3.1/alpha/${alphaNeighbour}`);
            request2.send();
            request2.addEventListener('load', function () {
                const [data2] = JSON.parse(this.responseText);

                // Getting Neighbour Name
                console.log(data2.name.common);

                // AJAX Call Neighbours
                const request3 = new XMLHttpRequest();
                request3.open('GET', `https://restcountries.com/v2/name/${data2.name.common}`);
                request3.send();
                //Render Neighbour
                request3.addEventListener('load', function () {
                    const [data3] = JSON.parse(this.responseText);
                    renderCountry(data3, 'neighbour');
                });
            });
        });
    });
};

// getCountryAndNeighbour('iraq');
// getCountryAndNeighbour('canada');

// "Callback Hell"
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//             setTimeout(() => {
//                 console.log('4 seconds passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promises and the Fetch API //

// OLD WAY OF DOING REQUESTS
// const REST_COUNTRIES = 'https://restcountries.com/v3/name';
// const request = new XMLHttpRequest();
// console.log('open...');
// request.open('GET', `${REST_COUNTRIES}/${countryName}`);
// console.log('send...');
// request.send();

// Fetch & Promises example

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

// Fetch and Promises example (REFACTORED)

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};
getCountryData('portugal');
