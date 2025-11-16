// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



const emailList = document.getElementById("email-list");

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      const email = response.data.response;

      const li = document.createElement("li");
      li.textContent = email;
      emailList.appendChild(li);
    })
    .catch(error => {
      console.error("Errore nel caricamento dell'email:", error);
    });
}