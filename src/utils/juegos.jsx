/**
 id_game 1 = PC
 id_game 2 = PS4
 id_game 3 = XBOX
 */
const juegos =  [
    {"id":1,
    "category":"PS4",
    "id_game":2,
     "thumb":"https://compass-ssl.xbox.com/assets/a4/2f/a42ff3fd-cba2-4abb-a15c-4065f76cb525.jpg?n=Mortal-Kombat-11_GLP-Page-Hero-0_1083x609_02.jpg",
     "title":'Mortal Kombat 11 Ultimate',
     "description":'Las nuevas variantes de los personajes te ofrecen un control de tus kombatientes sin precedentes, ya que podrás personalizarlos como tú quieras. El motor gráfico, además de mostrar con gran detalle cada destrucción craneal y ocular, te acercará tanto al kombate que casi podrás sentirlo. Y eso no es todo: las cinemáticas del modo Historia te traen a los kombatientes klásicos y a nuevos personajes, que continuarán esta épica saga creada hace 25 años.',
     "normalPrice": 35,
     "stock": 5,
     "cover_size": '50px'
    },
    {
    "id":2,
    "category":"XBOX",
    "id_game":3,
     "thumb":"https://generacionxbox.com/wp-content/uploads/2017/08/ark-survival-evolved-analisis-portada-generacion-xbox.jpg",
     "title":'ARK: Survival Evolved',
     "description":'Juega como un hombre o una mujer desnudo, congelándote y muriéndote de hambre en una isla misteriosa. Debes cazar, cosechar, crear objetos, cultivar, y construir refugios para sobrevivir. Usa tu habilidad y astucia para matar, domesticar, criar y cabalgar dinosaurios y otras criaturas primitivas.',
     "normalPrice": 3,
     "stock": 10,
     "cover_size": '50px'
    },
    {
    "id":3,
    "category":"PC",
    "id_game":1,
     "thumb":"https://www.lagzero.net/wp-content/uploads/2014/06/Mortal_Kombat_X_logo.jpg",
     "title":'Mortal Kombat X',
     "description":'¿Quién es el siguiente? Disfruta de la nueva generación de la franquicia de lucha n.º 1. Mortal Kombat X reúne un aspecto cinematográfico y una mecánica de juego nunca vistos. Por primera vez, los jugadores pueden elegir múltiples variantes de cada personaje con impacto tanto en la estrategia como en el estilo de lucha.',
     "normalPrice": 25,
     "stock": 9,
     "cover_size": '50px'
    },
    {
    "id":4,
    "category":"PC",
    "id_game":1,
    "thumb":"https://media.vandal.net/m/22777/the-forest-201852113348_17.jpg",
    "title":'The Forest',
    "description":"The Forest es un videojuego perteneciente al género de videojuego de terror en primera persona desarrollado por la empresa Endnight Games para las plataformas Microsoft Windows y PlayStation 4. La versión Pre-Alfa del juego está disponible en Steam desde el 30 de mayo de 2014. Los primeros comentarios de la versión pre-alfa fueron altamente positivos. La versión final del juego tuvo su lanzamiento en PC el 30 de abril de 2018. Mientras que en la consola PlayStation 4 fue lanzada el 6 de noviembre del mismo año.",
    "normalPrice": 8,
    "stock": 5,
    "cover_size": '50px'
    },
    {
    "id":5,
    "category":"PC",
    "id_game":1,
    "thumb":"http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6",
    "title":'Counter-Strike: Global Offensive',
    "description":"Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.)",
    "normalPrice": 7,
    "stock": 8,
    "cover_size": '50px'
    },
    {
    "id":6,
    "category":"PS4",
    "id_game":2,
    "thumb":"https://images.greenmangaming.com/00c7a0f6e00d4f2c9482122d9510a1bc/9cdc3a7ab4f24078b7d2c1ff1044715a.jpg",
    "title":'Shadow of the Tomb Raider',
    "description":"En Shadow of the Tomb Raider: Definitive Edition, vive el capítulo final de la historia sobre el origen de Lara, en el que se convierte en la saqueadora de tumbas que está destinada a ser. Esta edición incluye el juego básico y siete tumbas de desafío de contenido descargable, así como armas, atuendos y habilidades descargables. Shadow of the Tomb Raider: Definitive Edition es la opción definitiva para vivir el momento que marcó la vida de Lara.",
    "normalPrice": 39,
    "stock": 26,
    "cover_size": '50px'
    },
    { 
      "id":7,
      "category":"XBOX",
      "id_game":3,
      "thumb":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHT3oJ5_n2wWEsYI10UbtUxcR8orePmONQg&usqp=CAU",
      "title":'Forza Moto7',
      "description":"Forza Motorsport 7 es donde los pilotos de carreras, derrape y aceleración, tuneadores y creadores se reúnen en una comunidad dedicada a todo lo automotriz. Conduce los autos de tus sueños, con más de 700 asombrosos vehículos a elegir incluyendo la mayor colección de Ferraris, Porsches y Lamborghinis. Enfrenta retos en 30 destinos famosos y 200 pistas, donde las condiciones de la carrera cambian cada vez que regresas a la pista. ¡Vívelo todo en a asombrosos 60fps y resolución nativa de 4K en HDR!",
      "normalPrice": 23,
      "stock": 12,
      "cover_size": '50px'
      },
      {
        "id":8,
        "category":"PS4",
        "id_game":2,
        "thumb":"https://i.ytimg.com/vi/EG5GkXU13WA/maxresdefault.jpg",
        "title":'Marvels Spider-Man',
        "description":"Vive la adrenalina de la edición Juego del año de Marvel’s Spider-Man, que incluye el juego completo, además del contenido descargable completo de los arcos argumentales de Marvel’s Spider-Man: La ciudad que nunca duerme.",
        "normalPrice": 19,
        "stock": 20,
        "cover_size": '50px'
        },
        {
        "id":9,
        "category":"XBOX",
        "id_game":3,
        "thumb":"https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg",
        "title":'Halo Infinite',
        "description":"La legendaria saga Halo regresa con la campaña de Master Chief más amplia hasta la fecha y una experiencia multijugador gratuita revolucionaria.",
        "normalPrice": 23,
        "stock": 23,
        "cover_size": '50px'
        }, 
    
  ];
 export default juegos;