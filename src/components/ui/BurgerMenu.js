import { FaBars } from 'react-icons/fa';

const BurgerMenu = ({ onClick }) => {
  return (
    <button onClick={onClick} className="burger-menu">
      <FaBars size={30} />
    </button>
  );
};

export default BurgerMenu;