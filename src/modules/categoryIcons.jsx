import { FaBowlFood } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { MdEmojiTransportation } from 'react-icons/md';

const getCategoryIcons = (name, { size }) => {
  const icons = {
    none: <FcAbout size={size} />,
    food: <FaBowlFood size={size} color="#88C273" />,
    transportation: <MdEmojiTransportation size={size} color="#E07B39" />,
  };
  return icons[name];
};

export default getCategoryIcons;
