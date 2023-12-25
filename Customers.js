function changeBackground() {
    var selectElement = document.getElementById("countryselect");
    var selectedValue = selectElement.value;
    var bodyElement = document.body;
     if (selectedValue === "italy") {
      bodyElement.style.backgroundImage = "url('italia.jpg')";
    } else if (selectedValue === "Croatia") {
      bodyElement.style.backgroundImage = "url('kk.jpg')";
    }
    else if(selectedValue==="Egypt"){
      bodyElement.style.backgroundImage="url('R.jpeg')";
    }
    else if(selectedValue==="Germnay"){
      bodyElement.style.backgroundImage="url('download.jpeg')";
    }
   
  } 