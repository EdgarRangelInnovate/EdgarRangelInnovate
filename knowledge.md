# Áreas de conocimiento y competencia

Explora en profundidad las habilidades, conocimientos y roles que componen las rutas profesionales en tecnología y negocios. Aquí detallo cómo se construye el perfil profesional desde una perspectiva técnica y de gestión, incluyendo los puntos de intersección entre ambas.

## ⚙️Path técnico en detalle

Esta sección cubre el desarrollo de capacidades técnicas a lo largo de la carrera, desde la programación y arquitectura de software hasta la dirección técnica estratégica. Se destacan las habilidades clave, herramientas, buenas prácticas y métricas de progreso para cada rol.

```mermaid
flowchart LR
  subgraph A [Phase 1: Foundations]
    A1([Intern]) -->
    A2([Junior]) -->
    A3([Semi-Senior])
  end
  style A fill:#FAD4D4,stroke:#000,stroke-width:1px

  subgraph B [Phase 2: Specialization and Seniority]
    B1([Senior]) -->
    B2([Expert]) -->
    B3([Staff Engineer])
  end
  style B fill:#B4D4FA,stroke:#000,stroke-width:1px

  subgraph C [Phase 3: Leadership and Management]
    C1([Tech Lead]) -->
    C2([Architect]) -->
    C3([Manager])
  end
  style C fill:#FFF8B0,stroke:#000,stroke-width:1px

  subgraph D [Phase 4: Technology Direction and Organizational Vision]
    D1([Head Engineering]) -->
    D2([CTO])
  end
  style D fill:#D4F4DD,stroke:#000,stroke-width:1px

  subgraph E [Phase 5: Executive Direction and Strategic Vision]
    E1([CEO])
  end
  style E fill:#EAD4F4,stroke:#000,stroke-width:1px
  %% Colores para las flechas 0-6
  linkStyle 0,1,2,3,4,5,6 stroke:#FFC300,stroke-width:2px

  %% Conexiones entre subgraphs 7-10
  A --> B
  B --> C
  C --> D
  D --> E
  linkStyle 7,8,9,10 stroke:#33FF57,stroke-width:2px

  %% Enlace de growth 11-14
  A3 --> B1
  B3 --> C1
  C3 --> D1
  D2 --> E1
  linkStyle 11,12,13,14 stroke:#3357FF,stroke-width:4px

  %% TODO: completar Eventos path técnico
  %% click A1 "#knowledge.md#1-practicante--intern-de-desarrollo-de-software" "Ir a Practicante"
  %% click A2 "#knowledge.md#2-desarrollador-junior-frontend--backend--fullstack" "Ir a Junior Dev"
  %% click A3 "#knowledge.md#3-desarrollador-semi-senior--mid-level-developer" "Ir a Ssr Senior Dev"
  %% click B1 "#knowledge.md#4-senior-developer-frontend--backend--fullstack" "Ir a Senior Engineer"
  %% click B2 "#knowledge.md#5-especialista-técnico--tech-expert" "Ir a Expert Engineer"
  %% click B3 "#knowledge.md#6-staff-engineer--principal-engineer" "Ir a Staff Engineer"
  %% click C1 "#knowledge.md#7-tech-lead--líder-técnico" "Ir a Tech Lead"
  %% click C2 "#knowledge.md#8-arquitecto-de-software--software-architect" "Ir a Architect"
  %% click C3 "#knowledge.md#9-engineering-manager" "Ir a Tech Manager"
  %% click D1 "#knowledge.md#10-head-of-engineering--director-de-tecnología" "Ir a Head Engineering"
  %% click D2 "#knowledge.md#11-cto-chief-technology-officer" "Ir a CTO"
  %% click E1 "#knowledge.md#12-ceo-chief-executive-officer" "Ir a CEO"
```

### ETAPA 1: Fundamentos y crecimiento técnico

🎯**Objetivo**: Adquirir habilidades sólidas de programación, buenas prácticas y trabajo en equipo.

```mermaid
flowchart LR
  A(Practicante) -->
  B(Junior) -->
  C(Semi-Senior)

  %% Eventos
  click A "#/knowledge/tech/01-intern" "Ir a Pasante"
  click B "#/knowledge/tech/02-junior" "Ir a Desarrollador Junior"
  click C "#/knowledge/tech/03-ssr-engineer" "Ir a Desarrollador Intermedio"
```

#### 1. Practicante / Intern de Desarrollo de Software

En esta primera etapa, el [practicante](./knowledge/tech/01-intern.md) se inicia en el mundo del desarrollo de software profesional. Su enfoque está en aprender, explorar herramientas básicas y comenzar a participar en tareas reales dentro de un equipo. Es un periodo fundamental para cultivar hábitos, adquirir confianza técnica y desarrollar habilidades blandas esenciales para el trabajo en equipo. Aquí se siembra la curiosidad y la capacidad de adaptación, pilares del crecimiento futuro.

#### 2. Desarrollador Junior (Frontend / Backend / Fullstack)

En esta etapa, el [desarrollador junior](./knowledge/tech/02-junior.md) comienza a aplicar sus conocimientos técnicos en proyectos reales con mayor autonomía. Aún requiere guía y acompañamiento frecuente, pero ya es capaz de desarrollar funcionalidades básicas, colaborar en sprints y proponer soluciones sencillas. Es un rol clave para consolidar buenas prácticas, afianzar la lógica de programación y ganar experiencia en entornos colaborativos.

#### 3. Desarrollador Semi Senior / Mid-Level Developer

El [desarrollador semi senior](./knowledge/tech/03-ssr.md) se desempeña con autonomía técnica en tareas de mediana y alta complejidad. Participa activamente en decisiones técnicas del equipo, guía a perfiles más junior y propone mejoras tanto en código como en procesos. Este nivel representa un punto de inflexión hacia roles de mayor liderazgo técnico y especialización. Se espera pensamiento crítico, compromiso con la calidad y una visión más estratégica del desarrollo.

### ETAPA 2: Especialización y seniority

🎯**Objetivo**: Convertirse en referente técnico en un stack o dominio.

```mermaid
flowchart LR
  A(Senior Developer) -->
  B(Tech Expert) -->
  C(Staff Engineer)

  %% Eventos
  click A "#/knowledge/tech/04-senior" "Ir a Desarrollador Senior"
  click B "#/knowledge/tech/05-expert" "Ir a Experto en tecnología"
  click C "#/knowledge/tech/06-staff" "Ir a Ingeniero Principal"
```

#### 4. Senior Developer (Frontend / Backend / Fullstack)

El [Desarrollador Senior](./knowledge/tech/04-senior.md) domina su stack de tecnologías y es capaz de entregar soluciones robustas, escalables y bien estructuradas. Es autónomo, proactivo y cumple un rol clave dentro del equipo, participando en decisiones técnicas, mentoría de perfiles más juniors y contribución directa a la calidad y evolución del producto.

#### 5. Especialista Técnico / Tech Expert

El [Experto en Tecnología](./knowledge/tech/05-expert.md) profundiza en un área específica del desarrollo (frontend, backend, cloud, testing, performance, etc.) y se convierte en una autoridad técnica dentro de la organización. Su rol implica investigar, proponer y aplicar soluciones avanzadas, colaborar en la estandarización de prácticas, y brindar soporte técnico de alto nivel en su especialidad.

#### 6. Staff Engineer / Principal Engineer

El [Staff Engineer](./knowledge/06-staff.md) es un líder técnico transversal que conecta equipos, proyectos y dominios. Combina visión estratégica con ejecución técnica para resolver problemas complejos a nivel de arquitectura y plataforma. Su trabajo no solo impacta un producto, sino múltiples sistemas o áreas, convirtiéndose en una figura clave en la toma de decisiones técnicas de alto nivel.

---

### ETAPA 3: Liderazgo técnico y gestión

🎯**Objetivo**: Transicionar de contribución individual a liderazgo de equipos y proyectos.

```mermaid
flowchart LR
  A(Tech Lead / Líder Técnico) -->
  B(Arquitecto de Software) -->
  C(Engineering Manager)

  %% Eventos
  click A "#/knowledge/tech/07-lead" "Ir a Líder técnico"
  click B "#/knowledge/tech/08-architect" "Ir a Arquitecto de software"
  click C "#/knowledge/tech/09-manager" "Ir a Gerente de ingeniería"
```

#### 7. Tech Lead / Líder Técnico

El [Tech Lead](./knowledge/tech/07-lead.md) es responsable de guiar técnica y estratégicamente a un equipo de desarrollo. Actúa como puente entre la ingeniería y el negocio, tomando decisiones técnicas alineadas con los objetivos del producto. Supervisa la calidad del código, impulsa buenas prácticas, facilita la planificación técnica y mentoriza al equipo.

#### 8. Arquitecto de Software / Software Architect

El [Software Architect](./knowledge/tech/08-architect.md) diseña y valida las decisiones estructurales que guían el desarrollo de software en términos de escalabilidad, rendimiento, seguridad y mantenibilidad. Define patrones, evalúa tecnologías y asegura la coherencia de la arquitectura en múltiples proyectos o productos. Su enfoque es holístico y de largo plazo.

#### 9. Engineering Manager

El [Engineering Manager](./knowledge/tech/09-manager.md) combina habilidades técnicas y de gestión para liderar equipos de ingeniería. Su foco está en el desarrollo de las personas, la entrega efectiva de proyectos y la alineación entre los objetivos técnicos y del negocio. Gestiona capacidades, facilita procesos ágiles y crea un ambiente propicio para la productividad y el crecimiento.

---

### ETAPA 4: Dirección de tecnología y visión organizacional

🎯**Objetivo**: Tener impacto en decisiones de negocio a través de la tecnología.

```mermaid
flowchart LR
  A(Head of Engineering) -->
  B(CTO)

  %% Eventos
  click A "#/knowledge/tech/10-head" "Ir a Head of Engineering"
  click B "#/knowledge/tech/11-cto" "Ir a CTO"
```

#### 10. Head of Engineering / Director de Tecnología

El [Head of Engineering](./knowledge/tech/10-head.md) es responsable de coordinar a múltiples equipos de desarrollo, asegurando la calidad técnica, la entrega eficiente y el crecimiento del talento. Actúa como puente entre la estrategia técnica y la ejecución, liderando procesos de mejora continua, planificación técnica de alto nivel y alineación con las metas de negocio. Su enfoque está en la escala, la organización del talento técnico y la madurez de los procesos de ingeniería.

#### 11. CTO (Chief Technology Officer)

El [CTO](./knowledge/tech/11-cto.md) define la visión tecnológica de la compañía, lidera la innovación y establece la dirección a largo plazo para el uso estratégico de la tecnología. Tiene un rol clave en la toma de decisiones a nivel ejecutivo, conectando la evolución técnica con los objetivos de negocio. Es responsable de construir una cultura técnica sólida, supervisar las arquitecturas a gran escala y representar el área técnica frente a stakeholders internos y externos.

##### 🔧 Hard skills (CTO)

- Definición de visión tecnológica alineada al negocio.
- Innovación en productos y servicios desde el frente técnico.
- Diseño de estrategia de escalamiento y transformación digital.
- Gobernanza técnica y ciberseguridad organizacional.
- Supervisión de arquitectura global y estándares técnicos.

##### 🧠 Essential skills (CTO)

- Visión holística y pensamiento estratégico de largo plazo.
- Habilidades de comunicación ejecutiva (con CEO, inversores, etc.).
- Capacidad de traducir conceptos técnicos a lenguaje de negocio.
- Construcción de cultura tech-first.
- Alta adaptabilidad al cambio tecnológico y del mercado.

##### ✅ Criterios de desempeño (CTO)

- Representa el área técnica en el comité ejecutivo.
- Define la visión tecnológica y coordina su implementación global.
- Lidera decisiones fundacionales de producto, innovación y escalabilidad.
- Influye en decisiones de inversión técnica y expansión.

---

### ETAPA 5: Dirección ejecutiva y/o emprendimiento

🎯**Objetivo**: Tomar decisiones integrales de negocio y crear impacto a gran escala.

```mermaid
flowchart TD
  A(CEO)

  %% Eventos
  click A "#/knowledge/tech/12-ceo" "Ir a CEO"
```

#### 12. CEO (Chief Executive Officer)

El [CEO](./knowledge/tech/12-ceo.md) con formación técnica lidera la compañía con una perspectiva integral que fusiona tecnología, producto y negocio. Utiliza su experiencia en ingeniería para tomar decisiones estratégicas informadas sobre innovación, escalabilidad, inversión en tecnología y cultura organizacional. A diferencia de otros CEO, su enfoque está profundamente alineado con la transformación digital y el uso de la tecnología como motor de crecimiento. Es el responsable último de la visión, misión y éxito global de la organización.

##### 🔧 Hard Skills (CEO)

- Dirección estratégica, finanzas, cultura y relaciones públicas.
- Toma de decisiones sobre modelo de negocio y crecimiento.
- Supervisión de todos los C-Level (CTO, CPO, COO, etc.).

##### 🧠 Essential Skills (CEO)

- Liderazgo visionario.
- Inteligencia emocional y política.
- Adaptabilidad y resiliencia.

##### ✅ Criterios observables (CEO)

- Toma decisiones finales sobre la empresa.
- Define la visión organizacional.
- Lidera relaciones con inversionistas y stakeholders clave.

---

## 🧭 Path de Negocio (Business & Product)

Aquí se detalla la evolución del perfil de negocio, incluyendo roles como Product Owner, Product Manager, y líderes de transformación digital. Se exploran competencias en estrategia, liderazgo, análisis de negocio y diseño de productos centrados en el usuario.

### ETAPA 1: Fundamentos de negocio

🎯**Objetivo**: Comprender procesos de producto/negocio, colaborar en validación, investigación y tareas operativas.

```mermaid
flowchart LR
  A(Practicante de Negocio / Producto) -->
  B(Analista Junior) -->
  C(Associate PM / Business Analyst)
```

#### 1. Practicante de Negocio / Producto

El [practicante de negocio](./knowledge/business/01-intern.md) o producto se enfoca en observar, aprender y colaborar en tareas operativas y de soporte al equipo de producto o estrategia. Participa en actividades como la investigación de usuarios, validación de hipótesis, análisis básico de datos y documentación de procesos. Su rol es clave para adquirir una comprensión inicial del negocio, mientras desarrolla habilidades de comunicación, observación crítica y colaboración interdisciplinaria.

##### 🔧 Hard skills (Business Intern)

- Conocimientos básicos en análisis.
- Herramientas y metodologías ágiles.

##### 🧠 Essential skills (Business Intern)

- Comunicación clara.
- Curiosidad.
- Apertura al feedback.

##### ✅ Criterios de desempeño (Business Intern)

- Participa en documentación.
- Entrevistas.
- Pruebas o investigaciones.

#### 2. Analista Junior / Asistente de Producto

El [analista junior](./knowledge/business/02-junior.md) da soporte en la recopilación y análisis de datos de negocio, estudios de mercado, identificación de puntos de mejora en procesos, y documentación de requerimientos. Comienza a interactuar con stakeholders de distintas áreas y traduce necesidades del negocio en entregables accionables. Es una etapa de consolidación de habilidades analíticas, atención al detalle y pensamiento estructurado.

##### 🔧 Hard skills (Junior analyst)

- Métricas básicas.
- Wireframes simples.
- Backlog grooming.

##### 🧠 Essential skills (Junior analyst)

- Trabajo colaborativo.
- Responsabilidad.
- Proactividad.

##### ✅ Criterios de desempeño (Junior analyst)

- Apoya definiciones funcionales.
- Mantiene tareas operativas al día.

#### 3. Associate Product Manager / Business Analyst

Este [rol](./knowledge/business/03-analyst.md) intermedio actúa como nexo entre la visión del producto y su ejecución operativa. Colabora con Product Managers, equipos técnicos y stakeholders para definir requerimientos, validar soluciones y hacer seguimiento de entregables. Participa en la priorización y aporta en la toma de decisiones con base en datos y conocimiento contextual. Es un paso clave hacia el liderazgo de producto o estrategia de negocio.

##### 🔧 Hard skills (Business analyst)

- Recolección de datos.
- Definición de requisitos.
- Colaboración con tech.

##### 🧠 Essential skills (Business analyst)

- Pensamiento crítico.
- Iniciativa.
- Presentación de insights.

##### ✅ Criterios de desempeño (Business analyst)

- Identifica oportunidades de mejora e impacto en usuarios o negocio.

---

### ETAPA 2: Especialización y Seniority Business

🎯**Objetivo**: Ser responsable de áreas funcionales, definir roadmap, trabajar con KPIs y liderar equipos pequeños.

```mermaid
flowchart LR
  A(Product Manager / PO) -->
  B(Business Strategist / Service Designer)
```

#### 4. Product Manager / Product Owner

El [Product Manager](./knowledge/business/04-owner.md) (o Product Owner en contextos ágiles) lidera la visión, estrategia y roadmap de un producto o funcionalidad. Actúa como puente entre negocio, usuarios y equipo técnico, priorizando iniciativas con base en valor, impacto y viabilidad. Define KPIs, valida hipótesis, gestiona backlog y asegura que el producto evolucione en línea con los objetivos organizacionales. Su rol es clave para entregar soluciones útiles, usables y viables.

##### 🔧 Hard skills (Product owner)

- Roadmapping.
- OKRs.
- Métricas de producto.
- Priorización.

##### 🧠 Essential skills (Product owner)

- Visión estratégica.
- Gestión de stakeholders.

##### ✅ Criterios de desempeño (Product owner)

- Dirige equipos de desarrollo, alinea producto con objetivos de negocio.

#### 5. Business Strategist / Service Designer

Este [rol](./knowledge/business/05-strategist.md) se enfoca en diseñar e implementar estrategias de negocio centradas en el usuario y la sostenibilidad. A través de metodologías como Design Thinking, Service Design o Business Model Canvas, identifica oportunidades, mapea experiencias, optimiza servicios y redefine modelos de negocio. Es un perfil híbrido con visión sistémica, pensamiento creativo y fuerte orientación a resultados. Colabora de cerca con liderazgo, marketing, tecnología y operaciones.

##### 🔧 Hard skills (Service Designer)

- Diseño de servicios.
- Customer journeys.
- Análisis de propuestas de valor.

##### 🧠 Essential skills (Service Designer)

- Empatía
- Visión de sistema.
- Comunicación con equipos multifuncionales.

##### ✅ Criterios de desempeño (Service Designer)

- Mejora experiencia.
- Entrega de valor al cliente.

---

### ETAPA 3: Liderazgo y Gestión business

🎯**Objetivo**: Liderar equipos de producto, escalar procesos y lograr resultados medibles.

```mermaid
flowchart LR
  A(Product Lead / Product Ops) -->
  B(Delivery Manager / Business Lead)
```

#### 6. Product Lead / Product Operations

El [Product Lead](./knowledge/business/06-lead.md) supervisa varios equipos o líneas de producto, asegurando alineación estratégica, eficiencia en la entrega y evolución del portafolio. Coordina con stakeholders clave, gestiona objetivos compartidos y fomenta buenas prácticas de gestión de producto. En organizaciones más maduras, puede trabajar en conjunto con Product Ops, un rol orientado a escalar procesos, métricas y herramientas que optimicen el trabajo de los equipos de producto.

##### 🔧 Hard skills (Product lead)

- Gobierno de producto.
- Alineación cross-funcional.
- Definición de procesos.

##### 🧠 Essential skills (Product lead)

- Accountability.
- Mentoring.
- Toma de decisiones basadas en datos.

##### ✅ Criterios de desempeño (Product lead)

- Supervisa otros PMs.
- Optimiza estrategia y rendimiento de producto.

#### 7. Delivery Manager / Business Lead

El [Delivery Manager](./knowledge/business/07-manager.md) asegura que los equipos entreguen valor de manera efectiva y predecible. Coordina personas, procesos y prioridades para cumplir compromisos y mantener la calidad. En empresas más orientadas a negocio, este rol puede tener el nombre de Business Lead: una figura híbrida que combina conocimiento técnico, visión estratégica y liderazgo operativo para llevar productos o servicios al mercado con éxito, colaborando estrechamente con áreas como ventas, marketing y operaciones.

##### 🔧 Hard skills (Delivery Manager)

- Planificación.
- Cumplimiento de entregas.
- Seguimiento de objetivos.

##### 🧠 Essential skills (Delivery Manager)

- Enfoque a resultados.
- Resolución de conflictos.
- Liderazgo operativo.

##### ✅ Criterios de desempeño (Delivery Manager)

- Asegura el delivery de alto impacto con calidad y eficiencia.

---

### ETAPA 4: Dirección y Visión Organizacional business

🎯**Objetivo**: Escalar productos, equipos y cultura desde una perspectiva estratégica.

```mermaid
flowchart LR
  A(Head of Product) -->
  B(CPO)
```

#### 8. Head of Product

El [Head of Product](./knowledge/business/08-head.md) lidera múltiples equipos de producto o áreas estratégicas dentro de la organización. Su rol combina dirección táctica y estratégica, alineando la visión del producto con los objetivos del negocio. Es responsable de formar líderes de producto, establecer frameworks de priorización y coordinarse con otras áreas clave como tecnología, ventas, marketing y operaciones. También promueve una cultura centrada en el usuario y basada en datos.

##### 🔧 Hard skills (Head of Product)

- Dirección de portafolio.
- Gobernanza.
- Métricas globales.

##### 🧠 Essential skills (Head of Product)

- Liderazgo organizacional.
- Visión estratégica.
- Influencia cultural.

##### ✅ Criterios de desempeño (Head of Product)

- Define objetivos de toda el área de producto y mide impacto general.

#### 9. CPO (Chief Product Officer)

El [CPO](./knowledge/business/09-cpo.md) (Chief Product Officer) es el máximo responsable de la estrategia de producto en la organización. Define la visión, la propuesta de valor y el enfoque a largo plazo del portafolio de productos o servicios. Trabaja junto al CEO y otros ejecutivos para alinear producto, negocio y mercado. Además, crea las condiciones organizacionales para la innovación, la experimentación y la escalabilidad del producto. Es un rol fundamental en compañías con mentalidad digital o de producto.

##### 🔧 Hard skills (CPO)

- Innovación a nivel organizacional.
- Alineación con visión y negocio.

##### 🧠 Essential skills (CPO)

- Influencia transversal.
- Pensamiento sistémico.
- Visión de impacto global.

##### ✅ Criterios de desempeño (CPO)

- Escala la estrategia de producto con impacto en la organización completa.

---

### ETAPA 5: Dirección Ejecutiva y Visión Global

🎯**Objetivo**: Liderar o crear empresas con visión completa de negocio, crecimiento e innovación.

```mermaid
flowchart LR
  A(COO) -->
  B(CEO / Fundador)
```

#### 10. COO (Chief Operating Officer)

El [COO](./knowledge/business/10-coo.md) es responsable de la operación diaria del negocio. Su enfoque está en ejecutar la estrategia definida junto al CEO, optimizar procesos, gestionar recursos y asegurar la eficiencia de las operaciones. Actúa como puente entre la visión estratégica y la ejecución operativa, trabajando estrechamente con líderes de producto, ingeniería, ventas y otras áreas. Es un rol ideal para personas con enfoque en la entrega, resultados y coordinación de múltiples áreas funcionales.

##### 🔧 Hard skills (COO)

- Estrategia operacional.
- Gestión de recursos.
- Procesos y eficiencia.

##### 🧠 Essential skills (COO)

- Coordinación de áreas.
- Orientación al rendimiento global.

##### ✅ Criterios de desempeño (COO)

- Supervisa ejecución y entrega de valor en todos los frentes del negocio.

#### 11. CEO / Fundador de Empresa

El [CEO](./knowledge/tech/12-ceo.md) (Chief Executive Officer) o Fundador es quien encarna la visión global de la compañía. Su misión es guiar a la organización hacia su propósito, tomando decisiones clave sobre estrategia, cultura, alianzas, crecimiento y sostenibilidad. Es la figura de mayor influencia y responsabilidad, y su perfil puede ser técnico, de negocio o híbrido. Un CEO debe saber rodearse de líderes competentes, adaptarse a los cambios del mercado y mantener el rumbo en contextos de alta incertidumbre.

##### 🔧 Hard skills

- Liderazgo de alto nivel.
- Estrategia corporativa.
- Relaciones con inversores.

##### 🧠 Essential skills

- Cultura organizacional.
- Visión de mercado.
- Innovación constante.

##### ✅ Criterios de desempeño

- Representa a la empresa.
- Toma decisiones estratégicas y asegura crecimiento.

## 🔀 ¿Puede alguien saltar entre el path técnico y el path de negocio?

✅ Sí, es posible moverse entre el path técnico y el path de negocio, pero no en cualquier momento ni de cualquier rol.
Generalmente, el salto ocurre en roles donde ya existe una intersección natural entre habilidades técnicas y de negocio.

### 🚀 ¿Desde qué roles se puede hacer el cambio?

#### **De Path Técnico ➡️ a Path de Negocio**

| Rol de Origen (Técnico) | Rol de Destino (Negocio)               | Explicación                                                                                                       |
| ----------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Tech Lead               | Product Manager / Product Owner        | Un Tech Lead que domina negocio, usuarios y tecnología puede asumir la definición de producto.                    |
| Engineering Manager     | Delivery Manager / Business Lead       | Un Engineering Manager que ha gestionado entregas, KPIs y equipos puede pasar a gestionar entregas desde negocio. |
| Staff Engineer          | Business Strategist / Service Designer | Un Staff Engineer con visión de usuario y ecosistema podría especializarse en diseño de servicios.                |

> 🔥 Nota: El salto es más natural cuando la persona ya participa en discusiones de producto, clientes o roadmap.

#### **De Path de Negocio ➡️ a Path Técnico**

| Rol de Origen (Negocio)          | Rol de Destino (Técnico)                      | Explicación                                                                                                              |
| -------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Product Manager / Product Owner  | Tech Lead (en proyectos muy técnicos)         | Si domina muy bien aspectos técnicos de producto (APIs, arquitecturas, flujos de datos) podría liderar equipos técnicos. |
| Business Analyst / Associate PM  | Mid-Level Developer (con formación adicional) | Si decide profundizar en programación podría reinsertarse como desarrollador intermedio.                                 |
| Business Lead / Delivery Manager | Engineering Manager                           | En casos de fuerte experiencia gestionando equipos técnicos y proyectos de ingeniería.                                   |

> 🔥 Nota: Este tipo de salto requiere generalmente re-skilling técnico (aprender programación avanzada, arquitecturas, etc.).

#### 📌 Consideraciones importantes

- No se recomienda saltar antes del nivel Semi-Senior o Mid-Level, porque antes no se domina lo suficiente ningún área.
- Tener habilidades híbridas (como programación + visión de usuario) facilita mucho los saltos.
- Comunicación, liderazgo y pensamiento sistémico son habilidades clave en cualquier cambio.
