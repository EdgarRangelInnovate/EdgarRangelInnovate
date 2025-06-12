# GESTIÓN DEL RENDIMIENTO DE UNA IMPLEMENTACIÓN BPM

Evaluar como va la implementación de un [BPMS](/others/glossary.md#b) por si está rindiendo los frutos esperados.

## Inteligencia de procesos y monitorización operacional y estratégica

Dentro de este tema se explora conceptos como monitorización operacional y monitorización estratégica, para lograrlo se usan varias herramientas que se explican a continuación.

### Inteligencia de procesos ([IP](/others/glossary.md#i))

La inteligencia de procesos es la respuesta a la necesidad que tienen las organizaciones de _procesar la información a tiempo_, y la capacidad de _adoptar decisiones con rapidez_ como exige el actual y dinámico desarrollo económico.

Esto debido a que los procesos son sometidos a un análisis mas detallado y es necesario monitorizarlos y controlarlos en tiempo real para poder tener una reacción inmediata a eventos del negocio.

Las soluciones a estos retos viene en herramienta que combinan tecnologías del pasado con rendimiento del futuro todo enmarcado en un mundo moderno enfocado a procesos.

En general la IP es un conjunto de herramientas y técnicas diseñadas y creadas para comprender una empresa desde la perspectiva de los procesos.

El software de IP tiene varias capacidades entre las que se cuenta: recopilar datos de procesos, proporcionar interpretaciones, distribuir resultados históricos o en tiempo real.

La IP es posible gracias a herramientas como [BI](/others/glossary.md#b), [BAM](/others/glossary.md#b) y descubrimiento de procesos o _process mining_, esto combinado con métodos analíticos de optimización como son _Six Sigma_, _Lean_ o _Teoría de las limitaciones_, sumado a soluciones de gestión de procesos empresariales [BPM](/others/glossary.md#b).

La minería de procesos, descubrimiento de procesos o _process mining_ ([PM](/others/glossary.md#p)) como es ampliamente conocido se centra en la brecha entre el diagrama del proceso y la realidad del proceso. La idea principal de la minería de procesos es _descubrir_, _monitorear_ y _mejorar_ mediante la extracción de conocimiento desde los datos legibles y disponibles de una organización.

Algunos conceptos claves para la minería de procesos son:

- Business process _BP_: Conjunto estructurado de tareas o actividades realizadas por una persona o por un equipo en una secuencia especifica para producir un producto o servicio que cubre un objetivo en particular de la empresa.
- Domain knowledge _DK_: Es la habilidad de entendimiento e información que aplica a un tema especifico, profesión o actividad.
- Business process modeling _[BPM](/others/glossary.md#b)_: Es la actividad de representar procesos de una empresa que luego es analizado, mejorado y automatizado.
- Caso: se refiere a la entidad que va a ser tomada por un proceso que será analizado. ej: una pizza. Siempre puede ser identificado de forma única.
- Actividad: es un paso en el proceso.
- Evento: es una acción recordada en el log.
- Timestamp: Es una secuencia de caracteres que identifican cuando ha ocurrido cierto evento.
- Throughput time: Es la cantidad de tiempo que toma para crear un producto o realizar un servicio desde el principio al fin.
- Log de eventos: Es una colección de eventos usados como entrada para el [PM](/others/glossary.md#p).
- Control-flow model: Es el orden el el cual se deben ejecutar o evaluar las actividades individuales.
- Business Process Model and Notation _([BPMN](/others/glossary.md#b))_: Es un estándar usado para el modelado de procesos que provee notaciones gráficas para representar todo lo necesario de un proceso.

LOG DE EVENTOS en detalle, es una tabla con tres columnas principales, las cuales incluye un identificador único del caso, el timestamp y el nombre de la actividad. También se puede complementar con información extra como lo es el recurso (persona o dispositivo), detalles en el _timestamp_ u otra información relevante como por ejemplo el tamaño. Al tener este log de eventos, podemos comenzar la _[PM](/others/glossary.md#p)_.

Todas las técnicas de _[PM](/others/glossary.md#p)_ asumen que es posible grabar los eventos de forma secuencial donde cada evento referencia una actividad para un caso en particular.

La IP facilita la comprensión de la vista externa (**Caja Negra**) y de la vista interna (**Caja Blanca**)

#### Casos de Éxito de Uso de Inteligencia de Procesos

- Swisscom (Proveedor de [TI](/others/glossary.md#t)):
  Utiliza la inteligencia de procesos para monitorear pedidos y medir [KPI](/others/glossary.md#k)s.
  Todos los participantes del proceso contribuyen a su mejora.

  - Resultados:
    - Rendimiento más rápido.
    - Menos cancelaciones.
    - Clientes más felices.

- Tieto:
  Quería resolver problemas de clientes dentro de objetivos de calidad y costo.
  - Con la inteligencia de procesos:
    - Identifican cuellos de botella.
    - Manejan hasta 300,000 incidentes al mes con mayor eficiencia.
    - Resuelven problemas más rápidamente.

### Arquitectura de Inteligencia de Procesos

La **arquitectura de información** para la inteligencia de procesos se compone de tres grandes componentes:

- Recopilación: Captura datos de eventos de los procesos.
- Procesamiento: Transforma los datos en información útil.
- Visualización: Presenta la información de manera clara y comprensible.

La inteligencia de procesos ([IP](/others/glossary.md#i)) se basa en dos tecnologías:

- Extracción de datos: Obtiene información sobre los procesos.
- Observación de datos: Monitorea lo que sucede dentro de los procesos.

El procesamiento de IP permite:

- Convertir grandes volúmenes de datos en información útil.
- Acceder a la información a través de herramientas de visualización.
- Enviar resultados a través de servicios para alimentar el motor BPM y controlar los procesos.

En resumen, la arquitectura de inteligencia de procesos permite a las organizaciones obtener información valiosa sobre sus procesos, lo que les ayuda a mejorar su eficiencia, productividad y calidad.

Beneficios de la arquitectura de inteligencia de procesos:

- Mejor visibilidad de los procesos.
- Mayor comprensión del comportamiento de los procesos.
- Identificación de cuellos de botella y áreas de mejora.
- Toma de decisiones más informadas.
- Mejora continua de los procesos.

La arquitectura de inteligencia de procesos es una herramienta esencial para cualquier organización que quiera optimizar sus procesos de negocio.

### Implementación de inteligencia de procesos

Para una correcta implementación de la tecnología de inteligencia de procesos se debe seguir las siguiente 4 fases:

#### Fase de Estrategia

La fase de estrategia en la implementación de inteligencia de procesos se enfoca en:

- Definir el alcance:
  - Identificar procesos estratégicos, tácticos y operativos.
  - Establecer objetivos de negocio y KPIs para los procesos.
  - Utilizar matrices de causa-efecto y matrices de segmento de negocio para relacionar factores, KPIs y áreas de negocio.
- Comprender el desafío:
  - Identificar el problema de negocio principal (por ejemplo, bajo rendimiento en producción).
  - Alinear a los departamentos involucrados para el éxito de la iniciativa.
  - Restringir el dominio del problema a procesos y sistemas de datos específicos.
- Establecer requisitos:
  - Definir los requerimientos necesarios para la iniciativa de inteligencia de procesos.
- Alinear a las partes interesadas:
  -Utilizar herramientas como mapas de valor y diagramas de Archimate para identificar procesos, sistemas de datos y objetivos de negocio de manera colaborativa.
  - Iniciar la iniciativa con la alineación de todos los involucrados.

En resumen, la fase de estrategia es crucial para establecer una base sólida para la implementación de inteligencia de procesos, asegurando que la iniciativa esté enfocada, alineada y cuente con los recursos necesarios para alcanzar el éxito.

- Beneficios de una fase de estrategia bien definida:
  - Mayor enfoque en los objetivos de negocio clave.
  - Mejor comprensión de los procesos y sistemas involucrados.
  - Aumento de la probabilidad de éxito de la iniciativa.
  - Mejor alineación y colaboración entre las partes interesadas.
  - Requisitos claros y definidos para la implementación.

La inversión en una fase de estrategia sólida dará como resultado una implementación de inteligencia de procesos más efectiva y eficiente, lo que conducirá a mejoras significativas en el rendimiento del negocio.

#### Fase de diseño

En la fase de diseño se debe traducir el alcance de los procesos identificados en la fase
de estrategia en definiciones más detalladas. Y, por otro lado, incluir en su entorno de TI
los elementos necesarios tanto para su plataforma de inteligencia de procesos como
para las estructuras organizativas que la respaldan. En esta fase se identifican, por tanto,
las fuentes de datos, los procesos que intervienen, dónde medir, cómo presentar la
información, y la definición de alertas y acciones.

#### Fase de Implementación

La fase de implementación de la inteligencia de procesos se compone de cuatro pasos principales:

- Preparación de datos:
  - Asegurar la disponibilidad de datos necesarios para el análisis.
  - Extraer registros de eventos de las bases de datos de la organización.
  - Definir la estructura de datos requerida para la base de datos de procesos.
  - Transformar los datos en un formato compatible (por ejemplo, CSV).
  - Cargar los datos en la plataforma de inteligencia de procesos.
- Análisis de procesos:
  - Visualizar los datos de los procesos para identificar patrones y tendencias.
  - Calcular métricas básicas para los KPIs de los procesos.
  - Identificar cuellos de botella, ineficiencias y problemas de cumplimiento.
  - Analizar en detalle los procesos con bajo rendimiento.
- Implementación de mejoras:
  - Desarrollar un plan de acción basado en los hallazgos del análisis.
  - Comunicar el plan de acción a las partes interesadas.
  - Implementar las mejoras en los procesos.
- Monitoreo y mejora continua:

  - Supervisar continuamente los datos de los procesos para identificar nuevas oportunidades de mejora.
  - Ajustar el plan de acción según sea necesario.
  - Utilizar la inteligencia de procesos para abordar problemas de menor importancia.

- Beneficios de la fase de implementación:
  - Mejor comprensión de los procesos de negocio.
  - Identificación de áreas de mejora.
  - Reducción de costos y riesgos.
  - Aumento de la eficiencia y la productividad.
  - Mejora de la calidad del servicio al cliente.
  - Mayor agilidad y capacidad de respuesta.

La fase de implementación es una parte crucial del proceso de inteligencia de procesos, ya que es donde se convierten los datos en acciones y se obtienen los beneficios tangibles de la iniciativa.

Fase de control y gobierno

En la fase de control y gobierno todo el mundo quiere evaluar si está logrando sus
objetivos satisfactoriamente.

### Niveles de Madurez en la Inteligencia de Procesos

Las organizaciones pueden clasificarse en tres niveles de madurez en cuanto a su uso de la inteligencia de procesos:

- Nivel 1: Monitoreo de procesos
  - Capacidades:
    - Analizar el rendimiento y costos de los procesos.
    - Detectar errores o cuellos de botella.
    - Analizar la actividad de los clientes.
    - Monitorear tanto procesos explícitos (modelados en BPM) como implícitos.
  - Beneficios:
    - Mayor visibilidad de los procesos.
    - Identificación temprana de problemas.
    - Mejor comprensión del comportamiento de los procesos.
- Nivel 2: Mejora y evolución de procesos
  - Capacidades:
    - Detectar oportunidades para optimizar o evolucionar los procesos.
    - Implementar mejoras en respuesta a oportunidades o problemas.
  - Beneficios:
    - Mayor eficiencia y productividad de los procesos.
    - Reducción de costos y riesgos.
    - Mejor calidad de los productos y servicios.
- Nivel 3: Capacidad de reacción con decisiones automáticas, semi-manuales o manuales
  - Capacidades:
    - Tomar decisiones automáticas, semi-manuales o manuales en respuesta a eventos en tiempo real.
    - Optimizar los procesos de forma continua y proactiva.
  - Beneficios:

En general, la inteligencia de procesos puede ayudar a las organizaciones a mejorar su madurez en la gestión de procesos, lo que conduce a una mayor eficiencia, eficacia y competitividad.

- Recomendaciones para avanzar en los niveles de madurez:
  - Nivel 1: Implementar herramientas de monitoreo de procesos.
  - Nivel 2: Establecer un programa de mejora continua de procesos.
  - Nivel 3: Invertir en soluciones de inteligencia de procesos de última generación.

La adopción de un enfoque estratégico para la inteligencia de procesos puede ayudar a las organizaciones a alcanzar el nivel de madurez deseado y cosechar los beneficios que ofrece.
