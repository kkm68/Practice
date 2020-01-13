let base;
let adding;
let topping;

//проверяем, какие ингредиенты выбраны
function mixResult() {
  var mix4=document.getElementsByName('ingr1');
  for (var i=0; i<mix4.length; i++) {
    if (mix4[i].checked) {
      base = mix4[i].value;
    }
   }
   var mix5=document.getElementsByName('ingr2');
   for (var i=0; i<mix5.length; i++) {
     if (mix5[i].checked) {
       adding = mix5[i].value;
     }
    }
    var mix6=document.getElementsByName('ingr3');
    for (var i=0; i<mix6.length; i++) {
      if (mix6[i].checked) {
        topping = mix6[i].value;
      }
     }
  console.log(base, adding, topping);
    //проверяем соответствие выбранных ингредиентов существующим вариантам коктейлей
switch (base+adding+topping) {
    case ("vodkajuiceice"): alert("Отвёртка");
        break;
    case ("rumcolaice"): alert("Ром с колой!");
        break;
    default: console.log("Отвал башки");
}
}


