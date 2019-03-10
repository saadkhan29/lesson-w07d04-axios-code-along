/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=21d27598e72bca435f85e2c4980942c3'
})
  .then((response) => {
    console.log(response);
    const temp = response.data.main.temp;
    $('body').append(`<h1>${temp}</h1>`);
    const desc = response.data.weather[0].description;
    $('body').append(`<h1>${desc}</h1>`);
  })
  .catch((error) => {
    console.log(error);
  });
