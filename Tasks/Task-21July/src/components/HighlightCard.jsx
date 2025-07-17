import React from 'react';
import "../styles/index.css";

const HighlightCard = () => {
  return (
    <div className="max-w-sm bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-slate-700 p-4 hover:shadow-xl transition-shadow">
      
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
        <img
          src="./dummy"
          alt="Dummy Project Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-2">Project Name</h2>

      {/* Description */}
      <p className="text-slate-300 text-sm mb-4">
        This is the description of the card. Brief details about the internship project.
      </p>

      {/* Buttons */}
      <div className="flex justify-between">
        <a
          href="#"
          className="text-sm bg-slate-800 text-slate-200 px-3 py-1 rounded hover:bg-slate-700 transition"
        >
          GitHub
        </a>
        <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default HighlightCard;
