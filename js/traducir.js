function redireccionar() {
    var selectValue = document.getElementById("miSelect").value;
    
    if (selectValue === "ingles") {
      window.location.href = "/index-ingles.html";
    } else if (selectValue === "espanol") {
      window.location.href = "/index.html";
    }
  }