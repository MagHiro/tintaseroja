export default function About() {
  return (
    <section id="about" className="container info-section" aria-labelledby="about-title">
      <div className="info-heading">
        <h2 id="about-title">About Tinta Seroja</h2>
        <FlowerDoodle className="about-flower" data-doodle />
      </div>
      <div className="info-copy">
        <p>We turn our illustrations into temporary tattoos. The collection brings together botanical drawings, floral designs, and small symbols.</p>
        <p>We also work on custom pieces, collaborations, and events. Get in touch to tell us what you have in mind.</p>
      </div>
    </section>
  );
}
import FlowerDoodle from "./decorative/FlowerDoodle";
