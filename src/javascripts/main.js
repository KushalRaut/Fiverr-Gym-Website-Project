// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i);
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i);
require.context('../stylesheets/', true, /\.(css|scss)$/i);

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap';

const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
  const mob = document.querySelector('.mobile-menu');
  mob.classList.toggle('d-none');
});

document.addEventListener('scroll', function (e) {
  if (window.scrollY > 100) {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('bg-solid');
  } else {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('bg-solid');
  }
});

const offers = [
  {
    title: 'Body Building',
    despcription: 'We will help to transform your body into the best shape',
  },
  {
    title: 'Muscle Gain',
    despcription: 'We will help you to build muscles and gain muscle mass',
  },
  {
    title: 'Weight Loss',
    despcription: 'We will help you to lose weight quickly',
  },
];

const [offer1, offer2, offer3] = [
  document.getElementById('offer-title-1'),
  document.getElementById('offer-title-2'),
  document.getElementById('offer-title-3'),
];

offer1.innerHTML = offers[0].title;
offer2.innerHTML = offers[1].title;
offer3.innerHTML = offers[2].title;

const [offerDes1, offerDes2, offerDes3] = [
  document.getElementById('offer-desp-1'),
  document.getElementById('offer-desp-2'),
  document.getElementById('offer-desp-3'),
];

offerDes1.innerHTML = offers[0].despcription;
offerDes2.innerHTML = offers[1].despcription;
offerDes3.innerHTML = offers[2].despcription;

const about = {
  name: 'JOHNNY SMITH',
  position: 'Personal Trainer',
  despcription:
    'Hello my name is Johnny and I am a gym instructor from California,Los Angeles. I am a certified trainer and have been helping people change their life with exercise from the last decade. Fit Nation has been my home for last 5 years and I am excited to help you transform yourself and your life with the help of my personal training.',
};

const [trainerName, trainerTitle, trainerDesp] = [
  document.getElementById('about-name'),
  document.getElementById('about-title'),
  document.getElementById('about-desp'),
];

trainerName.innerHTML = about.name;
trainerTitle.innerHTML = about.position;
trainerDesp.innerHTML = about.despcription;
