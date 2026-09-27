<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'supervisión y planeación de los servicios de seguridad',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los fundamentos, recursos, procedimientos y funciones administrativas relacionados con la planeación, ejecución, supervisión y control de los servicios de seguridad privada.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por esquema de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un registro periódico de las novedades del personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un plan integral de medidas para proteger personas y bienes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un listado general de sanciones aplicables a los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un informe financiero sobre los recursos de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una diferencia entre la seguridad pública y la seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La seguridad pública protege únicamente los bienes empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La seguridad privada reemplaza las funciones propias del Estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La seguridad pública requiere contratos individuales de servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La seguridad privada protege intereses específicos del contratante.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el primer aspecto que debe identificarse al estructurar un esquema de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las personas, los bienes o los procesos que requieren protección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las sanciones previstas para el personal que incumpla sus funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los medios utilizados para divulgar los resultados de la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las actividades recreativas programadas para el equipo de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué función cumple el supervisor dentro de un esquema de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elaborar exclusivamente los contratos comerciales de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar únicamente los recursos financieros de la operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Coordinar la ejecución de los planes y orientar al personal asignado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir a las autoridades públicas durante cualquier emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué información debe contener el manual operacional de un equipo de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los perfiles profesionales de todos los integrantes de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los estados financieros y los presupuestos generales del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las instrucciones de uso, instalación, mantenimiento y seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las solicitudes y reclamaciones presentadas por los trabajadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la finalidad de las herramientas tecnológicas aplicadas a la seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la detección, el análisis y la gestión de los eventos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar totalmente al personal encargado de prestar el servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de establecer procedimientos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Autorizar automáticamente cualquier ingreso a las instalaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permite un sistema tecnológico de control de acceso?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elaborar los contratos laborales del personal de vigilancia privada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Programar las actividades administrativas de todas las dependencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar las sanciones aplicables ante cualquier incumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar el ingreso de personas o vehículos según su autorización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Por qué es importante revisar la historia laboral del personal de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite establecer el valor comercial de todos los contratos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite comprobar experiencia, antecedentes y habilitaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque permite sustituir los procesos de formación y entrenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite definir las características físicas de la instalación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el propósito principal de un protocolo de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer reglas y orientaciones para actuar ante situaciones definidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar salarios y beneficios económicos del personal contratado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar exclusivamente los horarios de ingreso de los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los manuales técnicos de los equipos utilizados en el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué actividad corresponde al prediagnóstico de un estudio de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Imponer sanciones disciplinarias por incumplimientos ya comprobados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diseñar actividades recreativas para fortalecer el clima organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprar equipos tecnológicos sin analizar las necesidades del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recopilar información inicial sobre el cliente, el entorno y la operación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué función administrativa consiste en anticipar acciones, recursos y cronogramas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La dirección, porque orienta y motiva al personal de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La organización, porque distribuye las funciones y las responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La planeación, porque define objetivos, estrategias, recursos y tiempos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El control, porque verifica los resultados y corrige las desviaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué finalidad tiene un cronograma en un servicio de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar las sanciones aplicables al personal durante cada jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar las tareas, los plazos, los turnos y los relevos del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Registrar únicamente las compras de herramientas y equipos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los protocolos establecidos para responder ante emergencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe realizarse durante el relevo del personal de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar las normas del servicio sin autorización de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Suspender temporalmente los controles de acceso de las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Retirar los equipos del puesto antes de recibir al siguiente trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Transferir responsabilidades, novedades y equipos de manera organizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza el control del servicio de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite supervisar, medir y corregir la ejecución de las actividades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se limita a registrar la hora de llegada del personal a la instalación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elimina la necesidad de aplicar procedimientos y protocolos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye la planeación y la organización de los recursos del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué se considera una novedad en un servicio de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una actividad cotidiana ejecutada conforme con el cronograma establecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un hecho que altera el servicio y requiere ser registrado y comunicado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una instrucción permanente incluida en los manuales de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un objetivo administrativo definido durante la planeación institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué característica debe cumplir un reporte de novedades?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe contener interpretaciones personales sin evidencias comprobables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Debe omitir la secuencia temporal para simplificar la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe presentar información clara, objetiva, completa y cronológica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Debe comunicarse únicamente cuando finalice el contrato del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué principio debe respetarse al aplicar una sanción disciplinaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la legalidad, la proporcionalidad y el derecho de defensa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicar la medida inmediatamente sin comunicar los hechos al trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer la sanción según la opinión personal del supervisor encargado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar el registro documental para proteger la imagen de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué técnica permite priorizar los riesgos según su probabilidad e impacto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El cronograma de turnos utilizado para organizar jornadas y relevos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El perfil de cargo empleado para seleccionar al personal requerido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La matriz de riesgos utilizada para clasificar los eventos identificados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El reporte de novedades utilizado para comunicar los hechos ocurridos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la finalidad de la mejora continua en los servicios de seguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener los procedimientos sin realizar evaluaciones ni modificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Optimizar los procesos mediante revisión, corrección y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar los controles operativos por decisiones administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la comunicación entre supervisores y personal operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la diferencia principal entre un protocolo y un procedimiento de seguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El protocolo define salarios y el procedimiento establece las jornadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El protocolo registra novedades y el procedimiento selecciona personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El protocolo determina sanciones y el procedimiento administra recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El protocolo fija directrices y el procedimiento detalla cómo ejecutarlas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
