console.log("loaded")

const $backgroundImageDiv = $('.background');

// GRAB RANDOM IMAGE FROM UNSPLASH
axios({
    method: 'GET',
    url: 'https://api.unsplash.com/photos/random/?client_id=c4268fc7a9c8c92823adc3e91336ba33b2eb873fa71c3a79ca93a12fa0d53887'
  })
  .then(response => {
    $backgroundImageDiv.css('background-image', `url(${response.data.urls.regular})`);
  })
  .catch(error => {
    console.log(error)
  })