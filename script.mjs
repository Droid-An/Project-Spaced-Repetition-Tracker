window.onload = function () {
  clearData(1);
};
 
import { getData, addData, getUserIds } from "./storage.mjs";
import { generateSpacedDates, isFutureDate, formatDate } from "./common.mjs";

// Get elements from the HTML
const userDropdown = document.getElementById("userDropdown");
const agendaList = document.getElementById("agenda-list");
const topicForm = document.getElementById("topicForm");
const topicInput = document.getElementById("topicName");
const dateInput = document.getElementById("datePicker");

// Function to get today’s date in "YYYY-MM-DD" format
function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Set default date to today in the form
dateInput.value = getTodayDateString();

// Fill the dropdown with user IDs
function populateUserDropdown() {
  const userIds = getUserIds();

  userIds.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = id;
    userDropdown.appendChild(option);
  });
}

// Show the agenda for the selected user
function displayAgenda(userId) {
  agendaList.innerHTML = ""; // Clear the list

  if (!userId) return;

  const agenda = getData(userId); // Get data for that user

  if (!agenda || agenda.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No agenda for this user.";
    agendaList.appendChild(li);
    return;
  }

  const upcomingRevisions = [];

  // Loop through all saved topics and dates
  agenda.forEach((entry) => {
    const reviewDates = generateSpacedDates(entry.date);

    reviewDates.forEach((date) => {
      if (isFutureDate(date)) {
        upcomingRevisions.push({ topic: entry.topic, date: date });
      }
    });
  });

  // Sort by date
  upcomingRevisions.sort((a, b) => a.date - b.date);

  // Show each revision item on the screen
  upcomingRevisions.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.topic} - ${formatDate(item.date)}`;
    agendaList.appendChild(li);
  });
}

// When a new topic is submitted
function handleFormSubmit(event) {
  event.preventDefault(); // Stop the form from refreshing the page

  const userId = userDropdown.value;
  const topic = topicInput.value.trim();
  const date = dateInput.value;

  if (!userId || !topic) return;

  const newEntry = { topic, date };

  // Save the new topic for that user
  addData(userId, [newEntry]);

  // (Optional) Log the revision dates
  console.log(getRevisionDates(newEntry));

  // Show updated agenda
  displayAgenda(userId);

  // Clear the form and reset the date to today
  topicForm.reset();
  dateInput.value = getTodayDateString();
}

// Generate and format revision dates
function getRevisionDates(entry) {
  const spacedDates = generateSpacedDates(entry.date);
  return spacedDates.map((d) => formatDate(d));
}

// === Event Listeners ===

// When user is selected from dropdown
userDropdown.addEventListener("change", () => {
  const selectedUser = userDropdown.value;
  displayAgenda(selectedUser);
});

// When the form is submitted
topicForm.addEventListener("submit", handleFormSubmit);

// === Start the app ===
populateUserDropdown(); // Fill the dropdown when page loads
