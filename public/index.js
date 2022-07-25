const socket = io();


const outMsg = document.getElementById("outMsg");
const inMsg= document.getElementById("inMsg");
const user = document.getElementById("user")
const btnSend = document.getElementById("btnSend");
// const userTyping = document.getElementById("userTyping");

btnSend.addEventListener("click", () => {
    socket.emit("chat:message", {
        message: outMsg.value, 
        user: user.value
    })
})

outMsg.addEventListener("keypress", () =>{
    socket.emit("chat:typing", user.value)
})

socket.on ("chat:message", (data) =>{
    // userTyping.innerText = "";
    inMsg.innerHTML += `<p><strong>${data.user}</strong>: ${data.message}</p>`
})

// socket.on("chat:typing", (user) =>{
//     userTyping.textContent = `${user} is typing a message... waaaait for it`
// })