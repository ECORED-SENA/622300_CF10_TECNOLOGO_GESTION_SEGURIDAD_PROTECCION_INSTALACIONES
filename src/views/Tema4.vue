<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Herramientas tecnológicas en la seguridad privada
      p Las herramientas tecnológicas fortalecen la detección, el control de accesos, la gestión de eventos y la coordinación operativa en los servicios de seguridad privada.
      p.mb-5 Su implementación complementa la labor del personal y requiere procedimientos, capacitación y supervisión para garantizar un uso eficiente, seguro y acorde con las necesidades del servicio.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto de herramientas tecnológicas
      p.mb-5 Las herramientas tecnológicas en seguridad integran soluciones de hardware y software destinadas a fortalecer la detección, el análisis y la gestión de eventos (Everbridge, s. f.). Estas soluciones cumplen funciones complementarias dentro del sistema de seguridad:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Propósito
                  p.mb-0 Permiten identificar eventos, accesos indebidos, objetos restringidos o comportamientos que puedan afectar la seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis
                  p.mb-0 Procesan la información generada por los sistemas para apoyar la valoración de situaciones y la toma de decisiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gestión
                  p.mb-0 Facilitan la administración de alertas, registros, accesos, incidentes y actuaciones operativas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La tecnología no sustituye al personal de seguridad, sino que amplía su capacidad operativa y contribuye a una gestión coordinada de los eventos.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Clases de herramientas tecnológicas
      p.mb-5 Las herramientas tecnológicas se diferencian por sus funciones, características técnicas, formas de conexión y requerimientos de operación, mantenimiento y seguridad. Las principales clases empleadas en los servicios de seguridad privada son:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Sistemas de videovigilancia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden sistemas CCTV e IP CCTV destinados a la supervisión de áreas, el registro de eventos y la obtención de evidencia.
            .row(titulo="Sistemas de control de accesos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen tarjetas, lectores de credenciales, biometría y soluciones de acceso móvil para autorizar, restringir y registrar entradas y salidas.
            .row(titulo="Sensores y sistemas de detección de intrusiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifican ingresos no autorizados o alteraciones en las condiciones de protección y generan alertas para activar la respuesta.
            .row(titulo="Sistemas de alarma y detección de incendios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Generan alertas ante situaciones de emergencia y apoyan la activación de los protocolos establecidos.
            .row(titulo="Plataformas de integración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los sistemas de gestión de información de seguridad física —PSIM— integran subsistemas y automatizan flujos de trabajo.
            .row(titulo="Analítica de video e inteligencia artificial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Procesan datos para identificar automáticamente comportamientos anómalos y apoyar la gestión de eventos.
            .row(titulo="Drones y sensores remotos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Apoyan la supervisión de áreas o escenarios específicos según las condiciones y necesidades de la operación.
      .bg-1
        .px-5
          p.mb-5 Las herramientas tecnológicas presentan características y requerimientos específicos para su operación. La siguiente tabla relaciona sus clases, funciones, manuales, métodos de conexión y técnicas de manejo:
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Características operativas de las herramientas tecnológicas
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Nombre / Tipo
                  th.ajuste-border-tabla.texto-left Clases
                  th.ajuste-border-tabla.texto-left Características
                  th.ajuste-border-tabla.texto-left Manual operacional
                  th.ajuste-border-tabla.texto-left Conexión
                  th.texto-left Técnicas de manejo
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Lector de tarjetas / credenciales
                  td.ajuste-border-tabla.texto-left RFID, tarjeta de proximidad y móvil NFC.
                  td.ajuste-border-tabla.texto-left Control de acceso electrónico, trazabilidad de entradas/salidas arXiv.
                  td.ajuste-border-tabla.texto-left Manual de configuración (usuarios, niveles), mantenimiento y base de datos.
                  td.ajuste-border-tabla.texto-left Instalación lector, panel de control, red y #[i software].
                  td.texto-left Registro de credenciales, revocación y auditoría de accesos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Lectores biométricos
                  td.ajuste-border-tabla.texto-left Huella dactilar, facial e iris.
                  td.ajuste-border-tabla.texto-left Alta seguridad y verifica identidad única.
                  td.ajuste-border-tabla.texto-left Manual de configuración, calibración y mantenimiento limpieza.
                  td.ajuste-border-tabla.texto-left Conexión lector, controlador y  red/SaaS.
                  td.texto-left Limpieza de sensor, control de falsas aceptaciones y auditoría.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cámara(s) de videovigilancia / CCTV
                  td.ajuste-border-tabla.texto-left Analógica, IP, PTZ y fisheye.
                  td.ajuste-border-tabla.texto-left Monitoreo visual y registro para evidencia.
                  td.ajuste-border-tabla.texto-left Manual de instalación (ángulos, iluminación), mantenimiento y almacenamiento.
                  td.ajuste-border-tabla.texto-left Alimentación PoE/Ethernet, red y servidor vídeo.
                  td.texto-left Verificación calidad imagen, giro/manual PTZ y exportación grabaciones.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Botón de pánico / alarma personal
                  td.ajuste-border-tabla.texto-left Botón fijo en muro, pulsera y app móvil.
                  td.ajuste-border-tabla.texto-left Permitir alarma inmediata desde persona o sitio.
                  td.ajuste-border-tabla.texto-left Manual de instalación, #[i testing] y protocolo de respuesta.
                  td.ajuste-border-tabla.texto-left Alimentación/ batería, red/ inalámbrico y central de alarma.
                  td.texto-left Simulacros de activación, verificación de tiempos de respuesta y registro de activaciones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sistema de gestión de acceso / PSIM
                  td.ajuste-border-tabla.texto-left Plataforma software, integración de CCTV, control de acceso y alarmas.
                  td.ajuste-border-tabla.texto-left Consolida eventos, supervisión, análisis y respuesta.
                  td.ajuste-border-tabla.texto-left Manual de usuario, manual técnico, mantenimiento y #[i backup].
                  td.ajuste-border-tabla.texto-left Conexión de múltiples subsistemas (CCTV, lectores, sensores) sobre red y servidor.
                  td.texto-left Entrenamiento de supervisores, generación de informes y auditoría de eventos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Máquina de rayos X para equipaje / paquetes
                  td.ajuste-border-tabla.texto-left Escáner de equipaje y túnel de rayos X.
                  td.ajuste-border-tabla.texto-left Inspección visual/tecnológica de contenido y control de entrada.
                  td.ajuste-border-tabla.texto-left Manual de operación, calibración de rayos, mantenimiento y seguridad radiológica.
                  td.ajuste-border-tabla.texto-left Alimentación eléctrica, conectividad red y monitor de control.
                  td.texto-left Verificación calidad imagen, control de operarios y registro de detección.
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img4.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La operación de las herramientas tecnológicas requiere procedimientos, capacitación y supervisión. También debe garantizar la preservación de evidencias, la cadena de custodia digital y la protección de la información. Los sistemas conectados mediante IoT o plataformas en la nube exigen medidas de ciberseguridad, como el fortalecimiento de configuraciones, la segmentación de redes y el control de accesos (Everbridge, s. f.).
          p.mb-0 La tecnología complementa la labor del personal y fortalece la seguridad cuando se integra con procedimientos claros, competencias técnicas y medidas de protección de la información.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
