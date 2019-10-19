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

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-success';
likesEl.textContent = '❤' + postImg.likes;
likesEl.onclick = function () {
    postImg.likes = postImg.likes + 1;
    likesEl.textContent = '❤' + postImg.likes;
};
const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-dark';
dislikesEl.textContent = '👎' + postImg.dislikes;
dislikesEl.onclick = function () {
    postImg.dislikes = postImg.dislikes + 1;
    dislikesEl.textContent = '👎' + postImg.dislikes;
};
postImgBodyEl.appendChild(likesEl);
postImgBodyEl.appendChild(dislikesEl);

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

const likesEl2 = document.createElement('button');
likesEl2.className = 'btn btn-success';
likesEl2.textContent = '❤' + postVideo.likes;
likesEl2.onclick = function () {
    postVideo.likes = postVideo.likes + 1;
    likesEl2.textContent = '❤' + postVideo.likes;
};
const dislikesEl2 = document.createElement('button');
dislikesEl2.className = 'btn btn-dark';
dislikesEl2.textContent = '👎' + postVideo.dislikes;
dislikesEl2.onclick = function () {
    postVideo.dislikes = postVideo.dislikes + 1;
    dislikesEl2.textContent = '👎' + postVideo.dislikes;
};
postVideoBodyEl.appendChild(likesEl2);
postVideoBodyEl.appendChild(dislikesEl2);

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

const likesEl3 = document.createElement('button');
likesEl3.className = 'btn btn-success';
likesEl3.textContent = '❤' + postAudio.likes;
likesEl3.onclick = function () {
    postAudio.likes = postAudio.likes + 1;
    likesEl3.textContent = '❤' + postAudio.likes;
};
const dislikesEl3 = document.createElement('button');
dislikesEl3.className = 'btn btn-dark';
dislikesEl3.textContent = '👎' + postAudio.dislikes;
dislikesEl3.onclick = function () {
    postAudio.dislikes = postAudio.dislikes + 1;
    dislikesEl3.textContent = '👎' + postAudio.dislikes;
};
postAudioBodyEl.appendChild(likesEl3);
postAudioBodyEl.appendChild(dislikesEl3);

rootEl.appendChild(postAudioEl);
console.log(postAudioEl);