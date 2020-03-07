function calcular(acao, valor)
{
    if(acao === 'acao')
    {
        if(valor === 'c')
        {
            document.getElementById('resultado').value = ''
        }
        else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.')
        {
            document.getElementById('resultado').value += valor
        }
        else if(valor === "=")
        {   
            var aux = document.getElementById('resultado').value
            document.getElementById('resultado').value = eval(aux)
        }
    }
    else if(acao === 'valor')
    {
        document.getElementById('resultado').value += valor
    }
}

function verificarInput()
{
    var original =  document.getElementById('resultado').value
    var lastInd = original.length
    
    var r = original.slice(0,lastInd-1)
    
    switch(original[lastInd-1])
    {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':   
            break;
        default:
            document.getElementById('resultado').value = r
            
    }
    console.log(document.getElementById('resultado').value)
    
}