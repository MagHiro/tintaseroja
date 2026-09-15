export default function Contact() {
  return (
    <section id="contact" className="container info-section contact-section" aria-labelledby="contact-title">
      <div className="info-heading">
        <h2 id="contact-title">Get in touch</h2>
        <OrbitDoodle className="contact-orbit" data-doodle />
      </div>
      <div className="info-copy">
        <p>For orders, custom designs, and collaborations.</p>
        <div className="contact-links">
          <a className="text-link" href="mailto:info@tinteseroja.id">info@tinteseroja.id <span data-link-arrow aria-hidden="true">↗</span></a>
          <a className="text-link" href="https://instagram.com/tintaseroja.id" target="_blank" rel="noreferrer">Instagram <span data-link-arrow aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
import OrbitDoodle from "./decorative/OrbitDoodle";
