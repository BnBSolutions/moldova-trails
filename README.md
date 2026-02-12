# Moldova Trails

A modern travel and tourism platform showcasing beautiful trails and experiences in Moldova.

## Project Overview

Moldova Trails is a React-based web application built with Vite, TypeScript, and modern web technologies. It provides a stunning user interface for discovering tours, destinations, and travel experiences.

## Technologies Used

This project is built with:

- **Vite** - Next generation frontend tooling
- **TypeScript** - Static type checking for JavaScript
- **React** - UI library for building user interfaces
- **shadcn-ui** - Beautiful and accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Performant forms with easy-to-use APIs
- **Zod** - TypeScript-first schema validation

## Getting Started

### Prerequisites

- Node.js (v16 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd moldova-trails

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/       # React components
│   ├── home/        # Home page components
│   ├── layout/      # Layout components (navbar, footer)
│   ├── shared/      # Shared/reusable components
│   └── ui/          # UI component library (shadcn-ui)
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── data/            # Static data and constants
├── assets/          # Images, fonts, and other assets
├── App.tsx          # Main app component
└── main.tsx         # Application entry point
```

## Development

### Editing the Code

**Using your preferred IDE:**

1. Clone the repository
2. Install dependencies with `npm install`
3. Make your changes
4. Start the dev server with `npm run dev`
5. Commit and push your changes

**Using GitHub directly:**

1. Navigate to the desired file(s)
2. Click the "Edit" button (pencil icon) at the top right
3. Make your changes and commit

**Using GitHub Codespaces:**

1. Click "Code" → "Codespaces" tab
2. Click "New codespace"
3. Edit files and commit your changes

## Building for Production

To build the application for production:

```sh
npm run build
```

This creates an optimized build in the `dist` directory, ready to be deployed to any static hosting service.

## Deployment

The built application can be deployed to various platforms:

- **Vercel** - Recommended for Vite projects
- **Netlify** - Drag and drop deployment
- **GitHub Pages** - Free hosting for static sites
- **Any static hosting service** - Upload the contents of the `dist` folder

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
