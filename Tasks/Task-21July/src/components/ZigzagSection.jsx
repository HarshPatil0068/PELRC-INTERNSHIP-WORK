import zigzagData from "../data/zigzagData.js";
import ZigzagBlock from "./ZigzagBlock";

const ZigzagSection = () => {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
        What Interns Experienced
      </h2>
      {zigzagData.map((item, index) => (
        <ZigzagBlock
          key={item.id}
          {...item}
          reverse={index % 2 !== 0} // alternate layout
        />
      ))}
    </section>
  );
};

export default ZigzagSection;
