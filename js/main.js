// var elForm = document.querySelector(".form");
// var elInput = document.querySelector(".numberInput");
// var elParagraphResult = document.querySelector(".resultP")
// var array = [];
// var count = 0;
// var compute;


// elForm.addEventListener("input", function(calculate){
//   calculate.preventDefault();
//   var elInputValue = elInput.value.trim()

//   if(elInputValue.length != 0){
//     if(!(isNaN(elInputValue))){
//       function renderNumber(num){
//         var render = num.split(" ");

//       }

//       elParagraphResult.textContent = renderNumber(elInputValue)

//     }
//     else{
//       alert("Iltimos, yuqoridagi qoidalarga amal qiling va raqamli ma'lumot kiriting!")
//     }
//   }
//   else{
//     elInput.placeholder = "Ma'lumot kiritilmadi, qayta kiriting!"
//     alert("Ma'lumot kiritilmadi, qayta kiriting!")
//   }


// });

var numbers = [1, -12, -6.543, 72, 9, 32];
var empty = [];
var result;
var count = 0;


function totalValue(params){
  for(i = 0; i < params.length; i++){
    result = Math.abs(params[i])
    empty.push(Math.round(result));
    count = count + empty[i];
  }
  console.log(empty);
  return count;

}


console.log(totalValue(numbers));
