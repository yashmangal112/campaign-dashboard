# Campaign Dashboard

A React-based project to manage and display campaigns by dividing them into three categories: **Upcoming Campaigns**, **Live Campaigns**, and **Past Campaigns**. The application also supports language translation between English (`en`) and Spanish (`es`) using the `i18n` framework.

---

## Features

- **Campaign Categories**:
  - **Upcoming Campaigns**: Campaigns with a `createdOn` date after today (future dates).
  - **Live Campaigns**: Campaigns with a `createdOn` date equal to today's date.
  - **Past Campaigns**: Campaigns with a `createdOn` date before today.
- When a campaign's date is rescheduled, it should automatically move to the relevant tab. Ensure this functionality works consistently.
- **Multilingual Support**:
  - Language toggle between English (`en`) and Spanish (`es`).
  - Translation files are located in the `src/i18n` folder.

- **Well-structured Code**:
  - Clean, modular, and scalable architecture.

---

## Getting Started

Follow these steps to set up the project locally.


### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yashmangal112/campaign-dashboard
2. **Navigate to the Project Directory**:
   ```bash
   cd campaign-dashboar
3. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
4. **Start the Development Server**:
   ```bash
   npm run start
5. Access the Application: http://localhost:3000

---
### Folder Structure
```
src/
├── components/           
│   ├── CampaignTable.js  # Component for displaying campaigns in a table
│   ├── LanguageSwitcher.js  # Language toggle button
│   ├── PricingModal.js   # Modal for pricing details
│   └── Tabs.js           # Tab component for campaign categories
├── data/                 
│   └── campaigns.json    # Sample campaign data
├── i18n/                 # Localization files
│   ├── locales/
│   │   ├── en.json       # English translations
│   │   └── es.json       # Spanish translations
│   └── i18n.js           # i18n initialization
├── App.js                # Main application file and compaigns logic details

```

---
### Contact

For any queries or feedback, feel free to contact:

**Yash Mangal**  
📧 yashmangal240@gmail.com  
🔗 [GitHub Profile](https://github.com/yashmangal112)