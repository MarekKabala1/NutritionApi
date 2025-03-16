# Nutrition API Project

A web application for managing and tracking nutrition information with multiple backend implementations.

## Project Structure

```
NutritionApi/
├── frontend/                  # Frontend application
│   ├── script.js              # Frontend JavaScript
│   ├── style.css              # Frontend styles
│   └── index.html             # Main HTML file
│
├── backends/
│   └── express_mongoDb-server/ # Express.js + MongoDB implementation
│       ├── src/
│       │   ├── config/        # Database configuration
│       │   ├── controllers/   # Route controllers
│       │   ├── models/        # Data models
│       │   ├── routes/        # API routes
│       │   ├── types/         # TypeScript interfaces
│       │   └── server.js      # Server setup
│       ├── environment.d.ts   # TypeScript environment definitions
│       ├── tsconfig.json      # TypeScript configuration
│       ├── .env               # Environment variables
│       └── package.json       # Backend dependencies
└── README.md
```

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:MarekKabala1/NutritionApi.git
cd NutritionApi
```

### Frontend Setup

1. Navigate to the frontend directory
2. Open `index.html` in your browser or use a local server.


### Backend Setup (Express + MongoDB)

1. Navigate to the backends/express_mongoDb-server directory
2. Install dependencies:
   ```bash
      cd backends/express_mongoDb-server
      npm install
   ```
3. Create a `.env` file with your configuration:
   ```
      touch .env
   ```
   ```bash
      PORT=1987
      MONGODB_URI=<yours mongoDb URI>
      DB_NAME=<yourDbName>
   ```
4. Ensure MongoDB is running locally
5. Start the server:
   ```bash
      npm run dev
   ```

### Database Schema

MongoDB collections:
- `NutritionTypes`: Stores nutrition information for food items

## Features

- Nutrition facts label display
- CRUD operations for nutrition data
- Support for multiple measurement units
- Barcode scanning support (planned)

## API Endpoints

### Express Backend

- `GET /nutrition `- Get all nutrition entries
- `GET /nutrition/findOne/:name` - Find nutrition entry by name
- `POST /nutrition` - Create new nutrition entry
- `PUT /nutrition/:id` - Update nutrition entry by ID
- `DELETE /nutrition/:id` - Delete nutrition entry by ID

## Future Plans

- Implementation of alternative backend servers
- Database adapters for different storage solutions
- Enhanced frontend features
- API standardization across different implementations

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License


