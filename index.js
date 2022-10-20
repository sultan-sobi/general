console.clear();
function getValue(x){
  var totalValue= $(".inputValue").val()
$(".inputValue").val(totalValue + x)

}

function calculate(){
   var result=eval($(".inputValue").val());
   $(".inputValue").val(result);
}


function reset(){
  $(".inputValue").val(' ');
}