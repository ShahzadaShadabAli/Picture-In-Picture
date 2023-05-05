const videoElement = document.getElementById('video')
const btn = document.getElementById('btn')

//Select the video to be played,assigning the value as a source to video tag, playing it
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    // videoElement.setAttribute('src', mediaStream) 
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = function(){
        videoElement.play()
    }
    } catch (error) {
        //error
        console.log(error)
    }
    
}

btn.addEventListener('click', async function(){
    btn.disabled = true
    await videoElement.requestPictureInPicture()
    btn.disabled = false
})

//onload
selectMediaStream()