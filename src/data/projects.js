import pharmacy from '../assets/projects/pharmacy/pharmacy.png'
import drug from '../assets/projects/pharmacy/leki.webp'
import calculator1 from '../assets/projects/calculator1.png'
import calculator2 from '../assets/projects/calculator.png'
import game1 from '../assets/projects/game1.png'
import game2 from '../assets/projects/game2.png'
import basicPage from '../assets/projects/basicpage.png'
import basicPage2 from '../assets/projects/basicpage2.png'
import basic2 from '../assets/projects/basic2.png'
import basic3 from '../assets/projects/basic3.png'
import basic4 from '../assets/projects/basic4.png'
import { faHome } from '@fortawesome/free-solid-svg-icons';



export const projects = {
    categories: [
        {
            name: 'Pharmacy Website',
            id: '01',
            imageUrl: drug,
            imageUrl2: pharmacy,
            github: faHome,
            description: 'This is a website, which has written two times.First time using pure JS and second time using React.',
            features: ['login user', 'useful website', 'unicate form to order'],
            githubUrl: 'https://github.com/AgnieszkaDra/portfolio-creative',
            mainColor: 'red'

        },

        { 
            name: 'Calculator Task',  
            id:'02',
            imageUrl: calculator1,
            imageUrl2: calculator2,
            githubUrl:  'https://github.com/AgnieszkaDra/Calculator-task',
            description: 'Base calculator, which has written in Vanilla JS technology.',
            features: ['useful calculator', 'visible previous operations'],
            mainColor: 'rgb(66, 230, 219)'
        },
        { 
            name: 'Calculator Game',  
            id:'03',
            imageUrl: game1,
            imageUrl2: game2,
            githubUrl:  'https://github.com/AgnieszkaDra/Calculator-task',
            description: 'Base calculator, which has written in Vanilla JS technology.',
            features: ['useful calculator', 'visible previous operations'],
            mainColor: ' rgb(159, 189, 189)'
        },
        { 
            name: 'Basic page in React',  
            id:'04',
            imageUrl: basicPage,
            imageUrl2: basic2,
            view: 'https://mellifluous-profiterole-46d3ae.netlify.app/',
            githubUrl:  'https://github.com/AgnieszkaDra/Basic-Page-React',
            description: 'Base calculator, which has written in Vanilla JS technology.',
            features: ['original dropdown menu', 'No framework was used to create the slider.'],
            mainColor: '#e4007c'
        },
        { 
            name: 'Basic page in HTML,SCSS,JS',  
            id:'05',
            imageUrl: basic3,
            imageUrl2: basic4,
            view: 'https://timely-narwhal-bfa32d.netlify.app/',
            githubUrl:  'https://github.com/AgnieszkaDra/Basic-page-HTML-SCSS-JS',
            description: 'A basic webpage created using HTML for structure, SCSS for styling, and JavaScript for functionality.',
            features: ['basic code', 'Swiper JS library'],
            mainColor: '#e4007c'
        },
        // { name: 'projects', id:'03', text: 'envelope'},
        // { name: 'contact',  id:'04', text: 'contact'},
    ]
}

export default projects

