function loadDocGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableGame(this);
    }
    xhttp.open("GET", "PRAC3.xml");
    xhttp.send();
  }
  function TableGame(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("id");
    let table="<tr><th>MARCA</th><th>MODELO</th><th>PRECIO</th><th>GARANTIA";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("modelo")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("garantia")[0].childNodes[0].nodeValue +
      
    
      "</td>";
    }
    document.getElementById("demo").innerHTML = table;
  }
  
  function loadDocCard() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableCard(this);
    }
    xhttp.open("GET", "PRAC3-2.xml");
    xhttp.send();
  }
  function TableCard(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("id");
    let table="<tr><th>PELICULA</th><th>DIRECTOR</th><th>CATEGORIA</th><th>DURACION<th>AÑO DE ESTRENO";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("categoria")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("duracion")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("año")[0].childNodes[0].nodeValue +
      
      "</td>";
    }
    document.getElementById("demo").innerHTML = table;
    xhttp.close();
  }
  
  