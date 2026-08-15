import githubIcon from "../assets/icons/icon-github.png";
import emailIcon from "../assets/icons/icon-email.png";
import linkedinIcon from "../assets/icons/icon-linkedin.png";

function Footer() {
  return (
    <footer className="h-20 w-full bg-neutral-700 text-neutral-0">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <span>Logo</span>

      <p className="text-body-secondary-bold text-neutral-200">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <div className="flex gap-4">
        <a href="#" className="flex items-center gap-2">
          <img src={githubIcon} alt="GitHub" className="h-4 w-4" />
        </a>
        <a href="#" className="flex items-center gap-2">
          <img src={emailIcon} alt="Email" className="h-4 w-4" />
        </a>
        <a href="#" className="flex items-center gap-2">
          <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
        </a>
      </div>

      <span className="text-body-primary-bold text-neutral-200">
        © 2026 CrimsonPlay
      </span>
      </div>
    </footer>
  );
}

export default Footer;