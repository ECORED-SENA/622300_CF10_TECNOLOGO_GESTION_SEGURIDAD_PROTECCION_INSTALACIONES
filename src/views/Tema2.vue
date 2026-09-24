<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Esquemas de seguridad
      p.mb-5 Los esquemas de seguridad integran medidas, recursos y procedimientos para proteger personas, bienes e instalaciones frente a riesgos identificados. Su estructuración permite coordinar las acciones de protección con fundamento técnico y de acuerdo con las condiciones particulares del entorno.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto de esquema de seguridad
      p.mb-5 Un esquema de seguridad articula medidas, recursos, procedimientos y responsabilidades para proteger personas, bienes e instalaciones frente a riesgos identificados. Sus elementos responden a las condiciones y necesidades del servicio (Hedasero, 2015):
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Objeto de protección
                  p.mb-0 Define las personas, los bienes, los procesos, la información o las instalaciones que requieren medidas de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgos identificados
                  p.mb-0 Considera las amenazas y vulnerabilidades que pueden afectar los activos protegidos y el cumplimiento de los objetivos institucionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recursos
                  p.mb-0 Integra el personal, los equipos, las herramientas tecnológicas, la infraestructura y el presupuesto necesarios para ejecutar el servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos
                  p.mb-0 Establece las actividades, los controles, los canales de comunicación y las respuestas aplicables ante situaciones ordinarias o incidentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Responsabilidades
                  p.mb-0 Determina las funciones del analista, el jefe de seguridad, el supervisor, el personal operativo y demás participantes en la operación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tiempo y cobertura
                  p.mb-0 Precisa jornadas, turnos, relevos, frecuencias de reporte, puntos fijos, zonas de recorrido y condiciones de continuidad del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La articulación de estos elementos permite convertir el diagnóstico de seguridad en acciones coordinadas y adaptadas al entorno, como se plantea en el siguiente caso (Hedasero, 2015):
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Caso
            p.mb-0 Una organización requiere proteger una bodega en la que almacena mercancía de alto valor. El esquema contempla vigilantes distribuidos por turnos, cámaras, alarmas, control de acceso, rondas programadas y comunicación permanente con el centro de control. Además, asigna responsables, establece frecuencias de reporte y documenta las medidas aplicables ante una novedad.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Técnicas de análisis para estructurar esquemas de seguridad
      p.mb-5 La estructuración de un esquema de seguridad requiere comprender el riesgo, aplicar técnicas de análisis y articular controles acordes con las condiciones del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Defensa en profundidad
      p.mb-5 La defensa en profundidad integra capas de control complementarias para prevenir eventos adversos, reducir sus consecuencias y fortalecer la protección de los activos. Sus principales medidas son:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img9.png', alt="" ).m-auto
                  h4.text-center Disuasión
                  .caja-2_p
                    p.mb-0.text-center Integra medidas destinadas a desmotivar o impedir la intención de ejecutar una acción adversa.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img10.png', alt="" ).m-auto
                  h4.text-center Detección
                  .caja-2_p
                    p.mb-0.text-center Comprende controles orientados a identificar oportunamente amenazas, comportamientos irregulares o eventos que puedan afectar los activos protegidos.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img11.png', alt="" ).m-auto
                  h4.text-center Retraso
                  .caja-2_p
                    p.mb-0.text-center Incluye barreras y medidas que dificultan el avance de una amenaza y aumentan el tiempo disponible para activar la respuesta.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
                  h4.text-center Respuesta
                  .caja-2_p
                    p.mb-0.text-center Agrupa las acciones establecidas para controlar el evento, proteger los activos y reducir sus posibles consecuencias.
          p.mb-5 Estas medidas pueden incorporar controles físicos, técnicos y administrativos, organizados en capas complementarias según los riesgos identificados (Avigilon, s. f.).
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructuración del esquema de seguridad
      p.mb-5 La estructuración del esquema transforma el diagnóstico en medidas, recursos y responsabilidades mediante fases que articulan la protección, la operación y el mejoramiento. Estas son:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Realizar el diagnóstico
                    p.mb-0 Se verifican los activos, la infraestructura, los flujos de personas, las entradas, las salidas, los puntos ciegos y los puntos vulnerables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Diseñar el esquema
                    p.mb-0 Se determinan el personal, la tecnología, los controles y los procedimientos requeridos de acuerdo con los riesgos y las necesidades del servicio.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Implementar las medidas
                    p.mb-0 Se instalan los equipos, se asignan las responsabilidades, se forma al personal y se aplican los protocolos definidos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Evaluar los resultados
                    p.mb-0 Se verifica la eficacia del esquema mediante revisiones periódicas, indicadores de desempeño y auditorías.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Actualizar el esquema
                    p.mb-0 Se ajustan los controles, los recursos y los procedimientos según los resultados obtenidos y los cambios presentados en el entorno.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
      p.mb-5 Esta secuencia permite que el esquema se aplique, evalúe y actualice conforme con las necesidades de protección y las condiciones del servicio (FasterCapital, s. f.).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conceptualización del riesgo
      p.mb-5 La comprensión del riesgo permite establecer prioridades y sustentar la selección de controles dentro del esquema de seguridad. Las siguientes perspectivas precisan el concepto desde enfoques técnicos e institucionales aplicables a la seguridad:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="<i>American Society for Industrial Security (ASIS)</i>")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 #[i American Society for Industrial Security (ASIS)]
              p.mb-0 El riesgo corresponde a la probabilidad de una consecuencia. También puede entenderse como la posibilidad de pérdida derivada de una amenaza, un incidente o un evento de seguridad. Esta perspectiva relaciona la ocurrencia del evento con sus posibles repercusiones sobre los activos de la organización (ASIS, 2012).
        .py-3.py-md-4(titulo="Modelo de Sandia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Modelo de Sandia
              p.mb-0 El riesgo representa la pérdida o el costo esperado ante un ataque adversario sobre una infraestructura determinada. Su cálculo relaciona tres variables: amenaza, vulnerabilidad y consecuencia (Baker, 2002).
      p.mb-5 Aunque las definiciones responden a enfoques distintos, todas relacionan la incertidumbre, la ocurrencia de eventos y sus posibles efectos sobre los objetivos o activos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Variables del riesgo
      p.mb-5 El modelo de Sandia relaciona tres variables que permiten analizar el riesgo y establecer prioridades de intervención en materia de seguridad. La relación entre estas variables puede expresarse mediante la siguiente fórmula:
      .row.justify-content-center.align-items-center
        .col-xl-10
          .caja-3.mb-5(data-aos="fade-right")   
            h5.mb-0  R=T×V×C
      p.mb-5 A continuación, se explican cada una de las variables:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Amenaza (T)
                  p.mb-0 Representa la probabilidad de que ocurra un evento hostil capaz de alterar los sistemas, procesos o activos de una organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vulnerabilidad (V)
                  p.mb-0 Corresponde a las debilidades estructurales, tecnológicas o procedimentales que pueden ser aprovechadas por una amenaza.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consecuencia (C)
                  p.mb-0 Comprende los impactos negativos derivados de la materialización del evento, incluidas las pérdidas humanas, económicas, reputacionales o sociales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La relación entre amenaza, vulnerabilidad y consecuencia permite estimar el riesgo y orientar las decisiones de intervención (Baker, 2002).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de análisis
      p.mb-5 Las técnicas de análisis aportan información para identificar condiciones de riesgo, comparar alternativas y fundamentar las decisiones de protección. Cada técnica cumple una función particular dentro del diagnóstico y contribuye a seleccionar medidas acordes con los riesgos identificados.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img23.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inspección de seguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en recopilar información directamente en las instalaciones mediante recorridos, entrevistas y revisión de registros. Permite identificar accesos, flujos de personas, activos, puntos vulnerables, puntos ciegos, incidentes anteriores y condiciones del entorno (Nova Seguridad, s. f.).
            .row(titulo="Matriz de probabilidad e impacto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona la posibilidad de ocurrencia de un evento con sus consecuencias. Puede utilizar categorías cualitativas o valores numéricos para clasificar los riesgos y establecer prioridades de intervención (ISO, 2018).
            .row(titulo="Análisis de escenarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Examina situaciones hipotéticas para determinar sus posibles efectos y preparar medidas de respuesta. Puede incorporar preguntas como «¿qué ocurriría si…?» y técnicas de análisis de modos de falla (Baker, 2002; ISO, 2018).
            .row(titulo="Análisis de costo-beneficio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Compara la inversión requerida, la eficacia esperada de las medidas y el nivel de riesgo aceptable. Facilita la selección de alternativas viables según las condiciones operativas y presupuestales (Nova Seguridad, s. f.).
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Una vez aplicadas las técnicas de análisis, la estructuración del esquema debe responder los siguientes interrogantes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué se protege?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Frente a cuáles amenazas?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Con qué recursos?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Mediante cuáles procedimientos y controles? (ASIS, 2012).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img24.jpg', alt='' style="width: 550px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación de las técnicas de análisis
      p.mb-5 La aplicación articulada de las técnicas permite transformar los resultados del diagnóstico en controles y decisiones operativas, como se plantea en el siguiente caso, que relaciona la identificación del punto crítico, la valoración del riesgo y la selección progresiva de medidas de protección:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Caso
            p.mb-0 Una planta logística identifica la entrada de camiones como un punto crítico con riesgo alto de accesos no autorizados. Por ello, implementa iluminación, control de acceso, cámaras y patrullajes. Si los incidentes continúan, incorporará una plataforma de gestión de seguridad. El seguimiento se realiza mediante indicadores.
      p.mb-0 La estructuración de un esquema exige comprender el riesgo, integrar capas de protección, aplicar técnicas de análisis y evaluar periódicamente la eficacia de los controles.

</template>

<script>
export default {
  name: 'Tema2',
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
