function carregar(){
let msg = window.document.getElementById("msg")
let img = window.document.getElementById("image")
let date =  new Date()
let hora = date.getHours()
msg.innerHTML=`agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    img.src="/assets/manha.jpeg"

}else if(hora >=12 && hora < 18){
    img.src="/assets/tarde.jpeg"
}
else{
    img.src="/assets/noite.jpeg" 
}
}