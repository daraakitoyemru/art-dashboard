const DominantColours = (props) => {
  let parsedColourData = [];

  if (props.colourData && typeof props.colourData === "string") {
    try {
      const parsed = JSON.parse(props.colourData);
      if (parsed.dominantColors) {
        parsedColourData = parsed.dominantColors;
      }
    } catch (error) {
      console.error("Error parsing color data:", error);
    }
  }

  if (parsedColourData.length === 0) {
    return null;
  }

  return (
    <div className="p-1">
      <h2 className="text-xl font-semibold mb-4">Dominant Colors</h2>
      <div className="grid sm:grid-row-1 sm:grid-cols-6">
        {parsedColourData.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded border border-gray-300"
              style={{ backgroundColor: item.web }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DominantColours;
