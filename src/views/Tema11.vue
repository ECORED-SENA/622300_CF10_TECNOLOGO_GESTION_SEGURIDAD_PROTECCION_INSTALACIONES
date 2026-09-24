<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 11
        h1 El tiempo y su aplicación operativa en la seguridad privada
      p La gestión del tiempo permite organizar actividades, jornadas, turnos y relevos para garantizar la continuidad del servicio, la cobertura operativa y el uso adecuado de los recursos.
      p.mb-5 Su administración contribuye a prevenir interrupciones, errores asociados con el cansancio y afectaciones en la calidad del servicio de vigilancia.
      #t_11_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 11.1 Fundamentos del tiempo operativo
      p.mb-5 El tiempo permite ordenar los acontecimientos y establecer la duración de las actividades. En seguridad privada, se aplica en la planificación de jornadas, la programación de servicios y la ejecución de procedimientos (Escuela Politécnica Nacional, s. f.). Su aplicación operativa se fundamenta en tres características:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t11/img1.png', alt="" ).m-auto
                  h4.text-center Irreversibilidad
                  .caja-2_p
                    p.mb-0.text-center El tiempo avanza en una sola dirección. Por ello, las actividades de seguridad deben desarrollarse en el momento establecido.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t11/img2.png', alt="" ).m-auto
                  h4.text-center Relatividad
                  .caja-2_p
                    p.mb-0.text-center La percepción de su duración puede variar según las circunstancias, lo que exige ajustar las estrategias y los recursos a cada situación.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t11/img3.png', alt="" ).m-auto
                  h4.text-center Medibilidad
                  .caja-2_p
                    p.mb-0.text-center El tiempo puede expresarse en segundos, minutos, horas y días, lo cual permite organizar horarios y registrar eventos en la minuta.
          p.mb-0 Estas características permiten comprender la importancia de programar, controlar y registrar las actividades dentro de los periodos establecidos.
          Separador
          #t_11_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 11.2 Planificación e intervalos operativos
      p.mb-5 Un intervalo corresponde al periodo comprendido entre dos momentos específicos. En seguridad privada, permite distribuir tareas, establecer horarios y organizar los recursos requeridos para la operación. Los intervalos se aplican en los siguientes ámbitos:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Patrullaje").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asigna periodos determinados para realizar rondas de vigilancia en las áreas establecidas (Vail, 2010).
            .row(titulo="Registro de eventos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite documentar las novedades en la minuta dentro de periodos concretos (Sematex, s. f.).
            .row(titulo="Puestos de control").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza la supervisión de puntos fijos mediante intervalos previamente definidos (Landín, 2024).
            .row(titulo="Cronograma").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ordena las tareas, los plazos y los hitos requeridos para desarrollar las operaciones a corto y largo plazo (Sánchez, 2015).
            .row(titulo="Planificación del servicio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define las tareas y actividades de seguridad correspondientes a un periodo específico (TNLR, s. f.).
            .row(titulo="Asignación de turnos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Distribuye los horarios del personal mediante turnos diurnos, nocturnos o mixtos (Arteaga, 2023).
            .row(titulo="Gestión de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza la asignación de vigilantes y equipos según los horarios y lugares establecidos.
      .caja-4.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La elaboración del cronograma debe considerar la normativa laboral, la duración de las jornadas y los requerimientos del servicio.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Periodicidad:] determina la frecuencia diaria o rotativa de las actividades.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Continuidad:] garantiza la cobertura mediante la adecuada coordinación y superposición de los relevos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Flexibilidad:] permite realizar ajustes frente a contingencias y cambios en las condiciones del servicio.
            p.mb-0 Un cronograma adecuadamente estructurado fortalece la eficacia operativa y reduce los errores asociados con el cansancio del personal (ASIS, 2011).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t11/img4.jpg', alt='' style="width: 550px").m-auto
      Separador
      #t_11_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 11.3 Relevos y transferencia de responsabilidad
      p.mb-5 El relevo es el procedimiento mediante el cual se transfiere la responsabilidad de un puesto o servicio de un vigilante a otro. Su aplicación garantiza la continuidad de la vigilancia sin interrupciones. El relevo comprende las siguientes acciones:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Presentación anticipada
                    p.mb-0 El vigilante que recibe el turno se presenta con la anticipación establecida para conocer las novedades del servicio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t11/img5.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t11/img6.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Verificación
                    p.mb-0 El personal revisa la minuta, el inventario de equipos y las condiciones de las instalaciones.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro en la minuta
                    p.mb-0 Se documentan la identificación del personal, la hora del relevo y las novedades ocurridas durante el turno.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t11/img7.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t11/img8.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Entrega del puesto
                    p.mb-0 El vigilante saliente comunica la información operativa al personal que recibe el servicio.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Confirmación
                    p.mb-0 El vigilante entrante confirma la recepción del puesto y asume formalmente la responsabilidad sobre las personas, los bienes y las instalaciones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t11/img9.png', alt='' style="width: 300px").m-auto
      p.mb-0 Los relevos deben realizarse con puntualidad, revisión de novedades y comprobación de los equipos. Esta transferencia contribuye a prevenir interrupciones, conservar la trazabilidad y mantener la calidad operativa del servicio.

</template>

<script>
export default {
  name: 'Tema11',
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
