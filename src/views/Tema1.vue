<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de seguridad
      p.mb-5 La seguridad integra dimensiones públicas y privadas, así como amenazas, vulnerabilidades, riesgos y controles. Su análisis permite diferenciar ambas modalidades y reconocer sus posibilidades de coordinación para una protección eficaz y ética.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Seguridad pública y seguridad privada
      p.mb-5 La seguridad pública y la privada protegen personas, bienes e instalaciones dentro del marco jurídico estatal. Los siguientes apartados precisan sus características, funciones y formas de articulación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Seguridad pública")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Seguridad pública
              p.mb-0 La seguridad pública comprende las políticas, instituciones y acciones mediante las cuales el Estado protege a la ciudadanía, conserva el orden y promueve la convivencia. Su alcance es general y su prestación corresponde a las autoridades legalmente facultadas para prevenir amenazas, atender emergencias e intervenir ante hechos que afecten la seguridad colectiva (De Waard, 2015).
        .py-3.py-md-4(titulo="Seguridad privada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Seguridad privada
              p.mb-0 La seguridad privada es una actividad remunerada, prestada por entidades autorizadas para proteger personas, bienes, procesos o instalaciones determinadas. Se desarrolla mediante un contrato y complementa la función estatal, sin asumir las competencias exclusivas de las autoridades públicas (De Waard, 2015).
        .py-3.py-md-4(titulo="Articulación institucional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Articulación institucional
              p.mb-0 La seguridad pública y la seguridad privada forman parte de un sistema en el que participan el Estado, las empresas y la sociedad. Su articulación requiere coordinación, intercambio oportuno de información, respeto por las competencias y mecanismos de rendición de cuentas (De Waard, 2015; Villalón-Fonseca, 2022).
      p.mb-5 La articulación entre la seguridad pública y la seguridad privada puede comprenderse mediante el siguiente caso aplicado:
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img4.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Caso aplicado
            p.mb-0 Una empresa contrata vigilancia privada e instala cámaras para proteger sus instalaciones. Ante un intento de asalto, el personal activa el protocolo, comunica la situación y coordina con la Policía Nacional. La intervención se desarrolla según las funciones y los límites legales correspondientes a cada actor.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Diferencias entre seguridad pública y seguridad privada
      .bg-1
        .px-5
          p.mb-5 La seguridad pública y la seguridad privada se diferencian por su finalidad, responsabilidad, forma de prestación, ámbito de actuación y facultades. La siguiente tabla compara sus características a partir de criterios comunes:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Diferencias entre seguridad pública y seguridad privada
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla elaborada a partir de Seguridad Superior (s. f.) y De Waard (2015).
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Seguridad pública
                      th.texto-left Seguridad privada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad
                      td.ajuste-border-tabla.texto-left Protege el orden, la convivencia y la seguridad de la ciudadanía en general.
                      td.texto-left Protege personas, bienes, procesos o instalaciones determinados por el contratante.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsabilidad
                      td.ajuste-border-tabla.texto-left Corresponde al Estado y se desarrolla mediante las autoridades legalmente facultadas.
                      td.texto-left Corresponde a empresas y servicios autorizados, sometidos a regulación y supervisión estatal.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Forma de presentación
                      td.ajuste-border-tabla.texto-left Se presta como una función estatal y no requiere contratos individuales con la ciudadanía.
                      td.texto-left Se presta mediante una relación contractual que establece su alcance, condiciones y responsabilidades.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ámbito de actuación
                      td.ajuste-border-tabla.texto-left Interviene en asuntos que afectan el interés general, conforme con las competencias legales.
                      td.texto-left Actúa en espacios, actividades o servicios específicos definidos mediante el contrato.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Facultades
                      td.ajuste-border-tabla.texto-left Ejerce las atribuciones de autoridad y coerción conferidas por la ley.
                      td.texto-left Aplica medidas preventivas y de vigilancia sin sustituir las funciones exclusivas de las autoridades públicas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Beneficiarios
                      td.ajuste-border-tabla.texto-left Está dirigida a la población y a la protección del interés colectivo.
                      td.texto-left Está dirigida al cliente, la organización o las personas cubiertas por el servicio contratado.
          p.mb-0 Las diferencias delimitan la actuación de cada modalidad y permiten establecer mecanismos de coordinación respetuosos de las competencias y responsabilidades legalmente asignadas.
          Separador
          #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.3 Similitudes entre seguridad pública y seguridad privada
          p.mb-5 Aunque poseen competencias y ámbitos diferentes, ambas modalidades comparten principios y propósitos relacionados con la prevención, la protección y la gestión de riesgos. Los siguientes aspectos permiten reconocer los propósitos y responsabilidades comunes de ambas modalidades:
          .bg-carrusel
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t1/img5.png').m-auto
                  h4.mb-3.estilo-text Protección
                  p.mb-0.text-center Ambas modalidades contribuyen a proteger personas, bienes, procesos e instalaciones frente a hechos que puedan afectar su seguridad.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t1/img6.png').m-auto
                  h4.mb-3.estilo-text Prevención
                  p.mb-0.text-center Las dos desarrollan medidas orientadas a anticipar eventos adversos, reducir vulnerabilidades y evitar la materialización de riesgos.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t1/img7.png').m-auto
                  h4.mb-3.estilo-text Gestión de riesgos
                  p.mb-0.text-center La seguridad pública y la privada identifican amenazas, valoran condiciones del entorno y aplican controles acordes con sus respectivas competencias.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t1/img8.png').m-auto
                  h4.mb-3.estilo-text Respuesta
                  p.mb-0.text-center Ambas participan en la atención de situaciones de seguridad, conforme con los protocolos, recursos y límites legales aplicables.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t1/img9.png').m-auto
                  h4.mb-3.estilo-text Coordinación
                  p.mb-0.text-center La comunicación y el intercambio oportuno de información facilitan la articulación entre autoridades, empresas de seguridad, clientes y comunidades.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t1/img10.png').m-auto
                  h4.mb-3.estilo-text Responsabilidad
                  p.mb-0.text-center Las dos deben actuar con ética, calidad, respeto por la normativa y compromiso con la protección de las personas y sus bienes (Seguridad Superior, s. f.).
              p.mb-0 El personal de seguridad privada debe reconocer estos propósitos comunes y respetar los límites legales de su actuación. Esta comprensión favorece la coordinación con las autoridades y el cumplimiento de las obligaciones contractuales, operativas y éticas del servicio (INISEG, 2025).

</template>

<script>
export default {
  name: 'Tema1',
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
