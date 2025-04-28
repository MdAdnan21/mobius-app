import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background p-4 flex justify-center gap-8 shadow-md z-50">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer text-primary hover:text-secondary transition"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer text-primary hover:text-secondary transition"
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
