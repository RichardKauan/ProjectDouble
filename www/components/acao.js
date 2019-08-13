$(document).on("click","#calcular",function(){

  var feminino;
  var masculino;
  var peso;
  var altura;
  var idade;
  var nivel;
  var resultado;
 
 

   $idade = $("#idade").val();
   $peso = $("#peso").val();
   $altura = $("#altura").val();
   $feminino = $("input[id = 'mulher']:checked").val();
   $masculino = $("input[id = 'homem']:checked").val();
   $nivel = $("#nivelAtividade").val();

  if($masculino == "#homem"){

    $resultado = $nivel * (66 + ((13.7 *  $peso) + (5 * $altura) - (6.8 * $idade)));
    $("#visor").val($resultado);

  }
  else{
    $resultado = $nivel *(655 + ((9.6 * $peso) + (1.8 * $altura) - (4.7 * $idade)));
       $("#visor").val($resultado);
  }
});
$(document).on("click","#limpar",function(){
  $("#visor").val("");
    $($resultado).val($resultado);
    $($)
});