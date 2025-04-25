# Uberlândia Cultural Platform 🎭🎨🎵

![Platform Banner](https://cultural-platform-uberlandia.henrique-silverio.com/images/banner.jpg) 

[![Project Status](https://img.shields.io/badge/status-in%20development-brightgreen) ](https://cultural-platform-uberlandia.henrique-silverio.com/) 
[![License](https://img.shields.io/badge/license-MIT-blue.svg) ](LICENSE)
[![SDGs](https://img.shields.io/badge/SDGs-4%2C%208%2C%2011-orange) ](https://sdgs.un.org/goals) 

> Digital platform for promoting cultural, touristic, and artistic activities in the city of Uberlândia.

## 📋 Table of Contents

- [Overview](#-overview)
- [Demo](#-demo)
- [Features](#-features)
- [Technologies](#-technologies)
- [Installation and Usage](#-installation-and-usage)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Sustainable Development Goals](#-sustainable-development-goals)
- [License](#-license)
- [Contact](#-contact)

## 🌟 Overview

The **Uberlândia Cultural Platform** is a project developed as part of the Innovation and Entrepreneurship Program, linked to the university extension activities of the Software Engineering course. The platform aims to centralize and facilitate access to information about cultural and artistic events in the city, as well as offer a space for independent artists to promote their work.

The project is structured around three main pillars:

1. **Tourism and Culture**: Mapping of tourist attractions and cultural centers
2. **Cultural Agenda**: Calendar of cultural events with filtering system
3. **Artist Space**: Area for independent artists to showcase their work

## 🔍 Demo

Access the platform at: [https://cultural-platform-uberlandia.henrique-silverio.com/](https://cultural-platform-uberlandia.henrique-silverio.com/) 

![Platform Screenshot](https://cultural-platform-uberlandia.henrique-silverio.com/images/screenshot.jpg) 

## ✨ Features

- **Responsive Interface**: Adaptable design for mobile and desktop devices
- **Dark/Light Mode**: Theme toggle for better accessibility
- **Interactive Map**: Geographic visualization of cultural and tourist points
- **Cultural Agenda**: Event calendar with filters by category, date, and location
- **Artist Profile**: Space for artists to register their portfolio and events
- **Search System**: Integrated search for events, locations, and artists
- **Event Alerts**: Notifications about upcoming events of interest

## 🛠️ Technologies

- **Frontend**:
  - [Next.js](https://nextjs.org/)  - React framework with server-side rendering
  - [TypeScript](https://www.typescriptlang.org/)  - Typed JavaScript superset
  - [Tailwind CSS](https://tailwindcss.com/)  - Utility-first CSS framework
  - [next-themes](https://github.com/pacocoursey/next-themes)  - Theme support in Next.js

- **Development Tools**:
  - [Yarn](https://yarnpkg.com/)  - Package manager
  - [ESLint](https://eslint.org/)  - Linter for JavaScript/TypeScript
  - [Prettier](https://prettier.io/)  - Code formatter

## 🚀 Installation and Usage

### Prerequisites

- [Node.js](https://nodejs.org/)  (v14.0.0 or higher)
- [Yarn](https://yarnpkg.com/)  (v1.22.0 or higher)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/cultural-platform.git
   cd cultural-platform
Install dependencies:
bash
yarn install
Run the development server:
bash
yarn dev
Access the application:
Open your browser and go to http://localhost:3000
Available Commands
yarn dev - Starts the development server
yarn build - Creates an optimized production build
yarn start - Starts the production server
yarn lint - Runs linting checks
📁 Project Structure
cultural-platform/
├── public/                  # Static files (images, fonts) 
├── src/
│   ├── pages/               # Next.js pages (Pages Router)
│   │   ├── _app.tsx         # Main App component
│   │   ├── _document.tsx    # Custom HTML document
│   │   ├── index.tsx        # Home page
│   │   ├── tourism.tsx      # Tourism and Culture page
│   │   ├── schedule.tsx     # Cultural Agenda page
│   │   ├── entertainers.tsx # Artist Space page
│   │   └── api/             # API routes
│   ├── components/          # Reusable components
│   │   ├── ui/              # Basic UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   └── ThemeProvider.tsx # Theme provider
│   ├── styles/              # Styles
│   ├── lib/                 # Utilities and helper functions
│   ├── hooks/               # Custom hooks
│   └── data/                # Simulated data
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
👥 Contributing
Contributions are welcome! If you'd like to contribute to this project, follow these steps:
Fork the project
Create a branch for your feature (git checkout -b feature/new-feature)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Open a Pull Request
🌍 Sustainable Development Goals
This project is aligned with the following UN Sustainable Development Goals (SDGs):
SDG 4 - Quality Education: Promoting access to culture and non-formal education
SDG 8 - Decent Work and Economic Growth: Fostering the local creative economy
SDG 11 - Sustainable Cities and Communities: Valuing the city's cultural heritage
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
📞 Contact
Henrique Silvério - henrique.silverio@email.com
Project Link: https://cultural-platform-uberlandia.henrique-silverio.com/