
docReady(yt5s);

async function yt5s() {
    if(window.location.host.indexOf("yt5s.com") !== -1) {

        const url = new URL(window.location.href);
        if(url.searchParams.get('redirectType') === 'deepeshdg') {

            await myObserver('#formatSelect', node => {

                if(url.searchParams.get("downloadType") === 'audio') 
                    node.selectedIndex = node.options.length - 1;
                else
                    node.selectedIndex = 0; 
            });

            await myObserver('#btn-action', node => node.click() );
            await myObserver('#asuccess:not(.hidden)', node => node.click() );
        }
    }
}