# Spaced Repetition Tracker

A lightweight, browser-based app to help users track and schedule their study topics using the spaced repetition method. This tool enables personalized agendas for each user, automatically generating future review dates.

🚀 Features

📅 Add new topics with a custom start date

👤 Choose between different users

🔁 Automatically generate spaced revision dates

🧠 Helps with consistent and efficient study scheduling

🧪 Unit tested with Jest

---

## 🧠 Features

- Select user from a dropdown  
- Add new topics with a start date  
- Automatically generate spaced repetition dates:  
  - +7 days  
  - +1 month  
  - +3 months  
  - +6 months  
  - +1 year  
- View upcoming revisions in a sorted agenda  
- Client-side storage via localStorage (no backend needed)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Droid-An/Project-Spaced-Repetition-Tracker.git
cd Project-Spaced-Repetition-Tracker
```

### 2. Run the App

You can open `index.html` directly in a browser — no server required.

---

## 🧪 Testing

This project uses **Jest** and **jsdom** to run unit tests in a simulated browser environment.

### Run tests:

```bash
npm install
npm test
```

> Ensure Node.js (v18 or above) is installed.

---

## 📁 Project Structure

```
.
├── index.html           # Main HTML file
├── script.mjs           # JavaScript for UI logic
├── storage.mjs          # Storage handling using localStorage
├── common.mjs           # Utilities: date generation, formatting
├── __tests__/           # Jest test files
└── package.json         # Project config and test setup
```

---

## 📚 Spaced Repetition Logic

Topics are scheduled for review using the following pattern:

- **7 days**
- **1 month**
- **3 months**
- **6 months**
- **1 year**

Only future dates are shown in the agenda.

---

## ✅ Accessibility

- Semantic HTML  
- `aria-label` and `aria-live` regions  
- Keyboard-friendly forms

---

## 🔧 Technologies

- HTML  
- Vanilla JavaScript (ES Modules)  
- Jest for testing

---

## 📄 License

This project is licensed under the ISC License.

---

## 📸 Demo Preview
 https://spaced-repetition-tracker-aec.netlify.app/


## 👨‍💻 Collaborators
Built by 
[Andrei Filippov](https://github.com/Droid-An)
[Emmanuel Gessesew](https://github.com/Emmanuelgessessew)
[Karla Grajales](https://github.com/Grajales-K)

---

## 🤝 Contributions

Feel free to open issues or submit pull requests to improve the project. All feedback is welcome!
