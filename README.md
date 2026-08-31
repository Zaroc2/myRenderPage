# My personal portfolio

It's a website that uses a vertical piano as a navigation bar. Each key represents a section of the portfolio (home, skills, projects, music, etc.). Clicking a key or scrolling navigates to the corresponding section, the background color changes smoothly, and a sound plays (if not muted)

It's made with React, Vite, Framer Motion, IntersectionObservers and Web Audio API

ext

src/
├── App.jsx                # Main component (global state, observer, navigation logic)
├── App.css                # Main layout styles
├── index.css              # Global styles (variables, reset, scroll-behavior)
├── main.jsx               # Entry point
├── Utilities.jsx          # Helper functions (getComplementaryColor, useMediaQuery)
│
├── piano/                 # Piano components
│   ├── Piano.jsx          # Generates keys (white and black) based on sections
│   ├── PianoKey.jsx       # Individual key with Framer Motion animations
│   ├── PianoKey.module.css # Key styles (hover, active, isActive)
│   └── Piano.css          # Piano container styles
│
├── sections/              # Portfolio sections
│   ├── Data.jsx           # Defines all sections (components and structure)
│   ├── Sections.jsx       # Renders all sections
│   └── sections.css       # Section-specific styles
│
├── components/ 
│   └── Layout/
│
└── assets/                # Images, icons, etc.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zaroc2/myRenderPage
   cd myRenderPage
