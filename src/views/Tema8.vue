<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Protocolo de seguridad
      p.mb-5 Los protocolos de seguridad establecen reglas, responsabilidades y líneas de actuación para orientar la prestación del servicio. Su aplicación favorece la prevención de incidentes, la coordinación de respuestas y la protección de personas, bienes e instalaciones.
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.1 Concepto y características de protocolos de seguridad
      p Un protocolo de seguridad reúne pautas y medidas destinadas a minimizar riesgos y coordinar la respuesta ante incidentes o emergencias. También define responsables, condiciones del servicio y componentes operativos, como controles de acceso, rondas y sistemas tecnológicos (ISO, 2018; #[i Security Survey] Template, 2022).
      p.mb-5 El siguiente material audiovisual introduce el concepto, la finalidad y los componentes generales de los protocolos de seguridad:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Protocolos de seguridad
      p.mb-5 Los protocolos se distinguen por las siguientes características:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t8/img1.png').m-auto
              h4.mb-3.estilo-text Orientación preventiva
              p.mb-0.text-center Establecen reglas y normas para prevenir, atender y gestionar los riesgos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t8/img2.png').m-auto
              h4.mb-3.estilo-text Finalidad definida
              p.mb-0.text-center Determinan objetivos y estándares de comportamiento aplicables a la prestación del servicio.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t8/img3.png').m-auto
              h4.mb-3.estilo-text Coordinación
              p.mb-0.text-center Articulan la participación de las entidades involucradas durante situaciones de emergencia.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t8/img4.png').m-auto
              h4.mb-3.estilo-text Protección
              p.mb-0.text-center Contribuyen a prevenir accidentes y proteger la vida de las personas.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t8/img5.png').m-auto
              h4.mb-3.estilo-text Capacidad de respuesta
              p.mb-0.text-center Favorecen actuaciones rápidas y adecuadas frente a incidentes o emergencias.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t8/img6.png').m-auto
              h4.mb-3.estilo-text Reducción de daños
              p.mb-0.text-center Ayudan a disminuir las afectaciones materiales y ambientales.
          p.mb-0 Estas características permiten orientar la actuación del personal y mantener criterios comunes frente a los riesgos y situaciones operativas.
          Separador
          #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.2 Responsables y condiciones para la prestación del servicio
      p.mb-5 La aplicación de los protocolos requiere asignar responsables y definir previamente las condiciones bajo las cuales se prestará el servicio de seguridad. Estos aspectos se organizan en dos componentes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Responsables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsables
              p Para cada actividad deben establecerse las personas encargadas de ejecutar y supervisar las medidas de seguridad.
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Operadores de medios tecnológicos:] monitorean y controlan los sistemas, y atienden los incidentes de manera oportuna.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Vigilantes de seguridad:] requieren capacidad de reacción, comunicación, trabajo en equipo, formación y experiencia.
        .py-3.py-md-4(titulo="Condiciones del servicio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Condiciones del servicio
              p.mb-0 Antes de instalar el puesto deben definirse el alcance, los términos y las condiciones de prestación. El servicio puede incorporar vigilancia con o sin armas y medios tecnológicos, conforme con las disposiciones aplicables.
      p.mb-0 La definición de responsabilidades y condiciones facilita la coordinación del personal y delimita el alcance operativo del servicio.
      Separador
      #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.3 Elementos del puesto de vigilancia
      p.mb-5 El puesto de vigilancia es el espacio desde el cual se desarrollan actividades de supervisión y control. Sus elementos dependen de las características y condiciones del servicio. Los recursos mínimos pueden organizarse en las siguientes categorías:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t8/img9.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Elementos de vigilancia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden los equipos y las herramientas utilizados durante el servicio, incluidos los sistemas tecnológicos, como cámaras, alarmas y sensores.
            .row(titulo="Medios de comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen radio de comunicaciones, avantel o teléfono celular, según las condiciones del puesto.
            .row(titulo="Equipos de protección personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden los elementos asignados para proteger al personal durante el cumplimiento de sus funciones.
            .row(titulo="Elementos operativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden incluir tonfa, bastón de mando, arma de fuego y silbato, según las características del servicio y la normativa aplicable.
            .row(titulo="Herramientas de registro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen la minuta y el libro de registro de visitas para documentar las actividades y novedades del puesto.
      p.mb-0 La disponibilidad y el uso adecuado de estos elementos respaldan la supervisión, la comunicación, el registro y la respuesta durante la prestación del servicio.
      Separador
      #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.4 Protocolos aplicables al puesto de vigilancia
      p.mb-5 Cada puesto presenta condiciones particulares. Por ello, los protocolos deben considerar el nivel de riesgo, las amenazas identificadas, la ubicación, la infraestructura, los equipos disponibles y los procedimientos requeridos. Entre los protocolos aplicables al puesto de vigilancia se encuentran:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Control de acceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Regula el ingreso y la salida de personas y vehículos mediante acciones como la identificación, el registro y el control de visitantes.
            .row(titulo="Sistemas de rondas").ajuste-cajaAcordion.ajuste-vineta
              p Orientan las inspecciones y los recorridos de vigilancia realizados en áreas determinadas y durante intervalos establecidos.
              p Las rondas pueden ser:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fijas:] siguen rutas y horarios establecidos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Variables:] emplean rutas y horarios aleatorios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Electrónicas:] utilizan puntos de control y mecanismos de validación para comprobar el recorrido.
            .row(titulo="Operación de seguridad electrónica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece orientaciones para operar y mantener cámaras, alarmas y otros dispositivos. También comprende el monitoreo y la comprobación del funcionamiento de los equipos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t8/img10.png", alt="" style="width: 300px").m-auto
      p.mb-5 El diseño de cada protocolo debe responder a las condiciones reales del puesto y establecer acciones acordes con los riesgos y recursos disponibles.
      .caja-6.mb-5(data-aos="fade-right")   
        h4.mb-0  Contextualización
      p.mb-0 Un protocolo de evacuación por incendio puede establecer la salida ordenada del edificio, evitar el uso de ascensores y orientar la actuación del personal durante la emergencia.
      .bg-4
        .px-5
          Separador
          #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.5 Diferencia entre protocolo y procedimiento de seguridad
          p.mb-5 El protocolo establece las reglas generales y la finalidad de la actuación, mientras que el procedimiento determina los pasos y responsables necesarios para ejecutar una tarea específica. Las principales diferencias se sintetizan en la siguiente tabla:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Diferencias entre protocolo de seguridad y procedimiento de seguridad
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Característica
                      th.ajuste-border-tabla.texto-left Protocolo de seguridad
                      th.texto-left Procedimiento de seguridad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Enfoque
                      td.ajuste-border-tabla.texto-left Define qué debe realizarse y por qué.
                      td.texto-left Determina cómo debe realizarse y quién interviene.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Naturaleza
                      td.ajuste-border-tabla.texto-left General y orientadora.
                      td.texto-left Específica y detallada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Función
                      td.ajuste-border-tabla.texto-left Establece directrices y normas.
                      td.texto-left Organiza pasos y tareas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ejemplo
                      td.ajuste-border-tabla.texto-left Protocolo de evacuación por incendio.
                      td.texto-left Procedimiento para abrir una puerta de evacuación.
          p.mb-0 Ambos documentos son complementarios: el protocolo orienta la actuación general y el procedimiento concreta su ejecución en actividades, responsables y secuencias definidas.

</template>

<script>
export default {
  name: 'Tema8',
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
