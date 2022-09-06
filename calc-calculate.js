let active_keys = [];

const calculateInflation = (id) => {
  "use strict";

  /* if (
    // se esiste il selettore altro/nessuno ma non è selezionato oppure se non esiste
    (listSelettori[`ind_${id}`]["000000"] &&
      listSelettori[`ind_${id}`]["000000"]["value"] === "0") ||
    !listSelettori[`ind_${id}`]["000000"]
  ) { */
  selettori_keys.forEach((key) => {
    group_indicatori[key]["indicatori"].forEach((elem) => {
      const sub_key = elem.codice;
      const value_selettore = listSelettori[`${key}`][`${sub_key}`]["value"];
      updateUserInflationList(key, sub_key, elem, value_selettore);
    });
  });
  updateSumUserInflationList(`ind_${id}`);
  updateChart(`ind_${id}`);
  // }
};

const updateUserInflationList = (key, sub_key, ind, user_value) => {
  listUserInflation = JSON.parse(localStorage.listUserInflation);
  if (user_value == "0") {
    listUserInflation[key][sub_key].value = calculateStandardUserInflation(ind);
  } else {
    listUserInflation[key][sub_key].value = calculateCustomdUserInflation(
      key,
      ind,
      user_value
    );
  }
  localStorage.listUserInflation = JSON.stringify(listUserInflation);
};

const updateSumUserInflationList = (stop_key) => {
  listUserInflation = JSON.parse(localStorage.listUserInflation);
  listSumUserInflation = JSON.parse(localStorage.listSumUserInflation);
  let sum = indicatori.indice_generale.var;

  // const selected_keys = getSelectedKeys(selettori_keys, stop_key);
  if (!active_keys.includes(stop_key)) active_keys.push(stop_key);

  active_keys.forEach((key) => {
    const group = listUserInflation[key];
    for (const sub_key in group) {
      const sub_group = group[sub_key];
      sum += sub_group.value;
      listSumUserInflation[key] = sum;
    }
  });

  const last_updated_key = active_keys[active_keys.length - 1];
  const last_updated_infl = listSumUserInflation[last_updated_key];
  updateTagUserInflation(last_updated_infl);
  localStorage.listSumUserInflation = JSON.stringify(listSumUserInflation);
  console.log("nuovo listSelettori", listSelettori);
  console.log("nuovo listUserInflation", listUserInflation);
  console.log("nuovo listSumUserInflation", listSumUserInflation);
};

const updateTagUserInflation = (num) => {
  const val = num.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const $infl_utente = document
    .querySelector(".inflazione_utente")
    .getElementsByTagName("span")[0];
  $infl_utente.innerHTML = `${val} %`;
};

const getSelectedKeys = (arr, stop_key) => {
  const index = arr.indexOf(stop_key);
  const selected_keys = arr.slice(0, index + 1);
  return selected_keys;
};
