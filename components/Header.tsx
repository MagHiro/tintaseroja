import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Tinta Seroja home">
          <Image className="site-header__logo" src="/logo/tinta-seroja-mark.png" alt="Tinta Seroja" width={1536} height={1024} sizes="(max-width: 600px) 132px, 186px" priority />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#tattoos">Tattoos</a>
          <a href="#about">About</a>
          <a className="site-nav__booking" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
