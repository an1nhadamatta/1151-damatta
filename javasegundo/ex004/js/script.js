function fechar(){
    document.getElementById('popup').style.display = "none";
}
function oi(){
    
    let log = document.getElementById("login").value
    let pass = document.getElementById("senha").value
    if(log == "Luccas" && pass == "lindo"){ 
        fechar()
    }
    else{
        document.getElementById('msg').style.display = "block";
    }

}