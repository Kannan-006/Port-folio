import React from 'react';

const EducationCard = ({
  collegeName,
  degree,
  duration,
  cgpa,
  location,
  image,
  mapLink,
}) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="w-full h-80 sm:h-96 md:h-112 lg:h-128 xl:h-160 overflow-hidden">
        <img
          src={image}
          alt={collegeName}
          className="w-full h-full md:w-[600px] drop-shadow-md backdrop-blur-lg object-cover transition-opacity duration-300 group-hover:opacity-20"
        />
      </div>

      <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center bg-black bg-opacity-70 text-white">
        <h3 className="text-2xl font-semibold">{collegeName}</h3>
        <p className="text-lg mt-2">{degree}</p>

        <div className="flex space-x-4 text-sm mt-2">
          <span>📅 {duration}</span>
          <span>🎓 {cgpa} CGPA</span>
        </div>

        <p className="text-sm mt-2">📍 {location}</p>

        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 hover:underline mt-2 inline-block"
        >
          View Location Map
        </a>
      </div>
    </div>
  );
};

export default EducationCard;