var height = 0
var width = 0
var vidas = 1
var tempo = 25
var dificuldade = 1000;

var nivel = window.location.search.replace('?','')

if(nivel === 'normal')
{
    dificuldade = 1300;
}
else if(nivel === "dificil")
{
    dificuldade = 900
}
else
{
    dificuldade = 750
}

var cronometro = setInterval(function(){
    if(tempo < 0)
    {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }
    else
    {
        document.getElementById('cronometro').innerHTML = tempo
    }
    tempo--;
},1000)

ajustaTamanhoTela()


var criaMosca = setInterval(posicaoRandomica, dificuldade)



function ajustaTamanhoTela()
{
    height = window.innerHeight
    width = window.innerWidth
    console.log(height, width)
}

function posicaoRandomica()
{   
    if(document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove()  
        if(vidas > 2)
        {
            window.location.href = "fimDeJogo.html"    
        }
        else
        {
            document.getElementById('v'+vidas).src = "../images/coracao_vazio.png"
            vidas++
        }
    }
    
    
    var posicaoX = Math.floor(Math.random() * width) - 90
    var posicaoY = Math.floor(Math.random() * height) - 90
    
    posicaoX = (posicaoX < 0) ? 0 : posicaoX
    posicaoY = (posicaoY < 0) ? 0 : posicaoY
    
    console.log(posicaoY, posicaoX)

    var mosquito = document.createElement('img')
    
    mosquito.src = '../images/mosca.png'
    mosquito.className = tamanhoAleatorio() +" "+ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito)
    
    tamanhoAleatorio()
}


function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3) 
    
    switch(classe)
    {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'  
    }
}
        
function ladoAleatorio()
{
    var classe = Math.floor(Math.random() * 2) 
    
    switch(classe)
    {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB' 
    }
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        