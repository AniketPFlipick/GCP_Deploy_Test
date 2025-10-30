# Minimal Full-Stack App

A very minimal application with:
- **Backend**: ASP.NET Core 8.0 Web API
- **Frontend**: React with Vite

## Project Structure

```
my-app/
├── backend/
│   ├── MyApp.csproj
│   ├── Program.cs
│   ├── Controllers/HomeController.cs
│   ├── appsettings.json
│   ├── Properties/launchSettings.json
│   └── Dockerfile
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        └── App.jsx
```

## How to Run

### Backend
1. Open terminal in `backend/` directory
2. Run: `dotnet restore`
3. Run: `dotnet run`
4. Backend will be available at `http://localhost:5000`

### Frontend
1. Open another terminal in `frontend/` directory
2. Run: `npm install`
3. Run: `npm run dev`
4. Frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - Returns "Hello World from Backend!"
- `GET /api/hello` - Returns "Hello World from API!"

The React frontend calls `/api/hello` on load and displays the response.