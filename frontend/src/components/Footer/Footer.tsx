import FooterNavigation from "../Navigations/FooterNavigation/FooterNavigation";

const year = new Date().getFullYear();

function Footer() {
  return (
    <>
      <p className="text-center tracking-wide">
        &copy; {year} PizzWorld, Inc. All rights reserved.
      </p>
      <FooterNavigation />
    </>
  );
}

export default Footer;
