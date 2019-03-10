function imageSuccess(response) {
  // eslint-disable-next-line no-console
  console.log(response.data.urls.regular);
  $('body').css('background-image', `url(${response.data.urls.regular})`);
}
function imageFail(error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'https://api.unsplash.com/photos/random?client_id=5c4b44d0bf7402cc25142a309047876de095aaadce66bceb5a4ad22cfe6cdd29',
})
  .then(imageSuccess)
  .catch(imageFail);
