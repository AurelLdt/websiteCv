// Typing animation

var typed = new Typed('.typing', {
  strings: ['Développeur Junior .', 'Développeur Web/Mobile .'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});


// 3D animation

VanillaTilt.init(document.querySelector('.image1'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image2'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image3'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image4'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image5'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image6'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image7'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image8'), {
  max: 25,
  speed: 2500,
});
VanillaTilt.init(document.querySelector('.image9'), {
  max: 25,
  speed: 2500,
});


// 3D animation Card

VanillaTilt.init(document.querySelector('.card'), {
  max: 10,
  speed: 500,
});


//Script Button To Top

var mybutton = document.getElementById('myBtn');
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Script Hide navBar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  scrollFunction();
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navBar').style.top = '0';
    document.getElementById('titre').style.fontSize = '60px';
    document.getElementById('titre').style.position = 'absolute';
    document.getElementById('titre').style.top = '0';
    document.getElementById('titre').style.left = '0';
    document.getElementById('ul').style.position = 'absolute';
    document.getElementById('ul').style.top = '40%';
    document.getElementById('ul').style.right = '0';
    document.getElementById('navBar').style.backgroundColor = 'rgba(241, 242, 246, 1.0)';
  } else {
    document.getElementById('navBar').style.top = '-30px';
    document.getElementById('navBar').style.transition = 'all 1s';
    document.getElementById('titre').style.fontSize = '30px';
    document.getElementById('titre').style.transition = 'all 1s';
    document.getElementById('titre').style.position = 'absolute';
    document.getElementById('titre').style.bottom = '50%';
    document.getElementById('titre').style.top = '50%';
    document.getElementById('ul').style.position = 'absolute';
    document.getElementById('ul').style.top = '55%';
    document.getElementById('ul').style.right = '0';
    document.getElementById('ul').style.transition = 'all 1s';
    document.getElementById('navBar').style.backgroundColor = 'rgba(241, 242, 246, 0.9)';
  }
  prevScrollpos = currentScrollPos;
};
