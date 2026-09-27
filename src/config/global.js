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
      termino: 'Administración',
      significado:
        'Proceso de planeación, organización, dirección y control de recursos para alcanzar los objetivos establecidos.',
    },
    {
      termino: 'Amenaza',
      significado:
        'Condición, agente o evento con capacidad de ocasionar daños a personas, bienes, procesos o información.',
    },
    {
      termino: 'Control',
      significado:
        'Medida destinada a prevenir, detectar, reducir o corregir situaciones que afectan el servicio de seguridad.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Herramienta que organiza actividades, responsables, plazos, turnos y momentos de ejecución.',
    },
    {
      termino: 'Esquema de seguridad',
      significado:
        'Conjunto estructurado de personas, medios, procedimientos y controles destinados a proteger activos determinados.',
    },
    {
      termino: 'Estudio de seguridad',
      significado:
        'Análisis sistemático de activos, amenazas, vulnerabilidades y riesgos para formular medidas de protección.',
    },
    {
      termino: 'Herramienta tecnológica',
      significado:
        'Solución de hardware o software utilizada para detectar, registrar, analizar o gestionar eventos de seguridad.',
    },
    {
      termino: 'Manual operacional',
      significado:
        'Documento que establece condiciones de instalación, funcionamiento, mantenimiento y utilización segura de un equipo.',
    },
    {
      termino: 'Novedad',
      significado:
        'Hecho o situación que altera el desarrollo habitual del servicio y requiere registro, comunicación o respuesta.',
    },
    {
      termino: 'Perfil de puesto',
      significado:
        'Descripción de funciones, responsabilidades, competencias y requisitos necesarios para desempeñar un cargo.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Secuencia detallada de actividades, responsables y recursos requeridos para ejecutar una tarea.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de directrices y criterios generales que orientan la actuación ante condiciones determinadas.',
    },
    {
      termino: 'Relevo',
      significado:
        'Transferencia organizada de responsabilidades, consignas, novedades y equipos entre el personal saliente y entrante.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Efecto de la incertidumbre sobre los objetivos, asociado con la probabilidad y las consecuencias de un evento.',
    },
    {
      termino: 'Supervisión',
      significado:
        'Función de seguimiento, orientación y control destinada a verificar la adecuada ejecución de un servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualícese. (s. f.). Sanciones disciplinarias laborales: ¿cuáles se pueden imponer y cuáles están prohibidas?',
      link: 'https://actualicese.com/tipos-de-sanciones-disciplinarias-que-se-pueden-imponer-a-los-trabajadores/?srsltid=AfmBOorflJPOavHlN-6nc3Ro7c_rKXl5jcWRwDWr6tOXtfwW4FQ17Fik',
    },
    {
      referencia: 'ARLSura. (s. f.). Roles y responsabilidades.',
      link: 'https://www.arlsura.com/files/roles_responsabilidades.docx',
    },
    {
      referencia: 'Arteaga. (2023). Programación turnos de vigilantes.',
      link: 'https://prezi.com/p/e27est8oudxi/programacion-turnos-de-vigilantes/',
    },
    {
      referencia:
        'ASIS. (2012). Guía para el análisis de riesgos / Protection of Assets. Archivo provisto: ASIS GDL FPSM2009 GUIA SEGURIDAD FISICA.docx.',
      link: '',
    },
    {
      referencia: 'Asis. (2012). Manual de seguridad Fisica Asis.',
      link: '',
    },
    {
      referencia: 'Avigilon. (s. f.). Physical security guide.',
      link: 'https://www.avigilon.com/blog/physical-security-guide?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Axon. (s. f.). 5 essential safety solutions private security services can provide. Axon Resource Center.',
      link: 'https://www.axon.com/resources/5-essential-safety-solutions-private-security-services-can-provide',
    },
    {
      referencia:
        'Baker, A. B. (2002, 1 de abril). A Scalable Systems Approach for Critical Infrastructure Security (SAND2002-0877). Sandia National Laboratories.',
      link: 'https://www.osti.gov/servlets/purl/800793?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Belfry. (2025). ¿Qué son los servicios de seguridad privada y qué 6 tipos se ofrecerán en 2025?',
      link: 'https://www.belfrysoftware.com/blog/private-security-services',
    },
    {
      referencia:
        'BoxerSecurity. (s. f.). PR-OPE-006 Procedimiento de Relevo de Servicio Vs02.',
      link: 'https://es.scribd.com/document/527845702/PR-OPE-006-Procedimiento-de-relevo-de-servicio-Vs02?utm_source=chatgpt.com',
    },
    {
      referencia: 'Brunalabogados. (s. f.). Proceso disciplinario laboral.',
      link: 'https://www.brunalabogados.com/wp-content/uploads/2018/03/PROCESO-DISCIPLINARIO-LABORAL.pdf',
    },
    {
      referencia:
        'Carrasco. (2022). Perfiles con habilidades en forma de T, en forma de I y en forma de Phi, ¿Qué pueden aportar a la empresa?',
      link: 'https://empresas.infoempleo.com/hrtrends/perfiles-con-habilidades-en-forma-de-t-en-forma-de-i-y-en-forma-de-phi-que-pueden-aportar-a-la-empresa/#:~:text=Por%20perfiles%20con%20habilidades%20en',
    },
    {
      referencia:
        'CityTroops. (2025). 10 actividades clave de un guardia de seguridad.',
      link: 'https://blog.citytroops.com/es/10-actividades-clave-guardia-de-seguridad/',
    },
    {
      referencia: 'Cohen, N. (2009). Manual de Requisitos Operativos de CCTV.',
      link: 'https://www.dmeresources.com/index.php/component/edocman/57-uk-home-office-cctv-operational-requirements-manual-2009?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Decreto 356 de 1994. (1994). Por el cual se expide el Estatuto de Vigilancia y Seguridad Privada. Diario Oficial de Colombia.',
      link: 'https://www.supervigilancia.gov.co/publicaciones/211/decreto-356-de-1994---estatuto-de-vigilancia-y-seguridad-privada/',
    },
    {
      referencia:
        'De Waard. (2015). The Private Security Industry in International Perspective.',
      link: 'https://www.researchgate.net/publication/227162732_The_Private_Security_Industry_in_International_Perspective',
    },
    {
      referencia: 'DHS. (2013). Closed Circuit Television Technology.',
      link: 'https://www.dhs.gov/sites/default/files/publications/CCTV-Tech-HLT_0813-508.pdf?utm_source=chatgpt.com',
    },
    {
      referencia: 'DHS. (2013). CCTV Technology Handbook.',
      link: 'https://www.dhs.gov/sites/default/files/publications/CCTV-Tech-HBK_0713-508.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Encuentroempresaslicitadoras. (2024). Normativa laboral para trabajadores de vigilancia y seguridad privada en Colombia: cambios y actualizaciones.',
      link: 'https://www.encuentroempresaslicitadoras.com/normativa-laboral-para-trabajadores-de-vigilancia-y-seguridad-privada-en-colombia-cambios-y-actualizaciones/#:~:text=Normativa%20laboral%20para%20trabajadores%20en',
    },
    {
      referencia:
        'Escuela Politécnica Nacional. (s. f.). Definición de Tiempo, Masa y Longitud: Conceptos Básicos de Física.',
      link: 'https://www.studocu.com/ec/document/escuela-politecnica-nacional/fisica/definicion-de-tiempo/21378802',
    },
    {
      referencia: 'Everbridge. (s. f.). What is PSIM?',
      link: 'https://www.everbridge.com/blog/what-is-psim/',
    },
    {
      referencia: 'FasterCapital. (s. f.). Physical-Security-Audits.',
      link: 'https://fastercapital.com/services/Physical-Security-Audits.html?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Felix. (2024). The process of security design: the steps to success.',
      link: 'https://citysecuritymagazine.com/security-management/the-process-of-security-design-the-steps-to-success/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'FessGroup. (s. f.). ¿Cuáles son los 4 tipos de control de calidad?',
      link: 'https://fessgroup.co.uk/insight/what-are-the-4-types-of-quality-control/#:~:text=El%20control%20de%20calidad%20se',
    },
    {
      referencia: 'FrontlineDS. (s. f.).',
      link: 'https://workhealthsolutions.com/docs/what-are-the-4-elements-of-a-safety-program/#:~:text=Four%20key%20elements%20shape%20a,and%20safety%20and%20health%20training',
    },
    {
      referencia:
        'Galileo. (2024). Administración de seguridad integral: una necesidad en el mundo moderno.',
      link: 'https://www.galileo.edu/ies/noticias/administracion-de-seguridad-integral-una-necesidad-en-el-mundo-moderno/#:~:text=La%20Administraci%C3%B3n%20de%20Seguridad%20Integral%20se%20define%20como%20la%20coordinaci%C3%B3n',
    },
    {
      referencia: 'Hedasero. (2015). Don Seguro.',
      link: 'https://don-seguro.blogspot.com/',
    },
    {
      referencia:
        'Harris & Sadok. (2024). ¿Cómo evalúan los profesionales los riesgos de seguridad en la práctica Un estudio exploratorio?',
      link: 'https://link.springer.com/article/10.1057/s41284-023-00389-y?utm_source=chatgpt.com',
    },
    {
      referencia: 'ICBF. (2019). Procedimiento_seguridad_y_vigilancia_privada.',
      link: 'https://www.icbf.gov.co/sites/default/files/procesos/p50.sa_procedimiento_seguridad_y_vigilancia_privada_v1_0.pdf?utm_source=chatgpt.com',
    },
    {
      referencia: 'ICSI. (s. f.). Liderazgo en seguridad.',
      link: 'https://www.icsi-eu.org/es/liderazgo-seguridad#:~:text=%C2%BFQu%C3%A9%20es%20el%20liderazgo%20en',
    },
    {
      referencia:
        "Iberdrola. (s. f.). El valor de las 'soft skills' (habilidades blandas) en el mercado laboral actual.",
      link: 'https://www.iberdrola.com/talento/habilidades-blandas#:~:text=Qu%C3%A9%20son%20las%20habilidades%20blandas',
    },
    {
      referencia:
        'INISEG. (2025). Diferencias entre seguridad pública y seguridad privada: dos enfoques complementarios para la protección.',
      link: 'https://www.iniseg.es/comunicacion-iniseg/blog/2025/09/15/diferencias-entre-seguridad-publica-y-seguridad-privada-dos-enfoques-complementarios-para-la-proteccion/#:~:text=Conclusi%C3%B3n,entornos%20m%C3%A1s%20seguros%20y%20confiables.',
    },
    {
      referencia:
        'Kumar & Others. (2024). Auditoría de seguridad física para empresas de servicios públicos: una guía para subestaciones resilientes.',
      link: 'https://www.mdpi.com/2313-576X/10/3/80?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Landín. (2024). Los centros de control en seguridad privada.',
      link: 'https://www.auservigroup.com/blog/los-centros-de-control-en-seguridad-privada/#:~:text=CECON,es%20por%20Vigilantes%20de%20Seguridad',
    },
    {
      referencia: 'Lapzo. (2024). Crea un perfil de puestos en minutos.',
      link: 'https://www.lapzo.com/blog/desarrollo-por-competencias/perfil-de-puesto-ejemplo#:~:text=7%20Componentes%20clave%20para%20un%20perfil%20de%20puesto',
    },
    {
      referencia:
        'Lozano. (2015). Proceso de selección para empresas de vigilancia y seguridad Privada con énfasis en el establecimiento del nivel de riesgo y Basado en entrevista de inteligencia emocional Ensayo.',
      link: 'https://690257b1-7860-8330-9a50-75b30da95171',
    },
    {
      referencia:
        'Medio / Ministerio de economía y finanzas – MEF. (s. f.). Instructivo para la Formulación de Indicadores de Desempeño.',
      link: 'https://www.mef.gob.pe/contenidos/presupuesto_publico/normativa/Instructivo_Formulacion_Indicadores_Desempeno.pdf',
    },
    {
      referencia:
        'NIST. (2018). Framework for Improving Critical Infrastructure Cybersecurity.',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf',
    },
    {
      referencia:
        'NPSA. (2023). Physical security: 10 steps mitigate state threats.',
      link: 'https://www.npsa.gov.uk/national-security-act/defending-democracy/physical-security-10-steps-mitigate-state-threats?utm_source=chatgpt.com',
    },
    {
      referencia:
        'NPSA. (2024). Automated access control systems & pedestrian evaluation schemes.',
      link: 'https://www.npsa.gov.uk/building-protection/video-surveillance-access-control-detection-control-rooms/automated-access-control-systems-pedestrian-evaluation-schemes',
    },
    {
      referencia:
        'NovaSeguridad. (s. f.). Importancia del Análisis de esquemas de seguridad.',
      link: 'https://www.novaseguridad.com.co/analisis-de-esquemas-de-seguridad/',
    },
    {
      referencia:
        'PERF. (2020). Guidance on Policies and Practices for Patrol Canines.',
      link: 'https://www.policeforum.org/assets/Canines.pdf',
    },
    {
      referencia:
        'Pro6security. (s. f.). What are different types of private security services? Pro6 Security Blog.',
      link: 'https://www.pro6security.com/blog/what-are-different-types-of-private-security-services',
    },
    {
      referencia: 'Proware. (2023). ¿Qué es el control de novedades?',
      link: 'https://www.proware.com.co/academia/blog/que-es-el-control-de-novedades/#:~:text=El%20control%20de%20novedades%20permite',
    },
    {
      referencia:
        'Purplesec. (2023). The 3 types of security controls (expert explains).',
      link: 'https://purplesec.us/wp-content/uploads/2022/12/Types-Of-Security-Controls.pdf',
    },
    {
      referencia: 'PWC. (2024). Economic crime survey.',
      link: 'https://www.pwc.com/gx/en/services/forensics/economic-crime-survey.html?utm_source=chatgpt.com',
    },
    {
      referencia: 'Ranstad. (2015). Cómo impulsar tu crecimiento profesional.',
      link: 'https://www.randstad.es/contenidos360/desarrollo-profesional/como-impulsar-tu-crecimiento-profesional/',
    },
    {
      referencia:
        'RSM. (2018). ¿Cuáles son los objetivos y funciones de la administración de personal?',
      link: 'https://www.rsm.global/peru/es/blog-rsm-peru/objetivos-y-funciones-de-la-administracion-de-personal#:~:text=Son%20parte%20de%20las%20funciones',
    },
    {
      referencia:
        'Salgado. (2022). Control de las funciones administrativas aplicadas en una empresa.',
      link: 'https://revistainvestigacionacademicasinfrontera.unison.mx/index.php/RDIASF/article/view/461/540',
    },
    {
      referencia: 'Sánchez. (2015). Cronograma de actividades.',
      link: 'https://dspace.uaeh.edu.mx/server/api/core/bitstreams/ce72edfa-57d1-454b-8564-2ff3e422f5f8/content',
    },
    {
      referencia: 'Sematex. (s. f.). Registro de eventos.',
      link: 'https://sematext.com/glossary/event-log/#:~:text=Registros%20de%20eventos%20de%20seguridad',
    },
    {
      referencia:
        'Senado. (2020). Informe de efectividad de los controles implementados para los riesgos operativos del senado de la república.',
      link: 'https://www.senado.gov.co/index.php/documentos/categoria-transparencia/area-legislativa-historico/area-legislativa/oficina-de-control-interno/seguimiento-a-planes-institucionales-y-riesgo/2020-8/3961-informe-de-efectividad-de-los-controles-implementados-para-los-riesgos-operativos-del-senado-de-la-republica/file#:~:text=Perfiles%20de%20ingreso.%20Frecuencia%20del%20Control:%20Este,realiza%20una%20o%20m%C3%A1s%20veces%20por%20d%C3%ADa',
    },
    {
      referencia: 'Secureframe. (s. f.). Control de Acceso.',
      link: 'https://secureframe.com/es-es/glossary/access-control',
    },
    {
      referencia: 'Sistems / Swanson. (2023). Security survey template.',
      link: 'https://s3-eu-west-1.amazonaws.com/s3-euw1-ap-pe-ws4-cws-documents.ri-prod/9781032030357/B.%20Security%20Survey%20Template.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Supervigilancia. (s. f.). Protocolos operativos del sector vigilancia y seguridad privada.',
      link: 'https://www.supervigilancia.gov.co/publicaciones/5562/protocolos-operativos-del-sector-vigilancia-y-seguridad-privada/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Supervigilancia. (2012). Resolución No. 5614 de 2012 Reporte De Novedades.',
      link: '',
    },
    {
      referencia:
        'Supervigilancia. (2013). Manual-de-Doctrina-de-la-SuperVigilancia-2013-Versión-3.0.',
      link: 'https://www.dimar.mil.co/sites/default/files/noticias/manual_de_doctrina_supervigilancia_2013.pdf?utm_source=chatgpt.com',
    },
    {
      referencia: 'Supervigilancia. (s. f.). Manual.',
      link: 'https://supervigilancia.gov.co/publicaciones/6450/manual/?utm_source=chatgpt.com&genPagdoc4974=1',
    },
    {
      referencia:
        'SystemSurveyor. (s. f.). Physical-Security-Site-Survey-Checklist.',
      link: 'https://systemsurveyor.com/wp-content/uploads/2022/12/Physical-Security-Site-Survey-Checklist.pdf?utm_source=chatgpt.com',
    },
    {
      referencia: 'TNLR. (s. f.). Planificación de seguridad.',
      link: 'https://www.tnlr.org/es/planificacion-de-seguridad/#:~:text=%C2%BFQu%C3%A9%20son%20las%20planificaciones%20de',
    },
    {
      referencia: 'Timecamp. (s. f.). Intervalos de Trabajo.',
      link: 'https://www.timecamp.com/es/glossary/intervalos-de-trabajo/#:~:text=Los%20Intervalos%20de%20Trabajo%20se',
    },
    {
      referencia:
        'TrackVigilante. (2025). Indicadores de Desempeño en Seguridad: Clave para la Eficiencia Operativa.',
      link: 'https://www.trackvigilante.com/blog/indicadores-de-desempeno-en-seguridad-clave-para-la-eficiencia-operativa/#:~:text=Los%20indicadores%20de%20desempe%C3%B1o%20en%20seguridad%20son%20m%C3%A9tricas%20cuantificables',
    },
    {
      referencia: 'Twnel. (s. f.). Digitalización de Minutas de Seguridad.',
      link: 'https://www.twnel.com/empresas-de-vigilancia-y-seguridad-privada-es-hora-de-cambiar-o-morir/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Unidad para las víctimas. (2021). Procedimientos servicios generales.',
      link: 'https://www.unidadvictimas.gov.co/wp-content/uploads/2019/09/instructivovigilanciav3.pdf?utm_source=chatgpt.com',
    },
    {
      referencia: 'Univalle. (s. f.). Sección de seguridad y vigilancia.',
      link: 'https://seguridad.univalle.edu.co/formatos?utm_source=chatgpt.com',
    },
    {
      referencia:
        'UNIR. (2023). ¿Por qué el desarrollo organizacional es esencial para el crecimiento de una empresa?',
      link: 'https://colombia.unir.net/actualidad-unir/desarrollo-organizacional/',
    },
    {
      referencia: 'Vail, C. (2010). Función de patrulla.',
      link: 'https://www.sciencedirect.com/topics/computer-science/patrol-function#:~:text=La%20%E2%80%9Cfunci%C3%B3n%20de%20patrulla%E2%80%9D%20se',
    },
    {
      referencia:
        'Vitolo. (2018). Balanced scorecard en empresas de seguridad privada.',
      link: 'https://repository.umng.edu.co/server/api/core/bitstreams/3f6a0c06-1b2a-45b3-b6fb-5c8848a97196/content',
    },
    {
      referencia:
        'Villalón-Fonseca, R. (2022). The nature of security: a conceptual framework for integral security. Crime & Justice Studies.',
      link: 'https://www.sciencedirect.com/science/article/pii/S0167404822001997?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Vigilancia Acosta. (2025). Cómo Evaluar la Efectividad de su Servicio de Vigilancia Privada: Guía Completa para Tomar Decisiones Inteligentes.',
      link: 'https://vigilanciaacosta.com.co/como-evaluar-la-efectividad-de-su-servicio-de-vigilancia-privada/#:~:text=de%20medir%20resultados.-,Revise%20Indicadores%20de%20Desempe%C3%B1o%20Reales',
    },
    {
      referencia:
        'WorkhealthSolutions. (s. f.). What are the 4 elements of a safety program.',
      link: 'https://workhealthsolutions.com/docs/what-are-the-4-elements-of-a-safety-program/#:~:text=Four%20key%20elements%20shape%20a,and%20safety%20and%20health%20training',
    },
    {
      referencia:
        'Xairó. (2025). ¿Por qué es tan importante los roles de equipo en el trabajo?',
      link: 'https://payfit.com/es/contenido-practico/roles-de-equipo-en-el-trabajo/#:~:text=trabajo%20en%20equipo?-,%C2%BFQu%C3%A9%20son%20los%20roles%20de%20equipo%20en%20el%20trabajo?,los%20objetivos%20OKR%20del%20equipo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
