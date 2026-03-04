# Technical Calendar

A Technical Test about calendar application built with React, TypeScript, and Vite, featuring Tailwind CSS for styling and Zustand for state management.

## Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **State Management**: Zustand for efficient state handling
- **Form Validation**: Zod for robust data validation
- **Date Handling**: date-fns for date operations
- **Component Utilities**: clsx and tailwind-merge for dynamic styling

## Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── stores/             # Zustand state stores
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## How It Works

### State Management
- Uses **Zustand** for lightweight state management
- Centralized stores for calendar data, events, and UI state
- Efficient re-renders with selective state subscriptions

### Form Handling
- **Zod** schemas for type-safe form validation
- Client-side validation with real-time feedback
- Type inference from validation schemas

### Styling
- **Tailwind CSS** for utility-first styling
- Responsive design with mobile-first approach
- Component composition with clsx and tailwind-merge

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/technical-calendar.git
   cd technical-calendar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

- Open http://localhost:5173 in your browser

### Building

Create a production build:
```bash
npm run build
```

- Output in `dist/` directory

### Preview Production Build

Test the production build locally:
```bash
npm run preview
```

## Testing

### Code Quality

Run linting to check for code issues:
```bash
npm run lint
```

Fix linting issues automatically:
```bash
npm run lint:fix
```

### Formatting

Format code according to project standards:
```bash
npm run format
```

Fix formatting issues automatically:
```bash
npm run format:fix
```

## Configuration Files

- **package.json**: Project dependencies and scripts
- **tsconfig.json**: TypeScript configuration
- **vite.config.ts**: Vite build configuration
- **biome.json**: Code formatting and linting rules
- **tailwind.config.js**: Tailwind CSS configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Tech Stack

- **React**: 19.2.0 (UI library)
- **TypeScript**: 5.9.3 (Type safety)
- **Vite**: 7.3.1 (Build tool)
- **Tailwind CSS**: 4.2.1 (Styling)
- **Zustand**: 5.0.11 (State management)
- **Zod**: 4.3.6 (Form validation)
- **date-fns**: 4.1.0 (Date operations)
- **Biome**: 2.4.5 (Code quality)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features with appropriate polyfills
- Responsive design for mobile and desktop

## Troubleshooting

### Common Issues

- **Port already in use**: Change port in vite.config.ts
- **TypeScript errors**: Check tsconfig.json settings
- **Build failures**: Ensure all dependencies are installed
