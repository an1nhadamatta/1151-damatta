function livros(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}

function mascara_tel(obj){
  if(obj.value.length == 0){
      obj.value += "(";
  }
  if(obj.value.length == 3){
      obj.value += ")";
  }
  if(obj.value.length == 8){
      obj.value += "-";
  }
  
}
