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
    
    /*
    for (let i = 0; i < amount; i++) {

      //returnArray.push(`${i}`);
      returnArray.push(`${(i < 10 ? '00' : i < 100 ? '0' : '') + i}`);
    }
    
    ugzanez: 

    for (let i = 0; i < 10; i++) {
      returnArray.push("00"+i);
    }
    for (let i = 10; i < 100; i++) {
      returnArray.push("0"+i);
    }
    for (let i = 100; i < amount; i++) {
      returnArray.push(i);
    }    
    */

    for (let i = 0; i < amount; i++) {
    
      let lastNumber = amount-1;
      let lastNumberString= lastNumber.toString();
      let lastNumberStringLength = lastNumberString.length;

      let currentNumber = i;
      let currentNumberString = currentNumber.toString();
      let currentNumberStringLength = currentNumberString.length;

      /* ez is jó megoldas
      let paddedNu = currentNumberString.padStart(lastNumberStringLength, "0");
      returnArray.push(paddedNu);
      */
     
      let result = lastNumberStringLength-currentNumberStringLength;
      let paddedNU = currentNumberString;
      for (let j = 0; j < result; j++) {
          paddedNU = "0"+ paddedNU;
          console.log("paddedNu")
      }
      returnArray.push(paddedNU)
    }  
    
  } else {
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
  const list = generateArray(1005);
  console.log(list)
  
  if (list[0] !== "error") {

    for (const item of list) {
      
      root.insertAdjacentHTML("beforeend", `<div class="card">${item}</div>`);
    }
  }
}

window.addEventListener("load",loadEvent)

/*
window.addEventListener("load", function() {
  ez is teljesen elfogadott
})

vagy

window.addEventListener("load", () => {
  ez is teljesen elfogadott
})
*/