export interface Project {
  id: string;
  imgPortada: string;
  imgFull: string;
  titulo: string;
  descripcion: string;
  linkExterno?: string; // Para proyectos que tienen un link (ej. proyecto 41)
}

export const proyectos: Project[] = [
  {
    id: "1",
    imgPortada: "/imagenes/marca-programa-elegi-lujan.jpg",
    imgFull: "/imagenes/marca-programa-elegi-lujan.jpg",
    titulo: "Programa 'Elegí Luján'",
    descripcion: "Diseño de marca y piezas gráficas para el programa Elegí Luján, que impulsa la producción local y promueve el consumo de productos elaborados en el partido de Luján."
  },
  {
    id: "2",
    imgPortada: "/imagenes/programa-elegi-lujan-stand.gif",
    imgFull: "/imagenes/programa-elegi-lujan-stand.gif",
    titulo: "Programa 'Elegí Luján'",
    descripcion: "Diseño de marca y piezas gráficas para el programa Elegí Luján, que impulsa la producción local y promueve el consumo de productos elaborados en el partido de Luján."
  },
  {
    id: "3",
    imgPortada: "/imagenes/tarjeta-programa-elegi-lujan.gif",
    imgFull: "/imagenes/tarjeta-programa-elegi-lujan.gif",
    titulo: "Tarjeta Programa 'Elegí Luján'",
    descripcion: "Diseño de marca y piezas gráficas para el programa Elegí Luján, que impulsa la producción local y promueve el consumo de productos elaborados en el partido de Luján."
  },
  {
    id: "4",
    imgPortada: "/imagenes/guardia-urbana-lujan-alerta24.jpg",
    imgFull: "/imagenes/guardia-urbana-lujan-alerta24.jpg",
    titulo: "Guardia Urbana Luján",
    descripcion: "Elaboración de un manual para la correcta aplicación de la imagen institucional en vehículos oficiales de la Guardia Urbana del municipio de Luján."
  },
  {
    id: "5",
    imgPortada: "/imagenes/boletin-edunlu-2023.jpg",
    imgFull: "/imagenes/boletin-edunlu-2023.jpg",
    titulo: "Boletín EdUNLu (2023)",
    descripcion: "Diseño del boletín mensual de EdUNLu, destinado a difundir novedades, presentaciones y ferias. Se envía por correo electrónico a la comunidad universitaria, medios de comunicación y público en general."
  },
  {
    id: "6",
    imgPortada: "/imagenes/sistema-cuarentena-lujan-2020.jpg",
    imgFull: "/imagenes/sistema-cuarentena-lujan-2020.jpg",
    titulo: "Campaña COVID-19",
    descripcion: "Diseño y publicación de campaña de prevención del COVID-19 en redes sociales del Municipio de Luján. (año 2020)"
  },
  {
    id: "7",
    imgPortada: "/imagenes/01-redes-edunlu-2023.jpg",
    imgFull: "/imagenes/01-redes-edunlu-2023.jpg",
    titulo: "Redes EdUNLu (2023)",
    descripcion: "Diseño de contenidos gráficos para las redes sociales de EdUNLu, con publicaciones sobre actividades institucionales, eventos culturales, novedades editoriales y citas destacadas."
  },
  {
    id: "8",
    imgPortada: "/imagenes/02-redes-edunlu-2023.jpg",
    imgFull: "/imagenes/02-redes-edunlu-2023.jpg",
    titulo: "Redes EdUNLu (2023)",
    descripcion: "Diseño de contenidos gráficos para las redes sociales de EdUNLu, con publicaciones sobre actividades institucionales, eventos culturales, novedades editoriales y citas destacadas."
  },
  {
    id: "9",
    imgPortada: "/imagenes/03-redes-edunlu-2023.jpg",
    imgFull: "/imagenes/03-redes-edunlu-2023.jpg",
    titulo: "Redes EdUNLu (2023)",
    descripcion: "Diseño de contenidos gráficos para las redes sociales de EdUNLu, con publicaciones sobre actividades institucionales, eventos culturales, novedades editoriales y citas destacadas."
  },
  {
    id: "10",
    imgPortada: "/imagenes/01-guardia-urbana-lujan-alerta24.jpg",
    imgFull: "/imagenes/01-guardia-urbana-lujan-alerta24.jpg",
    titulo: "Guardia Urbana Luján",
    descripcion: "Elaboración de un manual para la correcta aplicación de la imagen institucional en vehículos oficiales de la Guardia Urbana del municipio de Luján."
  },
  {
    id: "11",
    imgPortada: "/imagenes/01-escudo-hereldico-lujan.jpg",
    imgFull: "/imagenes/01-escudo-hereldico-lujan.jpg",
    titulo: "Marca Municipio de Luján (2019)",
    descripcion: "Proyecto integral de rediseño del símbolo identificador del Municipio de Luján, que incluyó también la creación de un logotipo tipográfico."
  },
  {
    id: "12",
    imgPortada: "/imagenes/02-escudo-hereldico-lujan.jpg",
    imgFull: "/imagenes/02-escudo-hereldico-lujan.jpg",
    titulo: "Marca Municipio de Luján (2019)",
    descripcion: "Proyecto integral de rediseño del símbolo identificador del Municipio de Luján, que incluyó también la creación de un logotipo tipográfico."
  },
  {
    id: "13",
    imgPortada: "/imagenes/03-portadas-esas-cosas.jpg",
    imgFull: "/imagenes/03-portadas-esas-cosas.jpg",
    titulo: "Esas cosas que se saben (2022)",
    descripcion: "Diseño de portada editorial para Esas cosas que se saben, obra del autor Marcos Tabossi."
  },
  {
    id: "14",
    imgPortada: "/imagenes/01-pautas-grafica-vehicular.jpg",
    imgFull: "/imagenes/01-pautas-grafica-vehicular.jpg",
    titulo: "Gráfica Vehicular (2021)",
    descripcion: "Manual de aplicación gráfica para vehículos del parque automotor institucional."
  },
  {
    id: "15",
    imgPortada: "/imagenes/02-punto-ciudadano-lujan.jpg",
    imgFull: "/imagenes/02-punto-ciudadano-lujan.jpg",
    titulo: "Marca Punto Ciudadano Luján (2020)",
    descripcion: "Diseño de identidad visual para el programa 'Punto Ciudadano', una iniciativa que acerca servicios, información, trámites y asesoramiento de la Municipalidad de Luján a los distintos barrios del partido."
  },
  {
    id: "16",
    imgPortada: "/imagenes/01-ciclo-cine-educacion.jpg",
    imgFull: "/imagenes/01-ciclo-cine-educacion.jpg",
    titulo: "Ciclo Cine y Educación (2025)",
    descripcion: "Diseño de identidad visual, cartelería y piezas gráficas para el ciclo 'Cine y Educación', organizado por el Departamento de Educación de la Universidad Nacional de Luján."
  },
  {
    id: "17",
    imgPortada: "/imagenes/01-vecinos-conectados-app.jpg",
    imgFull: "/imagenes/01-vecinos-conectados-app.jpg",
    titulo: "Marca Vecinos Conectados APP (2021)",
    descripcion: "Diseño de marca y maqueta para la aplicación “VECINOS CONECTADOS APP”."
  },
  {
    id: "18",
    imgPortada: "/imagenes/01-variete-2018.jpg",
    imgFull: "/imagenes/01-variete-2018.jpg",
    titulo: "Afiche Varieté (2018)",
    descripcion: "Diseño de afiche para la varieté organizada por la Asociación Cultural y Biblioteca Popular Ameghino de Luján."
  },
  {
    id: "19",
    imgPortada: "/imagenes/01-unlu-50-aniversario.jpg",
    imgFull: "/imagenes/01-unlu-50-aniversario.jpg",
    titulo: "Concurso UNLu 50 Años",
    descripcion: "Diseño de identidad visual para el concurso de artes visuales 'UNLu 50 Años'."
  },
  {
    id: "20",
    imgPortada: "/imagenes/01-sem-lujan.jpg",
    imgFull: "/imagenes/01-sem-lujan.jpg",
    titulo: "SEM Luján (2021)",
    descripcion: "Diseño integral del sistema de identidad visual para el 'Sistema de Estacionamiento Medido': desarrollo de marca, cartelería, señalética, piezas informativas, infracciones, mapas y contenido para redes sociales."
  },
  {
    id: "21",
    imgPortada: "/imagenes/00-atunlu-40-aniversario.jpg",
    imgFull: "/imagenes/00-atunlu-40-aniversario.jpg",
    titulo: "ATUNLu 40 Años (2024)",
    descripcion: "Diseño de marca conmemorativa por el 40º aniversario de la Asociación de Trabajadores y Trabajadoras de la Universidad Nacional de Luján."
  },
  {
    id: "22",
    imgPortada: "/imagenes/01-atunlu-40-aniversario.jpg",
    imgFull: "/imagenes/01-atunlu-40-aniversario.jpg",
    titulo: "ATUNLu 40 Años (2024)",
    descripcion: "Diseño de marca conmemorativa por el 40º aniversario de la Asociación de Trabajadores y Trabajadoras de la Universidad Nacional de Luján."
  },
  {
    id: "23",
    imgPortada: "/imagenes/01-dossier-lujan-polo.jpg",
    imgFull: "/imagenes/01-dossier-lujan-polo.jpg",
    titulo: "Dossier Ciudad de Luján (2021)",
    descripcion: "Diseño y diagramación del dossier 'Ciudad de Luján: un polo estratégico para las inversiones', incluyendo desarrollo de mapas, esquemas y recursos gráficos informativos."
  },
  {
    id: "24",
    imgPortada: "/imagenes/02-dossier-lujan-polo.jpg",
    imgFull: "/imagenes/02-dossier-lujan-polo.jpg",
    titulo: "Dossier Ciudad de Luján (2021)",
    descripcion: "Diseño y diagramación del dossier 'Ciudad de Luján: un polo estratégico para las inversiones', incluyendo desarrollo de mapas, esquemas y recursos gráficos informativos."
  },
  {
    id: "25",
    imgPortada: "/imagenes/03-dossier-lujan-polo.jpg",
    imgFull: "/imagenes/03-dossier-lujan-polo.jpg",
    titulo: "Dossier Ciudad de Luján (2021)",
    descripcion: "Diseño y diagramación del dossier 'Ciudad de Luján: un polo estratégico para las inversiones', incluyendo desarrollo de mapas, esquemas y recursos gráficos informativos."
  },
  {
    id: "26",
    imgPortada: "/imagenes/01-banners-lujan-municipio.jpg",
    imgFull: "/imagenes/01-banners-lujan-municipio.jpg",
    titulo: "Fly Banner Gota (2020)",
    descripcion: "Diseño de banners institucionales para el municipio de Luján."
  },
  {
    id: "27",
    imgPortada: "/imagenes/01-cav-lujan.jpg",
    imgFull: "/imagenes/01-cav-lujan.jpg",
    titulo: "Marca CAV (2021)",
    descripcion: "Diseño de marca para la plataforma CAV (Centro de Atención al Vecino): desarrollo de marca y lineamientos gráficos para redes."
  },
  {
    id: "28",
    imgPortada: "/imagenes/01-mujeres-expo.jpg",
    imgFull: "/imagenes/01-mujeres-expo.jpg",
    titulo: "Mujeres Emprendedoras (2022)",
    descripcion: "Diseño de marca e identidad visual para la exposición 'Mujeres Emprendedoras de Luján': sistema gráfico y piezas de comunicación."
  },
  {
    id: "29",
    imgPortada: "/imagenes/02-exportacion-lujan.jpg",
    imgFull: "/imagenes/02-exportacion-lujan.jpg",
    titulo: "Catálogo Exportable de Luján (2022)",
    descripcion: "Diseño y diagramación del catálogo de empresas de la ciudad de Luján."
  },
  {
    id: "30",
    imgPortada: "/imagenes/01-exportacion-lujan.jpg",
    imgFull: "/imagenes/01-exportacion-lujan.jpg",
    titulo: "Catálogo Exportable de Luján (2022)",
    descripcion: "Diseño y diagramación del catálogo de empresas de la ciudad de Luján."
  },
  {
    id: "31",
    imgPortada: "/imagenes/02-edunlu-patria.jpg",
    imgFull: "/imagenes/02-edunlu-patria.jpg",
    titulo: "Redes EdUNLu (2025)",
    descripcion: "Diseño para las redes sociales de la Editorial de la Universidad Nacional de Luján. Efemérides patrias."
  },
  {
    id: "32",
    imgPortada: "/imagenes/03-edunlu-patria.jpg",
    imgFull: "/imagenes/03-edunlu-patria.jpg",
    titulo: "Redes EdUNLu (2025)",
    descripcion: "Diseño para las redes sociales de la Editorial de la Universidad Nacional de Luján. Efemérides patrias."
  },
  {
    id: "33",
    imgPortada: "/imagenes/01-edunlu-patria.jpg",
    imgFull: "/imagenes/01-edunlu-patria.jpg",
    titulo: "Redes EdUNLu (2025)",
    descripcion: "Diseño para las redes sociales de la Editorial de la Universidad Nacional de Luján. Efemérides patrias."
  },
  {
    id: "34",
    imgPortada: "/imagenes/03-universo-animal.jpg",
    imgFull: "/imagenes/03-universo-animal.jpg",
    titulo: "Muestra 'Universo Animal' (2017)",
    descripcion: "Diseño de identidad para la muestra “Universo Animal”, realizada en el Museo Municipal de Bellas Artes “Fernán Félix de Amador”. La propuesta fue desarrollada en base a las obras de los artistas Meyi Diz y Santiago González, articulando una identidad visual que acompañe y potencie el imaginario de la muestra."
  },
  {
    id: "35",
    imgPortada: "/imagenes/02-universo-animal.jpg",
    imgFull: "/imagenes/02-universo-animal.jpg",
    titulo: "Muestra 'Universo Animal' (2017)",
    descripcion: "Diseño de identidad para la muestra “Universo Animal”, realizada en el Museo Municipal de Bellas Artes “Fernán Félix de Amador”. La propuesta fue desarrollada en base a las obras de los artistas Meyi Diz y Santiago González, articulando una identidad visual que acompañe y potencie el imaginario de la muestra."
  },
  {
    id: "36",
    imgPortada: "/imagenes/01-variete-esteban-badano-2018.jpg",
    imgFull: "/imagenes/01-variete-esteban-badano-2018.jpg",
    titulo: "Afiche Varieté (2018)",
    descripcion: "Varieté organizada por la Asociación Cultural y Biblioteca Popular Ameghino de Luján. El afiche fue desarrollado a partir de obras del artista Esteban Badano, adaptando su lenguaje visual para generar una propuesta estética coherente y atractiva."
  },
  {
    id: "37",
    imgPortada: "/imagenes/01-malvinas-atunlu.jpg",
    imgFull: "/imagenes/01-malvinas-atunlu.jpg",
    titulo: "2 de Abril (2025)",
    descripcion: "Diseño para redes sociales por el Día del Veterano y de los Caídos en la Guerra de Malvinas."
  },
  {
    id: "38",
    imgPortada: "/imagenes/01-revista-polifonias.jpg",
    imgFull: "/imagenes/01-revista-polifonias.jpg",
    titulo: "Revista Polifonías (2025)",
    descripcion: "Rediseño de portada para la revista Polifonías."
  },
  {
    id: "39",
    imgPortada: "/imagenes/01-boletas-lujan.jpg",
    imgFull: "/imagenes/01-boletas-lujan.jpg",
    titulo: "Diseño de Tasas Municipales (2020)",
    descripcion: "Maquetado de encabezados frontales e incorporación de avisos informativos en el dorso, con enfoque en claridad visual e identidad institucional."
  },
  {
    id: "40",
    imgPortada: "/imagenes/01-semana-memoria.jpg",
    imgFull: "/imagenes/01-semana-memoria.jpg",
    titulo: "Jornada Semana de la Memoria (2025)",
    descripcion: "Identidad visual para la jornada conmemorativa del 24 de marzo, Día de la Memoria por la Verdad y la Justicia. La propuesta gráfica acompaña actividades institucionales en homenaje a las víctimas del terrorismo de Estado."
  },
  {
    id: "41",
    imgPortada: "/imagenes/01-edunlu-aniversario.jpg",
    imgFull: "/imagenes/01-edunlu-aniversario.jpg",
    titulo: "10° aniversario EdUNLu (2025)",
    descripcion: "Sitio conmemorativo del 10° aniversario de la Editorial de la Universidad Nacional de Luján (EdUNLu). Un recorrido por su historia, publicaciones, autores y aportes a la cultura y el conocimiento.",
    linkExterno: "https://edunlu-editorial.github.io/10-ANIVERSARIO/"
  },
  {
    id: "42",
    imgPortada: "/imagenes/01-informe-estado.jpg",
    imgFull: "/imagenes/01-informe-estado.jpg",
    titulo: "Informe Municipio de Luján (2020)",
    descripcion: "Diseño editorial del informe que presenta el Estado de Situación del Municipio de Luján."
  },
  {
    id: "43",
    imgPortada: "/imagenes/02-informe-estado.jpg",
    imgFull: "/imagenes/02-informe-estado.jpg",
    titulo: "Informe Municipio de Luján (2020)",
    descripcion: "Diseño editorial del informe que presenta el Estado de Situación del Municipio de Luján."
  },
  {
    id: "44",
    imgPortada: "/imagenes/01-mapa-sem.jpg",
    imgFull: "/imagenes/01-mapa-sem.jpg",
    titulo: "Diseño de Mapas SEM (2021)",
    descripcion: ""
  }
];
