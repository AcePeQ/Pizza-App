import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-x-2">
      <img
        className="flex w-10"
        src="/public/logo.png"
        alt="yummy logo of pizza without one slice"
      />
      <p className="text-2xl font-bold tracking-wider">
        Pizz<span>World</span>
      </p>
    </Link>
  );
}

export default Logo;
