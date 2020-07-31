// open modal 1
let modal1 = document.getElementById("myModal1");
let meals = document.getElementById("open-modal1");

meals.onclick = function () {
  let name = "modal__in";
  let classArray = modal1.className.split(" ");
  if (classArray.indexOf(name) == -1) {
    modal1.className += " " + name;
  }
  modal1.className = modal1.className.replace(/\bmodal__out\b/g, "modal__in");
};

let close = document.getElementById("close");
close.onclick = function () {
  let name = "modal__out";
  let classArray = modal1.className.split(" ");
  if (classArray.indexOf(name) == -1) {
    modal1.className += " " + name;
  }
  modal1.className = modal1.className.replace(/\bmodal__in\b/g, "");
};

// modal2 -view image
let modal2 = document.getElementById("myModal2");
let modalImg = document.getElementById("open-modal2");

modalImg.onclick = function () {
  let name = "scale__up";
  let classArray = modalImg.className.split(" ");
  if (classArray.indexOf(name) == -1) {
    modalImg.className += " " + name;
  }
  modalImg.className = modalImg.className.replace(
    /\bscale__down\b/g,
    "scale__up"
  );

  let imgName = "img__in";
  let classArrayImg = modal2.className.split(" ");
  if (classArrayImg.indexOf(imgName) == -1) {
    modal2.className += " " + imgName;
  }
  modal2.className = modal2.className.replace(/\bimg__out\b/g, "img__in");
};

let closeImg = document.getElementById("myModal2");

closeImg.onclick = function () {
  let name = "scale__down";
  let classArrayClose = modalImg.className.split(" ");
  if (classArrayClose.indexOf(name) == -1) {
    modalImg.className += " " + name;
  }
  modalImg.className = modalImg.className.replace(/\bscale__up\b/g, "");

  let imgName = "img__out";
  let classArrayName = modal2.className.split(" ");
  if (classArrayName.indexOf(imgName) == -1) {
    modal2.className += " " + imgName;
  }
  modal2.className = modal2.className.replace(/\bimg__in\b/g, "");
};
