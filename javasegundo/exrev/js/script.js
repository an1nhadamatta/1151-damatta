function calc(){

    //entrada
    let horario = document.form.horario.value;

    //processamento
    if (horario == "manhã"){
        valor = 1500;
    }
    else if(horario == "tarde"){
        valor = 1800;
    }
    else{
        valor = 2300;
    }

    //saida
    document.getElementById('total').value = valor;

}
function opc(){
    
    let opcionais = document.form.opcionais.value;

        
}