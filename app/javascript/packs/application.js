// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

const target1 = document.querySelector(".img-1")
const target2 = document.querySelector(".img-3")

window.addEventListener('scroll', function (e) {

  var scrolled = window.pageYOffset;
  var rate1 = scrolled * 0.3;
  var rate2 = scrolled * -0.1;

  target1.style.transform = 'translate3d(0px, '+rate1+'px, 0px)';
  target2.style.transform = 'translate3d(0px, '+rate2+'px, 0px)';


})
