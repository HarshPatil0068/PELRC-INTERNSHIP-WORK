import cardData from "../data/cardData.js";
import ProjectCard from "./ProjectCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const ProjectSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 3,
      spacing: 15,
    },
    mode: "free-snap",
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    }
  });

  return (
    <section className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
        Internship Projects & Tasks
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {cardData.map((card) => (
          <div className="keen-slider__slide" key={card.id}>
            <ProjectCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
