// const ajaxRequest = ( options = null, ytUrl = 'https://www.youtube.com/watch?v=hu8MHIBeG4M' ) => {
//     if(options === null || options === undefined) {
//         options = {
//             url : "https://yt5s.com/api/ajaxSearch",
//             type: "POST",
//             data: {
//                 q: ytUrl,
//                 vt: 'home',
//             },
//         };
//     }

//     options.formData = [];
//     for (const name in options.data ) {
//         if ( Object.hasOwnProperty.call( options.data, name ) ) {
//             options.formData.push( encodeURIComponent( name ) + "=" + encodeURIComponent(options.data[name]));
            
//         }
//     }
//     options.formData = options.formData.join( '&' ).replace( /%20/g, '+' );
    
//     const xhttp = new XMLHttpRequest();

//     xhttp.addEventListener( 'error', function(event) {
//         alert( 'Oops! Something went wrong.' );
//     } );

//     xhttp.addEventListener( 'load', function(event) {
//         alert('success');
//         console.log(this.responseText);
//     } );

//     xhttp.open(options.type, options.url);
//     xhttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
//     xhttp.setRequestHeader( 'origin', 'https://yt5s.com' );
//     xhttp.setRequestHeader( 'Referer', 'https://yt5s.com' );
//     xhttp.setRequestHeader( 'Access-Control-Allow-Origin', '*' );
//     xhttp.setRequestHeader( 'accept', '*/*' );
//     xhttp.send(options.formData);
// }

docReady( youtube);

let youtubeDownloadBtnCreated = false;
let youtubePlaylistDownloadBtnCreated = false;
async function youtube() {
    const youtubeDownloadBtnId = `download-youtube-video-btn-dg`;
    const youtubePlaylistDownloadBtnId = `download-youtube-video-btn-dg`;
    removeMyBtn();

    if(window.location.host.indexOf('youtube.com') !== -1) {
        if(window.location.pathname.indexOf('/watch') !== -1) {
            await myObserver( 'ytd-subscribe-button-renderer' , subscribeBtn => {
                const downloadBtn = makeDownloadButton({
                    id : youtubeDownloadBtnId,
                    href : `https://yt5s.com/en56?redirectType=deepeshdg&q=${encodeURI(setVideoUrl(window.location.href))}`,
                });
                
                subscribeBtn.appendChild(downloadBtn);
                youtubeDownloadBtnCreated = true;
            });
        } else if(window.location.pathname.indexOf('playlist') !== -1) {
            await myObserver( '#owner-container' , playlistMenu => {
                const downloadBtn = makeDownloadButton({
                    id : youtubePlaylistDownloadBtnId,
                    href : `https://youtubemultidownloader.net/playlists.html?redirectType=deepeshdg&q=${encodeURI(setVideoUrl(window.location.href))}`,
                });
                
                playlistMenu.after(downloadBtn);
                youtubePlaylistDownloadBtnCreated = true;
            });
        } else {
            removeMyBtn();
        }
    }
    observeHref('youtube');
    
    function removeMyBtn() {
        if(youtubeDownloadBtnCreated) {
            if(document.querySelector(`#${youtubeDownloadBtnId}`) !== undefined)
                document.querySelector(`#${youtubeDownloadBtnId}`).remove();
            youtubeDownloadBtnCreated = false;
        }
        if(youtubePlaylistDownloadBtnCreated) {
            if(document.querySelector(`#${youtubePlaylistDownloadBtnId}`) !== undefined) 
                document.querySelector(`#${youtubePlaylistDownloadBtnId}`).remove();
            youtubePlaylistDownloadBtnCreated = false;
        }
    }
}
