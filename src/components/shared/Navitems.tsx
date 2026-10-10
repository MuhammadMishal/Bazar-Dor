import { allCategories } from "@/lib/api";
import NavItem from "./NavItem";

const NavItems = async () => {
  const categories = await allCategories();

  return categories.map((cat) => {
    return (
      <NavItem key={cat.id} id={cat.id}>
        <span>{cat.icon}</span>
        <span>{cat.nameBn}</span>
      </NavItem>
    );
  });
};

export default NavItems;
