export default {
  global: {
    Name: 'Funciones de supervisión y planeación de procedimientos',
    Description:
      'El componente formativo desarrolla fundamentos para planear, organizar, supervisar y controlar servicios de seguridad privada. Integra esquemas de protección, recursos humanos y tecnológicos, protocolos, estudios de seguridad, gestión del tiempo, perfiles, novedades y régimen sancionatorio, con énfasis en la prevención de riesgos, la toma de decisiones y la mejora continua de la operación.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Seguridad pública y seguridad privada',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diferencias entre seguridad pública y seguridad privada',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Similitudes entre seguridad pública y seguridad privada',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Esquemas de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de esquema de seguridad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Técnicas de análisis para estructurar esquemas de seguridad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Equipos en la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos, clases y características de los equipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Manual operacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Controles de seguridad asociados a los equipos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas tecnológicas en la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de herramientas tecnológicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clases de herramientas tecnológicas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tipos y características de los servicios de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de servicios de seguridad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características de los servicios de seguridad privada',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diseño y operación del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Control de acceso y medidas de seguridad física',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Vigilancia y monitoreo',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Seguridad de la información y las redes',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Capacitación y cultura de seguridad',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Planes de respuesta, evaluación y mejora continua',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Documentación, registro y mantenimiento',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Recursos humanos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Gestión de Recursos Humanos en la seguridad privada',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Selección, formación y gestión del desempeño',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Políticas y cultura organizacional de seguridad ',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Gestión de crisis y continuidad operativa',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Protocolo de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto y características de protocolos de seguridad',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Responsables y condiciones para la prestación del servicio',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Elementos del puesto de vigilancia',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Protocolos aplicables al puesto de vigilancia',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Diferencia entre protocolo y procedimiento de seguridad',
            hash: 't_8_5',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Estudio de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto y elementos del estudio de seguridad',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Ejercicios de seguridad',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Análisis de riesgos y áreas de pérdidas potenciales',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Diseño del estudio de seguridad',
            hash: 't_9_4',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Administración en la seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Concepto e importancia de la administración en seguridad',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Funciones administrativas en seguridad',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Instrumentos de gestión y control administrativo',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Liderazgo, comunicación y administración de personal',
            hash: 't_10_4',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'El tiempo y su aplicación operativa en la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Fundamentos del tiempo operativo',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Planificación e intervalos operativos',
            hash: 't_11_2',
          },
          {
            numero: '11.3',
            titulo: 'Relevos y transferencia de responsabilidad',
            hash: 't_11_3',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Perfiles en seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Concepto y utilidad del perfil',
            hash: 't_12_1',
          },
          {
            numero: '12.2',
            titulo: 'Especializaciones y enfoques de perfil',
            hash: 't_12_2',
          },
          {
            numero: '12.3',
            titulo:
              'Componentes del perfil profesional y del perfil del puesto',
            hash: 't_12_3',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Control del servicio de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '13.1',
            titulo: 'Concepto de control en los servicios de seguridad',
            hash: 't_13_1',
          },
          {
            numero: '13.2',
            titulo: 'Tipos de control',
            hash: 't_13_2',
          },
          {
            numero: '13.3',
            titulo: 'Características del control de seguridad',
            hash: 't_13_3',
          },
        ],
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Novedades en los servicios de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '14.1',
            titulo: 'Concepto y tipos de novedad',
            hash: 't_14_1',
          },
          {
            numero: '14.2',
            titulo: 'Elaboración y presentación del reporte de novedades',
            hash: 't_14_2',
          },
          {
            numero: '14.3',
            titulo: 'Comunicación de novedades',
            hash: 't_14_3',
          },
        ],
      },
      {
        nombreRuta: 'tema15',
        numero: '15',
        titulo: 'Régimen de sanciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '15.1',
            titulo: 'Concepto y tipos de sanciones',
            hash: 't_15_1',
          },
          {
            numero: '15.2',
            titulo: 'Principios del régimen sancionatorio',
            hash: 't_15_2',
          },
          {
            numero: '15.3',
            titulo: 'Procedimiento sancionatorio',
            hash: 't_15_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
