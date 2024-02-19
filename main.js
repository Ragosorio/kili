const cartierSpotify = document.getElementById("cartierSpotify")
const cartierYT = document.getElementById("cartierYT") 
const recuerdosST = document.getElementById("recuerdosST")
const recuerdosYT = document.getElementById("recuerdosYT")

function redirigir(link) {
    const newWindow = window.open(`https://${link}`, "_blank")
    newWindow.focus()
}

recuerdosST.addEventListener("click", function () {
    redirigir("open.spotify.com/intl-es/track/5aHknm3QbO66OqtLQFlJWy?si=93802eb0dfa24eea")
})
recuerdosYT.addEventListener("click", function () {
    redirigir("youtube.com/watch?v=3i_sbm9pCNs&pp=ygUOcmVjdWVyZG9zIGtpbGk%3D")
})
cartierSpotify.addEventListener("click", function () {
    redirigir("open.spotify.com/intl-es/track/0Z6OY9Y2IxaU4GJa690YyD?si=907fe24d154446c2")
})
cartierYT.addEventListener("click", function () {
    redirigir("youtu.be/BUOo6Es3t2A?si=ovnDhd0edsCTcR4m")
})