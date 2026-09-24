<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Estudio de seguridad
      p El estudio de seguridad es una técnica sistemática que permite identificar activos, amenazas y vulnerabilidades, evaluar riesgos y establecer recomendaciones para proteger personas, bienes, información y operaciones (Swanson, 2023).
      p.mb-5 Su aplicación proporciona información técnica para orientar las decisiones relacionadas con las medidas de protección y la prestación del servicio.
      #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.1 Concepto y elementos del estudio de seguridad
      p.mb-5 El estudio de seguridad es un proceso sistemático de evaluación cualitativa y cuantitativa que analiza los recursos y las condiciones de un sistema de seguridad. Comprende la identificación de activos, amenazas y vulnerabilidades, así como la valoración de los riesgos y las medidas de control (Swanson, 2023). Su estructuración requiere considerar los siguientes elementos:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece los límites y propósitos del estudio de seguridad.
            .row(titulo="Activos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden las personas, instalaciones, información, bienes, programas y equipos que requieren protección.
            .row(titulo="Amenazas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a situaciones de origen natural, humano, accidental o intencional que pueden afectar los activos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t9/img1.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t9/img2.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Vulnerabilidades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son debilidades o fallas de los sistemas de seguridad que pueden ser aprovechadas por una amenaza.
            .row(titulo="Riesgos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Resultan de la posibilidad de que una amenaza aproveche una vulnerabilidad y genere consecuencias negativas.
            .row(titulo="Medidas de control").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son las salvaguardas aplicadas para evitar, aceptar, transferir o mitigar los riesgos (System Surveyor, s. f.).
      p.mb-0 La integración de estos elementos permite establecer las condiciones de seguridad y priorizar los riesgos que requieren intervención.
      Separador
      #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.2 Ejercicios de seguridad
      p.mb-5 Los ejercicios de seguridad permiten comprobar la eficacia de los planes y las medidas de control frente a diferentes riesgos o incidentes. Su aplicación puede desarrollarse mediante las siguientes modalidades (Galileo, 2024):
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t9/img3.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Simulacros
            p.mb-0.text-center Recrean situaciones de emergencia para evaluar la eficacia de los planes de respuesta.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t9/img4.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Ejercicios de mesa
            p.mb-0.text-center Plantean incidentes hipotéticos que permiten analizar las decisiones y detectar debilidades.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t9/img5.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Ejercicios de seguridad laboral
            p.mb-0.text-center Examinan tareas específicas para identificar peligros y establecer medidas de control.
      p.mb-0 La modalidad debe seleccionarse según las condiciones del servicio, los riesgos identificados y los criterios establecidos por la supervisión.
      Separador
      #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.3 Análisis de riesgos y áreas de pérdidas potenciales
      p.mb-5 El análisis de riesgos permite valorar las amenazas y vulnerabilidades que pueden afectar la confidencialidad, integridad y disponibilidad de los activos (Salgado, 2022). El proceso comprende cuatro etapas:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificación
                    p.mb-0 Se inventarían los activos y se determinan las amenazas y vulnerabilidades relacionadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t9/img6.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t9/img7.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Evaluación
                    p.mb-0 Se calculan la probabilidad de ocurrencia y el posible impacto de cada riesgo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Tratamiento
                    p.mb-0 Se implementan medidas de control para mitigar los riesgos priorizados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t9/img8.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t9/img9.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Monitoreo
                    p.mb-0 Se realiza seguimiento a los riesgos y se ajustan las medidas cuando resulta necesario.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Fallos en procesos
                    p.mb-0 Errores humanos que causan interrupciones o filtraciones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t9/img10.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t9/img11.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Amenazas físicas
                    p.mb-0 Robos, sabotajes o vandalismo en instalaciones. 
      p.mb-5 Los riesgos identificados pueden producir pérdidas en diferentes áreas de la organización:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t9/img12.png').m-auto
              h4.mb-3.estilo-text Recursos humanos
              p.mb-0.text-center Lesiones, pérdida de personal o afectaciones a la salud psicológica.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t9/img13.png').m-auto
              h4.mb-3.estilo-text Bienes e infraestructura
              p.mb-0.text-center Daños en instalaciones, equipos, maquinaria y otros activos físicos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t9/img14.png').m-auto
              h4.mb-3.estilo-text Recursos financieros
              p.mb-0.text-center Pérdidas económicas derivadas de daños, robos, fraudes o multas.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t9/img15.png').m-auto
              h4.mb-3.estilo-text Información
              p.mb-0.text-center Filtración, robo, pérdida o alteración de datos sensibles.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t9/img16.png').m-auto
              h4.mb-3.estilo-text Reputación
              p.mb-0.text-center Afectación de la imagen institucional y pérdida de confianza de los clientes.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t9/img17.png').m-auto
              h4.mb-3.estilo-text Continuidad del negocio
              p.mb-0.text-center Interrupción de las operaciones y de los procesos críticos.
          p.mb-0 La identificación de las áreas afectadas facilita la valoración de las consecuencias y la priorización de las medidas de protección.
          Separador
          #t_9_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 9.4 Diseño del estudio de seguridad
      p.mb-5 El diseño de un estudio de seguridad permite recopilar y analizar información para establecer los riesgos, las vulnerabilidades y las medidas requeridas para proteger los activos de una organización. Su elaboración comprende cinco fases:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prediagnóstico
                  p.mb-0 Permite reconocer la necesidad del cliente y obtener información preliminar sobre la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Planificación
                  p.mb-0 Define los objetivos, el alcance, la metodología, el cronograma y los recursos del estudio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trabajo de campo
                  p.mb-0 Recopila información sobre los activos, las amenazas, las vulnerabilidades y los riesgos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Informe y plan de acción
                  p.mb-0 Consolida los hallazgos y establece las recomendaciones y medidas de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Implementación y seguimiento
                  p.mb-0 Comprende la ejecución de las medidas, la capacitación, el monitoreo y las auditorías.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img22.png', alt='' style="max-width: 500px").m-auto
      p Estas fases permiten desarrollar un estudio organizado, fundamentado en información técnica y orientado a la toma de decisiones.
      p.mb-5 Cada fase comprende actividades específicas para recopilar información, analizar los riesgos y formular el plan de seguridad.
      .caja-5.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t7/img7.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Fases para elaborar un estudio de seguridad
            p.mb-0 Se invita al aprendiz a consultar la lectura complementaria “#[b Anexo 2. Fases para elaborar un estudio de seguridad”], en la cual se desarrollan las actividades correspondientes al prediagnóstico, la planificación, el trabajo de campo, la elaboración del informe y el seguimiento.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Elaborar_Estudio_Seguridad.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema9',
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
