# Dating App - Angular Frontend

## Overview
Frontend application built with Angular 21 for the Dating App.

## Technologies
- Angular 21
- TypeScript
- Tailwind CSS v4
- RxJS for reactive programming
- Angular Signals (new reactivity system)

## Project Structure
```
client/
├── src/
│   ├── app/                    # Main application
│   │   ├── app.component.*     # Root component
│   │   ├── app.config.ts       # App configuration
│   │   └── app.routes.ts       # Routing configuration
│   ├── assets/                 # Static assets
│   ├── styles.css              # Global styles with Tailwind
│   └── main.ts                 # Application bootstrap
├── ssl/                        # SSL certificates for HTTPS dev
├── angular.json               # Angular CLI configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Angular CLI 21

### Setup
1. Navigate to client folder
```bash
cd client
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
ng serve
```

App will be available at `http://localhost:4200`

### HTTPS Development
For HTTPS development (recommended for production-like testing):

1. Install mkcert
2. Generate certificates
```bash
cd ssl
mkcert localhost
```

3. Start with SSL
```bash
ng serve --ssl --ssl-cert ssl/localhost.pem --ssl-key ssl/localhost-key.pem
```

## Features

### Current Features
- Member listing with data from API
- Responsive design with Tailwind CSS
- Angular Signals for reactive state management
- HTTP client for API communication

### Planned Features
- User authentication
- Member profiles
- Real-time messaging
- Photo uploads

## Development

### Code Style
- Uses Prettier for code formatting
- ESLint for linting
- Angular CLI for code generation

### Building for Production
```bash
ng build --configuration production
```

### Testing
```bash
ng test
```

## Configuration

### Tailwind CSS
- Configured with PostCSS
- Content paths include all TypeScript and HTML files
- Custom CSS in `styles.css`

### API Integration
- HttpClient configured in app.config.ts
- CORS enabled on backend
- Error handling with RxJS operators

## Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linting

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
