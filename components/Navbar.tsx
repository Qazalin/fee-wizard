import { WizardIcon } from "./icons/WizardIcon";

export const Navbar = () => {
  const navbarOptions = ["Home", "Docs", "Live"];
  return (
    <nav className="w-full h-16 xl:h-24 ">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
        <a className="relative flex" href="/">
          <WizardIcon className="w-10 xl:w-12" />
        </a>
        <div className="space-x-12 invisible xl:visible">
          {navbarOptions.map((n, i) => (
            <a
              className="text-center after:transition-all text-white relative after:absolute after:h-[2px] after:mx-auto after:inset-x-0 after:-bottom-2 hover:after:w-full after:w-0 after:bg-white/70"
              href={`/${n.toLowerCase()}`}
              key={`navbar-${i}`}
            >
              {n}
            </a>
          ))}
        </div>
        <button
          className="xl:hidden pr-8"
          type="button"
          aria-label="Nav Toggle"
          style={{ opacity: 1, transform: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="text-white w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
