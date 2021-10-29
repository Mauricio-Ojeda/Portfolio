// Skills Icons
import htmlIcon from "./images/html5.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"



// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Mauricio Ojeda",
  headerTagline: [
    //Line 1 For Header
    "Aficionado a la Programacion",
    //Line 2 For Header
    "Orientado al Front-End",
    //Line 3 For Header
    "Con ganas de aprender cada vez mas y mas",
  ],
  //   Header Paragraph
  headerParagraph:
    "Estoy buscando insertarme en la Industria IT. ¿Queres ayudarme a lograr este desafio? ",

  //Contact Email
  contactEmail: "ojedam150@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Cotizador de Criptomonedas", //Project Title - Add Your Project Title Here
      para:
        "App para conocer los valores de las cryptos mas conocidas", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/hsTJb00/Cotizador-de-Criptomonedas.png",
      //Project URL - Add Your Project Url Here
      url: "https://api-crypto-react.netlify.app",
    },
    {
      title: "Buscador de Clima", //Project Title - Add Your Project Title Here
      para:
        "Buscador de clima, usando la API de  OpenWeatherMap", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/ss33yWQ/Clima-App.png",
      //Project URL - Add Your Project Url Here
      url: "https://clima-react-app-1.netlify.app",
    },
    {
      title: "Buscador de Bebidas", //Project Title - Add Your Project Title Here
      para:
        "Buscador de bebidas por ingrediente o categorias", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/NWcFh0P/buscador-bebidas.png",
      //Project URL - Add Your Project Url Here
      url: "https://buscador-de-bebidas-react.netlify.app",
    },    
    {
      title: "Simon Game", //Project Title - Add Your Project Title Here
      para:
        "Juego Simon desarrollado con JavaScript Vanilla y jquery", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/2jDgdFc/Simon-Game.png",
      //Project URL - Add Your Project Url Here
      url: "https://mauricio-ojeda.github.io/Simon-Game/",
    },
    {
      title: "BlackJack", //Project Title - Add Your Project Title Here
      para:
        "Juego de BlackJack desarrollado con JavaScript Vanilla", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/sKGzQ5p/black-Jack.png",
      //Project URL - Add Your Project Url Here
      url: "https://mauricio-ojeda.github.io/BlackJack/",
    },
    
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hace mas de un año por un proyecto Familiar de venta online, tuve que crear un ecommerce y despues de mucho investigar decidi hacerlo en Wordpress con woocommerce. Lo pude lograr pero por la inesperiencia cometi muchos errores. Asi que decidi que la mejor forma era estudiar como hacerlo yo mismo.",
  aboutParaTwo:
    "Siempre me habia gustado la tecnologia y la programacion de hecho curse parte del primer año de la fucultad de informatica de la UNLP en el 2005. Al intentar aprender sobre desarrollo Web conoci un mundo grandisimo pero mas me metia y mas me gustaba.",
  aboutParaThree:
    "Hoy puedo decir con seguridad que amo programar y dar solucion a los problemas. Y que cada dia quiero aprender mas reforzando lo que se y aprendiendo cosas nuevas. ",
  aboutImage:
    "https://i.ibb.co/MkXBtGv/IMG-20211008-140601.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML5",
    },
    {
      img: cssIcon,
      para:
        "CSS3",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },   
    
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Conoceme un poco mas",
  promotionPara:
    "Si quienes concocer un poco mas sobre mi perfil y sobre mi codigo te dejo los links de mis redes. Espero que podamos trabajar juntos.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/Mauricio-Ojeda" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/mauricio-ojeda-/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/mauojed/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
