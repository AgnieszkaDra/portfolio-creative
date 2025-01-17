import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useAppContext } from '../../context/useAppContext';

const Hamburger = () => {
    const { navbarOpen, openNavbar } = useAppContext();

    return (
        <button onClick={openNavbar} className="burger-menu" aria-label="Toggle navigation">
            { navbarOpen? <IoClose size={30} /> : <FaBars size={30} />}
        </button>
    );
};

export default Hamburger;