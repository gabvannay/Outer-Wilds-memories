
// DOM elements
const urlInput = document.getElementById("track-url");
const videoFrame = document.querySelector("#video > iframe");
const newTrackButton = document.querySelector("#action button");
const notificationArea = document.getElementById("notification");

let previousTrackID = "";
let watchURL = "";
let embedURL = "";

function randomTrack()
{
	if (pool.length === 0)
	{
		notificationArea.innerHTML = "Please choose at least one option above...";
		return;
	}

	notificationArea.innerHTML = "";

	let trackID;
	do {
		trackID = pool[Math.floor(Math.random() * pool.length)];
	} while (trackID === previousTrackID)

	previousTrackID = trackID;
	watchURL = `https://www.youtube.com/watch?v=${trackID}`;
	embedURL = `https://www.youtube.com/embed/${trackID}`;

	urlInput.value = watchURL.replace("https://", "");
	videoFrame.src = embedURL;
}

newTrackButton.addEventListener('click', randomTrack);