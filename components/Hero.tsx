export default function Hero() {
  return (
    <section className="hero-section container" aria-labelledby="hero-title">
      <h1 id="hero-title"><span className="hero-line"><span>Tinta Seroja.</span></span><span className="hero-line"><span><em>Temporary tattoos.</em></span></span></h1>
      <div className="hero-description">
        <p>Hand-drawn botanicals, flowers, and symbols.<br />{" "}Choose a design or ask us about a custom piece.</p>
        <a className="text-link" href="#tattoos">Browse tattoos <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
