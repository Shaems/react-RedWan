import ImgH from '../../images/home.svg'
import Img2 from '../../images/office.svg'
import Img3 from '../../images/svg-4.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Internet Hogar',
    headline: 'Conectate a la red más rápida',
    description: 'Navegá a gran velocidad con todos tus dispositivos conectados en simultáneo, mirá videos en alta definición y mantenete siempre conectado.',
    buttonLabel: 'Me interesa',
    imgStart: false,
    img: ImgH,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Home Office',
    headline: 'Trabaja desde casa con la mejor velocidad',
    description: 'Plan diseñado para mayor velocidad de bajada y subida. Personalizado para teletrabajo.',
    buttonLabel: 'Quiero más info',
    imgStart: true,
    img: Img2,
    alt: 'Pig',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Instalación 100% bonificada',
    headline: 'Autoinstalación',
    description: 'El técnico instala sin ingresar a tu domicilio. Te entregara una caja con el modem y las instrucciones para que te puedas conectar en pocos minutos.',
    buttonLabel: 'Quiero mi modem',
    imgStart: false,
    img: Img3,
    alt: 'paper',
    dark: false,
    primary: false,
    darkText: true,
};