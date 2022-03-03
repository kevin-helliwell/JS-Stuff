'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// OLD DO NOT USE ->
// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${Object.values(data.flags)[0]}" />
//     <div class="country__data">
//     <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${[...Object.values(data.languages)]}</p>
//         <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//         </div>
//         </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     // countriesContainer.style.opacity = 1;
// };
// <- OLD DO NOT USE

// Works
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};
// Works
function renderCountry(data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${Number(
                data.population / 1000000
            ).toFixed()}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
}

///////////////////////////////////////

const REST_COUNTRIES = 'https://restcountries.com/v3/name';

// OLD DO NOT USE -> getCountryData function
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
// <- OLD DO NOT USE

// getCountryData('spain');
// getCountryData('estonia');
// getCountryData('lebanon');
// getCountryData('usa');
// getCountryData('iceland');
// getCountryData('canada');

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

// OLD DO NOT USE ->
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
// <- OLD DO NOT USE

// Fetch and Promises example (REFACTORED)

// Works
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// OLD DO NOT USE ->
// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => {
//             console.log(response);

//             if (!response.ok) throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then(response => {
//             console.log(response);

//             if (!response.ok) throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 🍎🍎🍎`);
//             renderError(`Something went wrong 🍎🍎🍎 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };
// <- OLD DO NOT USE

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders;

            if (!neighbour) throw new Error('No neighbour found!');

            // Country 2
            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
                'Country not found'
            );
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(err => {
            console.error(`${err} 🍎🍎🍎`);
            renderError(`Something went wrong 🍎🍎🍎 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    getCountryData('portugal');
});
// NOTES on getCountryData
// .then only called when promise fulfilled
// .catch only called when promise is rejected
// .finally called in both cases, works here because .catch also returns a promise

getCountryData('usa');
getCountryData('australia');
getCountryData('iceland');
