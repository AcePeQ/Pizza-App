import HeroScroll from "../../components/HeroScroll/HeroScroll";
import Menu from "../../features/Menu/Menu";

function MenuPage() {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroScroll />
      <Menu />
    </div>
  );
}

export default MenuPage;
