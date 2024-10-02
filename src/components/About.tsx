import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg flex flex-col items-center justify-between">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#13212e]">
        About Cristian G
      </h2>

      <img
        className="max-w-3xl w-full mb-6 rounded-lg shadow-md"
        src="public/images/Gravity I/Menos calidd/IMG_4666.jpg"
        alt="Gravity I artwork"
      />

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        <strong>Cristian G</strong>, a prolific artist from Bogotá, Colombia,
        embarked on his artistic journey from a young age, driven by the rich
        cultural tapestry of his homeland. Inspired by the lush Colombian
        countryside and colorful streets, his work is a unique fusion of
        Colombian culture, nature, and emotion.
      </p>

      {/* Artistic Philosophy */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-[#13212e] mb-2">
          Artistic Philosophy
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cristian believes that art is a mirror to the soul, and he aims to
          connect deeply with his audience through vivid storytelling and the
          bold use of color. His works often explore the relationship between
          human emotions and nature, with each piece capturing the essence of a
          moment or feeling.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          His artistic vision is profoundly shaped by existentialism and Albert
          Camus's philosophy of the absurd. Cristian's works reflect the tension
          between humanity's search for meaning and the inherent chaos of
          existence, mirroring his own philosophical journey. He often
          juxtaposes the serene beauty of nature with the internal struggles and
          existential questions faced by individuals.
        </p>
      </section>

      {/* Quotes/Testimonials */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-[#13212e] mb-2">
          What People Are Saying
        </h3>
        <blockquote className="italic text-lg text-gray-600 leading-relaxed mb-4">
          "Cristian's work captures the vibrant energy of Colombia in ways that
          evoke both nostalgia and awe. His mastery of form and color is nothing
          short of mesmerizing." – Art Critic, Bogotá Art Magazine
        </blockquote>
        <blockquote className="italic text-lg text-gray-600 leading-relaxed">
          "Every piece feels like a window into another world, where nature and
          emotion blend seamlessly." – Client Testimonial
        </blockquote>
      </section>

      {/* Future Projects */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-[#13212e] mb-2">
          Future Projects
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cristian is currently working on a new series exploring the
          interaction between light and shadow in Colombia’s varied landscapes.
          This upcoming collection will debut in 2025.
        </p>
      </section>

      {/* Button to Main Gallery */}
      <Link
        to="/"
        className="mt-10 inline-block bg-[#13212e] text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition"
      >
        Visit Main Gallery
      </Link>
    </div>
  );
};

export default About;
