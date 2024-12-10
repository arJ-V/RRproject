<div align="center">
  <h1>🔐 KYC Form Application</h1>
  <p>A modern, multi-step Know Your Customer (KYC) form built with React and Material-UI</p>

  ![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
  ![MUI](https://img.shields.io/badge/Material--UI-5.14.0-blue?logo=mui)
  ![License](https://img.shields.io/badge/license-MIT-green)
</div>

---

## 📋 Overview

This KYC (Know Your Customer) application streamlines the user verification process through an intuitive, multi-step form interface. It provides a seamless experience for collecting and validating user information while maintaining security and ease of use.
### ✨ Key Features

- 📝 Multi-step form with progress tracking
- ✅ Real-time form validation
- 📤 Document upload capability
- 📱 Responsive design for all devices
- 💾 State persistence between steps
- 👀 Final review and edit capability
- 🎨 Modern Material-UI design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation
1. Clone the repository
```bash
git clone https://github.com/arJ-V/RRproject.git
cd RRproject/my-app

// install dependencies
npm install
// Start the development server
npm start
```
The application will open in your default browser at http://localhost:3000

## 🛠️ Tech Stack
### Core
React - Frontend framework
React Router - Navigation
Material-UI - UI component library
### Form Management
Formik - Form handling
Yup - Form validation
### Date Handling
date-fns - Date manipulation
@mui/x-date-pickers - Date picker components


## 📦 Project Structure
my-app/
├── src/
│   ├── components/
│   │   ├── KYCForm.jsx         # Main form container
│   │   └── steps/              # Form steps
│   │       ├── ContactForm.jsx
│   │       ├── DocumentUpload.jsx
│   │       ├── IdentityForm.jsx
│   │       └── ReviewForm.jsx
│   ├── data/
│   │   └── countries.js        # Countries data
│   └── App.js                  # Root component

