
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const sections = [
    { name: 'home', icon: faHouse , text: 'home'},
    { name: 'about', icon: faUser, text: 'user'},
    { name: 'portfolio', icon: faBriefcase, text: 'envelope'},
    { name: 'contact', icon: faEnvelope , text: 'contact'},
]

export default sections