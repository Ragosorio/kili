const cartierSpotify = document.getElementById("cartierSpotify")
const cartierYT = document.getElementById("cartierYT")

function redirigir(link) {
    const newWindow = window.open(`https://${link}`, "_blank")
    newWindow.focus()
}

cartierSpotify.addEventListener("click", function () {
    redirigir("open.spotify.com/intl-es/track/0Z6OY9Y2IxaU4GJa690YyD?si=907fe24d154446c2")
})
cartierYT.addEventListener("click", function () {
    redirigir("youtu.be/BUOo6Es3t2A?si=ovnDhd0edsCTcR4m")
})