
docReady(youtubeMultiDownloader)

async function youtubeMultiDownloader() {
    if(window.location.host.indexOf("youtubemultidownloader.net") !== -1) {

        if(window.location.pathname.indexOf("playlists.html") !== -1) {

            const url = new URL(window.location.href);
            if(url.searchParams.get('redirectType') === 'deepeshdg') {

                await myObserver('#cbQuality', SelectElement => SelectElement.selectedIndex = 0 );
                await myObserver('input#inputPlaylist', inputElement => {
                    inputElement.value = url.searchParams.get('q');
                    inputElement.dispatchEvent(new Event('input', {bubbles:true}));
                });

                await myObserver( '#lbStatus' , downloadBtnContainer => {
                    const downloadBtn = makeDownloadButton({
                        id : 'downloadAll',
                        buttonText : ' Download All',
                        additionalcss : 'margin-top: 10px; border-radius: 4px;',
                        target: '_self',
                    });
                    
                    downloadBtnContainer.parentElement.after(downloadBtn);
                    
                    downloadBtn.addEventListener('click', async event => {
                        event.preventDefault();

                        await myObserver('#ListVideo', table => {
                            let downloadBtns = document.querySelectorAll('#ListVideo a[download]');
                            let remainingVideo = downloadBtns.length;
                            if(remainingVideo > 0) {
                                let btn = downloadBtns[start];
                                window.open(btn.href, "_blank");

                                remainingVideo--;
                            }
                            const downloadInterval = setInterval( () => {
                                if(remainingVideo > 0) {
                                    let btn = downloadBtns[start];
                                    window.open(btn.href, "_blank");

                                    remainingVideo--;
                                } else
                                    clearInterval(downloadInterval);
                            }, 30000);
                        });
                    });
                });

                // await myObserver('#btn-action', node => node.click() );
                // await myObserver('#asuccess:not(.hidden)', node => node.click() );
            }
        }
    }
}