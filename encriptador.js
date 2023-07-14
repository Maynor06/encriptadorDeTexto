
let texto = document.getElementById("texto").value;
function encriptar(){
    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("titulo-mensaje"); 
    let muñeco = document.getElementById("muñeco");
    let copiar = document.getElementById("msjCopiar");

    let textoEncriptado = texto
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat"); 
    
    if(texto.length != 0){
        document.getElementById("texto").value = textoEncriptado;
        copiar.textContent = textoEncriptado;  
        mensaje.classList.add("ocultar"); 
        muñeco.classList.add("ocultar"); 
        document.getElementById("parrafo").classList.add("ocultar"); 
        document.getElementById("copiar").classList.add("aparecer"); 

    }else{
        mensaje.textContent = "No se encontro ningun mensaje"; 
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("titulo-mensaje"); 
    let muñeco = document.getElementById("muñeco");
    let copiar = document.getElementById("msjCopiar");

    let textoEncriptado = texto
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");

    if(texto.length !=0){
        document.getElementById("texto").value = textoEncriptado;
        copiar.textContent = textoEncriptado; 
        mensaje.classList.add("ocultar");  
        muñeco.classList.add("ocultar"); 
        document.getElementById("parrafo").classList.add("ocultar"); 
        document.getElementById("copiar").classList.add("aparecer"); 
    }
    
}
function copiar(){

    let texto = document.getElementById("texto").value; 
    navigator.clipboard.readText(texto); 
    navigator.clipboard.writeText(texto); 
}