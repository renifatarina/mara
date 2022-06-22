console.log("hello")
// let nextPageToken = ""
// function getVideos() {
//     fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UC0pXY2yLvBrrmLt3M8VBgTw&maxResults=8&key=AIzaSyBm5L5O3wTFE9HxEIC_-vXPxWnpFOZ6IKM&pageToken="+nextPageToken)
//     // fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0pXY2yLvBrrmLt3M8VBgTw&maxResults=8&order=date&key=AIzaSyCJ0vTgwYanaOe6jnxlXWbpCUK6ygyva2Q&pageToken="+nextPageToken)
//     .then((result)=>{
//         return result.json()
//     }).then((data)=> {
//         console.log(data)
//         let videos = data.items
//         nextPageToken = data.nextPageToken
//         let videoContainer = document.querySelector(".youtube-container")
//         for(video of videos) {
//             videoContainer.innerHTML += `
//             <h3>${video.snippet.title}</h3>
//             <img src="${video.snippet.thumbnails.default.url}">
//             `
//         }
//     })
// }
// let nextPageToken=""
// function getVideos() {
//     fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0pXY2yLvBrrmLt3M8VBgTw&maxResults=8&order=date&key=AIzaSyBm5L5O3wTFE9HxEIC_-vXPxWnpFOZ6IKM&pageToken="+nextPageToken)
//     .then((result)=>{
//         return result.json()
//     }).then((data)=>{
//         console.log(data)
//         let videos = data.items
//         nextPageToken = data.nextPageToken
//         let videoContainer=document.querySelector(".youtube-container")
//         for(video of videos) {
//             videoContainer.innerHTML += `
//             <h3>${video.snippet.title}</h3>
//                 <img src="${video.snippet.thumbnails.high.url}">
//             `
//         }
//     })
// }
// // return getVideos()


    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0pXY2yLvBrrmLt3M8VBgTw&maxResults=6&order=date&key=AIzaSyBm5L5O3wTFE9HxEIC_-vXPxWnpFOZ6IKM")
    .then((result)=>{
        return result.json()
    }).then((data)=>{
        console.log(data)
        let videos = data.items
        console.log(data.nextPageToken)
        let videoContainer1=document.querySelector(".youtube-container1")
        let videoContainer2=document.querySelector(".youtube-container2")
        for(video of videos) {
            for(i=0; i<3; i++) {
                if(video==data.items[i]) {
                videoContainer1.innerHTML += `
                <div style="margin-left: 25px;">
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target=__blank><img src="${video.snippet.thumbnails.medium.url}"></a>
                <p class="py-2">${video.snippet.title}</p>
                </div>
                `
                }
            }
            
            for(i=3; i<6; i++) {
                if(video==data.items[i]) {
                videoContainer2.innerHTML += `
                <div style="margin-left: 25px;">
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target=__blank><img src="${video.snippet.thumbnails.medium.url}"></a>
                <p class="py-2">${video.snippet.title}</p>
                </div>
                `
                }
            }
        }
    })



    
    // fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0pXY2yLvBrrmLt3M8VBgTw&maxResults=8&order=date&key=AIzaSyBm5L5O3wTFE9HxEIC_-vXPxWnpFOZ6IKM")
    // .then((result)=>{
    //     return result.json()
    // }).then((data)=>{
    //         console.log(data)
    //         let videos = data.items
    //         console.log(data.nextPageToken)
    //         let videoContainer1=document.querySelector(".youtube-container1")
    //         let videoContainer2=document.querySelector(".youtube-container2")
    //         let videoContainer3=document.querySelector(".youtube-container3")
    //         let i=0
    //         for(video of videos) {
    //             if(video==data.items[0]) {
    //                 videoContainer1.innerHTML += `
    //                 <div class="col-md-4 ">
    //                 <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target=__blank><img src="${video.snippet.thumbnails.medium.url}"></a>
    //                 <h4>${video.snippet.title}</h4>
    //                 </div>
    //                 `
    //             }
    //             if(video==data.items[1]) {
    //                 videoContainer2.innerHTML += `
    //                 <div class="col-md-4 ">
    //                 <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target=__blank><img src="${video.snippet.thumbnails.medium.url}"></a>
    //                 <h4>${video.snippet.title}</h4>
    //                 </div>
    //                 `
    //             }
    //             if(video==data.items[2]) {
    //                 videoContainer3.innerHTML += `
    //                 <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target=__blank><img src="${video.snippet.thumbnails.medium.url}"></a>
    //                 <h4>${video.snippet.title}</h4>
    //                 `
    //             }
    //         }

    // })
