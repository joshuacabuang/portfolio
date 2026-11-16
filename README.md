# Joshua Cabuang — Portfolio

Personal portfolio website for **Joshua Cabuang**, a self-taught full-stack developer from the Philippines. The site showcases his projects, certifications, skills, and contact information with a modern "Code Editor" aesthetic — and includes an AI-powered chat assistant (**joshua.exe**) backed by the Google Gemini API.

---

## Features

- **"Code Editor" Visual Theme**: Built with a sleek dark aesthetic mimicking modern IDEs and code blocks (`developer.ts`, `about.ts`, syntax highlighting).
- **Interactive Orbiting Tech Stack**: Animated solar system displaying core skills and technologies (Laravel, Livewire, Inertia.js, React, Tailwind CSS, MySQL, PHP).
- **AI-Powered Chat Assistant (`joshua.exe`)**: Floating terminal-inspired chatbot integrated with the Google Gemini API to answer recruiter and visitor queries about Joshua's background, stack, and projects.
- **Terminal / Chat Slash Commands**: Interactive CLI commands supported directly in the chat widget (`whoami`, `cd about`, `cd projects`, `cd contact`, `cd certificates`, `ls projects`, `ls certifications`, `open resume.pdf`, `clear`, `help`).
- **Contact Form**: Direct email delivery powered by Web3Forms with form validation and feedback states.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile screens with responsive navigation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons set) |
| **Fonts** | [@fontsource/jetbrains-mono](https://fontsource.org/fonts/jetbrains-mono), [@fontsource/inter](https://fontsource.org/fonts/inter) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |
| **AI Chatbot** | [Google Gemini API](https://ai.google.dev/) (via serverless API handler with model fallback) |
| **Rate Limiting** | [Vercel KV / Upstash Redis](https://vercel.com/storage/kv) (REST API) |
| **Contact Form** | [Web3Forms](https://web3forms.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Project Structure

```text
├── api/
│   └── chat.ts                 # Vercel serverless function for AI chatbot
├── public/
│   └── Cvs/                    # Downloadable resume assets
├── src/
│   ├── assets/                 # Static images and icons
│   ├── components/
│   │   ├── chat/               # Chat widget, window, message renderer, commands
│   │   ├── nav/                # Desktop & mobile navigation bars
│   │   ├── sections/           # Hero, About, Projects, Certifications, Contact
│   │   └── theme/              # Reusable UI components (WindowCard, CodeButton, etc.)
│   ├── data/                   # JSON & TS data for projects, certificates, contact, CV
│   ├── server/
│   │   └── chatHandler.ts      # Shared Gemini context builder & fallback handler
│   ├── types/                  # TypeScript definitions and interfaces
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Global styles, Tailwind directives & CSS variables
│   └── main.tsx                # Application entry point
├── docs/                       # Detailed project & API documentation
├── package.json
└── vite.config.ts              # Vite configuration with local dev chat middleware
```

---

## Environment Variables

Create a `.env` file in the root directory (refer to `.env.example`):

```env
# Contact Form (Client-side)
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
# (VITE_WEB3FORMS_KEY is also supported as an alias)

# Google Gemini API (Server-side)
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.6-flash
GEMINI_MODEL_FALLBACK=gemini-2.5-flash-lite

# Production Security & Allowed Origins (Optional - automatically allows same-host)
CHAT_ALLOWED_ORIGIN=https://joshua-cabuang.vercel.app

# Rate Limiting (Optional - defaults to 5 requests per 3600 seconds per IP)
CHAT_RATE_LIMIT_MAX=5
CHAT_RATE_LIMIT_WINDOW_SECONDS=3600

# Vercel KV / Upstash Redis for production rate limiting (Optional)
KV_REST_API_URL=https://...
KV_REST_API_TOKEN=...
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dumbDev6969/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`. The local Vite development server includes a built-in middleware emulator for `/api/chat`.

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

### 6. Lint the codebase

```bash
npm run lint
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
