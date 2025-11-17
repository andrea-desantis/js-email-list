// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



const emailList = document.getElementById("email-list");

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      const email = response.data.response;

      


      emailsArray.push(email);
      if(emailsArray.length === 10){
        printEmails(emailsArray);
      }
      
    });
    
}

function printEmails(array){
  const listElem = document.querySelector("ul");
  array.forEach(element => {
    listElem.innerHTML += `<li>${email}</li>`;
  });
}