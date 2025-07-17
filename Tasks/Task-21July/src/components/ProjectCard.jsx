const ProjectCard = ({ title, description, image, github }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 hover:shadow-xl transition">
      <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold text-slate-900 mb-2">{title}</h2>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-slate-800 text-white px-3 py-1 rounded hover:bg-slate-700 transition"
        >
          GitHub
        </a>
        
      </div>
    </div>
  );
};

export default ProjectCard;
