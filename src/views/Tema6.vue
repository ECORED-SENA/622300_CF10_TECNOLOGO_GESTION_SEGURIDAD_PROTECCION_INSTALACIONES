<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Diseño y operación del servicio
      p.mb-5 El diseño del servicio articula capacidades humanas, tecnológicas y procedimentales según el entorno y los riesgos, mediante objetivos, políticas y procedimientos definidos (Felix, 2024; ISO, 2018; ASIS, 2012). El diseño del servicio se desarrolla mediante cuatro acciones interdependientes:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Comprender el entorno
                    p.mb-0 Se analizan las condiciones sociales, técnicas, geográficas y organizacionales para establecer soluciones acordes con la realidad del riesgo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img1.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img2.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Definir objetivos y metas
                    p.mb-0 Se determina qué debe protegerse, frente a cuáles amenazas y cuál nivel de riesgo puede aceptar la organización.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Evaluar los riesgos
                    p.mb-0 Se identifican peligros actuales y escenarios futuros para establecer prioridades, costos, restricciones y medidas de protección.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img3.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img4.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Establecer políticas y procedimientos
                    p.mb-0 Los resultados del análisis se convierten en controles, protocolos y orientaciones sobre accesos, incidentes, información, pérdidas y formación del personal.
      p.mb-0 El diseño debe evaluarse y actualizarse periódicamente para responder a los cambios del entorno y conservar su eficacia (ASIS, 2012; NPSA, 2023).
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Control de acceso y medidas de seguridad física
      p.mb-5 El control de acceso y las medidas de seguridad física regulan el ingreso y protegen las instalaciones mediante controles administrativos, operativos y materiales adaptados al nivel de riesgo. Su aplicación comprende los siguientes controles:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img5.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece la identidad de la persona que solicita el ingreso mediante credenciales, contraseñas o datos biométricos.
            .row(titulo="Autorización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina las áreas, sistemas y recursos a los que puede acceder cada persona según sus funciones.
            .row(titulo="Registro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Documenta los ingresos, las salidas y los intentos de acceso para facilitar el seguimiento y la trazabilidad.
            .row(titulo="Revisión periódica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Actualiza o revoca los permisos cuando cambian las funciones, finaliza la vinculación o desaparece la necesidad de acceso.
      p.mb-5 De manera complementaria, la protección de las instalaciones y los perímetros incorpora las siguientes medidas de seguridad física:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img6.png').m-auto
              h4.mb-3.estilo-text Barreras
              p.mb-0.text-center Restringen o canalizan el ingreso de personas y vehículos hacia las áreas protegidas.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img7.png').m-auto
              h4.mb-3.estilo-text Cerraduras
              p.mb-0.text-center Controlan la apertura de puertas, accesos y espacios restringidos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img8.png').m-auto
              h4.mb-3.estilo-text Cercas
              p.mb-0.text-center Delimitan el perímetro y dificultan el ingreso no autorizado.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img9.png').m-auto
              h4.mb-3.estilo-text Bolardos
              p.mb-0.text-center Limitan el acceso vehicular y protegen zonas peatonales o instalaciones críticas.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img10.png').m-auto
              h4.mb-3.estilo-text Controles perimetrales
              p.mb-0.text-center Fortalecen la protección de los límites externos mediante elementos físicos y operativos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img11.png').m-auto
              h4.mb-3.estilo-text Sistemas de iluminación
              p.mb-0.text-center Apoyan la prevención, la detección y el funcionamiento de otros controles de seguridad.
          p La eficacia de estas medidas no depende de su cantidad, sino de su adecuación al entorno y de su articulación con el sistema de seguridad (NPSA, 2023).
          p.mb-0 Los principios de prevención del delito mediante el diseño ambiental —CPTED— favorecen la organización de los espacios, el control del entorno y la reducción de oportunidades delictivas.
          Separador
          #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.2 Vigilancia y monitoreo
      p.mb-5 La vigilancia y el monitoreo apoyan el seguimiento operativo, el registro de eventos y la coordinación de respuestas mediante sistemas y personal capacitado. Su funcionamiento requiere articular los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img12.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Ubicación estratégica
            p.mb-0.text-center Las cámaras, los sensores y los paneles se distribuyen según criterios funcionales para reducir puntos ciegos y fortalecer el seguimiento continuo.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t6/img13.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Protocolos operativos
            p.mb-0.text-center Se establecen procedimientos para registrar y analizar eventos, gestionar alertas y coordinar las respuestas requeridas.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img14.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Competencias del personal
            p.mb-0.text-center El personal debe contar con formación en comunicación, manejo de equipos tecnológicos y aplicación de protocolos.
      p.mb-0 La integración de tecnología, procedimientos y competencias favorece una vigilancia activa y orientada a la prevención, no únicamente a la reacción (DHS, 2013).
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Seguridad de la información y las redes
      p.mb-5 La seguridad integral comprende la protección de sistemas, redes y datos sensibles frente a accesos no autorizados, alteraciones, pérdidas o interrupciones. Esta protección se fundamenta en cuatro medidas esenciales:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Cortafuegos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Controlan las conexiones y el tráfico de red conforme con las reglas de seguridad establecidas.
            .row(titulo="Sistemas de detección de intrusiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifican actividades que pueden comprometer los sistemas o la infraestructura tecnológica.
            .row(titulo="Cifrado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Protege la información y restringe su interpretación a personas o sistemas autorizados.
            .row(titulo="Actualizaciones de <i>software</i>").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corrigen vulnerabilidades y mantienen vigentes los mecanismos de protección tecnológica (NIST, 2018).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img15.png", alt="" style="width: 350px").m-auto
      p Estas medidas contribuyen a preservar la confidencialidad, la integridad y la disponibilidad de la información utilizada durante la prestación del servicio.
      p.mb-5 El siguiente material audiovisual complementa las medidas aplicables a la protección de los sistemas, las redes y la información institucional:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Seguridad de la información
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Capacitación y cultura de seguridad
      p.mb-5 La formación continua fortalece las competencias y el compromiso del personal para aplicar los procedimientos y consolidar una cultura institucional orientada a la seguridad. La capacitación debe comprender los siguientes ámbitos (ASIS, 2012):
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formación integral
                  p.mb-0 Incluye al personal operativo, administrativo y directivo, de acuerdo con sus responsabilidades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicación de protocolos
                  p.mb-0 Fortalece el cumplimiento de los procedimientos establecidos y reduce las actuaciones improvisadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación de actividades sospechosas
                  p.mb-0 Promueve el reporte oportuno de situaciones que puedan afectar a las personas, los bienes o la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Decisiones fundamentadas en el riesgo
                  p.mb-0 Proporciona criterios para seleccionar actuaciones proporcionales a las condiciones y consecuencias de cada situación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img19.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La cultura de seguridad se consolida cuando el personal comprende sus responsabilidades, aplica los protocolos y participa activamente en la prevención.
      Separador
      #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.5 Planes de respuesta, evaluación y mejora continua
      p.mb-5 Los planes de respuesta organizan la actuación frente a incidentes y emergencias. Su evaluación y revisión periódica permiten actualizar los procedimientos y fortalecer la capacidad de respuesta de la organización. La gestión de los planes de respuesta comprende los siguientes aspectos (ASIS, 2012; Felix, 2024):
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img20.png', alt="" ).m-auto
                  h4.text-center Definición del plan
                  .caja-2_p
                    p.mb-0.text-center El plan establece los roles, las responsabilidades y las secuencias de actuación frente a incidentes y emergencias.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img21.png', alt="" ).m-auto
                  h4.text-center Pruebas periódicas
                  .caja-2_p
                    p.mb-0.text-center Las simulaciones y auditorías permiten evaluar la efectividad de los planes y actualizar los procedimientos según los resultados.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img22.png', alt="" ).m-auto
                  h4.text-center Evaluación y mejoramiento
                  .caja-2_p
                    p.mb-0.text-center La evaluación del desempeño y las pruebas de vulnerabilidad fortalecen la mejora continua y preparan a la organización para responder oportunamente.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img23.png', alt="" ).m-auto
                  h4.text-center Revisión y comunicación
                  .caja-2_p
                    p.mb-0.text-center La revisión periódica y la comunicación entre clientes, supervisores, entidades reguladoras y personal operativo favorecen la coordinación y la respuesta oportuna.
          p Estos aspectos permiten mantener la seguridad vigente, pertinente y adaptable frente a la evolución del entorno, las amenazas y las tecnologías.
          p.mb-5 El siguiente video complementa los principios de mejora continua aplicables a las organizaciones:
          figure(data-aos="zoom-in").mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. La mejora continua en las organizaciones
      p.mb-5 La mejora continua puede contextualizarse mediante el siguiente caso:
      .caja-4.color-1.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            h5 Caso presentado en el contenido
            p Una empresa de seguridad implementó un programa de incentivos para su personal operativo. Como resultado, se registró una disminución del ausentismo y una mejora en la valoración de la satisfacción del cliente durante las auditorías trimestrales.
            h5 Análisis del caso
            p.mb-0 El seguimiento periódico permite valorar los resultados de las acciones implementadas y establecer mejoras relacionadas con el desempeño y la calidad del servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img24.png', alt='' style="width: 550px").m-auto  
      Separador
      #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.6 Documentación, registro y mantenimiento
      p.mb-5 La documentación, el registro y el mantenimiento respaldan el cumplimiento normativo, la trazabilidad y la continuidad operativa de los sistemas físicos y tecnológicos. Estos procesos cumplen funciones complementarias dentro de la prestación del servicio:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Documentación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Documentación
              p.mb-0 Reúne las políticas, los procedimientos y las configuraciones técnicas que orientan el funcionamiento del sistema de seguridad.
        .py-3.py-md-4(titulo="Registro")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registro
              p.mb-0 Comprende los reportes de incidentes, resultados de auditorías, intervenciones realizadas y demás evidencias necesarias para la trazabilidad institucional.
        .py-3.py-md-4(titulo="Mantenimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Mantenimiento
              p.mb-0 Incluye las acciones preventivas y correctivas destinadas a conservar la operatividad de los sistemas físicos y tecnológicos.
        .py-3.py-md-4(titulo="Monitoreo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Monitoreo
              p.mb-0 Permite identificar oportunamente fallas, brechas o necesidades de intervención mediante la comprobación periódica de los sistemas (ASIS, 2012; Felix, 2024).
      p.mb-0 La actualización documental, el registro organizado y el mantenimiento programado permiten conservar la correspondencia entre los procedimientos establecidos y las condiciones reales de operación.

</template>

<script>
export default {
  name: 'Tema6',
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
