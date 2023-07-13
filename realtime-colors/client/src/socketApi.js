import io from 'socket.io-client' 

let socket;

export const init = () =>{
    console.log("Sunucuya bağlanılıyor")
    socket = io('http://localhost:3000',{
        transports:["websocket"],
    })
    socket.on('connect',()=>console.log("sunucuya bağlantı başarıyla gerçekleşti."))
}

export const send = (color) =>{
    socket.emit('newColor',color); //clienttan geleni backende,backend ten geleni clienta yollamamıza saglıyor(emit)
}

export const subscribe = (cb) => {
    socket.on('receive',(color) =>{
        console.log(color)
        cb(color);
    }) //on ile receive kanalını izlememize sağlıyor
}