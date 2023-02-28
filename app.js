const qr = new QrCodeWithLogo({
    canvas: document.getElementById("canvas"),
    content: "https://msoler.dev",
    width: 380,
    image: document.getElementById("image"),
    logo: {
        src: "https://avatars.githubusercontent.com/u/83289296?s=40&v=4",
        logoSize: 0.2,
        borderRadius: 50
    }
});

qr.toCanvas();
