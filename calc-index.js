// SHIFT ALT a
// SHIFT ALT arrow_down

document.addEventListener("DOMContentLoaded", (event) => {
  renderCard("0711");

  // cambio card da menù
  const card_menu_list = document
    .querySelector(".card_menu_list")
    .getElementsByTagName("button");

  Array.from(card_menu_list).forEach((btn) => {
    btn.addEventListener("mouseover", (e) => {
      if (btn.disabled == false) {
        btn.classList.add("card_menu_hover");
      }
    });
    btn.addEventListener("mouseout", (e) => {
      if (btn.disabled == false) {
        btn.classList.remove("card_menu_hover");
      }
    });
    /*     btn.addEventListener("click", () => {
      Array.from(card_menu_list).forEach((el) => {
        //if (el.classList.contains("card_menu_active")) {
        //  el.classList.remove("card_menu_active");
        //}
        if (mobileWidth.matches) {
          card_content.classList.remove("display_none");
          card_menu_arrow.classList.remove("card_menu_arrow_up");
          displayElem(modal, 25);
        }
      });
      //btn.classList.add("card_menu_active");
      changeCard(
        document.querySelector(".card_content"),
        btn.getAttribute("data-card-id")
      );
    }); */
  });

  const infl_utente = document
    .querySelector(".inflazione_utente")
    .getElementsByTagName("span")[0];
  infl_utente.innerHTML = `--`;

  const infl_italia = document
    .querySelector(".inflazione_italia")
    .getElementsByTagName("span")[0];
  infl_italia.innerHTML = `${indicatori.indice_generale.var.toLocaleString(
    "it-IT",
    { minimumFractionDigits: 2 }
  )}%`;
}); // END DOMContentLoaded

const card_content = document.querySelector(`.card_content`);
const modal = document.querySelector(".modal");
const card_menu_arrow = document
  .querySelector(".card_menu_arrow")
  .querySelector("img");

// azione al click CONFERMA: se almeno selettore è selezionato, nascondi il messaggio di errore
const ifCheckboxSelected = (checkboxes) => {
  let not_empty = false;
  checkboxes.forEach((elem) => {
    if (elem.classList.contains("card_checkbox_selected")) {
      not_empty = true;
    }
  });
  return not_empty;
};

const onlyOneCheckboxSelected = (elem, checkboxes) => {
  if (elem.classList.contains("card_checkbox_selected")) {
    checkboxes.forEach((el) => {
      if (el != elem) {
        el.classList.remove("card_checkbox_selected");
        el.setAttribute("data-value", "0");
      }
    });
  }
};

// espandi o nascondi la card al click della freccia
const toggleCard = () => {
  const card_content = document.querySelector(".card_content");
  const img = document.querySelector(".card_menu_arrow").querySelector("img");
  if (card_content.classList.contains("display_none")) {
    card_content.classList.remove("display_none");
    img.classList.remove("card_menu_arrow_up");
  } else {
    card_content.classList.add("display_none");
    img.classList.add("card_menu_arrow_up");
  }
  if (mobileWidth.matches) displayElem(modal, 25);
};

const changeCard = (card_content, id, activeModal = 0) => {
  toggleClass(document.querySelector(".card_menu_active"), "card_menu_active");
  toggleClass(
    document.querySelector(`[data-card-id="${id}"]`),
    "card_menu_active"
  );
  hideElem(card_content);
  listCards = JSON.parse(localStorage.listCards);
  renderCard(id);
  displayElem(card_content);
  if (activeModal == 1) displayElem(modal, 25);
};

const renderCard = (id) => {
  const card_occhiello = document.querySelector(".card_occhiello");
  const card_domanda = document.querySelector(".card_domanda");
  const card_descrizione = document.querySelector(".card_descrizione");
  const card_risposte = document.querySelector(".card_risposte");
  const card_risposte_cn = document.querySelector(".card_risposte_container");
  if (card_risposte) card_risposte.remove();
  card_occhiello.innerHTML = `${listCards[`ind_${id}`].occhiello}`;
  card_domanda.innerHTML = `${listCards[`ind_${id}`].domanda}`;
  card_descrizione.innerHTML = `${listCards[`ind_${id}`].descrizione}`;
  card_risposte_cn.innerHTML = `${listCards[`ind_${id}`].risposte}`;
  cardFn(id);
};

const toggleClass = (elem, classAttribute) => {
  if (elem.classList.contains(classAttribute)) {
    elem.classList.remove(classAttribute);
  } else {
    elem.classList.add(classAttribute);
  }
};

const addClass = (elem, classAttribute) => {
  if (!elem.classList.contains(classAttribute)) {
    elem.classList.add(classAttribute);
  }
};

const removeClass = (elem, classAttribute) => {
  if (elem.classList.contains(classAttribute)) {
    elem.classList.remove(classAttribute);
  }
};

const updateDataValueAttr = (elem, value) => {
  elem.setAttribute("data-value", value);
};

const toggleValueAttr = (elem, value) => {
  if (elem.getAttribute("data-value") == value) {
    elem.setAttribute("data-value", "0");
  } else {
    elem.setAttribute("data-value", value);
  }
};

const displayElem = (elem, zindex = 1) => {
  elem.style.opacity = 1;
  elem.style.zIndex = zindex;
};

const hideElem = (elem, zindex = -1) => {
  elem.style.opacity = 0;
  elem.style.zIndex = zindex;
};

toggleOpacity = (elem, opacity) => {
  if (elem.style.opacity == opacity) {
    elem.style.opacity = 0;
  } else {
    elem.style.opacity = opacity;
  }
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
