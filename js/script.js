/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const fullScreen = player.querySelector('.fullscreen');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const movie = document.querySelector('.movie');
const tvshow = document.querySelector('.tvshow');
const music = document.querySelector('.music');





/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function toggleFullscreen() {
    const method = !window.fullScreen ? 'webkitRequestFullscreen' : 'webkitExitFullscreen';
    video[method]();
  }

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}



function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function click1(){
    video.src = "video/Hulk_Movie_2003.mp4";
}
function click2(){
    video.src = "video/Breaking_Bad.mp4";
}
function click3(){
    video.src = "video/Music.mp4";
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
fullScreen.addEventListener('click', toggleFullscreen);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
movie.addEventListener('click', click1);
tvshow.addEventListener('click', click2);
music.addEventListener('click', click3);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);




