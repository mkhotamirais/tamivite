const bars = document.getElementById("bars");
let nav = document.querySelector(".header2 nav");

window.onscroll = function () {
  let headerLogo = document.querySelector(".header2 .logo");
  let header2 = document.querySelector(".header2");
  let header2a = document.querySelector(".header2 a");
  if (this.scrollY > 60) {
    headerLogo.style.display = "block";
    header2.style.boxShadow = "0 0 .5rem var(--primary-shadow)";
    header2.style.justifyContent = "space-between";
  } else {
    headerLogo.style.display = "none";
    headerLogo.style.animation = "muncul .3s";
    header2.style.boxShadow = "";
    header2.style.justifyContent = "space-around";
  }
  bars.classList.remove("active");
  nav.style.maxHeight = "";
};

bars.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    nav.style.maxHeight = `100vh`;
  } else {
    nav.style.maxHeight = "";
  }
};

if (window.innerWidth < 600) {
  const navDrop = document.querySelectorAll(".header2 nav .nav-link .nav-drop");
  navDrop.forEach(function (x, i) {
    x.parentElement.addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        x.style.maxHeight = `${x.scrollHeight}px`;
      } else {
        x.style.maxHeight = "0";
      }
      autoTutup(i);
    });
  });

  function autoTutup(i) {
    navDrop.forEach(function (e, i2) {
      let nl = e.parentElement;
      if (i != i2) {
        nl.classList.remove("active");
        e.style.maxHeight = "0";
      }
    });
  }
}

no = 1;
function show(n) {
  let box = document.getElementsByClassName("box");
  let dot = document.getElementsByClassName("dot");
  let h1 = document.querySelectorAll(".carousel .box .caption h1");
  let p = document.querySelectorAll(".carousel .box .caption p");
  if (n > box.length) no = 1;
  if (n < 1) no = box.length;
  for (let i = 0; i < box.length; i++) {
    box[i].style.opacity = "0";
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.animation = "initial";
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.animation = "initial";
  }

  box[no - 1].style.opacity = "1";
  h1[no - 1].style.animation = "enterRight .6s cubic-bezier(0, .2, .5, 1.5)";
  p[no - 1].style.animation = "muncul .8s ease-in-out";
  dot[no - 1].classList.add("active");
}

function geser(n) {
  show((no += n));
}

function current(n) {
  show((no = n));
}

show(no);

setInterval(() => {
  document.getElementsByClassName("next")[0].click();
}, 7000);

function openContentProfil(e, content) {
  document.querySelectorAll("#profil .content").forEach((x) => {
    x.style.display = "none";
  });
  document.querySelectorAll("#profil .menu").forEach((x) => {
    x.className = x.className.replace(" active", "");
  });
  document.getElementById(content).style.display = "block";
  e.currentTarget.className += " active";
}
function openContentBerita(e, content) {
  document.querySelectorAll("#berita .content").forEach((x) => {
    x.style.display = "none";
  });
  document.querySelectorAll("#berita .menu").forEach((x) => {
    x.className = x.className.replace(" active", "");
  });
  document.getElementById(content).style.display = "block";
  e.currentTarget.className += " active";
}
function openContentKesiswaan(e, content) {
  document.querySelectorAll("#kesiswaan .content").forEach((x) => {
    x.style.display = "none";
  });
  document.querySelectorAll("#kesiswaan .menu").forEach((x) => {
    x.className = x.className.replace(" active", "");
  });
  document.getElementById(content).style.display = "block";
  e.currentTarget.className += " active";
}
function openContentAkademik(e, content) {
  document.querySelectorAll("#akademik .content").forEach((x) => {
    x.style.display = "none";
  });
  document.querySelectorAll("#akademik .menu").forEach((x) => {
    x.className = x.className.replace(" active", "");
  });
  document.getElementById(content).style.display = "block";
  e.currentTarget.className += " active";
}
