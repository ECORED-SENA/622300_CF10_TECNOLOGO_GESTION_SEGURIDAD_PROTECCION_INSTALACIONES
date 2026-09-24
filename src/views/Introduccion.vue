<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La supervisión y la planeación de procedimientos son procesos esenciales para garantizar servicios de seguridad organizados, oportunos y acordes con las necesidades de cada entorno. Este componente formativo integra fundamentos de seguridad pública y privada, esquemas de protección, equipos, herramientas tecnológicas, recursos humanos, protocolos y estudios de seguridad.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Asimismo, desarrolla principios administrativos relacionados con la planeación, organización, dirección y control de las operaciones. El contenido permite comprender la función del supervisor en la coordinación del personal, la asignación de recursos, el seguimiento de novedades y la verificación del cumplimiento de los procedimientos establecidos.
          p.mb-0 También aborda la gestión del tiempo, los cronogramas, los relevos, los perfiles ocupacionales, los controles y el régimen sancionatorio. Estos saberes fortalecen el análisis de riesgos, la toma de decisiones, la comunicación efectiva y la mejora continua, para proteger personas, bienes, procesos e instalaciones con responsabilidad, eficiencia y criterio técnico.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
