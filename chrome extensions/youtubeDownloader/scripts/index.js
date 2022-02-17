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

function docReady( fn ) {
    // see if DOM is already available
    if ( document.readyState === "complete" || document.readyState === "interactive" ) {
        // call on next available tick
        setTimeout( fn, 1 );
    } else {
        document.addEventListener( "DOMContentLoaded", fn );
    }
}

function observeHref(oldvalue) {
    undefined === oldvalue && (oldvalue = window.location.href);
    let clearcheck = setInterval(repeatcheck,500,oldvalue);
    function repeatcheck(oldvalue) {
        if (window.location.href !== oldvalue) {
            // do something
            clearInterval(clearcheck);
            youtube();
        }
    }
}
