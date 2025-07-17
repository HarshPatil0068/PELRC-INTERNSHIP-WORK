const ZigzagBlock = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 my-12`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-64 object-cover shadow-md"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-slate-800">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ZigzagBlock;
