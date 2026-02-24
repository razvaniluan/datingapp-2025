# Dating App - API Documentation

## Overview
Backend API built with ASP.NET Core for the Dating App.

## Technologies
- ASP.NET Core 9.0
- Entity Framework Core
- SQLite Database
- JWT Authentication (planned)
- CORS enabled

## Project Structure
```
API/
├── Controllers/          # API Controllers
│   └── MembersController.cs
├── Data/                # Database context and migrations
│   ├── AppDbContext.cs
│   └── Migrations/
├── Entities/            # Domain models
│   └── AppUser.cs
├── Properties/
│   └── launchSettings.json
├── appsettings.json     # Configuration
└── Program.cs          # Application entry point
```

## Getting Started

### Prerequisites
- .NET 9.0 SDK
- Entity Framework Core CLI

### Setup
1. Navigate to API folder
```bash
cd API
```

2. Restore packages
```bash
dotnet restore
```

3. Run database migrations
```bash
dotnet ef database update
```

4. Run the API
```bash
dotnet run
```

API will be available at `http://localhost:5000`

## API Endpoints

### Members
- `GET /api/members` - Get all members
- `GET /api/members/{id}` - Get member by ID

## Database
- Uses SQLite for development
- Connection string in `appsettings.Development.json`
- Migrations in `Data/Migrations/`

## Configuration
- CORS configured for Angular dev server
- Development settings in `appsettings.Development.json`