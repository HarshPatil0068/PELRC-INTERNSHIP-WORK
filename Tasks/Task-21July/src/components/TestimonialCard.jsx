const TestimonialCard = ({ name, role, message }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 hover:shadow-xl transition">
      <p className="text-slate-600 text-sm italic mb-4">“{message}”</p>
      <h4 className="text-slate-900 font-semibold text-base">{name}</h4>
      <p className="text-slate-500 text-xs">{role}</p>
    </div>
  );
};

export default TestimonialCard;
