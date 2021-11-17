const generateArray = function(amount) {
  let returnArray = [];

  /*
  let amountConverted = parseInt(amount);
  amount = amountConverted;
  */

  amount = parseInt(amount);
  //console.log(amount);

  if (!Number.isNaN(amount)) {
    
    //console.log("az amount egy szam");
    for (let i = 0; i < amount; i++) {
      
      returnArray.push(`${(i < 10 ? '00' : i < 100 ? '0' : '') + i}`);
    }
  }
  else {
    //console.log("az amount nem egy szam");
    returnArray.push("error");
  }

  return returnArray;
}

const loadEvent = function() {
  console.log("az oldal betoltodott");

  //console.log(generateArray("100"));
  //console.log(generateArray(15));
  //console.log(generateArray("kiskutya"));
  //console.log(generateArray([2]));

  const root = document.getElementById("root");
  const list = generateArray(200);
  
  if (list[0] !== "error") {

    for (const item of list) {
      
      root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
    }
  }
}

window.addEventListener("load",loadEvent)

/*
window.addEventListener("load", function() {
  ez is teljesen elfogadott
})
*/

/*
window.addEventListener("load", () => {
  ez is teljesen elfogadott
})
*/
