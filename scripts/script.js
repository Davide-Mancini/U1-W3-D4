const spazioCaselle = document.getElementById("caselle");
// const arrayCaselle = [];
// arrayCaselle.push(caselle);
const caselle = function () {
  for (let i = 0; i < 90; i++) {
    const caselleNumeri = document.createElement("div");
    spazioCaselle.appendChild(caselleNumeri);
    caselleNumeri.innerText = i + 1;
    caselleNumeri.classList.add("caselleNumeri");

    // console.log(caselleNumeri[i]);
    // console.log(caselle.lenght);
    const bottone = document.getElementById("bottone");
    bottone.addEventListener("click", function (e) {
      e.preventDefault;
      const numeroCasuale = Math.ceil(Math.random() * 89);
      const numeroEstratto = numeroCasuale;

      console.log(numeroEstratto);
      const postoPernumero = document.getElementById("postonumero");
      postoPernumero.innerText = numeroEstratto;
      //   const div = document.getElementsByTagName("div");
    });
  }
};
caselle();
