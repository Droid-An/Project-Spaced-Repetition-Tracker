// window.onload = function () {
//   const users = getUserIDs();

// };

//this is to clear the date from user to tasted
window.onload = function () {
  clearData(1);
  dateInput.value = getDateInAString();
};

import { getData, addData, getUserIds, clearData } from "./storage.mjs";

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
});

// Form submit handler
topicForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = userDropdown.value;
  if (!userId) return;

  const topic = topicInput.value.trim();
  const date = dateInput.value;

  if (!topic) return;

  const newEntry = { topic, date };
  addData(userId, [newEntry]);

  displayAgenda(userId);
  topicForm.reset();
  dateInput.value = today;
});

// Function to display agenda
function displayAgenda(userId) {
  agendaList.innerHTML = ""; // Clear existing list

  if (!userId) return;

  const agenda = getData(userId);
  if (!agenda || agenda.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No agenda for this user.";
    li.id = "no-agenda";
    agendaList.appendChild(li);
    return;
  }

  agenda.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.topic} - ${entry.date}`;
    agendaList.appendChild(li);
  });
}
