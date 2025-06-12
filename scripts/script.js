const spazioCaselle = document.getElementById("caselle");

const caselle = function () {
  for (let i = 0; i < 90; i++) {
    const caselleNumeri = document.createElement("div");

    spazioCaselle.appendChild(caselleNumeri);
    caselleNumeri.innerText = i + 1;
    caselleNumeri.classList.add("caselleNumeri");
  }
};
caselle();

const numeroCasuale = function () {
  Math.floor(Math.random() * 101);
};
