<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 13
        h1 Control del servicio de seguridad
      p.mb-5 El control del servicio comprende las acciones destinadas a supervisar, evaluar y corregir la operación, con el propósito de asegurar el cumplimiento de los protocolos, reducir los riesgos y mantener la calidad del servicio. Su aplicación integra la supervisión del personal, la verificación de equipos, el seguimiento de incidentes y el uso de registros y tecnologías de monitoreo (Función Pública, 2022).
      #t_13_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 13.1 Concepto de control en los servicios de seguridad
      p.mb-5 El control permite supervisar, evaluar y corregir la ejecución del servicio mediante el seguimiento del personal y el uso de herramientas tecnológicas. Comprende las siguientes acciones principales (FressGroup, s. f.):
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t13/img1.png', alt="" ).m-auto
                  h4.text-center Supervisar
                  .caja-2_p
                    p.mb-0.text-center Comprueba la ejecución de las actividades y el cumplimiento de las responsabilidades asignadas.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t13/img2.png', alt="" ).m-auto
                  h4.text-center Evaluar
                  .caja-2_p
                    p.mb-0.text-center Permite establecer los resultados obtenidos y detectar desviaciones durante la operación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t13/img3.png', alt="" ).m-auto
                  h4.text-center Corregir
                  .caja-2_p
                    p.mb-0.text-center Orienta la aplicación de medidas destinadas a subsanar fallas y fortalecer el servicio.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t13/img4.png', alt="" ).m-auto
                  h4.text-center Proteger
                  .caja-2_p
                    p.mb-0.text-center Contribuye a reducir riesgos y preservar la seguridad de las personas, los bienes y las instalaciones.
          p.mb-0 El control proporciona información para tomar decisiones, aplicar correctivos y conservar el cumplimiento de las condiciones contractuales y operativas.
      Separador
      #t_13_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 13.2 Tipos de control
      p.mb-5 En seguridad privada, los controles pueden clasificarse según el momento de aplicación, el objetivo y la naturaleza de las medidas implementadas. Estas clasificaciones se complementan para conformar una estrategia integral (FressGroup, s. f.).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control según el momento de aplicación
      p.mb-5 Esta clasificación establece cuándo se aplica el control con respecto al desarrollo del servicio o la ocurrencia de un incidente. Según el momento de aplicación, el control puede ser:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Antes: control preventivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Anticipa posibles fallas mediante capacitaciones, inspecciones o mantenimiento de equipos.
            .row(titulo="Durante: control concurrente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se aplica mientras el servicio está en ejecución mediante supervisión presencial, sistemas de monitoreo o programas de rondas.
            .row(titulo="Después: control correctivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Interviene tras una falla o incidente para determinar causas, establecer responsabilidades e implementar medidas de mejora.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t13/img5.png", alt="" style="width: 300px").m-auto
      p.mb-5 La aplicación de controles antes, durante y después de la operación favorece la prevención, el seguimiento y el mejoramiento del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control según el objetivo
      p.mb-5 Esta clasificación responde a la finalidad específica que cumple el control dentro de la prestación del servicio. De acuerdo con el objetivo establecido, se identifican los siguientes controles:
      .bg-4
        .px-5
          p.mb-5 
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Clasificación según objetivo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.texto-left Descripción
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de acceso
                      td.texto-left Regula el ingreso y la salida de personas o vehículos mediante puertas, torniquetes, esclusas, sistemas biométricos o tarjetas de acceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de calidad
                      td.texto-left Evalúa el cumplimiento de los estándares relacionados con la capacitación, los procedimientos y el uso de la tecnología.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de riesgos
                      td.texto-left Identifica, evalúa y minimiza los riesgos mediante acciones de planificación, aplicación y mejora continua.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control operativo
                      td.texto-left Supervisa al personal y comprueba el cumplimiento de horarios, la presentación y la aplicación de los protocolos (Función Pública, 2022; IBM, s. f.; EPIA, 2025).
          p.mb-5 La definición del objetivo permite seleccionar el control más adecuado según las necesidades del servicio.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control según su naturaleza
          p.mb-5 Esta clasificación diferencia los controles de acuerdo con los recursos y mecanismos utilizados para su aplicación. Según su naturaleza, los controles se clasifican en:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Control físico")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t13/img6.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Control físico
                  p.mb-0 Se aplica mediante la presencia del personal de seguridad y el uso de barreras como muros, vallas o puertas.
            .py-3.py-md-4(titulo="Control electrónico")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t13/img7.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Control electrónico
                  p.mb-0 Utiliza cámaras de vigilancia, alarmas, detectores de movimiento y sistemas tecnológicos de control de acceso.
            .py-3.py-md-4(titulo="Control lógico")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t13/img8.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Control lógico
                  p.mb-0 Gestiona permisos y accesos a sistemas informáticos, redes y datos, especialmente en contextos relacionados con la ciberseguridad.
      p.mb-0 La integración de controles físicos, electrónicos y lógicos permite proteger instalaciones, sistemas e información mediante diferentes mecanismos.
      Separador
      #t_13_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 13.3 Características del control de seguridad
      p.mb-5 El control debe responder a las condiciones del servicio y proporcionar información verificable para evaluar la eficacia de las medidas implementadas. Un control eficaz presenta las siguientes características:
      .row.justify-content-center.mb-5
        .col-xl-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Proactivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Anticipa problemas y amenazas mediante la evaluación de riesgos y la implementación de medidas preventivas.
            .row(titulo="Preventivo y disuasivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce la posibilidad de incidentes y desestimula actuaciones indebidas mediante controles organizados y reconocibles.
            .row(titulo="Integral").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende la supervisión del personal, los recursos tecnológicos, los procedimientos y la atención al cliente.
            .row(titulo="Adaptativo y dinámico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se ajusta a las necesidades del cliente y a los cambios en las condiciones del entorno.
            .row(titulo="Objetivo y medible").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utiliza evidencias, indicadores, informes y auditorías para evaluar los resultados de manera verificable.
            .row(titulo="Periódico y trazable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se aplica sistemáticamente y conserva registros que permiten reconstruir las actuaciones y novedades.
            .row(titulo="Basado en tecnología").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Emplea sistemas de gestión, programas de rondas, GPS, cámaras y plataformas de información para fortalecer la supervisión.
            .row(titulo="Centrado en el riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica y controla los riesgos específicos relacionados con las personas, los bienes y las instalaciones (IBM, s. f.; Función Pública, 2022; Senado, 2020).
      p.mb-0 La combinación de objetividad, periodicidad, trazabilidad y tecnología fortalece la detección de irregularidades y facilita la aplicación oportuna de medidas correctivas.

</template>

<script>
export default {
  name: 'Tema13',
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
