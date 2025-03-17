const airsideInfo = document.getElementById("Airside")
const boreoInfo = document.getElementById("Boreo")
const airsideBtn = document.getElementById("AirsideBtn")
const boreoBtn = document.getElementById("BoreoBtn")

if (airsideInfo.hidden) {
    boreoBtn.style.backgroundColor = "#333";
}

if (boreoInfo.hidden) {
    airsideBtn.style.backgroundColor = "#333";
}



function showAirside() {
    if (airsideInfo.hidden) {
        boreoInfo.hidden = true
        airsideInfo.hidden = false
        airsideBtn.style.backgroundColor = "#333";
        boreoBtn.style.backgroundColor = "#111";
    }
}

function showBoreo() {
    if (boreoInfo.hidden) {
        airsideInfo.hidden = true
        boreoInfo.hidden = false
        boreoBtn.style.backgroundColor = "#333";
        airsideBtn.style.backgroundColor = "#111";
    }
}