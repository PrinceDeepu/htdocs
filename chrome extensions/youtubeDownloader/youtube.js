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

let btnCreated = false;
async function youtube () {
    // let found = false;
    if(btnCreated) {
        removeMyBtn();
        btnCreated = false;
    }
    if(window.location.host == 'www.youtube.com' && window.location.pathname == '/watch') {
        await myObserver( 'ytd-subscribe-button-renderer' , subscribeBtn => {
            const downloadBtn = document.createElement('a');
            const height = document.querySelector('tp-yt-paper-button').height;
            const link = window.location.href;
            downloadBtn.id = `download-youtube-video-btn-dg`;
            downloadBtn.href = `https://yt5s.com/en56?q=${encodeURI(link)}`;
            downloadBtn.target = "_blank";
            downloadBtn.textContent = "DOWNLOAD";
            
            downloadBtn.style.cssText = `
            padding: 0px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0px;
            outline: none;
            cursor: pointer;
            transition: 0.4s all;
            background-color: green;
            color: white;
            font-size: 14px;
            text-decoration: none;
            height: ${height};
            `;
            
            subscribeBtn.appendChild(downloadBtn);
            btnCreated = true;
        });
    } else {
        if(btnCreated) {
            removeMyBtn();
            btnCreated = false;
        }
    }
    observeHref();
    
    function removeMyBtn() {
        document.querySelector('#download-youtube-video-btn-dg').remove();
    }
}
