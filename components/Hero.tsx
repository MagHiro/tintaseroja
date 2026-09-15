import StarDoodle from "./decorative/StarDoodle";
import HandDrawnLine from "./decorative/HandDrawnLine";

export default function Hero() {
  return (
    <section className="hero-section container" aria-labelledby="hero-title">
      <div className="hero-note" data-hero-note>
        <StarDoodle className="hero-spark" data-doodle />
        <span>A little ink. A little expression.</span>
      </div>
      <h1 id="hero-title"><span className="hero-line"><span>Tinta Seroja.</span></span><span className="hero-line"><span><em>Temporary tattoos.</em></span></span></h1>
      <HandDrawnLine className="hero-underline" data-doodle />
      <div className="hero-description">
        <p>Hand-drawn botanicals, flowers, and symbols.<br />{" "}Choose a design or ask us about a custom piece.</p>
        <a className="text-link" href="#tattoos">Browse tattoos <span data-link-arrow="down" aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
