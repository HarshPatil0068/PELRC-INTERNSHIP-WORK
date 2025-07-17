import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="bg-slate-50 px-4 py-20 max-w-7xl mx-auto rounded-2xl">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
        What Our Interns Say
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.slice(0, 2).map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
