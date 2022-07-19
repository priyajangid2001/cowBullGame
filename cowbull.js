var input = [];
var tries = 0;
var generated = [];
var k;
var storeoutput = "\n";
var show;
// var b;
// var c;

var gameOver;
// auto move to next input box 
function movetoNext(current, nextFieldID) {
      if (current.value.length >= current.maxLength) {
            document.getElementById(nextFieldID).focus();
      }
}
// create 2 pages 
function show(shown, hidden) {
      document.getElementById(shown).style.display = 'block';
      document.getElementById(hidden).style.display = 'none';
      return false;
}

//  generate a random four unique number

function generateUniqueRandom(maxNr) {
      //Generate random number
      let random = (Math.random() * maxNr).toFixed();

      //Coerce to number by boxing
      random = Number(random);

      if (!generated.includes(random)) {
            generated.push(random);
            return random;
      } else {
            if (generated.length < maxNr) {
                  //Recursively generate number
                  return generateUniqueRandom(maxNr);
            } else {
                  console.log('No more numbers available.')
                  return false;
            }
      }
}
for (var i = 0; i < 4; i++) {
      generateUniqueRandom(9);
}
//  document.write(generated);

console.log('Unique random numbers:', generated);


//  to take input from user
function inputArray() {
      var one = document.getElementById("first").value;
      var two = document.getElementById("second").value;
      var three = document.getElementById("third").value;
      var four = document.getElementById("four").value;
      input[0] = one;
      //console.log(input[0]);
      input[1] = two;
      input[2] = three;
      input[3] = four;

      // document.getElementById("par").innerHTML = input;

      compare(input,generated);
      // if(verifyEntry(input)==false)
      // {

      //       alert("invalid entry");

      // }
      
}
// function verifyEntry(number) {
//       let noRepeat = number.split("").sort((a, b) => a - b);
//       let verify = true;
//       for (let k = 0; k < noRepeat.length - 1; k++) {
//             if (noRepeat[k] === noRepeat[k + 1]) {
//               verify = false;
//             }
//           }

// compare input from user and the one generated

function compare(input, generated) {


      var cow = 0;
      var bull = 0;
      // if(verifyEntry(input)===false)
      // {

      //       alert("invalid entry");

      // }
      // else{
      for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {

                  // console.log("input[i]: "+ input[i]);
                  if (input[i] == generated[j] && i == j) {
                        bull++;
                     
                        // b = input[i];
                        // console.log("bull:" + b);

                  }
                  else {
                        if (input[i] == generated[j]) {
                              cow++;
                              // c = input[i];
                              // console.log("cow:" + c);
                        }
                  }
            }

            // console.log(input[i]);

      }


      tries++;

      // document.getElementById("bull")=b;
      //  document.getElementById("cow")=c; 
      while (tries <= 10) {
            if (bull == 4) {
                  k = "Congratulations!! You Win after  " + tries + "  Trials :)";
                  document.getElementById("result").innerHTML = k;
            }
            else {

                  k = " <br>Trial Number " + tries + ":   " + input.join('') + "   You have  " + cow + " Cow   and  " + bull + " Bull  ";
                  storeoutput = storeoutput + k;
                  document.getElementById("result").innerHTML = storeoutput;
            }

            break;
      }
      if (tries == 11) {
            alert("SORRY YOU LOST :-(  \n "+ generated.join('') + " was the correct answer");
            ge
      }
}









