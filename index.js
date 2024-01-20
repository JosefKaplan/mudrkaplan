function initPasswordProtection(password) {
  let pokus = 0;
  let pokusTime = 10000;

  function showBody() {
    document.body.classList.remove("js__hiddenOnLoad");
  }

  function requirePassword() {
    let pass = prompt("Zadej heslo:", "");
    pokus++;
    pokusTime = pokusTime * 2;

    if (password && pass == password) {
      alert("Okáčko, klikni na ENTER.");
      showBody();
    } else if (pokus < 3) {
      alert(`Zbývá ti ${3 - pokus} pokusů, zkus to znovu.`);
      requirePassword();
    } else {
      let minutes = Math.floor(pokusTime / 60000);
      let seconds = Math.floor((pokusTime % 60000) / 1000);
      pokus = 0;

      alert(
        `Vypršel počet pokusů, zkus to znovu za ${minutes} minut a ${seconds} vteřin.`
      );
      setTimeout(() => {
        requirePassword();
      }, pokusTime);
    }
  }

  if (!password) {
    showBody();
  } else {
    requirePassword();
  }
}

window.onload = function () {
  initPasswordProtection(password);
};


