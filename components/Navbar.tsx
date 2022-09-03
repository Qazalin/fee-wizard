import { WizardIcon } from "./icons/WizardIcon";

export const Navbar = () => {
  const navbarOptions = ["API", "Live"];
  return (
    <nav className="w-full h-full">
      <div className="mx-5 h-full flex items-center justify-between">
        <a className="relative flex" href="/">
          <WizardIcon className="w-10 xl:w-12" />
        </a>
      </div>
    </nav>
  );
};
