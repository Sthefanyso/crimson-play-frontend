function Footer() {
  return (
    <footer className="h-20 w-full bg-neutral-700 text-neutral-0">
      <div className="mx-auto flex max-w-7xl items-center h-full justify-between px-6">
      <div>
        <span>Logo</span>
      </div>

      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <div className="flex gap-4">
        <a href="#">GitHub</a>
        <a href="#">Email</a>
        <a href="#">LinkedIn</a>
      </div>

      <span>© 2026 CrimsonPlay</span>
      </div>
    </footer>
  );
}

export default Footer;