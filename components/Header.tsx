import BrandMark from "./BrandMark";

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Tinta Seroja home">
          <BrandMark priority showName={false} />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#tattoos">Tattoos</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
