<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 15
        h1 Régimen de sanciones
      p.mb-5 El régimen de sanciones regula los incumplimientos mediante medidas disciplinarias fundamentadas en la legalidad, la proporcionalidad y el debido proceso, con el propósito de restablecer el cumplimiento y prevenir nuevas faltas.
      #t_15_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 15.1 Concepto y tipos de sanciones
      p.mb-5 Las sanciones son medidas disciplinarias aplicadas ante incumplimientos para restablecer la disciplina y prevenir nuevas faltas. Según su gravedad y el reglamento interno, pueden adoptarse las siguientes medidas (Actualícese, s. f.; Brunal Abogados, s. f.):
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Amonestación verbal o escrita
                  p.mb-0 Puede aplicarse frente a faltas leves, como llegadas tardías injustificadas o incumplimientos que no generen riesgos para el servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t15/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Suspensión temporal
                  p.mb-0 Puede corresponder a faltas de mayor gravedad, como el incumplimiento de rondas que genere riesgos. Se aplica durante el periodo establecido conforme con las disposiciones internas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t15/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Terminación del contrato
                  p.mb-0 Puede proceder frente a faltas muy graves que comprometan la seguridad, la legalidad o la confianza requerida para la prestación del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t15/img3.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Las faltas y sus consecuencias deben estar previamente definidas en el reglamento interno y aplicarse conforme con la normativa correspondiente.
      Separador
      #t_15_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 15.2 Principios del régimen sancionatorio
      p.mb-5 La aplicación de medidas disciplinarias requiere criterios que garanticen un tratamiento justo, coherente y documentado. El régimen sancionatorio debe fundamentarse en los siguientes principios:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t15/img4.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Proporcionalidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La medida debe corresponder con la gravedad, la frecuencia y las consecuencias del incumplimiento.
            .row(titulo="Transparencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las normas deben comunicarse claramente y aplicarse de manera uniforme.
            .row(titulo="Debido proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de tomar una decisión debe adelantarse un procedimiento que permita conocer los hechos, presentar argumentos y aportar pruebas.
            .row(titulo="Trazabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las actuaciones deben registrarse para conservar evidencia de la investigación, las comunicaciones y la decisión.
            .row(titulo="Legalidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las sanciones deben estar respaldadas por el contrato, el reglamento interno y la normativa aplicable.
      p.mb-0 Estos principios protegen los derechos de las personas involucradas y fortalecen la legitimidad de las decisiones disciplinarias.
      Separador
      #t_15_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 15.3 Procedimiento sancionatorio
      p.mb-5 El procedimiento sancionatorio permite analizar los hechos y adoptar una decisión fundamentada, respetando las garantías de la persona involucrada. Su desarrollo comprende las siguientes etapas (Brunal Abogados, s. f.):
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Apertura de la investigación
                    p.mb-0 Se recopilan los informes, registros, cámaras, bitácoras, testimonios y demás elementos relacionados con la posible falta.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t15/img5.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t15/img6.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Notificación
                    p.mb-0 Se comunica por escrito la descripción de los hechos, la evidencia disponible y la posible medida considerada.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Derecho de defensa
                    p.mb-0 A la persona involucrada presenta su versión, aporta pruebas y solicita los testimonios que considere pertinentes.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t15/img7.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t15/img8.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Decisión motivada
                    p.mb-0 Se adopta una decisión con fundamento en los hechos, las circunstancias y el criterio de proporcionalidad. La determinación se comunica por escrito.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro y comunicación
                    p.mb-0 La decisión y su ejecución se registran en el expediente correspondiente y se comunican a las áreas responsables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t15/img9.png', alt='' style="width: 300px").m-auto
      p El cumplimiento de estas etapas garantiza que la decisión se fundamente en información documentada y respete el debido proceso.
      p.mb-5 La aplicación del procedimiento puede contextualizarse mediante la siguiente situación:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t15/img10.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Caso hipotético
            p Una empresa identifica que un vigilante omitió reiteradamente las rondas programadas durante su turno, situación registrada mediante GPS y bitácora.
            p La empresa inicia la investigación, notifica al trabajador y le permite presentar su versión. Posteriormente, analiza los hechos, los antecedentes y la normativa interna antes de adoptar y documentar la decisión correspondiente.
            h5 Análisis del caso
            p.mb-0 La existencia de registros no reemplaza el procedimiento. La empresa debe comprobar los hechos, permitir el ejercicio del derecho de defensa y tomar una decisión proporcional y motivada.
      p.mb-0 El régimen sancionatorio requiere normas previamente establecidas, evidencia verificable y respeto por el debido proceso. Su correcta aplicación fortalece la disciplina, la confianza y la responsabilidad dentro de la prestación del servicio.

</template>

<script>
export default {
  name: 'Tema15',
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
