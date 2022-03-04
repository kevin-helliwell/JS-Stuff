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
    countriesContainer.style.opacity = 1;
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
    countriesContainer.style.opacity = 1;
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

// btn.addEventListener('click', function () {
//     getCountryData('portugal');
// });
// // NOTES on getCountryData
// // .then only called when promise fulfilled
// // .catch only called when promise is rejected
// // .finally called in both cases, works here because .catch also returns a promise

// getCountryData('usa');
// getCountryData('australia');
// getCountryData('iceland');

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}.`);

//             return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//         })
//         .then(res => {
//             console.log(res);

//             if (!res.ok) throw new Error(`Country not found (${res.status})`);

//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(error => console.error(`${error.message} 🍎`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Event loop practice
// console.log(`Test start`); // 1
// setTimeout(() => console.log(`0 sec timer`), 0); // 5
// Promise.resolve(`Resolved promise 1`).then(res => console.log(res)); // 3

// Promise.resolve(`Resolved promise 2`).then(res => {
//     for (let i = 0; i < 10_000_000_000; i++) {}
//     console.log(res);
// }); // 4

// console.log(`Test end`); // 2

// Building A Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log(`Drawing lottery 🔮`);
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN 💰');
//         } else {
//             reject(new Error('You lost your money 💩'));
//         }
//     }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(1)
//     .then(() => {
//         console.log('1 second passed');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('2 seconds passed');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('3 seconds passed');
//         return wait(1);
//     })
//     .then(() => console.log('4 seconds passed'));

// // "Callback Hell"
// // setTimeout(() => {
// //     console.log('1 second passed');
// //     setTimeout(() => {
// //         console.log('2 seconds passed');
// //         setTimeout(() => {
// //             console.log('3 seconds passed');
// //             setTimeout(() => {
// //                 console.log('4 seconds passed');
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// Promisifying the Geolocation API
// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.error(err)
// );
// console.log('Getting position');

// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => resolve(position),
//         //     err => reject(err)
//         // );
//         navigator.geolocation.getCurrentPosition(resolve, reject); // <- Does same thing as upper 4 lines^^^^
//     });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//     getPosition()
//         .then(pos => {
//             const {latitude: lat, longitude: lng} = pos.coords;

//             return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}.`);

//             return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//         })
//         .then(res => {
//             console.log(res);

//             if (!res.ok) throw new Error(`Country not found (${res.status})`);

//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(error => console.error(`${error.message} 🍎`));
// };

// btn.addEventListener('click', whereAmI);

// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// Promise-based image loader

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function () {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function () {
//             reject(new Error('Image not found'));
//         });
//     });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

// Consuming Promises with Async/Await

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// OLD WAY ->
// fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));
// <- OLD WAY

// NEW WAY + ERROR HANDLING ->

const whereAmI = async function () {
    try {
        // Geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        // Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok) throw new Error('Problem getting location data');

        const dataGeo = await resGeo.json();
        console.log(dataGeo);

        // Country data
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        if (!res.ok) throw new Error('Problem getting country');
        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);
    } catch (err) {
        console.error(`${err} 💩`);
        renderError(`💩 ${err.message}`);
    }
};
// <- NEW WAY + ERROR HANDLING
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');

// Error handling with try/catch

// trivial example
// try {
//     let y = 1;
//     const x = 2;
//     y = 3;
// } catch (err) {
//     alert(err.message);
// }
