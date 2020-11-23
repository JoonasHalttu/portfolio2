//console.log("Scripti toimii");

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventlistener('click', e=> {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHTTpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code="

  xhr.open("POST", url, true);

xhr.setRequestHeader("Content-type", "application/json");

xhr:onreadystatechange = function(){
  if(xhr.readystate === 4 && xhr.status === 200){
    console.log("valmis, yhteys toimii");
  }
};
var data = JSON.stringify({
  "EmailMsg": "Tähän tulee postin sisältö", //Kirjoittaa sisällön
  "EmailAddress": "Joonas.halttu@edu.salpaus.fi", //viestin kirjoittajan sähköposti
  "EmailTo": "Joonashalttu@gmail.com", //oma sähköpistisi!!!!!
  "EmailName": "Teppo Tyyppi" //Nimi-kentän sisältö
});
xhr.send(data);
}