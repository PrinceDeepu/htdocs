
docReady( youtubeMusic);

let youtubeMusicDownloadBtnCreated = false;
async function youtubeMusic () {
    const youtubeMusicDownloadBtnId = `download-youtube-music-btn-dg`;
    removeMyBtn();
    if(window.location.host.indexOf('music.youtube.com') !== -1 && window.location.pathname.indexOf('/watch') !== -1) {
        await myObserver( 'ytmusic-player-bar .middle-controls.style-scope.ytmusic-player-bar' , musicPlayer => {
            const downloadBtn = makeDownloadButton({
                id : youtubeMusicDownloadBtnId,
                href : `https://yt5s.com/en56?redirectType=deepeshdg&q=${encodeURI(setVideoUrl(window.location.href))}`,
            });
            musicPlayer.appendChild(downloadBtn);
            youtubeMusicDownloadBtnCreated = true;
        });
    } else {
        removeMyBtn();
    }
    observeHref('youtubeMusic');
        
    function removeMyBtn() {
        if(youtubeMusicDownloadBtnCreated) {
            if(document.querySelector(`#${youtubeMusicDownloadBtnId}`))
                document.querySelector(`#${youtubeMusicDownloadBtnId}`).remove();
            youtubeMusicDownloadBtnCreated = false;
        }
    }
}
