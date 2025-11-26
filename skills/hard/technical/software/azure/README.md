# Azure DevOps: Repositorios, CI/CD y Pipelines

Azure DevOps es una plataforma que proporciona un conjunto de herramientas para la planificación, desarrollo, prueba y entrega de software. Sus componentes principales para el código y la automatización de la entrega son Azure Repos y Azure Pipelines.

**Objetivo:** Resumir los componentes clave de Azure DevOps para la gestión de código y la automatización de CI/CD, enfocándose en Azure Repos y Azure Pipelines.

## **Índice**

- [Azure DevOps: Repositorios, CI/CD y Pipelines](#azure-devops-repositorios-cicd-y-pipelines)
  - [**Índice**](#índice)
  - [**Azure Repos (Repositorios)**](#azure-repos-repositorios)
    - [**Git en Azure Repos**](#git-en-azure-repos)
  - [**Azure Pipelines**](#azure-pipelines)
    - [**Tipos de Definición de Pipelines**](#tipos-de-definición-de-pipelines)
      - [**YAML Pipelines (Recomendado)**](#yaml-pipelines-recomendado)
      - [**Classic Pipelines (Interfaz Gráfica)**](#classic-pipelines-interfaz-gráfica)
  - [**Integración Continua (CI) y Entrega Continua (CD)**](#integración-continua-ci-y-entrega-continua-cd)
    - [**A. Integración Continua (CI)**](#a-integración-continua-ci)
    - [**B. Entrega Continua (CD)**](#b-entrega-continua-cd)

---

## **Azure Repos (Repositorios)**

Azure Repos es un servicio de control de versiones que ofrece dos tipos de repositorios: **Git** y **Team Foundation Version Control (TFVC)**. En la práctica moderna, Git es el estándar de facto.

### **Git en Azure Repos**

- **Fundamento:** Azure Repos utiliza Git para proporcionar repositorios de código privado y escalables para el proyecto.
- **Funcionalidad:** Permite a los equipos colaborar en el código, gestionar ramas, fusionar cambios (a través de Pull Requests) y mantener un historial completo de revisiones.
- **Pull Requests (PR):** Mecanismo central para la revisión de código. Un desarrollador propone cambios de una rama a otra, y estos deben ser revisados y aprobados por otros miembros del equipo antes de fusionarse.
- **Seguridad:** Permite establecer políticas de rama (**Branch Policies**) para forzar la revisión de código, la vinculación de elementos de trabajo y la ejecución exitosa de pipelines de integración continua (CI) antes de la fusión.

[📇](#índice)

---

## **Azure Pipelines**

Azure Pipelines es un servicio de automatización que permite implementar **Integración Continua (CI)** y **Entrega Continua (CD)**, automatizando la compilación, prueba y despliegue del código.

Un **Pipeline** es una secuencia automatizada de pasos que toma el código fuente, lo compila, ejecuta pruebas, y finalmente lo empaqueta o lo despliega en un entorno de destino.

### **Tipos de Definición de Pipelines**

#### **YAML Pipelines (Recomendado)**

- **Definición:** El proceso completo de CI/CD se define en un archivo YAML (`azure-pipelines.yml`) que se almacena junto con el código fuente en el repositorio.
- **Ventajas:** Permite la infraestructura como código (IaC) para el CI/CD, control de versiones del pipeline y reutilización de plantillas.
- **Estructura:** Está compuesto por **Stages** (Etapas), **Jobs** (Trabajos) y **Steps** (Pasos/Tareas).

#### **Classic Pipelines (Interfaz Gráfica)**

- **Definición:** Los pipelines de compilación y lanzamiento se definen y gestionan a través de una interfaz de usuario gráfica en el portal de Azure DevOps.
- **Uso:** A menudo se sigue utilizando para escenarios de despliegue más complejos o legados (como los antiguos Release Pipelines separados).

[📇](#índice)

---

## **Integración Continua (CI) y Entrega Continua (CD)**

CI/CD es el núcleo de las prácticas de DevOps, y Azure Pipelines es la herramienta que lo implementa.

### **A. Integración Continua (CI)**

La CI es una práctica de desarrollo que requiere que los desarrolladores integren código en un repositorio compartido varias veces al día.

**Fase CI (Build Pipeline):**

1. **Trigger (Activador):** Se inicia automáticamente con cada `push` de código o Pull Request a una rama principal (ej. `main` o `develop`).
2. **Obtener Código:** El pipeline extrae la versión más reciente del código de Azure Repos.
3. **Compilación (Build):** Compila el código fuente para generar artefactos ejecutables (ej. JARs, paquetes NuGet, imágenes Docker).
4. **Pruebas Unitarias:** Ejecuta automáticamente las pruebas unitarias y de integración temprana.
5. **Generar Artefacto:** Si la compilación y las pruebas son exitosas, se crea un **artefacto de compilación** (un paquete listo para desplegar) y se publica para su uso en la fase de CD.

### **B. Entrega Continua (CD)**

La CD es la fase que automatiza la entrega de cambios validados a un repositorio (registro de contenedores) o a uno o más entornos de prueba o producción.

**Fase CD (Release Pipeline):**

1. **Trigger:** Se inicia al completarse exitosamente la fase de CI (cuando se publica un nuevo artefacto).
2. **Despliegue:** El artefacto se despliega en un entorno (ej. Desarrollo, QA, Staging).
3. **Aprobaciones:** Puede incluir aprobaciones manuales obligatorias para pasar de entornos de prueba a producción.
4. **Pruebas:** Se ejecutan pruebas de aceptación de usuario (UAT) o pruebas funcionales automatizadas en el entorno de destino.
5. **Producción:** Una vez que todas las puertas de calidad y aprobaciones se cumplen, el artefacto se despliega en el entorno de Producción.

---

En resumen, Azure DevOps unifica el control de versiones (Azure Repos) con la automatización del ciclo de vida del software (Azure Pipelines) para permitir la implementación de prácticas de CI/CD.

[📇](#índice)

---

[⏪ Regresar a thecnical](../../README.md) | [⏫ Subir un nivel](../README.md)
