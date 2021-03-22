console.log("Connected");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  const mobileMsg = document.querySelector(".msg");
  msg.innerHTML +
    "<p>If you're on mobile and it looks weird then go on a pc</p>";
}

//Random background
document.addEventListener("DOMContentLoaded", function (event) {
  /*   const images = [
    "/src/img/duskpowerlines.jpg",
    "/src/img/fieldsunset.jpg",
    "/src/img/highsky.jpg",
    "/src/img/nightbay.jpg",
    "/src/img/nightcity.jpg",
    "/src/img/nighttrain.jpg",
    "/src/img/valley.jpg",
    "/src/img/personsunsetdew1edit1.jpg",
  ]; */
  const imagesClass = [
    "bg-image-duskpowerlines",
    "bg-image-fieldsunset",
    "bg-image-highsky",
    "bg-image-nightbay",
    "bg-image-nightcity",
    "bg-image-nighttrain",
    "bg-image-valley",
    "bg-image-personsunsetdew",
  ];

  let randomNumber = Math.floor(Math.random() * imagesClass.length);
  let bgImage = imagesClass[randomNumber];
  console.log(bgImage);
  //let bgImage = "url(" + images[randomNumber] + ")";
  //document.getElementsByClassName("bg-image").style.backgroundImage = "bgImage";
  let imgClass = document.getElementsByClassName("bg-image")[0];
  console.log(imgClass);
  imgClass.classList.add(bgImage);
});

//ss
