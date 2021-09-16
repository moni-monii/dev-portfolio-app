//  function newAlert() {
//    var user = prompt("What is your name?");
//    var myDate = new Date().getHours();
// document.getElementById("displayTime").innerHTML = myDate;
//     if (user != null || user == "") {
//  }
// }

// stuck on expression for what goes in the parenthesis after switch//

// var user = prompt("What is your name?");
var myDate = new Date();
// document.getElementById("displayTime").innerHTML = myDate
var time = myDate.getHours(); 


// switch (user) {
//   case time >= 5 && time < 12:
//     alert("Good morning ! " );
//     break;
//   case time >= 12 && time < 6:
//     alert("Good Afternoon ! " + user + "Thank you for Reviewing my resume.");
//     break;
//     case time >= 6 && time < 5:
//     alert("Good Evening ! " + user + "Thank you for Reviewing my resume.");
//     break;
//   default: 
//   alert("error 🥺");
//     break;
// }

function promptFunction() {
  let person = prompt("Please enter your name");
  let time = new Date().getHours();
  let greeting = "";

  if(time <= 5 && 12) {
               alert(greeting = "Good Morning " + person + " , Thank You for Reviewing My Resume!");
            } 
            if(time >= 12 &&  18){
              alert("Good Afternoon " + person + " , Thank You for Reviewing My Resume!")
            }
             if(time >= 18 && 22){
              alert("Good Evening " + person + " , Thank You for Reviewing My Resume!")
            }
            else {
                greeting = "Hello " + person + ", Thank You for Reviewing My Resume!";
            }
}