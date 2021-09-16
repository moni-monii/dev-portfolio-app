// function validateForm() {
// var name= document.getElementById('fname').value;

// try {
//     if(fName --- "")
//     throw "field is empty"
// } catch (error) {
//     if 
// }
// }

// // Form validation code will come here.
//       function validate() {
      
//          if( document.myForm.Name.value == "" ) {
//             alert( "Please provide your name!" );
//             document.myForm.Name.focus() ;
//             return false;
//          }
//          if( document.myForm.EMail.value == "" ) {
//             alert( "Please provide your Email!" );
//             document.myForm.EMail.focus() ;
//             return false;
//          }
//          if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
//             document.myForm.Zip.value.length != 5 ) {
            
//             alert( "Please provide a zip in the format #####." );
//             document.myForm.Zip.focus() ;
//             return false;
//          }
//          if( document.myForm.Country.value == "-1" ) {
//             alert( "Please provide your country!" );
//             return false;
//          }
//          return( true );
//       }
   //-->

   var pricingObj = [
  {
    project: "Modal",
    estimated_time: "3 weeks",
    price: 78
  },
  {
    project: "Landing Page",
    estimated_time: "2 weeks",
    price: 120
  },
  {
    project: "CSS Animations",
    estimated_time: "6 weeks",
    price: 550
  },

  {
    project: "React Native App",
    estimated_time: "2 Months",
    price: 1000
  }

]

for (brand of pricingObj){
  console.log("Project: " + brand.project + " | " +  " Timeline: " + brand.estimated_time + " | " + "Cost: "  + "$" + brand.price)
}

// How do I display this on my site? My guess would be to wrap in a function? or to use the dom???