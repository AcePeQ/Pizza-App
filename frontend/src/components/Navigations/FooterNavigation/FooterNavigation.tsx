import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router";

const iconSize = 30;

function FooterNavigation() {
  return (
    <ul className="flex gap-3.5 justify-center">
      <li>
        <Link
          className="text-amber-50 hover:text-white active:text-white transition-colors duration-500"
          to="#"
        >
          <Facebook aria-label="facebook" size={iconSize} />
        </Link>
      </li>

      <li>
        <Link
          className="text-amber-50 hover:text-white active:text-white transition-colors duration-500"
          to="#"
        >
          <Instagram aria-label="instagram" size={iconSize} />
        </Link>
      </li>

      <li>
        <Link
          className="text-amber-50 hover:text-white active:text-white transition-colors duration-500"
          to="#"
        >
          <Twitter aria-label="twitter" size={iconSize} />
        </Link>
      </li>

      <li>
        <Link
          className="text-amber-50 hover:text-white active:text-white transition-colors duration-500"
          to="#"
        >
          <Github aria-label="github" size={iconSize} />
        </Link>
      </li>
    </ul>
  );
}

export default FooterNavigation;
