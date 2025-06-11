// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIDs } from "./common.mjs";
import { getData } from "./storage.mjs";

const userDropdown = document.querySelector("#userDropdown");
const agendaList = document.querySelector("#agenda-list");

window.onload = function () {
  const users = getUserIDs();

  // function to render data
  const renderAgenda = function () {
    // get agenda
    const agenda = getData(userDropdown.value);

    if (!agenda) {
      agendaList.textContent = `No Agenda for user ${userDropdown.value}`;
    } else {
      agendaList.append(agenda);
    }
  };

  //render data on change
  userDropdown.addEventListener("change", () => {
    // just checking  how event listener works
    console.log(userDropdown.value);
    console.log(getData(userDropdown.value));
    agendaList.innerHTML = "";
    renderAgenda();
  });
};
