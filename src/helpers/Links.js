import { FaHome } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';
import { RiToolsFill } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';


export const Links = [
    {
        id: 1,
        title: 'Home',
        icon: <FaHome />,
        url: '/'
    },
    {
        id: 2,
        title: 'About',
        icon: <MdPerson />,
        url: '/about'
    },
    {
        id: 3,
        title: 'Resume',
        icon: <AiFillFileText />,
        url: '/resume'
    },
    {
        id: 4,
        title: 'Portfolio',
        icon: <FaCode />,
        url: '/portfolio'
    },
    {
        id: 5,
        title: 'Services',
        icon: <RiToolsFill />,
        url: '/services'
    },
    {
        id: 6,
        title: 'Contact',
        icon: <IoIosMail />,
        url: '/contact'
    }
]