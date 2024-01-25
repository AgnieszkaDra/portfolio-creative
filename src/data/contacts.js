import { faEnvelope, faPhone, faInfo } from '@fortawesome/free-solid-svg-icons'


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
          icon: faInfo,
          data: 'This contact form does not send message'
        },
      ]
    },
    profileDescription: {
      name: 'Agnieszka Dragańczyk',
      position: 'FRONTEND DEVELOPER - junior'
    }
  }

  export default contacts