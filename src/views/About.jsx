const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-2 py-2 text-[#4B3A2C] space-y-4 mt-2 mb-2 rounded">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Course</h2>
          <p>COMP 4513 - Assignment 2</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Authors</h2>
          <p>Dara Akitoye and Viktoriya Bolgachenko</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          A fully responsive single-page application (SPA) built using React and
          Tailwind CSS. Users can browse and explore artworks by artists,
          genres, galleries, and paintings. Features include filtering, sorting,
          modal views, and a favorites system.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Landing page with hero image, logo, and call to action</li>
            <li>
              Painting view with filters by title, artist, gallery, and year
            </li>
            <li>Artist view with bios and lists of paintings</li>
            <li>Gallery view with maps and painting collections</li>
            <li>
              Genre view with image, description, and sorted painting list
            </li>
            <li>Detailed painting modals with metadata and color swatches</li>
            <li>
              Favorites system for all categories with remove and clear options
            </li>
            <li>Loading animations during data fetching</li>
          </ul>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>React (with Vite)</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>React Leaflet</li>
            <li>Axios</li>
            <li>Supabase (auth and hosting)</li>
            <li>Cloudinary (image hosting)</li>
            <li>@uidotdev/usehooks (localStorage)</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">Data Sources</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Art API:{" "}
            <a
              href="https://art-api-he4r.onrender.com/api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline"
            >
              https://art-api-he4r.onrender.com/api
            </a>
          </li>
          <li>Cloudinary CDN for high-quality images</li>
          <li>OpenStreetMap for interactive maps</li>
        </ul>
        <p className="mt-2 text-sm italic">
          All artwork and data are for educational demonstration purposes only.
        </p>
      </div>
    </div>
  );
};

export default About;
