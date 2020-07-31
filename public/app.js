// open modal 1
let modal1 = document.getElementById("myModal1");
let meals = document.getElementById("open-modal1");

meals.onclick = function () {
  modal1.style.display = "block";
};

let close = document.getElementById("close");

close.onclick = function () {
  modal1.style.display = "none";
};

// modal2 -view image
let modal2 = document.getElementById("myModal2");
let modalImg = document.getElementById("open-modal2");

modalImg.onclick = function () {
  modal2.style.display = "block";
};

let closeImg = document.getElementById("myModal2");

closeImg.onclick = function () {
  modal2.style.display = "none";
};
