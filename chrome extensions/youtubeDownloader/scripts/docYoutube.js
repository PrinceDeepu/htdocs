const open = document.querySelector("#openDownloadIframeBtn");
const close = document.querySelector("#closeDownloadIframeBtn");

document.addEventListener("click", close, (event) => {
    event.preventDefault();

    const iframe = document.querySelector("#yt5s-iframe-container");

    iframe.style.height = "20px";
    event.id = "openDownloadIframeBtn";
});

document.addEventListener("click", open, (event) => {
    event.preventDefault();

    const iframe = document.querySelector("#yt5s-iframe-container");

    iframe.style.height = "auto";
    event.id = "closeDownloadIframeBtn";
});
