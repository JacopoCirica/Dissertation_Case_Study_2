const indicatori = {
  indice_generale: {
    mese: "05",
    previous_year: {
      infl: 104.1,
    },
    current_year: {
      infl: 111.2,
    },
    peso: 100,
    var: 6.82036503362153,
  },
  famiglia_indicatori: {
    ind_0711: {
      nome: "automobili",
      indicatori: [
        {
          codice: "071111",
          nome: "automobili nuove diesel",
          infl_prev_year: 112.1,
          infl_curr_year: 116.8,
          peso: 0.010852,
        },
        {
          codice: "071112",
          nome: "automobili nuove benzina",
          infl_prev_year: 112,
          infl_curr_year: 117.6,
          peso: 0.006175,
        },
        {
          codice: "071113",
          nome: "automobili nuove ibride-elettriche ed elettriche",
          infl_prev_year: 102.8,
          infl_curr_year: 105.6,
          peso: 0.010454,
        },
        {
          codice: "071121",
          nome: "automobili usate diesel",
          infl_prev_year: 98.5,
          infl_curr_year: 104.2,
          peso: 0.002555,
        },
        {
          codice: "071122",
          nome: "automobili usate benzina",
          infl_prev_year: 103.5,
          infl_curr_year: 110.3,
          peso: 0.007294,
        },
        {
          codice: "071123",
          nome: "automobili usate ibride-elettriche ed elettriche",
          infl_prev_year: 95.8,
          infl_curr_year: 99.9,
          peso: 0.000149,
        },
      ],
      moltiplicatore: 0.2,
      moltiplicatore_2: null,
      moltiplicatore_3: null,
    },
    ind_0722: {
      nome: "carburanti e lubrificanti per mezzi di trasporto privati",
      indicatori: [
        {
          codice: "072210",
          nome: "gasolio per mezzi di trasporto",
          infl_prev_year: 106.2,
          infl_curr_year: 132.9,
          peso: 0.019257,
        },
        {
          codice: "07222",
          nome: "benzina",
          infl_prev_year: 106,
          infl_curr_year: 122,
          peso: 0.022704,
        },
        {
          codice: "07223",
          nome: "altri carburanti per mezzi di trasporto privati",
          infl_prev_year: 107.1,
          infl_curr_year: 152.3,
          peso: 0.002995,
        },
      ],
      moltiplicatore: 0.07,
      moltiplicatore_2: 0.14,
      moltiplicatore_3: 0.23,
    },
    ind_0733: {
      nome: "trasporto aereo passeggeri",
      indicatori: [
        {
          codice: "073310",
          nome: "voli nazionali",
          infl_prev_year: 114.5,
          infl_curr_year: 139,
          peso: 0.001147,
        },
        {
          codice: "073321",
          nome: "voli europei",
          infl_prev_year: 82.5,
          infl_curr_year: 187.8,
          peso: 0.002015,
        },
        {
          codice: "073322",
          nome: "voli intercontinentali",
          infl_prev_year: 107.9,
          infl_curr_year: 157.4,
          peso: 0.000465,
        },
        {
          codice: "07341",
          nome: "trasporto marittimo",
          infl_prev_year: 112.6,
          infl_curr_year: 138.2,
          peso: 0.00085,
        },
        {
          codice: "07311",
          nome: "trasporto ferroviario passeggeri",
          infl_prev_year: 125.2,
          infl_curr_year: 113.6,
          peso: 0.003821,
        },
      ],
      moltiplicatore: 0.05,
      moltiplicatore_2: null,
      moltiplicatore_3: null,
    },
    ind_112: {
      nome: "servizi di alloggio",
      indicatori: [
        {
          codice: "11203",
          nome: "servizi di alloggio in altre strutture",
          infl_prev_year: 101.9,
          infl_curr_year: 105.5,
          peso: 0.000899,
        },
        {
          codice: "11202",
          nome: "villaggi vacanze, campeggi, ostelli della gioventù e simili",
          infl_prev_year: 100.5,
          infl_curr_year: 100.9,
          peso: 0.00137,
        },
        {
          codice: "11201",
          nome: "alberghi, motel, pensioni e simili",
          infl_prev_year: 106.3,
          infl_curr_year: 121.3,
          peso: 0.015616,
        },
        {
          codice: "096010",
          nome: "pacchetti vacanza nazionali",
          infl_prev_year: 98.4,
          infl_curr_year: 93.9,
          peso: 0.004401,
        },
        {
          codice: "09602",
          nome: "pacchetti vacanza - internazionali",
          infl_prev_year: 97.8,
          infl_curr_year: 106.2,
          peso: 0.001199,
        },
      ],
      moltiplicatore: 0.05,
      moltiplicatore_2: null,
      moltiplicatore_3: null,
    },
    ind_04510: {
      nome: "energia elettrica",
      indicatori: [
        {
          codice: "04510",
          nome: "energia elettrica",
          infl_prev_year: 116.7,
          infl_curr_year: 202.5,
          peso: 0.022541,
        },
      ],
      moltiplicatore: 0.15,
      moltiplicatore_2: null,
      moltiplicatore_3: null,
    },
    ind_111: {
      nome: "servizi di ristorazione",
      indicatori: [
        {
          codice: "111121",
          nome: "fast food",
          infl_prev_year: 106.4,
          infl_curr_year: 110,
          peso: 0.012642,
        },
        {
          codice: "111111",
          nome: "ristoranti",
          infl_prev_year: 106.8,
          infl_curr_year: 111.1,
          peso: 0.016911,
        },
        {
          codice: "111112",
          nome: "pasto in pizzeria",
          infl_prev_year: 107.4,
          infl_curr_year: 112.7,
          peso: 0.010047,
        },
      ],
      moltiplicatore: 0.05,
      moltiplicatore_2: null,
      moltiplicatore_3: null,
    },
    ind_011: {
      nome: "prodotti alimentari",
      indicatori: [
        {
          codice: "01154",
          nome: "altri oli alimentari",
          infl_prev_year: 110.3,
          infl_curr_year: 187.7,
          peso: 0.000957,
        },
        {
          codice: "01133",
          nome: "frutti di mare freschi o refrigerati",
          infl_prev_year: 115.7,
          infl_curr_year: 128.9,
          peso: 0.0018,
        },
        {
          codice: "01124",
          nome: "pollame",
          infl_prev_year: 107.9,
          infl_curr_year: 122.8,
          peso: 0.007888,
        },
        {
          codice: "011161",
          nome: "pasta secca, pasta fresca e couscous",
          infl_prev_year: 104.9,
          infl_curr_year: 126.4,
          peso: 0.003316,
          farina: {
            // è interno alla pasta perché fa conto unico
            codice: "011120",
            nome: "farina e altri cereali",
            infl_prev_year: 99.3,
            infl_curr_year: 117.9,
            peso: 0.001432,
            var: 18.73111782,
          },
        },
        {
          codice: "01121",
          nome: "carne bovina",
          infl_prev_year: 105.4,
          infl_curr_year: 110.7,
          peso: 0.012954,
        },
      ],
      moltiplicatore: 1,
      moltiplicatore_2: null,
      moltiplicatore_3: null,
    },
  },
};

const card_0722_keys = ["1.000 km", "2.000 km", "Oltre"];

const card_0722_value_matrix = {};
card_0722_value_matrix["1.000 km"] = "1";
card_0722_value_matrix["2.000 km"] = "2";
card_0722_value_matrix["Oltre"] = "3";

const testi_cards = {
  ind_0711: {
    occhiello: "auto",
    domanda: "Hai acquistato un'auto nell'ultimo anno?",
    descrizione: "",
    risposte: `
          <div id="card_risposte__0711" class="card_risposte">
            <div class="card_legenda">tipologia</div>
            <div class="card_selettori" id="card_selettori_tipologia">
                <div class="card_checkbox" id="sel_auto_nuova" data-code="07111" data-value="0">Nuova</div>
                <div class="card_checkbox" id="sel_auto_usata" data-code="07112" data-value="0">Usata</div>
                <div class="card_checkbox" id="sel_auto_nessuna" data-code="000000" data-value="0">Nessuna</div>
            </div>
            <div class="card_legenda collapse" id="card_legenda_alimentazione">alimentazione</div>
            <div class="card_selettori collapse" id="card_selettori_alimentazione">
                <div class="card_checkbox" id="sel_auto_diesel" data-code="1" data-value="0">Diesel</div>
                <div class="card_checkbox" id="sel_auto_benzina" data-code="2" data-value="0">Benzina</div>
                <div class="card_checkbox" id="sel_auto_elettrica" data-code="3" data-value="0">Ibrida-elettrica ed elettrica</div>
            </div>
            <div class="card_errore">Seleziona almeno una voce per procedere</div>
            <div class="card_conferma">
                <button class="card_btn_conferma">Conferma</button>
            </div>
        </div>
        `,
  },
  ind_0722: {
    occhiello: "mobilità",
    domanda: "Quanto e se usi la macchina?",
    descrizione: "Risposta multipla",
    risposte: `
          <div id="card_risposte__0722" class="card_risposte">
            <div class="card_checkbox" id="card_checkbox_nessuna_auto" data-code="000000" data-value="0">Non uso la macchina</div>
            <div class="card_legenda">Gasolio</div>
            <div class="card_selettori" id="card_selettori_gasolio">
                <div class="card_checkbox" data-code="072210" data-value="0">${card_0722_keys[0]}</div>
                <div class="card_checkbox" data-code="072210" data-value="0">${card_0722_keys[1]}</div>
                <div class="card_checkbox" data-code="072210" data-value="0">${card_0722_keys[2]}</div>
            </div>
            <div class="card_legenda">Benzina</div>
            <div class="card_selettori" id="card_selettori_benzina">
                <div class="card_checkbox" data-code="07222" data-value="0">${card_0722_keys[0]}</div>
                <div class="card_checkbox" data-code="07222" data-value="0">${card_0722_keys[1]}</div>
                <div class="card_checkbox" data-code="07222" data-value="0">${card_0722_keys[2]}</div>
            </div>
            <div class="card_legenda">Altri carburanti</div>
            <div class="card_selettori" id="card_selettori_altri_carburanti">
                <div class="card_checkbox" data-code="07223" data-value="0">${card_0722_keys[0]}</div>
                <div class="card_checkbox" data-code="07223" data-value="0">${card_0722_keys[1]}</div>
                <div class="card_checkbox" data-code="07223" data-value="0">${card_0722_keys[2]}</div>
            </div>
            <div class="card_errore">Seleziona almeno una voce per procedere</div>
            <div class="card_conferma">
                <button class="card_btn_conferma">Conferma</button>
            </div>
        </div>
      `,
  },
  ind_0733: {
    occhiello: "trasporti",
    domanda: "Questa estate in vacanza andrai con?",
    descrizione: "Risposta multipla",
    risposte: `
          <div id="card_risposte__0733" class="card_risposte">
              <div class="card_selettori">
                  <div class="card_checkbox" data-code="073310" data-value="0">Voli nazionali</div>
                  <div class="card_checkbox" data-code="073321" data-value="0">Voli europei</div>
                  <div class="card_checkbox" data-code="073322" data-value="0">Voli intercontinentali</div>
                  <div class="card_checkbox" data-code="07311" data-value="0">Treno</div>
                  <div class="card_checkbox" data-code="07341" data-value="0">Traghetto</div>
                  <div class="card_checkbox" data-code="000000" data-value="0" id="card_checkbox_altro">Altro</div>
              </div>
              <div class="card_errore">Seleziona almeno una voce per procedere</div>
              <div class="card_conferma">
                  <button class="card_btn_conferma">Conferma</button>
              </div>
          </div>
        `,
  },
  ind_112: {
    occhiello: "vacanze",
    domanda: "Se vai in vacanza dove alloggerai?",
    descrizione: "Risposta multipla",
    risposte: `
          <div id="card_risposte__112" class="card_risposte">
            <div class="card_selettori">
                <div class="card_checkbox" data-code="096010" data-value="0">Pacchetti vacanza - Italia</div>
                <div class="card_checkbox" data-code="09602" data-value="0">Pacchetti vacanza - Internazionali</div>
                <div class="card_checkbox" data-code="11202" data-value="0">Campeggi / villaggi turistici / ostelli</div>
                <div class="card_checkbox" data-code="11201" data-value="0">Alberghi</div>
                <div class="card_checkbox" data-code="11203" data-value="0">Altre strutture</div>
                <div class="card_checkbox" data-code="000000" data-value="0" id="card_checkbox_nessuna">Nessuna di queste</div>
            </div>
            <div class="card_errore">Seleziona almeno una voce per procedere</div>
            <div class="card_conferma">
                <button class="card_btn_conferma">Conferma</button>
            </div>
        </div>
        `,
  },
  ind_04510: {
    occhiello: "consumi",
    domanda: "Usi il condizionatore d'estate?",
    descrizione: "",
    risposte: `
          <div id="card_risposte__04510" class="card_risposte">
              <div class="card_selettori">
                  <div class="card_checkbox card_checkbox_selected no_border" data-code="04510" data-value="0" id="card_checkbox_no">No</div>
                  <div class="card_checkbox no_border" data-code="04510" data-value="0" id="card_checkbox_si">Sì</div>
              </div>
              <div class="card_errore">Seleziona almeno una voce per procedere</div>
              <div class="card_conferma">
                  <button class="card_btn_conferma">Conferma</button>
              </div>
          </div>
        `,
  },
  ind_111: {
    occhiello: "ristorazione",
    domanda: "In un mese quante volte mangi fuori?",
    descrizione: "Risposta multipla",
    risposte: `
          <div id="card_risposte__111" class="card_risposte">
              <div class="card_legenda">Fast food</div>
              <div class="card_selettori" id="card_selettori_fast_food">
                  <div class="card_checkbox no_border card_checkbox_selected" data-code="111121" data-value="0">0</div>
                  <div class="card_checkbox no_border" data-code="111121" data-value="0">1</div>
                  <div class="card_checkbox no_border" data-code="111121" data-value="0">2</div>
                  <div class="card_checkbox no_border" data-code="111121" data-value="0">3</div>
                  <div class="card_checkbox no_border" data-code="111121" data-value="0">4</div>
                  <div class="card_checkbox no_border" data-code="111121" data-value="0">5</div>
                  <div class="card_checkbox no_border" data-code="111121" data-value="0">6</div>
              </div>
              <div class="card_legenda">Ristoranti</div>
              <div class="card_selettori" id="card_selettori_ristoranti">
                  <div class="card_checkbox no_border card_checkbox_selected" data-code="111111" data-value="0">0</div>
                  <div class="card_checkbox no_border" data-code="111111" data-value="0">1</div>
                  <div class="card_checkbox no_border" data-code="111111" data-value="0">2</div>
                  <div class="card_checkbox no_border" data-code="111111" data-value="0">3</div>
                  <div class="card_checkbox no_border" data-code="111111" data-value="0">4</div>
                  <div class="card_checkbox no_border" data-code="111111" data-value="0">5</div>
                  <div class="card_checkbox no_border" data-code="111111" data-value="0">6</div>
              </div>
              <div class="card_legenda">Pizzerie</div>
              <div class="card_selettori" id="card_selettori_pizzerie">
                  <div class="card_checkbox no_border card_checkbox_selected" data-code="111112" data-value="0">0</div>
                  <div class="card_checkbox no_border" data-code="111112" data-value="0">1</div>
                  <div class="card_checkbox no_border" data-code="111112" data-value="0">2</div>
                  <div class="card_checkbox no_border" data-code="111112" data-value="0">3</div>
                  <div class="card_checkbox no_border" data-code="111112" data-value="0">4</div>
                  <div class="card_checkbox no_border" data-code="111112" data-value="0">5</div>
                  <div class="card_checkbox no_border" data-code="111112" data-value="0">6</div>
              </div>
              <div class="card_errore">Seleziona almeno una voce per procedere</div>
              <div class="card_conferma">
                  <button class="card_btn_conferma">Conferma</button>
              </div>
          </div>
        `,
  },
  ind_011: {
    occhiello: "spesa",
    domanda: "Quanto fai uso dei seguenti alimenti?",
    descrizione:
      "Risposta multipla. 0 = nessun uso, 1 = uso normale, 2 = uso frequente",
    risposte: `
          <div id="card_risposte__011" class="card_risposte">
              <div class="card_selettori">
               <div class="card_011_row">               
                  <div>Olio di girasole</div>
                  <div class="card_011_row_selettori" id="card_selettori_olio_girasole">
                    <div class="card_checkbox no_border card_checkbox_selected" data-code="01154" data-value="0">0</div>
                    <div class="card_checkbox no_border" data-code="01154" data-value="0">1</div>
                    <div class="card_checkbox no_border" data-code="01154" data-value="0">2</div>
                  </div>
               </div>
               <div class="card_011_row">               
                  <div>Pollame</div>
                  <div class="card_011_row_selettori" id="card_selettori_pollame">
                    <div class="card_checkbox no_border card_checkbox_selected" data-code="01124" data-value="0">0</div>
                    <div class="card_checkbox no_border" data-code="01124" data-value="0">1</div>
                    <div class="card_checkbox no_border" data-code="01124" data-value="0">2</div>
                  </div>
               </div>
               <div class="card_011_row">               
                  <div>Pasta e farine</div>
                  <div class="card_011_row_selettori" id="card_selettori_pasta">
                    <div class="card_checkbox no_border card_checkbox_selected" data-code="011161" data-value="0">0</div>
                    <div class="card_checkbox no_border" data-code="011161" data-value="0">1</div>
                    <div class="card_checkbox no_border" data-code="011161" data-value="0">2</div>
                  </div>
               </div>
               <div class="card_011_row">               
                  <div>Carne rossa</div>
                  <div class="card_011_row_selettori" id="card_selettori_carne_rossa">
                    <div class="card_checkbox no_border card_checkbox_selected" data-code="01121" data-value="0">0</div>
                    <div class="card_checkbox no_border" data-code="01121" data-value="0">1</div>
                    <div class="card_checkbox no_border" data-code="01121" data-value="0">2</div>
                  </div>
               </div>
               <div class="card_011_row">               
                  <div>Frutti di mare</div>
                  <div class="card_011_row_selettori" id="card_selettori_frutti_mare">
                    <div class="card_checkbox no_border card_checkbox_selected" data-code="01133" data-value="0">0</div>
                    <div class="card_checkbox no_border" data-code="01133" data-value="0">1</div>
                    <div class="card_checkbox no_border" data-code="01133" data-value="0">2</div>
                  </div>
               </div>               
              </div>
              <div class="card_errore">Seleziona almeno una voce per procedere</div>
              <div class="card_conferma">
                  <button class="card_btn_conferma">Conferma</button>
              </div>
          </div>
        `,
  },
};

const group_indicatori = indicatori.famiglia_indicatori;
const selettori_keys = Object.keys(testi_cards); // definisce l'ordine dei selettori in base all'ordine delle cards
const last_key = selettori_keys[selettori_keys.length - 1];

const occhielli_to_id = Object.keys(testi_cards).map((key) => {
  const id = key.replace("ind_", "");
  return { occhiello: [testi_cards[key].occhiello], id: id };
});

/* const getIdFromOcchiello = (occhiello) => {
  occhielli_to_id.forEach((obj) => {
    if (obj.occhiello == occhiello) {
      return obj.id;
    }
  });
}; */

/* const occhielli_to_keys = Object.keys(testi_cards).map((key) => {
  return { key: key, occhiello: testi_cards[key].occhiello };
});
 */
let selettori_user_list = {};
let inflation_user_list = {};
let inflation_sum_list = {};

const calculateStandardUserInflation = (ind) => {
  let j, k, res;

  switch (ind.codice) {
    case "04510":
      res = 0;
      break;

    case "011161":
      j = ind.peso * ind.var;
      k = ind.peso * indicatori.indice_generale.var;
      res = k - j;
      const j_farina = ind.farina.peso * ind.farina.var;
      const k_farina = ind.farina.peso * indicatori.indice_generale.var;
      const res_farina = k_farina - j_farina;
      res += res_farina;
      break;

    default:
      j = ind.peso * ind.var;
      k = ind.peso * indicatori.indice_generale.var;
      res = k - j;
      break;
  }

  /* const consoleObj = {
    calcolo: "standard",
    ind: ind.codice,
    j: j,
    k: k,
    res: res,
  };
  console.table(consoleObj); */
  return res;
};

const calculateCustomdUserInflation = (key, ind, user_value) => {
  let moltiplicatore =
    indicatori.famiglia_indicatori[`${key}`]["moltiplicatore"];

  if (key == "ind_0722") {
    // carburanti
    switch (user_value) {
      case "2":
        moltiplicatore =
          indicatori.famiglia_indicatori[`${key}`]["moltiplicatore_2"];
        break;
      case "3":
        moltiplicatore =
          indicatori.famiglia_indicatori[`${key}`]["moltiplicatore_3"];
        break;
      default:
        break;
    }
  }

  let j, k, res;

  switch (key) {
    case "ind_04510":
      res = moltiplicatore * ind.peso * ind.var;
      break;

    case "ind_111": // ristorazione
      if (ind.codice == "111121") {
        // i fast food hanno un calcolo diverso
        j = ind.peso * ind.var * user_value;
        k = ind.peso * indicatori.indice_generale.var * user_value;
      } else {
        j = moltiplicatore * ind.var;
        k = ind.peso * indicatori.indice_generale.var * user_value;
      }
      res = j - k;
      break;

    case "ind_011": // alimenti
      j = ind.peso * ind.var;
      k = ind.peso * indicatori.indice_generale.var;
      if (user_value == "1") {
        res = 0;
      } else if (user_value == "2") {
        res = 3 * (j - k);
      }

      if (ind.codice == "011161") {
        let j_farina = ind.farina.peso * ind.farina.var;
        let k_farina = ind.farina.peso * indicatori.indice_generale.var;
        let res_farina = 0;
        if (user_value == "1") {
          res_farina = 0;
        } else if (user_value == "2") {
          res_farina = 3 * (j_farina - k_farina);
        }
        res += res_farina;
      }
      break;

    default:
      j = moltiplicatore * ind.var;
      k = moltiplicatore * indicatori.indice_generale.var;
      res = j - k;
      break;
  }

  /* const consoleObj = {
    calcolo: "custom",
    ind: ind.codice,
    var: ind.var,
    j: j,
    k: k,
    res: res,
  };
  console.table(consoleObj); */
  return res;
};

const calculateGroupUserInflation = (key, sub_group, user_value, list) => {
  sub_group.indicatori.forEach((ind) => {
    if (user_value == "0") {
      list[key][ind.codice].value = calculateStandardUserInflation(ind);
    } else {
      const id = key.replace("ind_", "");
      list[key][ind.codice].value = calculateCustomdUserInflation(
        id,
        ind,
        user_value
      );
    }
  });
};

const addPercentageVariation = () => {
  for (const key in group_indicatori) {
    const group = group_indicatori[key];
    for (const sub_key in group.indicatori) {
      const sub_group = group.indicatori[sub_key];
      sub_group.var =
        ((sub_group.infl_curr_year - sub_group.infl_prev_year) /
          sub_group.infl_prev_year) *
        100;
    }
  }
};

const populateSelettoriUserList = () => {
  for (const key in group_indicatori) {
    const group = group_indicatori[key];
    selettori_user_list[key] = {};
    for (const sub_key in group.indicatori) {
      const sub_group = group.indicatori[sub_key];
      selettori_user_list[key][sub_group.codice] = {
        value: "0",
      };
    }
    // quando la risposta è "nessuno" o "altro"
    if (
      key == "ind_0711" ||
      key == "ind_0722" ||
      key == "ind_0733" ||
      key == "ind_112"
    ) {
      selettori_user_list[key]["000000"] = {
        value: "0",
      };
    }
  }
};

const populateUserInflationList = () => {
  for (const key in group_indicatori) {
    const group = group_indicatori[key];
    inflation_user_list[key] = {};
    for (const sub_key in group.indicatori) {
      const sub_group = group.indicatori[sub_key];
      inflation_user_list[key][sub_group.codice] = {
        value: "0",
      };
    }
  }
};

const firstUpdateUserInflationList = () => {
  for (const key in inflation_user_list) {
    const group = inflation_user_list[key];
    for (const sub_key in group) {
      //const sub_group = group[sub_key];
      calculateGroupUserInflation(
        key,
        group_indicatori[key],
        "0",
        inflation_user_list
      );
    }
  }

  let lastSum = indicatori.indice_generale.var;
  let sumPreviousElems = 0;

  lastSum += sumPreviousElems;
  return lastSum;
};

const loadIndicatori = () => {
  addPercentageVariation();
  localStorage.ListIndicatori = JSON.stringify(group_indicatori);
  return JSON.parse(localStorage.ListIndicatori);
};

const loadCards = () => {
  localStorage.listCards = JSON.stringify(testi_cards);
  return JSON.parse(localStorage.listCards);
};

const loadSelettori = () => {
  populateSelettoriUserList();
  localStorage.listSelettori = JSON.stringify(selettori_user_list);
  return JSON.parse(localStorage.listSelettori);
};

const loadUserInflation = () => {
  populateUserInflationList();
  firstUpdateUserInflationList();
  localStorage.listUserInflation = JSON.stringify(inflation_user_list);
  return JSON.parse(localStorage.listUserInflation);
};

const loadSumUserInflation = () => {
  firstSumInflationValues();
  localStorage.listSumUserInflation = JSON.stringify(inflation_sum_list);
  return JSON.parse(localStorage.listSumUserInflation);
};

// deve dopo loadSumUserInflation
const firstSumInflationValues = () => {
  let sum = indicatori.indice_generale.var;
  selettori_keys.forEach((key) => {
    inflation_sum_list[key] = {};
    const group = listUserInflation[key];
    for (const sub_key in group) {
      const sub_group = group[sub_key];
      sum += sub_group.value;
    }
    inflation_sum_list[key] = sum;
  });
};

let listIndicatori = loadIndicatori();
let listCards = loadCards();
let listSelettori = loadSelettori();
let listUserInflation = loadUserInflation();
let listSumUserInflation = loadSumUserInflation();

//console.log("selettori_keys", selettori_keys);
//console.log("listIndicatori", listIndicatori);
//console.log("listCards", listCards);
console.log("listSelettori", listSelettori);
console.log("listUserInflation", listUserInflation);
console.log("listSumUserInflation", listSumUserInflation);
