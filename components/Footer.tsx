export default function Footer() {
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} Tinta Seroja</span>
      <a href="#top">Back to top <span data-link-arrow="up" aria-hidden="true">↑</span></a>
    </footer>
  );
}
