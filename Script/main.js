
const videoEle = document.querySelector('.video-screen');
const button = document.querySelector('.btn');

// Select video, pass to element and play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEle.srcObject = mediaStream;
        videoEle.onloadedmetadata = () =>{
            videoEle.play();
        }
    }catch (error){
        console.log( " 'selectMedia' function found,", error)
    }
}

//Control

function controlStream(){
    button.addEventListener('click', async ()=>{

        button.disabled = true;
        // Start pic-in-pic
        await videoEle.requestPictureInPicture();
        //Reset button
        button.disabled = false;
    });
}


selectMediaStream()
controlStream()