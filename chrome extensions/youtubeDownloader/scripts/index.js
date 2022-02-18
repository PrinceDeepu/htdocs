const primary = 'green';
const primaryColor = 'white';

function myObserver( node, callback ) {
    return new Promise( ( resolve, reject ) => {
        let observe = setInterval( () => {
            const selectedNode = document.querySelector(node);
            if(selectedNode) {
                clearInterval(observe);
                callback(selectedNode);
                resolve(true);
            }
        }, 500 );
    });
}

function docReady( fn, ...args ) {
    // see if DOM is already available
    if ( document.readyState === "complete" || document.readyState === "interactive" ) {
        // call on next available tick
        setTimeout( fn, 1, ...args );
    } else {
        document.addEventListener( "DOMContentLoaded", fn );
    }
}

function observeHref(type, oldvalue) {
    undefined === oldvalue && (oldvalue = window.location.href);
    let clearcheck = setInterval(repeatcheck,500,oldvalue);
    function repeatcheck(oldvalue) {
        if (window.location.href !== oldvalue) {
            // do something
            clearInterval(clearcheck);
            if(type === 'youtube') youtube();
            if(type === 'youtubeMusic') youtubeMusic();
        }
    }
}

function setVideoUrl(url) {
    if(url.indexOf('&') !== -1)
        return url.slice(0, url.indexOf('&'));
    
    return url;
}

function makeDownloadButton(options) {
    const buttonElement = document.createElement('a');
    
    const additionalcss = options.additionalcss ?? '';
    buttonElement.id = options.id ?? '';
    buttonElement.rel = options.rel ?? `noopener noreferrer`;
    buttonElement.href = options.href ?? "#";
    buttonElement.target = options.target ?? `_blank`;
    buttonElement.textContent = options.buttonText ?? `DOWNLOAD`;
    buttonElement.style.cssText = `
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0px;
        outline: none;
        cursor: pointer;
        transition: 0.4s all;
        background-color: ${primary};
        color: ${primaryColor};
        font-size: 14px;
        text-decoration: none;
        ${additionalcss}
    `;

    return buttonElement;
}