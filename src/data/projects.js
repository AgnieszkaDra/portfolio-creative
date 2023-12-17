import pharmacy from '../assets/projects/pharmacy/pharmacy.png'
import drug from '../assets/projects/pharmacy/leki.webp'
import calculator1 from '../assets/projects/calculator1.png'
import calculator2 from '../assets/projects/calculator2.png'
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const projects = {
    categories: [
    { 
        name: 'Pharmacy Website', 
        id:'01', 
        imageUrl: drug, 
        imageUrl2: pharmacy,
        github: faHome,
        view: '/',
        description: 'This is a website, which has written two times.First time using pure JS and second time using React.', 
        features: ['login user', 'useful website', 'unicate form to order'],
    
        
        githubUrl: 'https://github.com/AgnieszkaDra/portfolio-creative'
},
    
    { 
        name: 'Calculator Task',  
        id:'02',
        imageUrl: calculator1,
        imageUrl2: calculator2,
        githubUrl:  'https://github.com/AgnieszkaDra/Calculator-task',
        description: 'Base calculator, which has written in Vanilla JS technology.',
        features: ['useful calculator', 'visible previous operations']
    },
    // { 
    //     name: 'Calculator Game',  
    //     id:'03',
    //     imageUrl: calculator1,
    //     imageUrl2: calculator2,
    //     githubUrl:  'https://github.com/AgnieszkaDra/Calculator-task',
    //     description: 'Base calculator, which has written in Vanilla JS technology.',
    //     features: ['useful calculator', 'visible previous operations']
    // },
    // { name: 'projects', id:'03', text: 'envelope'},
    // { name: 'contact',  id:'04', text: 'contact'},
]
}

export default projects

