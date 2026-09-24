<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 14
        h1 Novedades en los servicios de seguridad
      p.mb-5 Las novedades son hechos, incidentes o situaciones que alteran la prestación normal del servicio. Su gestión requiere registrarlas y comunicarlas oportunamente para orientar las decisiones, corregir fallas y conservar evidencias verificables.
      #t_14_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 14.1 Concepto y tipos de novedad
      p.mb-5 Una novedad es un hecho que altera el desarrollo normal del servicio y requiere ser reportado, como ausencias, fallas, accidentes o intrusiones. Según su relación con la operación, se clasifica en dos categorías (Supervigilancia, 2012):
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Novedades operativas o eventuales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t14/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Novedades operativas o eventuales
              p Son acontecimientos imprevistos que afectan el desarrollo del servicio y requieren una respuesta inmediata. Comprenden:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Robos, hurtos o intrusiones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Vandalismo o daños a la propiedad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Emergencias, incendios o accidentes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Incidentes con personas ajenas al servicio.
        .py-3.py-md-4(titulo="Novedades administrativas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t14/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Novedades administrativas
              p Se relacionan con el funcionamiento cotidiano del servicio y generalmente se registran al finalizar el turno. Comprenden:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Faltas de personal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Daños o pérdida de equipos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Incumplimiento de normas por parte del personal o de terceros.
      p.mb-0 La clasificación permite establecer la prioridad, el canal de comunicación y las acciones requeridas frente a cada novedad.
      Separador
      #t_14_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 14.2 Elaboración y presentación del reporte de novedades
      p.mb-5 El reporte de novedades documenta hechos relevantes y proporciona información para la toma de decisiones, la aplicación de correctivos y la trazabilidad del servicio. Para garantizar su utilidad, debe responder las siguientes preguntas:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t14/img3.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t14/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ¿Qué ocurrió?
                  p.mb-0.text-center Describe de manera precisa el hecho o la situación presentada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t14/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ¿Quién intervino?
                  p.mb-0.text-center Identifica a las personas relacionadas con la novedad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t14/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ¿Cuándo ocurrió?
                  p.mb-0.text-center Registra la fecha y la hora correspondientes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t14/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ¿Dónde ocurrió?
                  p.mb-0.text-center Establece el lugar exacto en el que se presentó el hecho.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t14/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ¿Cómo ocurrió?
                  p.mb-0.text-center Explica las circunstancias y la secuencia de los acontecimientos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t14/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ¿Por qué ocurrió?
                  p.mb-0.text-center Incluye las causas comprobadas. Cuando no se han establecido, debe evitarse presentar suposiciones como hechos.
      p.mb-5 Además de responder estas preguntas, el reporte debe cumplir las siguientes características (Senado, 2020):
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Claro, conciso y preciso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye únicamente información relevante y evita ambigüedades.
            .row(titulo="Completo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incorpora los datos necesarios para comprender el hecho y las actuaciones realizadas.
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se fundamenta en información concreta y verificable, diferenciando los hechos de las hipótesis.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t14/img10.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t14/img11.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cronológico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza los acontecimientos de acuerdo con el orden en que ocurrieron.
            .row(titulo="Oportuno").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se presenta lo antes posible para conservar la precisión de la información y facilitar la respuesta.
            .row(titulo="Trazable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer quién registró la novedad, cuándo lo hizo y cuáles actuaciones se desarrollaron.
      p.mb-5 El formato utilizado depende de las características y la gravedad de la novedad. Estas se presentan en la siguiente tabla:
      .bg-4
        .px-5
          p.mb-5 
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Formatos utilizados para reportar novedades
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Formato
                      th.texto-left Descripción de novedad
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Libro de novedades
                      td.texto-left Registra manualmente los acontecimientos de cada turno de forma cronológica y sin enmendaduras.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reporte digital
                      td.texto-left Utiliza aplicaciones o programas para registrar y comunicar las novedades en tiempo real.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe escrito
                      td.texto-left Documenta formalmente los incidentes que requieren una descripción detallada, análisis y conclusiones.
          p.mb-5 El siguiente pódcast profundiza en la elaboración de reportes mediante el análisis de un caso aplicado. Se invita al aprendiz a reproducirlo y analizar las decisiones adoptadas, con el propósito de identificar los criterios que permiten comunicar los hechos con claridad, objetividad, oportunidad y trazabilidad.
          .row.align-items-center.m-0.mb-5
            .col-xl
              .row.align-items-center.justify-content-center.caja-7(data-aos="zoom-in")
                .col-auto.mb-4.mb-lg-0
                  figure(data-aos="fade-right")
                    img(src="@/assets/curso/temas/t14/img12.svg" style="max-width: 220px").m-auto
                .col
                  h4.mb-4 Pódcast
                  TarjetaAudio.color-acento-contenido.mb-4(
                      texto="Cada novedad cuenta: claves para elaborar reportes efectivos"
                      :audio="audio1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-xl-auto.d-none.d-xl-block
              figure(data-aos="fade-left")
                img(src="@/assets/curso/temas/t14/img13.jpg" style="max-width: 510px").m-auto
      p.mb-0 La estructura, las características y el formato del reporte deben seleccionarse según la naturaleza de la novedad y las necesidades de comunicación del servicio.
      Separador
      #t_14_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 14.3 Comunicación de novedades
      p.mb-5 La comunicación de novedades permite transmitir información a clientes, supervisores y responsables de la operación para coordinar la respuesta y mantener la continuidad del servicio. Para comunicar las novedades se emplean las siguientes técnicas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación oral
                  p.mb-0 Se utiliza para reportar inmediatamente novedades críticas mediante radio o teléfono. La información debe ser clara y breve.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t14/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación escrita
                  p.mb-0 Formaliza los hechos en libros de novedades, reportes o informes mediante una redacción objetiva y detallada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t14/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recepción y verificación de información
                  p.mb-0 Permite obtener datos de testigos o personas relacionadas y contrastarlos antes de incorporarlos al reporte.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t14/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo de equipos de comunicación
                  p.mb-0 Comprende el uso adecuado de radios, aplicaciones móviles y otros medios tecnológicos para mantener informados a la central de monitoreo y a los supervisores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t14/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protocolos de comunicación
                  p.mb-0 Establecen canales, códigos y expresiones normalizadas para agilizar la transmisión de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t14/img18.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La selección del canal debe responder a la urgencia del hecho: la comunicación inmediata facilita la atención y el reporte escrito conserva su trazabilidad.

</template>

<script>
import audio1 from '@/assets/curso/temas/t14/audios/audio-ej.mp3'
export default {
  name: 'Tema14',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
