console.log("hello")
let nextPageToken = ""
function getVideos() {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0pXY2yLvBrrmLt3M8VBgTw&maxResults=8&order=date&key=AIzaSyCJ0vTgwYanaOe6jnxlXWbpCUK6ygyva2Q&pageToken="+nextPageToken)
    .then((result)=>{
        return result.json()
    }).then((data)=> {
        console.log(data)
        let videos = data.items
        nextPageToken = data.nextPageToken
        let videoContainer = document.querySelector(".youtube-container")
        for(video of videos) {
            videoContainer.innerHTML += `
            <h3>${video.snippet.title}</h3>
            <img src="${video.snippet.thumbnails.default.url}">
            `
        }
    })
}
