<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 12
        h1 Perfiles en seguridad privada
      p.mb-5 Los perfiles establecen las competencias, habilidades, formación y experiencia requeridas para cada cargo, lo que facilita la selección del personal en seguridad privada. El siguiente material audiovisual amplía estos conceptos: 
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Cargos y perfiles
      Separador
      #t_12_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 12.1 Concepto y utilidad del perfil
      p Un perfil es la descripción de las capacidades, conocimientos, competencias, formación y experiencia requeridas para desempeñar un cargo o una función determinada.
      p.mb-5 En seguridad privada, puede incluir formación mínima, certificaciones, experiencia, habilidades comunicativas, capacidad para resolver conflictos y aptitudes psicofísicas, de acuerdo con las condiciones del servicio. La definición de perfiles cumple las siguientes funciones (Lozano, 2015; UNIR, 2023):
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reclutamiento
                  p.mb-0 Facilita la identificación de aspirantes cuyas competencias y experiencia corresponden con los requerimientos del cargo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t12/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Crecimiento profesional
                  p.mb-0 Permite reconocer necesidades de mejoramiento y orientar las acciones de capacitación y desarrollo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t12/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización del trabajo
                  p.mb-0 Contribuye a definir las actividades, los mecanismos de supervisión y las responsabilidades asociadas con cada cargo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t12/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cumplimiento institucional
                  p.mb-0 Favorece la asignación clara de funciones y la aplicación de los criterios establecidos por la organización y las autoridades competentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t12/img4.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La definición clara del perfil permite comparar las capacidades de una persona con los requisitos establecidos para una posición determinada.
      Separador
      #t_12_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 12.2 Especializaciones y enfoques de perfil
      p.mb-5 La especialización permite profundizar en conocimientos o competencias relacionadas con un área o función determinada. Los perfiles pueden estructurarse según los siguientes enfoques:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t12/img5.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Habilidades técnicas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden conocimientos especializados y capacidades para desarrollar actividades propias de un área determinada.
            .row(titulo="Habilidades blandas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen liderazgo, comunicación, trabajo en equipo y resolución de conflictos, aplicables al desempeño de diferentes cargos.
            .row(titulo="Perfiles en T").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Combinan experiencia profunda en un área específica con conocimientos generales en otras áreas relacionadas (Carrasco, 2022).
            .row(titulo="Roles específicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se concentran en las competencias y conocimientos requeridos para desempeñar una función particular dentro de la organización.
      p.mb-0 Estos enfoques permiten diferenciar los perfiles según el nivel de especialización, las competencias requeridas y las responsabilidades del cargo.
      .bg-4
        .px-5
          Separador
          #t_12_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 12.3 Componentes del perfil profesional y del perfil del puesto
          p.mb-5 El perfil profesional describe las capacidades y la trayectoria de una persona, mientras que el perfil de puesto establece las condiciones y competencias requeridas para desempeñar un cargo. La siguiente tabla relaciona los componentes de ambos perfiles:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Perfil profesional y perfil del puesto
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Perfil profesional
                      th.texto-left Perfil de puesto
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Formación académica: títulos, certificaciones y procesos formativos relacionados con el área de desempeño.
                      td.texto-left Descripción del cargo: propósito y contribuciones del puesto dentro de la organización.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Experiencia laboral: trayectoria profesional y funciones desarrolladas en trabajos anteriores.
                      td.texto-left Competencias requeridas: conocimientos, habilidades y aptitudes necesarias para desempeñar el cargo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Habilidades y competencias: capacidades técnicas y personales que posee el individuo.
                      td.texto-left Niveles de competencia: grado de dominio requerido para cada competencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aspiraciones profesionales: metas y objetivos relacionados con el crecimiento laboral.
                      td.texto-left Descripción de tareas: responsabilidades y actividades correspondientes al puesto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Logros y resultados: resultados alcanzados y aportes generados durante la trayectoria profesional.
                      td.texto-left —
          p.mb-0 La comparación permite establecer la correspondencia entre las capacidades de una persona y los requerimientos definidos para el cargo.

</template>

<script>
export default {
  name: 'Tema12',
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
