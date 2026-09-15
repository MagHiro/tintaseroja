import HandDrawnLine from "./decorative/HandDrawnLine";
import StarDoodle from "./decorative/StarDoodle";

export default function Hero() {
  return (
    <section className="hero-section container" aria-labelledby="hero-title">
      <div className="hero-note" data-hero-note>
        <span>On-site temporary tattoo artist</span>
        <em className="font-semibold">in Jakarta, Indonesia</em>
      </div>
      <div className="hero-composition">
        <StarDoodle className="hero-spark" data-doodle />
        <div className="hero-heading">
          <h1 id="hero-title">
            <span className="hero-line"><span>Temporary ink.</span></span>
            <span className="hero-line"><span><em>Shared moments.</em></span></span>
          </h1>
          <HandDrawnLine className="hero-underline" data-doodle />
        </div>
      </div>
      <div className="hero-description">
        <p>Art that comes to you. Temporary tattoos for parties, brand activations, pop-ups, and moments worth gathering for.</p>
        <div className="hero-actions">
          <a className="hero-booking" href="#contact">Book us for your event <span data-link-arrow="down" aria-hidden="true">↗</span></a>
          <a className="hero-browse" href="#tattoos">Explore the tattoos <span aria-hidden="true">↓</span></a>
        </div>
        <span className="hero-caption">Drawn to connect. Made to fade.</span>
      </div>
    </section>
  );
}
