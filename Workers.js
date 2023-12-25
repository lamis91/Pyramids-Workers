function changeBackground() {
  var selectElement = document.getElementById("country-select");
  var selectedValue = selectElement.value;
  var bodyElement = document.body;
   if (selectedValue === "italy") {
    bodyElement.style.backgroundImage = "url('italia.jpg')";
  } else if (selectedValue === "Croatia") {
    bodyElement.style.backgroundImage = "url('kk.jpg')";
  }
  else if(selectedValue==="Egypt"){
    bodyElement.style.backgroundImage="url('R.jpeg')"
  }
 else if (selectedValue==="Germnay"){
  bodyElement.style.backgroundImage="url('download.jpeg')"
 }
} 

  function submitForm() {
    // Add your form submission logic here
    // You can use AJAX to send the form data to the server
    // Display a success message in the #output div
    document.getElementById('output').innerHTML = 'Form submitted successfully!';
  }

/*let lang={
  ar:{
    FirstName:"الاسم الاول"
  },
  hr:{
    FirstName:"lllll"
  },

}
  let selector = document.getElementById('languge-selector');
  selector.onchange= updateLanguage();
  function updateLanguage(){
   let language = selector.options[selector.selectedIndex].value;
   let nodes = document.querySelectorAll('[data-lang]'); //هيقولي اي الحاجات ال عندها داتا لانج
   let i=nodes.length; //طول المعلومات ال عندي
   while(i--){
    let key= nodes[i].getAttribute('data-lang');
    nodes[i].innerHTML= lang [language] [key]; //lang['ar'][FirstName]
   }
  }*/

