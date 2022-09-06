const cardFn = (id) => {
  "use strict";

  const card_risposte_container = document.querySelector(
    `.card_risposte_container`
  );
  const card_risposte = document.getElementById(`card_risposte__${id}`);
  const card_selettori = document.querySelectorAll(`.card_checkbox`);
  const card_menu_btn = document.querySelector(`[data-card-id="${id}"]`);
  const next_card_menu_btn_num =
    +card_menu_btn.getAttribute("data-card-num") + 1;
  const next_card_menu_btn = document.querySelector(
    `[data-card-num="${next_card_menu_btn_num}"]`
  )
    ? document.querySelector(`[data-card-num="${next_card_menu_btn_num}"]`)
    : null;
  const next_card_id = next_card_menu_btn
    ? next_card_menu_btn.getAttribute("data-card-id")
    : null;
  const card_btn_conferma = document.querySelector(".card_btn_conferma");
  const card_error_msg = document.querySelector(".card_errore");

  let card_checkbox_000000;
  let $;

  this.id = id;

  switch (id) {
    case "0711": // acquisto auto
      $ = {
        sel_auto_nuova: document.querySelector("#sel_auto_nuova"),
        sel_auto_usata: document.querySelector("#sel_auto_usata"),
        sel_auto_nessuna: document.querySelector("#sel_auto_nessuna"),
        card_legenda_alimentazione: document.querySelector(
          "#card_legenda_alimentazione"
        ),
        card_selettori_tipologia: document
          .querySelector("#card_selettori_tipologia")
          .querySelectorAll(".card_checkbox"),
        card_alimentazione: document.querySelector(
          "#card_selettori_alimentazione"
        ),
        card_selettori_alimentazione: document
          .querySelector("#card_selettori_alimentazione")
          .querySelectorAll(".card_checkbox"),
        sel_auto_diesel: document.querySelector("#sel_auto_diesel"),
        sel_auto_benzina: document.querySelector("#sel_auto_benzina"),
        sel_auto_elettrica: document.querySelector("#sel_auto_elettrica"),
      };

      // se almeno selettore è selezionato, nascondi il messaggio di errore
      // se la voce selezionata è "nuova" o "usata", mostra i selettori dell'alimentazione
      $.card_selettori_tipologia.forEach((elem) => {
        elem.addEventListener("click", () => {
          addClass(elem, "card_checkbox_selected");
          updateDataValueAttr(elem, "1");
          onlyOneCheckboxSelected(elem, $.card_selettori_tipologia);
          if (
            $.sel_auto_nuova.classList.contains("card_checkbox_selected") ||
            $.sel_auto_usata.classList.contains("card_checkbox_selected")
          ) {
            $.card_legenda_alimentazione.classList.remove("collapse");
            $.card_alimentazione.classList.remove("collapse");
            selectSelettori($.card_selettori_alimentazione);
          }
          if ($.sel_auto_nessuna.classList.contains("card_checkbox_selected")) {
            deselectSelettori($.card_selettori_alimentazione);
            $.card_alimentazione.classList.add("collapse");
            $.card_legenda_alimentazione.classList.add("collapse");
          }
          hideElem(card_error_msg);
        });
      });

      if (
        $.sel_auto_nuova.classList.contains("card_checkbox_selected") ||
        $.sel_auto_usata.classList.contains("card_checkbox_selected")
      ) {
        selectSelettori($.card_selettori_alimentazione);
      }

      //1. se "conferma" + nessun selettore_tipologia = errore
      //2. se "conferma" + selettore_tipologia + nessun selettore_alimentazione = errore
      //3. se "conferma" + selettore_tipologia_nessuna_auto oppure + selettore_alimentazione = ok
      card_btn_conferma.addEventListener("click", (e) => {
        if (
          $.sel_auto_nessuna.classList.contains("card_checkbox_selected") ||
          (!$.card_alimentazione.classList.contains("collapse") &&
            ($.sel_auto_diesel.classList.contains("card_checkbox_selected") ||
              $.sel_auto_benzina.classList.contains("card_checkbox_selected") ||
              $.sel_auto_elettrica.classList.contains(
                "card_checkbox_selected"
              )))
        ) {
          //updateDataValueAttr(id, card_selettori);
          updateListSelettori(id, card_selettori);
          calculateInflation(id);
          hideElem(card_error_msg);
          next_card_menu_btn.disabled = false;
          card_btn_conferma.innerHTML = "Modifica";
          listCards[`ind_${id}`].risposte = card_risposte_container.innerHTML;
          localStorage.listCards = JSON.stringify(listCards);
          changeCard(card_content, next_card_id);
          //toggleClass(card_menu_btn, "card_menu_active");
          //toggleClass(next_card_menu_btn, "card_menu_active");
        } else {
          displayElem(card_error_msg);
        }
        if (mobileWidth.matches) {
          card_content.classList.add("display_none");
          card_menu_arrow.classList.add("card_menu_arrow_up");
          hideElem(modal);
        }
      });
      break;

    case "0722": // mobilità
      card_checkbox_000000 = document.querySelector(
        "#card_checkbox_nessuna_auto"
      );
      $ = {
        card_selettori_gasolio: document
          .querySelector("#card_selettori_gasolio")
          .querySelectorAll(".card_checkbox"),
        card_selettori_benzina: document
          .querySelector("#card_selettori_benzina")
          .querySelectorAll(".card_checkbox"),
        card_selettori_altri_carburanti: document
          .querySelector("#card_selettori_altri_carburanti")
          .querySelectorAll(".card_checkbox"),
      };
      card_checkbox_000000.addEventListener("click", () => {
        toggleClass(card_checkbox_000000, "card_checkbox_selected");
        toggleValueAttr(card_checkbox_000000, "1");
        hideElem(card_error_msg);
        if (card_checkbox_000000.classList.contains("card_checkbox_selected")) {
          deselectSelettori($.card_selettori_gasolio);
          deselectSelettori($.card_selettori_benzina);
          deselectSelettori($.card_selettori_altri_carburanti);
        }
      });

      // i selettori sono multipli fra i gruppi ma si escludono all'interno dello stesso gruppo
      for (const key in $) {
        $[key].forEach((elem) => {
          elem.addEventListener("click", () => {
            if (
              card_checkbox_000000.classList.contains("card_checkbox_selected")
            ) {
              removeClass(card_checkbox_000000, "card_checkbox_selected");
              updateDataValueAttr(card_checkbox_000000, "0");
            }
            toggleClass(elem, "card_checkbox_selected");
            const choice = elem.innerHTML;
            const value = card_0722_value_matrix[choice];
            toggleValueAttr(elem, value);
            onlyOneCheckboxSelected(elem, $[key]);
            hideElem(card_error_msg);
          });
        });
      }
      break;

    case "0733": // trasporti vacanze
      card_checkbox_000000 = document.querySelector("#card_checkbox_altro");
      card_selettori.forEach((elem) => {
        elem.addEventListener("click", () => {
          toggleClass(elem, "card_checkbox_selected");
          toggleValueAttr(elem, "1");
          hideElem(card_error_msg);
          if (elem.id == "card_checkbox_altro") {
            onlyOneCheckboxSelected(elem, card_selettori);
            updateDataValueAttr(elem, "1");
          } else {
            removeClass(card_checkbox_000000, "card_checkbox_selected");
            updateDataValueAttr(card_checkbox_000000, "0");
          }
        });
      });
      break;

    case "112": // alloggi vacanze
      card_checkbox_000000 = document.querySelector("#card_checkbox_nessuna");
      card_selettori.forEach((elem) => {
        elem.addEventListener("click", () => {
          toggleClass(elem, "card_checkbox_selected");
          toggleValueAttr(elem, "1");
          hideElem(card_error_msg);
          if (elem.id == "card_checkbox_nessuna") {
            onlyOneCheckboxSelected(elem, card_selettori);
            updateDataValueAttr(elem, "1");
          } else {
            removeClass(card_checkbox_000000, "card_checkbox_selected");
            updateDataValueAttr(card_checkbox_000000, "0");
          }
        });
      });
      break;

    case "04510": // condizionatore
      const card_checkbox_si = document.querySelector("#card_checkbox_si");
      card_selettori.forEach((elem) => {
        elem.addEventListener("click", () => {
          addClass(elem, "card_checkbox_selected");
          // il NO è sempre 0. Il Sì è 1
          if (elem.id == "card_checkbox_si") {
            updateDataValueAttr(elem, "1");
          }
          if (elem.id == "card_checkbox_no") {
            updateDataValueAttr(card_checkbox_si, "0");
          }
          onlyOneCheckboxSelected(elem, card_selettori);
          hideElem(card_error_msg);
        });
      });
      break;

    case "111": // ristorazione
      $ = {
        card_selettori_fast_food: document
          .querySelector("#card_selettori_fast_food")
          .querySelectorAll(".card_checkbox"),
        card_selettori_ristoranti: document
          .querySelector("#card_selettori_ristoranti")
          .querySelectorAll(".card_checkbox"),
        card_selettori_pizzerie: document
          .querySelector("#card_selettori_pizzerie")
          .querySelectorAll(".card_checkbox"),
      };
      // i selettori sono multipli fra i gruppi ma si escludono all'interno dello stesso gruppo
      for (const key in $) {
        $[key].forEach((elem) => {
          elem.addEventListener("click", () => {
            addClass(elem, "card_checkbox_selected");
            if (elem.classList.contains("card_checkbox_selected")) {
              const choice = elem.innerHTML;
              elem.setAttribute("data-value", choice);
            }
            onlyOneCheckboxSelected(elem, $[key]);
            hideElem(card_error_msg);
          });
        });
      }
      break;

    case "011": // alimenti
      $ = {
        card_selettori_olio_girasole: document
          .querySelector("#card_selettori_olio_girasole")
          .querySelectorAll(".card_checkbox"),
        card_selettori_pollame: document
          .querySelector("#card_selettori_pollame")
          .querySelectorAll(".card_checkbox"),
        card_selettori_pasta: document
          .querySelector("#card_selettori_pasta")
          .querySelectorAll(".card_checkbox"),
        card_selettori_carne_rossa: document
          .querySelector("#card_selettori_carne_rossa")
          .querySelectorAll(".card_checkbox"),
        card_selettori_frutti_mare: document
          .querySelector("#card_selettori_frutti_mare")
          .querySelectorAll(".card_checkbox"),
      };
      // i selettori sono multipli fra i gruppi ma si escludono all'interno dello stesso gruppo
      for (const key in $) {
        $[key].forEach((elem) => {
          elem.addEventListener("click", () => {
            addClass(elem, "card_checkbox_selected");
            if (elem.classList.contains("card_checkbox_selected")) {
              const choice = elem.innerHTML;
              elem.setAttribute("data-value", choice);
            }
            onlyOneCheckboxSelected(elem, $[key]);
            hideElem(card_error_msg);
          });
        });
      }
      break;
  }

  function selectSelettori(checkboxes) {
    // non si può fare con il const perchè non inizializza
    checkboxes.forEach((elem) => {
      elem.addEventListener("click", () => {
        addClass(elem, "card_checkbox_selected");
        updateDataValueAttr(elem, "1");
        onlyOneCheckboxSelected(elem, checkboxes);
        hideElem(card_error_msg);
      });
    });
  }

  const deselectSelettori = (checkboxes) => {
    checkboxes.forEach((elem) => {
      elem.classList.remove("card_checkbox_selected");
      elem.setAttribute("data-value", "0");
    });
  };

  /*   const enableSelettori = (checkboxes) => {
    checkboxes.forEach((elem) => {
      elem.classList.remove("not_clickable");
    });
  };

  const disableSelettori = (checkboxes) => {
    checkboxes.forEach((elem) => {
      elem.classList.add("not_clickable");
    });
  }; */

  // tutti i "conferma" tranne quello dell'auto che si comporta diversamente
  if (id != "0711") {
    card_btn_conferma.addEventListener("click", (e) => {
      let is_empty = ifCheckboxSelected(card_selettori);
      if (is_empty === false) {
        displayElem(card_error_msg);
        return;
      }
      //updateDataValueAttr(id, card_selettori);
      updateListSelettori(id, card_selettori);
      calculateInflation(id);
      hideElem(card_error_msg);
      if (id != "011") {
        next_card_menu_btn.disabled = false;
      }
      card_btn_conferma.innerHTML = "Modifica";
      listCards[`ind_${id}`].risposte = card_risposte_container.innerHTML;
      localStorage.listCards = JSON.stringify(listCards);
      if (id != "011") {
        changeCard(card_content, next_card_id);
        //toggleClass(card_menu_btn, "card_menu_active");
        //toggleClass(next_card_menu_btn, "card_menu_active");
      }
      if (mobileWidth.matches) {
        card_content.classList.add("display_none");
        card_menu_arrow.classList.add("card_menu_arrow_up");
        hideElem(modal);
      }
    });
  }
};

const updateListSelettori = (id, card_selettori) => {
  switch (id) {
    case "0711": // acquisto auto
      let completeCode = "";
      let elemCode;
      card_selettori.forEach((elem) => {
        elemCode = elem.getAttribute("data-code");
        if (elem.getAttribute("data-value") === "1") {
          completeCode += elemCode;
        }
      });
      for (const key in listSelettori[`ind_${id}`]) {
        listSelettori[`ind_${id}`][key]["value"] = "0";
      }
      //console.log("completeCode", completeCode);
      listSelettori[`ind_${id}`][`${completeCode}`]["value"] = "1";
      break;

    case "0722": // mobilità
      card_selettori.forEach((elem) => {
        const code = elem.getAttribute("data-code");
        const value = elem.getAttribute("data-value");
        if (value !== "0") {
          listSelettori[`ind_${id}`][`${code}`]["value"] = value;
        }
      });
      break;

    case "04510": // condizionatore
      const card_checkbox_si = document.querySelector("#card_checkbox_si");
      if (card_checkbox_si.getAttribute("data-value") === "1") {
        listSelettori[`ind_${id}`]["04510"]["value"] = "1";
      } else {
        listSelettori[`ind_${id}`]["04510"]["value"] = "0";
      }
      break;

    case "111": // ristorazione
      card_selettori.forEach((elem) => {
        if (elem.classList.contains("card_checkbox_selected")) {
          const code = elem.getAttribute("data-code");
          const value = elem.getAttribute("data-value");
          listSelettori[`ind_${id}`][`${code}`]["value"] = value;
        }
      });
      break;

    case "011": // alimenti
      card_selettori.forEach((elem) => {
        if (elem.classList.contains("card_checkbox_selected")) {
          const code = elem.getAttribute("data-code");
          const value = elem.getAttribute("data-value");
          listSelettori[`ind_${id}`][`${code}`]["value"] = value;
        }
      });
      break;

    default:
      card_selettori.forEach((elem) => {
        const code = elem.getAttribute("data-code");
        const value = elem.getAttribute("data-value");
        listSelettori[`ind_${id}`][`${code}`]["value"] = value;
      });
      break;
  }
  localStorage.listSelettori = JSON.stringify(listSelettori);
  listSelettori = JSON.parse(localStorage.listSelettori);
};
