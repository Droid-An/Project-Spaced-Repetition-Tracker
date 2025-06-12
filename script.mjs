// window.onload = function () {
//   const users = getUserIDs();

// };

//this is to clear the date from user to tasted
window.onload = function () {
  clearData(2);
  dateInput.value = getDateInAString();
};

import { getData, addData, getUserIds, clearData } from "./storage.mjs";
import {
  sortDatesAscending,
  generateSpacedDates,
  isFutureDate,
  formatDate,
} from "./common.mjs";

const userDropdown = document.getElementById("userDropdown");
const agendaList = document.getElementById("agenda-list");
const topicForm = document.getElementById("topicForm");
const topicInput = document.getElementById("topicName");
const dateInput = document.getElementById("datePicker");

// Set today as default date
const getDateInAString = function (date) {
  const currentDate = date ? new Date(date) : new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Populate user dropdown
getUserIds().forEach((id) => {
  const option = document.createElement("option");
  option.value = id;
  option.textContent = id;
  userDropdown.appendChild(option);
});

// Load agenda when user is selected
userDropdown.addEventListener("change", () => {
  displayAgenda(userDropdown.value);
  revisionDateCalculation();
});

// Form submit handler
topicForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = userDropdown.value;
  if (!userId) return;

  const topic = topicInput.value.trim(); // get the topic from the form
  const date = dateInput.value; // get the date from the form

  if (!topic) return;

  const newEntry = { topic, date };
  addData(userId, [newEntry]);
  revisionDateCalculation(newEntry);

  displayAgenda(userId);
  topicForm.reset();
  dateInput.value = getDateInAString();
});

//take the newEntry (pair of topic and date) and calculate the revision dates
function revisionDateCalculation(userEntry) {
  console.log(userEntry.date); //check dates
  // console.log(getData(userDropdown.value)); check what the user have in storage
  const repDates = generateSpacedDates(userEntry.date);

  const formattedRepDates = repDates.map(
    (repDate) => (repDate = formatDate(repDate))
  );
  return formattedRepDates;
}

// Function to display agenda
function displayAgenda(userId) {
  agendaList.innerHTML = ""; // Clear existing list

  if (!userId) return;

  const agenda = getData(userId);
  console.log(agenda);

  // add data first then sort
  if (!agenda || agenda.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No agenda for this user.";
    li.id = "no-agenda";
    agendaList.appendChild(li);
    return;
  }

  // agenda.forEach((entry) => {
  //   const repDates = revisionDateCalculation(entry); //calculate repetition dates based on entry in storage

  //   for (let repDate of repDates) {
  //     //for every date in the list of repetition dates create list item

  //     const rep = `${entry.topic} - ${repDate}`;
  //     listOfAllReps.push(rep);
  //     const li = document.createElement("li");
  //     li.textContent = rep;
  //     agendaList.appendChild(li);
  //   }
  // });
  // console.log(listOfAllReps);

  const allRepetitions = [];

  agenda.forEach((entry) => {
    const repetitionDates = generateSpacedDates(entry.date);

    repetitionDates.forEach((date) => {
      allRepetitions.push({
        topic: entry.topic,
        date: date,
      });
    });
  });

  // Sort repetition by date
  allRepetitions.sort((a, b) => a.date - b.date);

  // display repetitions
  allRepetitions.forEach((rep) => {
    const li = document.createElement("li");
    li.textContent = `${rep.topic} - ${formatDate(rep.date)}`;
    agendaList.appendChild(li);
  });
}
