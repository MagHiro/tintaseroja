import StarDoodle from "./decorative/StarDoodle";
import HandDrawnLine from "./decorative/HandDrawnLine";

export default function Hero() {
  return (
    <section className="hero-section container" aria-labelledby="hero-title">
      <div className="hero-note" data-hero-note>
        <StarDoodle className="hero-spark" data-doodle />
        <span>Jakarta-based artist. On-site temporary tattoos.</span>
      </div>
      <h1 id="hero-title"><span className="hero-line"><span>Tinta Seroja.</span></span><span className="hero-line"><span><em>Temporary tattoos.</em></span></span></h1>
      <HandDrawnLine className="hero-underline" data-doodle />
      <div className="hero-description">
        <p>A little ink for the moments you bring together.<br />{" "}On-site temporary tattoos for parties, brand activations, and pop-ups.</p>
        <a className="text-link" href="#contact">Book us for your event <span data-link-arrow="down" aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
