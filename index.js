const arr = [];

const content = /* html*/ `<div  id='wrapVideo'>
  <video onclick='playPause(this)' poster='./img/hqdefault.webp'
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    class='content' controls>
  <source src="./video/intro2.mp4" type="video/mp4">
  <source src="./video/intro2.mp4" type="video/ogg">
Your browser does not support the video tag.
</video>
</div>`;

arr.length = 33;
arr.fill(content);
const gridPrent = document.querySelector(".grid-temp");
gridPrent.innerHTML = arr
  .map((v) => {
    return v;
  })
  .join("");

const wrapVideo = document.getElementById("wrapVideo");
const modalVideo = document.getElementById("modalVideo");

// console.log(wrapVideo);
// console.log(modalVideo);
modalVideo.append(wrapVideo);

//

function playPause(video) {
  if (modalVideo.contains(wrapVideo)) {
    console.log(video.paused);
    play(video);
  } else {
    pause(video);
  }
}

function play(video) {
  video.play();
}

function pause(video) {
  video.pause();
  video.load();
}

alert("Hello")
