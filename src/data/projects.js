import pharmacy from '../assets/projects/pharmacy/pharmacy.png'
import drug from '../assets/projects/pharmacy/leki.webp'
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const projects = [
    { name: 'Pharmacy Website', id:'01', imageUrl: drug, 
    imageUrl2: pharmacy,
    
    github: faHome,
    view: '/',
    description: 'This is a website, which has written two times.First time using pure JS and second time using React.', 
    features: {['clean code','useful website']},
    githubUrl: 'https://github.com/AgnieszkaDra/portfolio-creative'
},
    
    { name: 'about',  id:'02', text: 'user'},
    { name: 'projects', id:'03', text: 'envelope'},
    { name: 'contact',  id:'04', text: 'contact'},
]

export default projects

