function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("show") == -1) {
        x.className += "show";
    } else {
        x.className = x.className.replace("show", "");
    }
}

function novoVideo(video) {
    switch (video) {
        case '1':
            document.getElementById('videoSelecionado').src = 'https://www.youtube.com/embed/ciR3sUdgma0';
            document.getElementById('video1').classList.add("execucao");
            document.getElementById('video2').classList.remove("execucao");
            document.getElementById('video3').classList.remove("execucao");
            break;
        case '2':
            document.getElementById('videoSelecionado').src = 'https://www.youtube.com/embed/GdzrrWA8e7A';
            document.getElementById('video2').classList.add("execucao");
            document.getElementById('video1').classList.remove("execucao");
            document.getElementById('video3').classList.remove("execucao");
            break;
        case '3':
            document.getElementById('videoSelecionado').src = 'https://www.youtube.com/embed/HxOBgWHVUzo';
            document.getElementById('video3').classList.add("execucao");
            document.getElementById('video1').classList.remove("execucao");
            document.getElementById('video2').classList.remove("execucao");
            break;
    }
}

