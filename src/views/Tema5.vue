<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Tipos y características de los servicios de seguridad
      p.mb-5 El servicio de seguridad comprende actividades contratadas de vigilancia, custodia, escolta o monitoreo para prevenir y responder ante riesgos, protegiendo personas, bienes y operaciones (Decreto 356 de 1994; ASIS, 2012).
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Tipos de servicios de seguridad
      p Los servicios de seguridad se organizan según la modalidad de protección, los recursos empleados y las necesidades particulares del entorno.
      p.mb-5 Su clasificación permite precisar las funciones, el alcance y las condiciones operativas de cada servicio (Belfry, 2024). Estas, se explican en los siguientes apartados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad física
      p.mb-5 La seguridad física integra personal capacitado y medidas operativas destinadas a proteger personas, bienes e instalaciones frente a situaciones de riesgo. Según la ubicación, el desplazamiento y el objeto protegido, comprende las siguientes modalidades:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Vigilancia fija")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Vigilancia fija
              p.mb-0 Protege personas, bienes e instalaciones desde un puesto determinado, como edificios, oficinas, residencias o eventos. El personal controla accesos, realiza rondas de inspección y previene intrusiones (Prosecurity, s. f.).
        .py-3.py-md-4(titulo="Vigilancia móvil")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Vigilancia móvil
              p.mb-0 Desarrolla actividades de protección y control mediante desplazamientos a pie o en vehículos dentro de un área definida. Se orienta a disuadir amenazas y supervisar perímetros extensos (Prosecurity, s. f.).
        .py-3.py-md-4(titulo="Servicio de escolta")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Servicio de escolta
              p.mb-0 Protege personas o acompaña bienes de alto valor durante sus desplazamientos. El personal debe estar capacitado para responder ante situaciones de riesgo (Prosecurity, s. f.).
        .py-3.py-md-4(titulo="Transporte de valores")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transporte de valores
              p.mb-0 Comprende el transporte, custodia y manejo de dinero, joyas, documentos u otros bienes de alto valor mediante personal y vehículos autorizados (Prosecurity, s. f.).
      p.mb-5 El personal debe actuar con prudencia y conforme con los principios de legalidad, necesidad y proporcionalidad. El uso de la fuerza debe respetar los límites establecidos por la normativa colombiana.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad electrónica
      p.mb-5 La seguridad electrónica integra sistemas tecnológicos que apoyan la detección, el control, el registro de eventos y la activación de respuestas operativas (Axon, s. f.). Sus modalidades se diferencian por el tipo de evento controlado y la tecnología empleada:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Monitoreo remoto
                  p.mb-0 Un equipo de operadores supervisa las áreas protegidas mediante cámaras y sistemas de detección. Ante una anomalía, se activa una alerta y se coordina la respuesta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de alarma
                  p.mb-0 Integran alarmas y sensores conectados con una central de monitoreo. Cuando se activa un dispositivo, se genera una alerta para iniciar el protocolo establecido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control electrónico de accesos
                  p.mb-0 Emplea tarjetas, huellas dactilares o reconocimiento facial para autorizar el ingreso y restringir el acceso a áreas sensibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integración de sistemas
                  p.mb-0 Las plataformas PSIM centralizan cámaras, alarmas y controles de acceso para fortalecer la coordinación y reducir los tiempos de respuesta (Everbridge, s. f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguridad logística
                  p.mb-0 Protege la cadena de suministro mediante la gestión de riesgos asociados al transporte, almacenamiento y distribución de mercancías.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La seguridad electrónica complementa la intervención humana y requiere procedimientos claros, mantenimiento, capacitación y supervisión para garantizar su funcionamiento adecuado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Servicios especializados
      p.mb-5 Los servicios especializados responden a riesgos concretos mediante personal, capacidades y procedimientos ajustados a las necesidades del entorno corporativo. Entre las modalidades desarrolladas se encuentran:
      .row.justify-content-center.mb-0
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img10.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Manejo de caninos
            p.mb-0.text-center Emplea perros entrenados para apoyar la vigilancia, detectar sustancias ilícitas o explosivos y proteger áreas de alto riesgo (PERF, 2020).
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img11.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Investigación en seguridad
            p.mb-0.text-center Se orienta a detectar fraudes, fugas de información y otras amenazas corporativas mediante análisis forense, investigaciones internas y perfiles de riesgo (PwC, 2024).
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Características de los servicios de seguridad privada
      p.mb-5 Un servicio de seguridad de calidad debe responder a las necesidades del cliente, cumplir la normativa y mantener capacidades técnicas y operativas actualizadas. Su prestación se fundamenta en las siguientes características:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Adaptabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El servicio se diseña según las necesidades del cliente y las condiciones del entorno residencial, comercial, empresarial o personal (ASIS, 2012).
            .row(titulo="Responsabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La empresa y el personal asumen obligaciones relacionadas con la protección de la vida y los bienes, la capacitación y el cumplimiento de los procedimientos (ASIS, 2012).
            .row(titulo="Tecnología de punta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El servicio puede incorporar cámaras con inteligencia artificial, drones y sistemas de ciberseguridad para fortalecer la prevención y la respuesta (NPSA, 2024).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img12.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img13.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cumplimiento legal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La empresa y su personal deben actuar conforme con las normas aplicables y recibir formación en derechos humanos y protocolos de actuación (ISO, 2018).
            .row(titulo="Complementariedad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La seguridad privada complementa la labor de la fuerza pública y se concentra en la prevención dentro de su ámbito de competencia (ASIS, 2012).
            .row(titulo="Formación continua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El personal requiere capacitación periódica en técnicas de protección, manejo de equipos y respuesta ante emergencias (ASIS, 2012).
      p.mb-0 Estas características se concretan mediante protocolos operativos y contratos que delimitan el alcance, las responsabilidades y los acuerdos de nivel de servicio —SLA— (Felix, 2024).

</template>

<script>
export default {
  name: 'Tema5',
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
