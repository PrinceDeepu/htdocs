
docReady(yt5s);

async function yt5s() {
    if(window.location.host === "yt5s.com") {
        await myObserver('#formatSelect', node => node.selectedIndex = 0 );
        await myObserver('#btn-action', node => node.click() );
        await myObserver('#asuccess:not(.hidden)', node => node.click() );
    }
}