
docReady(yt5s);

async function yt5s() {
    if(window.location.host === "yt5s.com") {
        await myObserver('#formatSelect', node => {
            const url = new URL(window.location.href);
            const type = url.searchParams.get("downloadType");
            if(type === 'audio') 
                node.selectedIndex = node.options.length - 1;
            else
                node.selectedIndex = 0; 
        });
        await myObserver('#btn-action', node => node.click() );
        await myObserver('#asuccess:not(.hidden)', node => node.click() );
    }
}