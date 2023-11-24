import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'


const contacts = {
    profileBasic: { name: 'Agnieszka Dragańczyk', title: 'Junior Front End Developer'},
    profileList: {
      list: [
        {
          icon: faEnvelope,
          data: 'agnieszka.127@interia.pl'
        },
        {
          icon: faPhone,
          data: '+48 517 862 170'
        },
        {
          icon: faGlobe,
          data: 'https://subtle-tarsier-eedb30.netlify.app/'
        }
      ]
    },
    profileDescription: {
      name: 'Agnieszka Dragańczyk',
      position: 'FRONTEND DEVELOPER - junior'
    }
  }

  export default contacts