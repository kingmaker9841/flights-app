# Flight Search App

## Prerequisites

- Node.js version 22 or higher
- npm package manager

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure API Keys

1. Visit [RapidAPI](https://rapidapi.com/) and create an account
2. Subscribe to the [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper)
3. Get your API credentials from the API dashboard

### 4. Environment Setup

Create a `.env` file in the root directory and add your API credentials:

```env
VITE_RAPID_API_KEY=your_api_key_here
VITE_RAPID_API_HOST=your_api_host_here
VITE_RAPID_API_BASE_URL=your_api_base_url_here
```

### 5. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Additional Scripts

```bash
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```
