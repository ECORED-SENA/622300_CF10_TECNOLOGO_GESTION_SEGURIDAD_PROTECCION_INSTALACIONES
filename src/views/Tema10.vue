<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 10
        h1 Administración en la seguridad
      p.mb-5 La administración en seguridad planifica, organiza, dirige y controla los recursos del servicio para coordinar la operación, evaluar resultados y garantizar eficiencia, legalidad, trazabilidad y mejora continua (ARL Sura, s. f.).
      #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 10.1 Concepto e importancia de la administración en seguridad
      p.mb-5 La administración en seguridad optimiza los recursos mediante la planificación, asignación de responsabilidades, supervisión y aplicación de correctivos para cumplir los objetivos de protección. Su importancia comprende los siguientes aspectos (Galileo, 2024; Salgado, 2022):
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t10/img1.png').m-auto
              h4.mb-3.estilo-text Uso de los recursos
              p.mb-0.text-center Favorece la utilización eficiente del talento humano y de los recursos físicos, técnicos y logísticos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t10/img2.png').m-auto
              h4.mb-3.estilo-text Coordinación operativa
              p.mb-0.text-center Permite organizar responsabilidades, turnos y actividades necesarias para la prestación del servicio.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t10/img3.png').m-auto
              h4.mb-3.estilo-text Trazabilidad
              p.mb-0.text-center Facilita el registro y seguimiento de las actuaciones, novedades y resultados.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t10/img4.png').m-auto
              h4.mb-3.estilo-text Cumplimiento
              p.mb-0.text-center Contribuye a la aplicación de los estándares contractuales, jurídicos y de calidad.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t10/img5.png').m-auto
              h4.mb-3.estilo-text Mejora continua
              p.mb-0.text-center Permite evaluar los resultados y ajustar las actuaciones cuando se identifican desviaciones.
          p.mb-0 Una gestión administrativa estructurada evita la subutilización de los recursos y fortalece la calidad, la legalidad y la continuidad del servicio (RSM, 2018).
          Separador
          #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 10.2 Funciones administrativas en seguridad
      p.mb-5 Las funciones administrativas conforman un ciclo continuo que orienta el cumplimiento de los objetivos institucionales y la mejora del servicio. Este ciclo comprende cuatro funciones interrelacionadas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Planeación
                  p.mb-0 Anticipa las acciones necesarias y define metas, estrategias, recursos y cronogramas. En seguridad privada comprende la proyección del personal, la asignación de turnos, la gestión presupuestal y la evaluación de riesgos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t10/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización
                  p.mb-0 Estructura los recursos, asigna funciones y establece las jerarquías necesarias para coordinar al personal operativo, de supervisión y administrativo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t10/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Dirección
                  p.mb-0 Comprende el liderazgo, la motivación, la comunicación y la toma de decisiones requeridas para orientar al equipo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t10/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control
                  p.mb-0 Permite evaluar los resultados, detectar desviaciones y aplicar correctivos mediante informes, rondas de supervisión y comprobación del cumplimiento de los protocolos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t10/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La articulación de estas funciones favorece la eficiencia institucional y el mejoramiento continuo de la prestación del servicio.
      Separador
      #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 10.3 Instrumentos de gestión y control administrativo
      p.mb-5 La gestión administrativa requiere documentos y mecanismos de seguimiento que definan las responsabilidades, orienten los procedimientos y registren las novedades presentadas durante el servicio. Entre los principales instrumentos y mecanismos se encuentran:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t10/img10.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Manual de funciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el propósito de cada cargo, las tareas principales, los requisitos de idoneidad, las relaciones jerárquicas y los indicadores de desempeño.
            .row(titulo="Manuales de procesos y procedimientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Documentan las actividades que deben desarrollarse para garantizar uniformidad, trazabilidad y calidad en la operación.
            .row(titulo="Registro de novedades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consolida incidentes, irregularidades y situaciones relevantes mediante formatos o herramientas digitales. Esta información respalda la toma de decisiones y el análisis de tendencias de riesgo.
            .row(titulo="Aplicación de sanciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las medidas disciplinarias deben aplicarse conforme con los principios de legalidad, debido proceso y proporcionalidad.
      p.mb-0 Estos instrumentos facilitan la capacitación, la supervisión, la trazabilidad y el control de las actividades desarrolladas durante la prestación del servicio (Frontline Data Solutions, s. f.; Proware, 2023; Supervigilancia, s. f.).
      Separador
      #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 10.4 Liderazgo, comunicación y administración de personal
      p.mb-5 La dirección del personal requiere liderazgo y comunicación para coordinar los equipos, mantener la motivación y favorecer la toma de decisiones durante la prestación del servicio. La gestión del personal comprende los siguientes componentes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Liderazgo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t10/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Liderazgo
              p Permite guiar y coordinar al equipo mediante autoridad técnica, empatía y capacidad para actuar frente a situaciones de riesgo.
              p.mb-0 Las directrices pueden adoptar estilos autocráticos, democráticos, participativos o persuasivos, según las características de la organización y el contexto.
        .py-3.py-md-4(titulo="Comunicación efectiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t10/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación efectiva
              p.mb-0 Facilita la comprensión y aplicación de los protocolos, así como la toma de decisiones oportunas en situaciones que requieren actuación inmediata.
        .py-3.py-md-4(titulo="Gestión del talento humano")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t10/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gestión del talento humano
              p.mb-0 Comprende las políticas de selección, inducción, formación, evaluación y desarrollo del personal operativo.
        .py-3.py-md-4(titulo="Desarrollo de competencias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t10/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Desarrollo de competencias
              p.mb-0 Incluye el entrenamiento, el acompañamiento, la rotación de puestos y las simulaciones destinadas a fortalecer las competencias técnicas y la respuesta ante emergencias.
      p.mb-0 La articulación del liderazgo, la comunicación y la administración del personal contribuye a consolidar equipos competentes, motivados y orientados al cumplimiento de los objetivos del servicio (ICLS, s. f.; BSS, s. f.; RSM, 2018).

</template>

<script>
export default {
  name: 'Tema10',
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
