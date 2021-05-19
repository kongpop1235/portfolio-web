document.addEventListener('DOMContentLoaded', function () {
  new Typed('#brand', {
    strings: [
      'PORTFOLIO.ru^4000',
      'KONGPOP.ru^4000'
    ],
    typeSpeed: 40,
    backSpeed: 30,
    smartBackspace: true,
    loop: true
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.reset').addEventListener('click', function () {
    s_home.reset(), s_home_p.reset(), s_about.reset(), skill.reset(), hobbies.reset(), high_school.reset();
  });

  var s_home = new Typed('.home', {
    strings: [
      '<span class="font-70 fw-9">Hello, My name is Kongpop.</span>',
      '<span class="font-70 fw-9">I&apos;m Front-end web development.</span>'
    ],
    typeSpeed: 40,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
    backDelay: 1500,
  });

  var s_home_p = new Typed('.home-p', {
    strings: [
      '<span class="">Hello, My name is Kongpop.</span>'
    ],
    typeSpeed: 40,
    backSpeed: 30,
    smartBackspace: true,
    loop: false,
  });

  var s_about = new Typed('.about', {
    strings: [
      '<div class="border-bottom me-5 mb-3"><span class="fs-1 fw-9">About Me</span></div>NAME : Kongpop<br>SURNAME : Ruschatapaparpong<br>AGE : 23<br>GENDER : Male<br>NATIONALITY : Thai<br>ADDRESS : Thailand, Bangkok<br>MOBILE : 0876152508'
    ],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: false,
    loop: false,
    startDelay: 0
  });

  var skill = new Typed('.skill', {
    strings: [
      '<div class="border-bottom me-5 mb-3"><span class="fs-1 fw-9">Codeing skill</span></div>'+
      '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg><span style="color:#FF6D00"> HTML</span><br>'+
      '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg><span style="color:#039BE5;"> CSS</span><br>'+
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25" width="25px" height="25px"><g id="surface55492945"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(94.509804%,76.862746%,5.882353%);fill-opacity:1;" d="M 22.636719 1.164062 C 22.542969 1.058594 22.410156 1 22.269531 1 L 2.730469 1 C 2.589844 1 2.457031 1.058594 2.363281 1.164062 C 2.269531 1.265625 2.222656 1.40625 2.234375 1.542969 L 3.992188 21.257812 C 4.011719 21.464844 4.15625 21.636719 4.355469 21.695312 L 12.359375 23.980469 C 12.40625 23.992188 12.449219 24 12.496094 24 C 12.542969 24 12.589844 23.992188 12.632812 23.980469 L 20.644531 21.695312 C 20.84375 21.636719 20.988281 21.464844 21.007812 21.257812 L 22.765625 1.542969 C 22.777344 1.40625 22.730469 1.265625 22.636719 1.164062 Z M 6 14.503906 L 9.5 15.472656 L 9.5 5.5 L 11.5 5.5 L 11.5 18.5 L 6 16.972656 Z M 19.027344 11 L 18.5 17.125 L 13.5 18.5 L 13.5 16.199219 L 16.875 15.273438 L 17 13.398438 L 13.5 14 L 13.5 5.5 L 19.5 5.5 L 19.328125 7.5 L 15.5 7.5 L 15.5 11.5 Z M 19.027344 11 "/></g></svg><span style="color:#F1C40F;"> JAVASCRIPT</span><br>'+
      '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"/><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"/></svg><span style="color:#8557d3;"> BOOTSTRAP</span><br>'+
      '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#f06292" fill-rule="evenodd" d="M24.042,4.032C35.065,4.032,44,12.967,44,23.99	c0,11.022-8.935,19.958-19.958,19.958c-11.022,0-19.958-8.935-19.958-19.958C4.085,12.967,13.02,4.032,24.042,4.032L24.042,4.032z" clip-rule="evenodd"/><path fill="#fff" d="M36.561,12.574c-0.904-3.545-6.781-4.71-12.343-2.734c-3.31,1.176-6.894,3.022-9.471,5.432 c-3.064,2.866-3.552,5.36-3.351,6.402c0.71,3.677,5.749,6.081,7.82,7.865v0.011c-0.611,0.301-5.081,2.563-6.127,4.876 c-1.104,2.44,0.176,4.191,1.023,4.427c2.625,0.73,5.318-0.583,6.766-2.742c1.397-2.084,1.281-4.774,0.674-6.113 c0.837-0.221,1.814-0.32,3.054-0.175c3.501,0.409,4.188,2.595,4.056,3.51c-0.131,0.915-0.866,1.418-1.111,1.57 c-0.246,0.152-0.32,0.205-0.3,0.317c0.03,0.164,0.143,0.158,0.353,0.123c0.288-0.049,1.838-0.744,1.905-2.433 c0.084-2.144-1.97-4.542-5.608-4.48c-1.498,0.026-2.44,0.168-3.121,0.422c-0.05-0.057-0.102-0.114-0.154-0.171 c-2.249-2.4-6.407-4.097-6.231-7.323c0.064-1.173,0.472-4.261,7.989-8.007c6.158-3.069,11.088-2.224,11.94-0.353 c1.217,2.674-2.635,7.643-9.03,8.36c-2.437,0.273-3.72-0.671-4.039-1.023c-0.336-0.37-0.386-0.387-0.511-0.317 c-0.204,0.113-0.075,0.44,0,0.635c0.191,0.497,0.975,1.378,2.31,1.817c1.175,0.386,4.036,0.597,7.496-0.741 C34.424,20.229,37.45,16.059,36.561,12.574z M20.076,30.638c0.29,1.074,0.258,2.076-0.041,2.983c-0.033,0.101-0.07,0.2-0.11,0.299 c-0.04,0.098-0.083,0.196-0.129,0.292c-0.231,0.48-0.542,0.929-0.922,1.344c-1.16,1.265-2.78,1.743-3.474,1.34 c-0.75-0.435-0.374-2.218,0.97-3.64c1.446-1.529,3.527-2.512,3.527-2.512l-0.003-0.006C19.954,30.705,20.015,30.672,20.076,30.638z"/></svg><span style="color:#F06292;"> SASS</span><br>'+
      '<div class="border-bottom me-5 mb-3"><span class="fs-1 fw-9">Software Skill</span></div><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"/><stop offset="1" stop-color="#13b2f6"/></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"/><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"/><stop offset=".257" stop-color="#0069b0"/><stop offset=".28" stop-color="#0069b0"/><stop offset=".424" stop-color="#0069b0"/><stop offset=".491" stop-color="#0072b7"/><stop offset=".577" stop-color="#0076bb"/><stop offset=".795" stop-color="#0076bb"/><stop offset="1" stop-color="#006eb9"/></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"/><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"/></svg><span class="text-uppercase"> Visual Studio</span><br>'+
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25" width="25px" height="25px"><g id="surface57986635"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(90.196079%,49.411765%,13.333334%);fill-opacity:1;" d="M 3.125 5.207031 C 3.125 4.058594 4.058594 3.125 5.207031 3.125 L 19.792969 3.125 C 20.941406 3.125 21.875 4.058594 21.875 5.207031 L 21.875 19.792969 C 21.875 20.941406 20.941406 21.875 19.792969 21.875 L 5.207031 21.875 C 4.058594 21.875 3.125 20.941406 3.125 19.792969 Z M 3.125 5.207031 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(10.980392%,3.137255%,0.784314%);fill-opacity:1;" d="M 4.6875 4.6875 L 4.6875 20.3125 L 20.3125 20.3125 L 20.3125 4.6875 Z M 12.339844 16.144531 L 11.941406 14.628906 L 9.902344 14.628906 L 9.507812 16.144531 L 7.925781 16.144531 L 10.238281 8.738281 L 11.605469 8.738281 L 13.9375 16.144531 Z M 16.066406 16.144531 L 14.625 16.144531 L 14.625 10.644531 L 16.066406 10.644531 Z M 15.914062 9.769531 C 15.769531 9.914062 15.582031 9.988281 15.339844 9.988281 C 15.097656 9.988281 14.910156 9.914062 14.769531 9.769531 C 14.625 9.621094 14.558594 9.4375 14.558594 9.21875 C 14.558594 8.996094 14.628906 8.8125 14.769531 8.667969 C 14.914062 8.527344 15.101562 8.457031 15.339844 8.457031 C 15.578125 8.457031 15.765625 8.527344 15.910156 8.667969 C 16.050781 8.8125 16.125 8.996094 16.125 9.21875 C 16.125 9.4375 16.054688 9.621094 15.914062 9.769531 Z M 15.914062 9.769531 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(10.980392%,3.137255%,0.784314%);fill-opacity:1;" d="M 10.230469 13.382812 L 11.613281 13.382812 L 10.921875 10.746094 Z M 10.230469 13.382812 "/></g></svg><span class="text-uppercase" style="color:#E67E22;"> Illustrator</span><br>'+
      '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"/><path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"/><path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"/></svg><span class="text-uppercase" style="color:#03A9F4;"> Photoshop</span><br>'+
      '<svg green;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25" width="25px" height="25px"><g id="surface56339444"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(60.784316%,34.901962%,71.372551%);fill-opacity:1;" d="M 12.5 2.082031 C 6.757812 2.082031 2.082031 6.757812 2.082031 12.5 C 2.082031 18.242188 6.757812 22.917969 12.5 22.917969 C 18.242188 22.917969 22.917969 18.242188 22.917969 12.5 C 22.917969 6.757812 18.242188 2.082031 12.5 2.082031 Z M 12.5 3.644531 C 17.398438 3.644531 21.355469 7.601562 21.355469 12.5 C 21.355469 16.492188 18.726562 19.855469 15.105469 20.964844 L 15.105469 18.300781 C 15.105469 17.304688 14.53125 16.453125 13.703125 16.027344 C 15.335938 15.714844 16.683594 14.789062 17.316406 13.546875 C 17.949219 12.300781 17.792969 10.886719 16.894531 9.75 C 17.125 9.039062 17.382812 7.792969 16.769531 6.808594 C 15.589844 6.808594 14.824219 7.621094 14.460938 8.125 C 13.839844 7.921875 13.171875 7.8125 12.5 7.8125 C 11.828125 7.8125 11.160156 7.917969 10.535156 8.121094 C 10.171875 7.617188 9.410156 6.808594 8.230469 6.808594 C 7.527344 7.9375 7.960938 9.148438 8.195312 9.640625 C 7.234375 10.773438 7.03125 12.210938 7.652344 13.484375 C 8.269531 14.761719 9.628906 15.710938 11.292969 16.03125 C 10.613281 16.382812 10.101562 17.019531 9.945312 17.789062 L 9.261719 17.789062 C 8.585938 17.789062 8.324219 17.515625 7.960938 17.050781 C 7.597656 16.589844 7.210938 16.277344 6.746094 16.148438 C 6.496094 16.121094 6.324219 16.3125 6.542969 16.484375 C 7.28125 16.984375 7.335938 17.808594 7.628906 18.347656 C 7.898438 18.832031 8.453125 19.269531 9.078125 19.269531 L 9.894531 19.269531 L 9.894531 20.964844 C 6.273438 19.855469 3.644531 16.492188 3.644531 12.5 C 3.644531 7.601562 7.601562 3.644531 12.5 3.644531 Z M 12.5 3.644531 "/></g></svg><span class="text-uppercase" style="color:#9B59B6;"> github</span>'
    ],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: false,
    loop: false,
    startDelay: 0
  });
  var hobbies = new Typed('.hobbies', {
    strings: [
      '<div class="border-bottom me-5 mb-3"><span class="fs-1 fw-9"><span>H</span><span>o</span><span>b</span><span>b</span><span>i</span><span>e</span><span>s</span></span></div>'+
      '<span class="txt anim-text-flow"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="25px" height="25px"><linearGradient id="7VQF0sKTAgnp1emj6oowda" x1="32" x2="32" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowda)" d="M58,18h-4.538c-0.443,0-0.835-0.282-0.975-0.702l-0.627-1.877 C51.179,13.375,49.271,12,47.114,12H16.886c-2.157,0-4.064,1.375-4.746,3.421l-0.627,1.877C11.373,17.718,10.981,18,10.538,18H6 c-1.654,0-3,1.346-3,3v22c0,1.654,1.346,3,3,3h4.538c0.443,0,0.835,0.282,0.976,0.703l0.626,1.876 C12.821,50.625,14.729,52,16.886,52h30.229c2.157,0,4.064-1.375,4.746-3.421l0.627-1.877c0.14-0.42,0.531-0.702,0.975-0.702H58 c1.654,0,3-1.346,3-3V21C61,19.346,59.654,18,58,18z M59,43c0,0.551-0.448,1-1,1h-4.538c-1.307,0-2.461,0.832-2.872,2.07 l-0.626,1.876C49.554,49.175,48.409,50,47.114,50H16.886c-1.295,0-2.439-0.825-2.85-2.054l-0.625-1.875 C12.999,44.832,11.845,44,10.538,44H6c-0.552,0-1-0.449-1-1V21c0-0.551,0.448-1,1-1h4.538c1.307,0,2.461-0.832,2.872-2.07 l0.626-1.876c0.41-1.229,1.555-2.054,2.85-2.054h30.229c1.295,0,2.439,0.825,2.85,2.054l0.626,1.876 c0.412,1.238,1.566,2.07,2.872,2.07H58c0.552,0,1,0.449,1,1V43z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdb" x1="32" x2="32" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdb)" d="M46,20H18c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3h28c1.654,0,3-1.346,3-3V23 C49,21.346,47.654,20,46,20z M47,41c0,0.551-0.448,1-1,1H18c-0.552,0-1-0.449-1-1V23c0-0.551,0.448-1,1-1h28c0.552,0,1,0.449,1,1V41 z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdc" x1="54" x2="54" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdc)" d="M55,26h-2c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2v-2 C57,26.897,56.103,26,55,26z M55,30h-2v-2h2V30z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdd" x1="54" x2="54" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdd)" d="M55,34h-2c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2v-2 C57,34.897,56.103,34,55,34z M55,38h-2v-2h2V38z"/><linearGradient id="7VQF0sKTAgnp1emj6oowde" x1="10" x2="10" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowde)" d="M11 29L9 29 9 31 7 31 7 33 9 33 9 35 11 35 11 33 13 33 13 31 11 31z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdf" x1="32" x2="32" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdf)" d="M30 46H34V48H30z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdg" x1="38" x2="38" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdg)" d="M36 46H40V48H36z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdh" x1="26" x2="26" y1="10.75" y2="53.762" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdh)" d="M24 46H28V48H24z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdi" x1="38" x2="38" y1="28.833" y2="33.519" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdi)" d="M38 29A2 2 0 1 0 38 33A2 2 0 1 0 38 29Z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdj" x1="26" x2="26" y1="28.833" y2="33.519" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdj)" d="M26 29A2 2 0 1 0 26 33A2 2 0 1 0 26 29Z"/><linearGradient id="7VQF0sKTAgnp1emj6oowdk" x1="32" x2="32" y1="32.5" y2="37.417" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#7VQF0sKTAgnp1emj6oowdk)" d="M29,34c0,1.657,1.343,3,3,3c1.657,0,3-1.343,3-3v-1h-6V34z"/></svg> <span>G</span><span>A</span><span>M</span><span>E</span></span><br>'+
      '<span class="txt anim-text-flow"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="25px" height="25px"><linearGradient id="QDO_sBS2xVZhTuMCWVRyQa" x1="44" x2="44" y1="14.333" y2="23.002" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#QDO_sBS2xVZhTuMCWVRyQa)" d="M44 15A4 4 0 1 0 44 23A4 4 0 1 0 44 15Z"/><linearGradient id="QDO_sBS2xVZhTuMCWVRyQb" x1="32" x2="32" y1="3.667" y2="58.99" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#QDO_sBS2xVZhTuMCWVRyQb)" d="M57,19c0-7.168-5.832-13-13-13c-3.475,0-6.74,1.352-9.195,3.806 c-1.222,1.221-2.159,2.646-2.803,4.194H14c-1.654,0-3,1.346-3,3v1h-1c-1.654,0-3,1.346-3,3v34c0,1.654,1.346,3,3,3h32 c1.654,0,3-1.346,3-3.001L44.999,54H46c1.654,0,3-1.346,3-3V31h-0.049c1.567-0.645,3.01-1.587,4.244-2.819 C55.648,25.729,57,22.469,57,19z M13,17c0-0.552,0.448-1,1-1h17.353c-0.153,0.654-0.265,1.32-0.316,2H13V17z M47,51 c0,0.552-0.448,1-1,1h-1.002l-0.012-20.053c0.684-0.051,1.355-0.164,2.014-0.318V51z M43.998,30c-0.004,0-0.008,0-0.012,0h-1.002 L43,55.008C43,55.56,42.552,56,42,56H10c-0.552,0-1-0.448-1-1V21c0-0.552,0.448-1,1-1h23v-1.001c0-2.939,1.141-5.701,3.218-7.778 C38.296,9.145,41.06,8.002,44,8.002c6.065,0,11,4.937,11,11.002c0,2.935-1.143,5.696-3.219,7.77C49.703,28.85,46.939,30,43.998,30z"/><linearGradient id="QDO_sBS2xVZhTuMCWVRyQc" x1="40" x2="40" y1="3.667" y2="58.99" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#QDO_sBS2xVZhTuMCWVRyQc)" d="M44,11c-4.411,0-8,3.589-8,8h2c0-3.309,2.691-6,6-6V11z"/><linearGradient id="QDO_sBS2xVZhTuMCWVRyQd" x1="48" x2="48" y1="3.667" y2="58.99" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#QDO_sBS2xVZhTuMCWVRyQd)" d="M50,19c0,3.309-2.691,6-6,6v2c4.411,0,8-3.589,8-8H50z"/><linearGradient id="QDO_sBS2xVZhTuMCWVRyQe" x1="26" x2="26" y1="3.667" y2="58.99" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#QDO_sBS2xVZhTuMCWVRyQe)" d="M35,27H25c-1.654,0-3,1.346-3,3v4v1v5.025C21.162,39.391,20.13,39,19,39c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5v-9h12v5.025C35.162,39.391,34.13,39,33,39c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5v-9v-1v-4 C38,28.346,36.654,27,35,27z M19,47c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S20.654,47,19,47z M33,47c-1.654,0-3-1.346-3-3 s1.346-3,3-3s3,1.346,3,3S34.654,47,33,47z M24,30c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1v3H24V30z"/></svg> <span>M</span><span>U</span><span>S</span><span>I</span><span>C</span></span><br>'+
      '<img src="https://img.icons8.com/nolan/25/movie.png"/><span class="anim-text-flow text-uppercase"> <span>m</span><span>o</span><span>v</span><span>i</span><span>e</span></span><br>'+
      '<img src="https://img.icons8.com/nolan/25/exercise.png"/> <span class="txt anim-text-flow text-uppercase"><span>a</span><span>c</span><span>t</span><span>i</span><span>v</span><span>i</span><span>t</span><span>y</span></span>'
    ],
    typeSpeed: 15,
    backSpeed: 0,
    smartBackspace: false,
    loop: false,
    startDelay: 0
  });
  var high_school = new Typed('.high_school', {
    strings: [
      'high_school'
    ],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: false,
    loop: false,
    startDelay: 0
  });
});

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}


$(document).ready(function () {
  $('#btn-home').click(function () {
    $('#p-1').prepend('<span class="home"></span>');
  });
  $('btn-about').click(function (e) {
    $(selector).prepend(content);
  });
});
$(document).ready(function () {

  $('#btn-home').click(function () {
    $('#s-home').addClass('d-block');
    $('#s-home').removeClass('d-none');
    $('#s-about').addClass('d-none');
    $('#s-home').removeClass('d-block');
    $('#s-education').addClass('d-none');
    $('#s-education').removeClass('d-block');
  });

  $('#btn-about').click(function () {
    $('#s-about').addClass('d-block');
    $('#s-about').removeClass('d-none');
    $('#s-home').addClass('d-none');
    $('#s-home').removeClass('d-block');
    $('#s-education').addClass('d-none');
    $('#s-education').removeClass('d-block');
  });

  $('#btn-education').click(function () {
    $('#s-education').addClass('d-block');
    $('#s-education').removeClass('d-none');
    $('#s-home').addClass('d-none');
    $('#s-home').removeClass('d-block');
    $('#s-about').addClass('d-none');
    $('#s-about').removeClass('d-block');
  });
});