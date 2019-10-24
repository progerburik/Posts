const rootEl = document.getElementById('root');

const postImg = {
    content: 'Образ на страничке',
    imageUrl: 'https://placekitten.com/200/200',
    likes: 0,
    dislikes: 0,
};
const postImgEl = document.createElement('div');
const imgEl = document.createElement('img');
imgEl.src = postImg.imageUrl;
imgEl.className = 'card-img-top';
postImgEl.appendChild(imgEl);

const postImgBodyEl = document.createElement('div');
postImgBodyEl.className = 'card-body';
postImgEl.appendChild(postImgBodyEl);

const postImgContentEl = document.createElement('p');
postImgContentEl.textContent = postImg.content;
postImgBodyEl.appendChild(postImgContentEl);

const imgLikesEl = document.createElement('button');
imgLikesEl.className = 'btn btn-success';
imgLikesEl.textContent = '❤' + postImg.likes;
imgLikesEl.onclick = function () {
    postImg.likes = postImg.likes + 1;
    imgLikesEl.textContent = '❤' + postImg.likes;
};
const imgDislikesEl = document.createElement('button');
imgDislikesEl.className = 'btn btn-dark';
imgDislikesEl.textContent = '👎' + postImg.dislikes;
imgDislikesEl.onclick = function () {
    postImg.dislikes = postImg.dislikes + 1;
    imgDislikesEl.textContent = '👎' + postImg.dislikes;
};
postImgBodyEl.appendChild(imgLikesEl);
postImgBodyEl.appendChild(imgDislikesEl);

rootEl.appendChild(postImgEl);
console.log(postImgEl);

const postVideo = {
    content: 'Видео на страничке',
    videoUrl: 'https://r6---sn-n8v7kne7.googlevideo.com/videoplayback?expire=1571503800&ei=V-qqXeDDONaQyAW1-I2ACw&ip=188.234.48.1&id=o-AFpVGTlITCNHCf0rXUo0s8Q-TDIMqHmVtfndjFCNILI7&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=15424289&ratebypass=yes&dur=214.157&lmt=1570386235881366&fvip=6&fexp=9466588,23842630&beids=9466588&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAOeNgBZjNOWQb-O-9jzezURp946GXHZw1MR918SLatn3AiAoO6vp3rwyBuf87XPwJQ6AwTB-H0GiTIV-Ii3m6oe2dg%3D%3D&redirect_counter=1&cm2rm=sn-xguxaxjvh-31oe7l&req_id=7e7fd010d0d1a3ee&cms_redirect=yes&mm=29&mn=sn-n8v7kne7&ms=rdu&mt=1571482123&mv=m&mvi=5&pl=26&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgOxGoiDctZx-CyVXfctFom1f0E4pXmaQ5WcCMdvKoGI4CIQCDfvDxsRD8gnXRmBP97M2vcJc-19ZmohTdTogG6C4HBw==',
    likes: 0,
    dislikes: 0,
};
const postVideoEl = document.createElement('div');
const videoEl = document.createElement('video');
videoEl.controls = "controls";
videoEl.className = 'card-img-top';
videoEl.src = postVideo.videoUrl;
postVideoEl.appendChild(videoEl);

const postVideoBodyEl = document.createElement('div');
postVideoBodyEl.className = 'card-body';
postVideoEl.appendChild(postVideoBodyEl);

const postVideoContentEl = document.createElement('p');
postVideoContentEl.textContent = postVideo.content;
postVideoBodyEl.appendChild(postVideoContentEl);

const videoLikesEl = document.createElement('button');
videoLikesEl.className = 'btn btn-success';
videoLikesEl.textContent = '❤' + postVideo.likes;
videoLikesEl.onclick = function () {
    postVideo.likes = postVideo.likes + 1;
    videoLikesEl.textContent = '❤' + postVideo.likes;
};
const videoDislikesEl = document.createElement('button');
videoDislikesEl.className = 'btn btn-dark';
videoDislikesEl.textContent = '👎' + postVideo.dislikes;
videoDislikesEl.onclick = function () {
    postVideo.dislikes = postVideo.dislikes + 1;
    videoDislikesEl.textContent = '👎' + postVideo.dislikes;
};
postVideoBodyEl.appendChild(videoLikesEl);
postVideoBodyEl.appendChild(videoDislikesEl);

rootEl.appendChild(postVideoEl);
console.log(postVideoEl);

const postAudio = {
    content: 'Аудио на страничке',
    audioUrl: 'https://dl3.ru-music.я.ws/mp3/2878.mp3?olga-rozhdestvenskaya_-_pesenka-o-snezhinke.mp3',
    likes: 0,
    dislikes: 0,
};
const postAudioEl = document.createElement('div');
const audioEl = document.createElement('audio');
audioEl.controls = "controls";
audioEl.className = 'card-img-top';
audioEl.src = postAudio.audioUrl;
postAudioEl.appendChild(audioEl);

const postAudioBodyEl = document.createElement('div');
postAudioBodyEl.className = 'card-body';
postAudioEl.appendChild(postAudioBodyEl);

const postAudioContentEl = document.createElement('p');
postAudioContentEl.textContent = postAudio.content;
postAudioBodyEl.appendChild(postAudioContentEl);

const audioLikesEl = document.createElement('button');
audioLikesEl.className = 'btn btn-success';
audioLikesEl.textContent = '❤' + postAudio.likes;
audioLikesEl.onclick = function () {
    postAudio.likes = postAudio.likes + 1;
    audioLikesEl.textContent = '❤' + postAudio.likes;
};
const audioDislikesEl = document.createElement('button');
audioDislikesEl.className = 'btn btn-dark';
audioDislikesEl.textContent = '👎' + postAudio.dislikes;
audioDislikesEl.onclick = function () {
    postAudio.dislikes = postAudio.dislikes + 1;
    audioDislikesEl.textContent = '👎' + postAudio.dislikes;
};
postAudioBodyEl.appendChild(audioLikesEl);
postAudioBodyEl.appendChild(audioDislikesEl);

rootEl.appendChild(postAudioEl);
console.log(postAudioEl);