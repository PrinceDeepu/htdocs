
docReady( youtubeMusic);

let btnCreated = false;
async function youtubeMusic () {
    // let found = false;
    if(btnCreated) {
        removeMyBtn();
        btnCreated = false;
    }
    if(window.location.host == 'music.youtube.com' && window.location.pathname == '/watch') {
        await myObserver( 'ytmusic-player-bar .middle-controls.style-scope.ytmusic-player-bar' , musicPlayer => {
            const downloadBtn = makeDownloadButton(document.createElement('a'), {
                id : `download-youtube-music-btn-dg`,
                href : `https://yt5s.com/en56?q=${encodeURI(setVideoUrl(window.location.href))}`,
            });
            musicPlayer.appendChild(downloadBtn);
            btnCreated = true;
        });
    } else {
        if(btnCreated) {
            removeMyBtn();
            btnCreated = false;
        }
    }
    observeHref('youtubeMusic');
    
    function removeMyBtn() {
        document.querySelector('#download-youtube-music-btn-dg').remove();
    }
}
