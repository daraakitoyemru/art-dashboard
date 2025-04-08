# COMP 4513 – Assignment 2

This project is a fully responsive single-page application (SPA) built using React and Tailwind CSS. It allows users to browse and explore artworks by artists, genres, galleries, and paintings. Users can filter, sort, and mark artworks as favorites for easy access. The application emphasizes rich interactivity, clean UI design, and dynamic data handling through modern React tools and APIs.

## Author

**Dara Akitoye** and **Viktoriya Bolgachenko**

## Live Deployment

[https://art-dashboard-git-main-daras-projects-b15f6062.vercel.app/](https://art-dashboard-git-main-daras-projects-b15f6062.vercel.app/)

## Project Overview

This application was developed to fulfill the requirements of COMP 4513: Web III. It demonstrates an understanding with:

- Modern JavaScript frameworks (React with Vite)
- UI design with Tailwind CSS
- Data management with APIs and context
- Performance considerations through caching and lazy loading
- Interactive modals and filter drawers
- Responsive layouts and routing

## Features

### 1. Login Landing Page

- Hero layout with logo, background image, and call to action
- Users can click to "enter" and explore the collection

### 2. Paintings View

- Browse all available paintings
- Advanced filtering by:
  - Title (text input)
  - Artist (dropdown)
  - Gallery (dropdown)
  - Year range (min to max year)
- Custom styled drawer toggle for filters
- Dynamic painting cards that open into modals with full info

### 3. Artist View

- Clickable list of all artists, sorted alphabetically
- Each artist opens a page with:
  - Bio and lifespan
  - Nationality and gender
  - Link to external resources
  - Paintings created by the artist

### 4. Gallery View

- Displays map via React Leaflet centered on selected gallery
- Includes:
  - Name, native name, address, country, and website
  - List of paintings held at the gallery
  - Map marker and popup

### 5. Genre View

- Displays image, description, and Wikipedia link
- Paintings sorted by title (default), artist, or year

### 6. Painting Modals

- Each painting card opens a modal with:
  - Artist and gallery info
  - Dimensions, medium, description, and copyright
  - Wiki link (if available)
  - Dominant color swatches using extracted annotation data

### 7. Favorites System

- Users can add paintings, artists, galleries, and genres to their favorites
- Dedicated modal displays favorited items grouped by category
- Remove individual items or clear all at once
- Favorites tracked using global context state

### 8. Loading Feedback

- When data is being fetched, a loading animation is displayed
- Ensures smooth user experience even when API responses are delayed

## Technologies Used

- React (via Vite)
- Tailwind CSS
- React Router
- React Leaflet
- Axios (for API calls)
- Supabase (authentication & hosting backend)
- Cloudinary (image hosting)
- LocalStorage via `@uidotdev/usehooks` (for persistent caching)

## Data Sources

- Art API hosted at: `https://art-api-he4r.onrender.com/api`
- Cloudinary CDN: `/res.cloudinary.com/funwebdev/...` used for high-quality art images
- OpenStreetMap tiles used for map views
- All artwork and descriptions are sourced for educational demonstration purposes
