import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-x-2">
      <img
        className="flex w-10"
        src="/logo.png"
        alt="yummy logo of pizza without one slice"
      />
      <p className="font-accent text-3xl font-bold tracking-widest text-amber-500">
        Pizz<span className="text-green-600">World</span>
      </p>
    </Link>
  );
}

export default Logo;
