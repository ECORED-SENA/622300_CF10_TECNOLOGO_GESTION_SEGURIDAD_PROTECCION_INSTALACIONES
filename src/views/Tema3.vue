<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Equipos en la seguridad privada
      p.mb-5 Este tema aborda las clases y características de los equipos de seguridad física, así como las orientaciones para su instalación, conexión, uso, mantenimiento y manejo. Su comprensión favorece una operación adecuada y acorde con los procedimientos establecidos.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Tipos, clases y características de los equipos
      p.mb-5 Los equipos físicos contribuyen a controlar accesos, delimitar áreas, detectar objetos restringidos y facilitar la comunicación durante la prestación del servicio. Los equipos se diferencian por su función, características operativas, forma de conexión y requerimientos de manejo:
      TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Barreras vehiculares")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Barreras vehiculares
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: automáticas, de brazo articulado o telescópico. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: regulan el acceso y la circulación de vehículos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión: alimentación eléctrica, red de control y sensores de presencia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: verificación diaria, pruebas de apertura y cierre, y activación manual ante fallas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Documento técnico: manual de instalación, mantenimiento y atención de emergencias (Newgate, 2023).
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img1.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Torniquetes y barreras peatonales")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Torniquetes y barreras peatonales
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: torniquetes simples, de doble rotor u ópticos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: controlan el flujo peatonal y previenen el ingreso simultáneo no autorizado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión: lectores de credenciales, red, alimentación eléctrica y señalización. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: verificación del paso autorizado, registro de ingresos y control del ancho de circulación.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img2.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Puertas de seguridad")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Puertas de seguridad
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: puertas motorizadas, cortinas metálicas y esclusas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: restringen el acceso y proporcionan resistencia física. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión: alimentación eléctrica, controles de motor, sensores de cierre y sistemas de acceso. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: comprobación de sensores, cierre de emergencia y procedimientos de evacuación.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img3.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Detectores manuales de metales")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Detectores manuales de metales
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: detectores de mano o tipo pistola. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: identifican objetos metálicos portados por las personas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión: batería y señales audibles o luminosas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: verificación previa, calibración, aplicación sin contacto inadecuado y registro de inspecciones.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img4.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Detectores de metales tipo pórtico")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Detectores de metales tipo pórtico
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: arcos metálicos multizona con sistemas de alarma. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: controlan el ingreso peatonal y detectan simultáneamente objetos metálicos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión: alimentación eléctrica, red de datos y alarmas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: control del flujo, verificación de pasos autorizados y reporte de activaciones. 
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img5.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Armas de fuego")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Armas de fuego
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: pistola, revólver y escopeta, conforme con la regulación aplicable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: constituyen medios de uso controlado que exigen autorización, formación y registro. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Condición operativa: no requieren conexión tecnológica, pero sí control documental y custodia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: entrenamiento, registro de uso, mantenimiento y aplicación de la cadena de custodia.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img6.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Equipos de comunicación")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Equipos de comunicación
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: radios VHF/UHF, dispositivos móviles y botones de alarma. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: facilitan la comunicación inmediata y la emisión de alertas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conexión: infraestructura de radio, red inalámbrica, telefonía móvil o enlace con la central. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: pruebas de batería y cobertura, registro de comunicaciones y aplicación de protocolos.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img7.svg", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Cerramientos perimetrales")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Cerramientos perimetrales
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clases: mallas metálicas, cerramientos tipo palisade y cortinas metálicas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: delimitan el perímetro y constituyen una primera barrera de protección. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Instalación: fijaciones mecánicas y, cuando corresponda, sensores complementarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo: inspecciones periódicas, control de accesos y reporte de daños.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img8.svg", alt="" style="max-width: 350px").m-auto
      p.mb-0 La selección de cada equipo debe responder al riesgo identificado, las condiciones del entorno y los procedimientos establecidos para su operación segura.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Manual operacional
      p.mb-5 El manual operacional establece las orientaciones técnicas y procedimentales requeridas para la instalación, puesta en servicio, operación segura y mantenimiento de los equipos. Su contenido debe precisar los siguientes aspectos para favorecer el funcionamiento adecuado de cada equipo:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img9.png').m-auto
              h4.mb-3.estilo-text Propósito
              p.mb-0.text-center Define la finalidad para la cual se utiliza el equipo.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img10.png').m-auto
              h4.mb-3.estilo-text Características técnicas
              p.mb-0.text-center Especifica las condiciones y particularidades técnicas del equipo.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img11.png').m-auto
              h4.mb-3.estilo-text Esquema de instalación
              p.mb-0.text-center Establece los requerimientos necesarios para instalar el equipo.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img12.png').m-auto
              h4.mb-3.estilo-text Puesta en servicio
              p.mb-0.text-center Determina los procedimientos requeridos para iniciar su funcionamiento.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img13.png').m-auto
              h4.mb-3.estilo-text Mantenimiento preventivo y correctivo
              p.mb-0.text-center Orienta las intervenciones destinadas a prevenir fallas o restablecer el funcionamiento del equipo.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img14.png').m-auto
              h4.mb-3.estilo-text Protocolos de seguridad
              p.mb-0.text-center Establece las medidas aplicables durante la instalación, operación y mantenimiento.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img15.png').m-auto
              h4.mb-3.estilo-text Listas de repuestos
              p.mb-0.text-center Relaciona los componentes necesarios para atender mantenimientos o reemplazos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img16.png').m-auto
              h4.mb-3.estilo-text Criterios de aceptación técnica
              p.mb-0.text-center Define las condiciones que debe cumplir el equipo para considerarse apto para el servicio (DHS, 2013).
          Separador
          #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.3 Controles de seguridad asociados a los equipos
      p.mb-5 Los controles asociados a los equipos permiten prevenir eventos, detectar situaciones irregulares y apoyar la recuperación de la operación después de una afectación. Según su finalidad dentro del sistema de protección, los controles de seguridad se clasifican de la siguiente manera:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Controles preventivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reducen la probabilidad de ocurrencia de un evento adverso. Incluyen barreras físicas, cerraduras y otros elementos destinados a restringir accesos.
            .row(titulo="Controles detectivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten identificar oportunamente situaciones irregulares. Comprenden sensores y sistemas de circuito cerrado de televisión —CCTV—.
            .row(titulo="Controles correctivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuyen a recuperar la operación o reducir las consecuencias después de un evento. Incluyen sistemas de recuperación y respaldo de grabaciones.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img17.png", alt="" style="width: 300px").m-auto
      p.mb-5 La eficacia de estos controles también depende de la gestión técnica y procedimental de los equipos utilizados. Para favorecer su operación, control y trazabilidad, esta gestión integra los siguientes aspectos:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Especificaciones técnicas
                  p.mb-0.text-center Definen las características, capacidades y condiciones de funcionamiento de los equipos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mantenimiento
                  p.mb-0.text-center Comprende las actividades preventivas y correctivas necesarias para conservar su disponibilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Manuales
                  p.mb-0.text-center Orientan la operación, la atención de alertas, la respuesta ante fallas y la actuación frente a incidentes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registros técnicos
                  p.mb-0.text-center Fortalece las competencias del personal encargado de operar, supervisar y controlar los equipos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Formación
                  p.mb-0.text-center Documentan inspecciones, fallas, mantenimientos y actuaciones para facilitar la trazabilidad y la auditoría (DHS, 2013; Cohen, 2009).
          p.mb-5 Además de su gestión individual, los controles requieren coordinación para reducir los tiempos de respuesta y fortalecer la eficacia operativa. La articulación de controles preventivos, detectivos y correctivos puede concretarse mediante el siguiente caso:
      .caja-4.color-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            h5 Caso aplicado
            p Un depósito con alto riesgo de hurto nocturno implementa una estrategia conformada por:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Disuasión:] iluminación y avisos preventivos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Detección:] sensores perimetrales y CCTV con analítica. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Retraso:] puertas reforzadas y cierres automáticos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Respuesta:] patrullajes móviles y protocolo de comunicación con la Policía. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Corrección:] auditoría mensual y respaldo de grabaciones en la nube. 
            p.mb-0 La eficacia de los controles se evalúa mediante indicadores semestrales para determinar la reducción de incidentes y establecer los ajustes requeridos.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img24.png', alt='' style="width: 550px").m-auto  
      p.mb-0 La integración de equipos, manuales, mantenimiento, formación y registros técnicos fortalece la aplicación coordinada de los controles y facilita su evaluación periódica.

</template>

<script>
export default {
  name: 'Tema3',
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
