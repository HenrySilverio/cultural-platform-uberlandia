# Uberlândia Cultural Platform 🎭🎨🎵

[![Project Status](https://img.shields.io/badge/status-in%20development-brightgreen)](https://cultural-platform-uberlandia.henrique-silverio.com/) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![SDGs](https://img.shields.io/badge/SDGs-4%2C%208%2C%2011-orange)](https://sdgs.un.org/goals)

> A digital platform to promote cultural, touristic, and artistic activities in the city of Uberlândia.

![Platform Banner](https://cultural-platform-uberlandia.henrique-silverio.com/images/banner.jpg)

---

## 📋 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation & Usage](#installation--usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Sustainable Development Goals](#sustainable-development-goals)
- [License](#license)
- [Contact](#contact)

---

## 🌟 About

The **Uberlândia Cultural Platform** was developed as part of the Innovation and Entrepreneurship Program linked to the Software Engineering course’s extension activities. The platform centralizes information about tourist attractions, cultural events, and provides a dedicated space for independent artists to showcase their work.

### Project Pillars

1. **Tourism & Culture**: Mapping tourist attractions and cultural centers.
2. **Cultural Agenda**: Interactive calendar of events with filters for category, date, and location.
3. **Artist Space**: Area for independent artists to register their portfolios and event schedules.

---

## 🔍 Demo

Visit the live platform at: [https://cultural-platform-uberlandia.henrique-silverio.com/](https://cultural-platform-uberlandia.henrique-silverio.com/)

![Platform Screenshot](https://cultural-platform-uberlandia.henrique-silverio.com/images/screenshot.jpg)

---

## ✨ Features

- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Dark/Light Mode**: Theme toggle for enhanced accessibility.
- **Interactive Map**: Geographical visualization of cultural and touristic points.
- **Event Calendar**: Filter events by date, category, and location.
- **Artist Profiles**: Space for artists to register portfolios, bios, and events.
- **Integrated Search**: Unified search across events, locations, and artists.
- **Event Notifications**: Configurable alerts for upcoming events.

---

## 🛠️ Technologies

### Frontend

- **Next.js** — React framework with hybrid rendering (SSR/SSG).
- **TypeScript** — Typed superset of JavaScript.
- **Tailwind CSS** — Utility-first CSS framework.
- **next-themes** — Theme support for Next.js.
- **Radix UI** — Accessible, customizable UI components.

### Development Tools

- **Yarn** — Package manager.
- **ESLint** — Code linting.
- **Prettier** — Code formatting.
- **PostCSS** & **Autoprefixer** — CSS processing.

---

## 🚀 Installation & Usage

### Prerequisites

- [Node.js](https://nodejs.org/) v14.0.0 or higher
- [Yarn](https://yarnpkg.com/) v1.22.0 or higher

### Setup

```bash
git clone https://github.com/your-username/cultural-platform.git
cd cultural-platform
yarn install
yarn dev
```

Open your browser at `http://localhost:3000`.

#### Available Scripts

| Command      | Description                                |
| ------------ | ------------------------------------------ |
| `yarn dev`   | Starts the development server              |
| `yarn build` | Builds the optimized production bundle     |
| `yarn start` | Runs the production server                 |
| `yarn lint`  | Runs ESLint checks                         |

---

## 📁 Project Structure

```text
cultural-platform/
├── public/                  # Static files (images, fonts)
├── src/
│   ├── pages/               # Next.js pages (Pages Router)
│   │   ├── _app.tsx         # Main App component
│   │   ├── _document.tsx    # Custom HTML document
│   │   ├── index.tsx        # Home page
│   │   ├── tourism.tsx      # Tourism & Culture
│   │   ├── schedule.tsx     # Cultural Agenda
│   │   └── entertainers.tsx # Artist Space
│   ├── components/          # Reusable components
│   ├── styles/              # CSS/Tailwind styles
│   ├── lib/                 # Utility functions
│   ├── hooks/               # Custom React hooks
│   └── data/                # Sample data
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.cjs       # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
└── package.json             # Dependencies & scripts
```

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "feat: add new feature"`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

Follow the [Open Source Contribution Guidelines](https://opensource.guide/how-to-contribute/).

---

## 🌍 Sustainable Development Goals

This project supports the following UN SDGs:

- **SDG 4** — Quality Education: Democratizing access to culture and informal learning.
- **SDG 8** — Decent Work and Economic Growth: Boosting the local creative economy.
- **SDG 11** — Sustainable Cities and Communities: Valuing cultural heritage.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Contact

Henrique Silvério — silveriohenriqueb@gmail.com

Project Link: https://cultural-platform-uberlandia.henrique-silverio.com/

