import { FaBowlFood, FaHouseUser } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { MdEmojiTransportation } from 'react-icons/md';

const getCategoryIcons = (name, { size }) => {
  const icons = {
    none: <FcAbout size={size} color={getIconColor('none')}/>,
    food: <FaBowlFood size={size} color={getIconColor('food')} />,
    transportation: <MdEmojiTransportation size={size} color={getIconColor('transportation')} />,
    communication: <GiSatelliteCommunication size={size} color={getIconColor('communication')} />,
    housing: <FaHouseUser size={size} color={getIconColor('housing')} />,
  };
  return icons[name];
};

export const getIconColor = (code) => {
  const colors = {
    none: '#0080ff',
    food: '#88C273',
    transportation: '#E07B39',
    communication: '#AAABD3',
    housing: '#ee6e9f',
  };
  return colors[code];
};

export default getCategoryIcons;
