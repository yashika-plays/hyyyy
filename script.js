let ipHistory = [];
let currentIp = '';

function updateIp() {
    // Simulate IP change
    currentIp = '192.168.1.' + Math.floor(Math.random() * 255);
    document.getElementById('ipDisplay').innerText = currentIp;

    // Update IP history
    if (!ipHistory.includes(currentIp)) {
        ipHistory.push(currentIp);
        const li = document.createElement('li');
        li.innerText = currentIp;
        document.getElementById('ipList').appendChild(li);
    }
}

function embedVideo(url) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (videoId) {
        const videoBoxes = document.getElementById('videoBoxes');
        videoBoxes.innerHTML = ''; // Clear previous boxes
        for (let i = 0; i < 8; i++) {
            const box = document.createElement('div');
            box.className = 'video-box';
            box.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
            videoBoxes.appendChild(box);
        }
    } else {
        alert('Invalid YouTube URL');
    }
}

document.getElementById('playButton').addEventListener('click', () => {
    const url = document.getElementById('youtubeUrl').value;
    embedVideo(url);
});

document.getElementById('toggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Update IP and refresh every 45 seconds
setInterval(() => {
    updateIp();
    location.reload();
}, 45000);

// Initial IP setup
updateIp();
