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

const postVideo = {
    content: 'Видео на страничке',
    videoUrl: 'https://r1---sn-xguxaxjvh-31oe.googlevideo.com/videoplayback?expire=1571249881&ei=eQqnXZasH8-RyQW5r6XYDA&ip=188.234.60.9&id=o-AGL8beUhwz-wrsKlRXtjS3cPzLZALks0j2Qxt6Jg7oSp&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-xguxaxjvh-31oe%2Csn-n8v7kn7s&ms=au%2Crdu&mv=m&mvi=0&pl=26&initcwndbps=1613750&mime=video%2Fmp4&gir=yes&clen=15982444&ratebypass=yes&dur=230.690&lmt=1537914482705888&mt=1571228203&fvip=14&fexp=23842630&c=WEB&txp=5531332&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIhALj5V_C4z7m3TVWBT7rhCinpWOVHj5Hew9jJwG8LrVtnAiBfoMRhBGlloW8eR6p2wrw6ADDtLR0-aymR_JcJrO9m7Q%3D%3D&sig=ALgxI2wwRgIhAPjLYU34LBStYmYFSao6rrRSvBUKnW49Rtr360E_ZmaDAiEAshfKphnjaLQ_1seumqOk0ZuHp5bhfYcopgq0luESoN0%3D',
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

const postSelection = postVideoEl;

if (postSelection == postAudioEl) {
    rootEl.appendChild(postAudioEl);
} else if (postSelection == postImgEl) {
    rootEl.appendChild(postImgEl);
} else {
    rootEl.appendChild(postVideoEl);

};
console.log(postSelection);