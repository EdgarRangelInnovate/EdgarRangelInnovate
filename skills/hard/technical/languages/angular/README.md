# Angular: Arquitectura y Conceptos Fundamentales

Angular es un framework de desarrollo de aplicaciones web de frontend, impulsado por Google, diseñado para construir aplicaciones de una sola página (SPA - Single Page Applications) a gran escala y de alto rendimiento. Utiliza TypeScript como lenguaje principal, que añade tipado estático y robustez al desarrollo.

**Objetivo:** Resumir los fundamentos de Angular, su arquitectura basada en componentes, la gestión de datos reactiva y las mejores prácticas para el desarrollo de aplicaciones web modernas y escalables.

## **Índice**

- [Angular: Arquitectura y Conceptos Fundamentales](#angular-arquitectura-y-conceptos-fundamentales)
  - [**Índice**](#índice)
  - [**Fundamentos de la Plataforma Angular**](#fundamentos-de-la-plataforma-angular)
    - [**Componentes y Templates**](#componentes-y-templates)
    - [**Módulos (NgModule - Enfoque Clásico)**](#módulos-ngmodule---enfoque-clásico)
  - [**Conceptos Clave de Desarrollo**](#conceptos-clave-de-desarrollo)
    - [**TypeScript**](#typescript)
    - [**Data Binding (Enlace de Datos)**](#data-binding-enlace-de-datos)
    - [**Inyección de Dependencias (DI)**](#inyección-de-dependencias-di)
    - [**Observables y RxJS**](#observables-y-rxjs)
  - [**Gestión de Estado y Reactividad**](#gestión-de-estado-y-reactividad)
    - [**Signals (Señales)**](#signals-señales)
  - [**Control de Flujo y Modularidad**](#control-de-flujo-y-modularidad)
    - [**Control de Flujo Nativo (Angular 17+)**](#control-de-flujo-nativo-angular-17)
    - [**Rutas y Navegación (Routing)**](#rutas-y-navegación-routing)
  - [**Buenas Prácticas y Enfoques Modernos**](#buenas-prácticas-y-enfoques-modernos)

---

## **Fundamentos de la Plataforma Angular**

La arquitectura de Angular se basa en bloques de construcción interconectados, aunque las versiones modernas (15+) están migrando hacia un enfoque Standalone (Autónomo) que simplifica la estructura.

### **Componentes y Templates**

Un **Componente** es el bloque de construcción más fundamental. Un componente controla una porción de la pantalla (una vista). Se define con el decorador `@Component`.

- **`@Component` Decorador:** Metadatos clave que definen el componente:
  - `selector`: Nombre HTML personalizado que se usa para invocar el componente (ej. `<app-root>`).
  - `template`: El HTML que define la vista.
  - `styles`: El CSS que aplica exclusivamente a esta vista.
  - **Template (Plantilla):** Es el código HTML asociado a un componente. Utiliza la sintaxis de plantillas de Angular para mostrar datos y manejar la interacción del usuario.

### **Módulos (NgModule - Enfoque Clásico)**

En las versiones clásicas, los módulos (`NgModule`) eran contenedores lógicos que agrupaban componentes, servicios y otros artefactos relacionados. El Módulo Raíz (`AppModule`) arranca la aplicación.

- **Tendencia Moderna: Componentes Standalone:** El uso de componentes Standalone (autónomos), introducido en Angular 15, elimina la necesidad de los `NgModule` en la mayoría de los casos, simplificando la estructura y el *tree-shaking* (eliminación de código no usado). Esto promueve una mayor modularidad y un desarrollo más ágil.

[📇](#índice)

---

## **Conceptos Clave de Desarrollo**

### **TypeScript**

Angular utiliza TypeScript, un superconjunto de JavaScript que añade:

- **Tipado Estático:** Permite detectar errores de tipo en tiempo de compilación, no solo en tiempo de ejecución, lo que mejora la robustez y mantenibilidad del código.
- **Interfaces y Clases:** Proporciona estructuras de código claras para la orientación a objetos, facilitando la organización y el diseño de la aplicación.

### **Data Binding (Enlace de Datos)**

Mecanismo que sincroniza los datos entre la lógica del componente (Clase TypeScript) y la vista (Template HTML).

| Tipo de Binding      | Símbolo       | Dirección             | Descripción                                                                                               |
| :------------------- | :------------ | :-------------------- | :-------------------------------------------------------------------------------------------------------- |
| **Interpolación**    | `{{ data }}`  | De Componente a Vista | Muestra una propiedad del componente en el template.                                                      |
| **Property Binding** | `[propiedad]` | De Componente a Vista | Asigna un valor de una propiedad del componente a una propiedad HTML (ej. `[src]="url"`).                 |
| **Event Binding**    | `(evento)`    | De Vista a Componente | Escucha eventos del DOM (clics, cambios) e invoca un método del componente (ej. `(click)="save()"`).      |
| **Two-way Binding**  | `[(ngModel)]` | Ambas                 | Sincroniza automáticamente el estado de la vista con la propiedad del componente (se usa en formularios). |

### **Inyección de Dependencias (DI)**

- **Servicios (`@Injectable`):** Clases que contienen lógica de negocio o acceso a datos que puede ser compartida entre componentes. Se definen con el decorador `@Injectable`.
- **Patrón DI:** Angular inyecta automáticamente las dependencias (servicios) en los constructores de los componentes y otros servicios, delegando la creación y gestión de las instancias al framework. Esto promueve la modularidad, la reusabilidad y facilita las pruebas unitarias.

### **Observables y RxJS**

Angular utiliza intensivamente la librería RxJS (Reactive Extensions for JavaScript) para manejar el flujo de datos asíncronos y eventos.

- **Observable:** Representa una colección de valores futuros o eventos que pueden ser emitidos con el tiempo (como una solicitud HTTP, eventos de usuario o cambios de estado).
- **Subscription:** La acción de "escuchar" los valores emitidos por un Observable. Es crucial desuscribirse para evitar fugas de memoria.
- **Pipe `async`:** Un pipe integrado que se utiliza en el template para suscribirse automáticamente a un Observable y desuscribirse cuando el componente se destruye, previniendo fugas de memoria y simplificando la gestión de suscripciones.

[📇](#índice)

---

## **Gestión de Estado y Reactividad**

### **Signals (Señales)**

Las Señales (introducidas en Angular 16+) son el nuevo mecanismo para la gestión de estados reactivos en la aplicación, ofreciendo mayor rendimiento y control.

- **`signal()`:** Función que crea un valor reactivo y mutable. Cuando el valor de una señal cambia, Angular sabe qué partes de la interfaz de usuario necesitan actualizarse.
- **`computed()`:** Función que crea un valor reactivo de solo lectura, cuyo valor se calcula automáticamente a partir de otras señales. Es eficiente, ya que solo se recalcula cuando cambian sus dependencias, optimizando el rendimiento.
- **`effect()`:** Función que ejecuta código de lado (como logging, actualización de librerías externas o interacción con el DOM fuera de Angular) cuando el valor de una señal cambia. Los efectos siempre se ejecutan al menos una vez y se vuelven a ejecutar cuando sus dependencias reactivas cambian.

```typescript
import { signal, computed, effect } from '@angular/core';

// 1. Estado simple (mutable)
const counter = signal(0);

// 2. Estado computado (solo lectura, derivado)
const isEven = computed(() => counter() % 2 === 0);

// 3. Efecto secundario
effect(() => {
  console.log(`El contador actual es: ${counter()}`);
});

// Actualización del estado
counter.set(5); // El effect se ejecuta
// Output: El contador actual es: 5
```

[📇](#índice)

## **Control de Flujo y Modularidad**

### **Control de Flujo Nativo (Angular 17+)**

Angular promueve nuevas sintaxis de control de flujo en las plantillas que mejoran el rendimiento y la legibilidad:

| Directiva Clásica              | Sintaxis de Control de Flujo Nativo                               |
| :----------------------------- | :---------------------------------------------------------------- |
| `*ngIf`                        | `@if (condition) { ... } @else if (other) { ... } @else { ... }`  |
| `*ngFor`                       | `@for (item of collection; track item.id) { ... } @empty { ... }` |
| `[ngSwitch]` / `*ngSwitchCase` | `@switch (value) { @case (1) { ... } @default { ... } }`          |

### **Rutas y Navegación (Routing)**

Angular Router gestiona la navegación entre diferentes vistas o componentes dentro de la SPA.

- **Rutas (`Routes`):** Se definen como un array de objetos que mapean una URL a un componente.

    ```typescript
    // app.routes.ts
    import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { AboutComponent } from './about/about.component';

    export const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' } // Ruta por defecto
    ];
    ```

- **RouterOutlet:** Marcador en el template principal que indica dónde se debe renderizar el componente correspondiente a la ruta activa.
- **RouterLink:** Directiva que se usa en el template para crear enlaces de navegación. Es el equivalente de `<a href="...">` pero integrado con el Router de Angular.

    ```html
    <!-- app.component.html -->
    <nav>
      <a routerLink="/home">Inicio</a>
      <a routerLink="/about">Acerca de</a>
    </nav>

    <router-outlet></router-outlet> <!-- Aquí se carga HomeComponent o AboutComponent -->
    ```

---

## **Buenas Prácticas y Enfoques Modernos**

1. **Priorizar Componentes Standalone:** Utilizar componentes, *pipes* y directivas autónomas (`standalone: true`) para eliminar la necesidad de `NgModules`, simplificando la arquitectura y mejorando la modularidad.
2. **Adoptar Signals para el Estado:** Usar `signal()` y `computed()` para una gestión de estado reactiva y de alto rendimiento, reduciendo la dependencia de `Zone.js`.
3. **Diseñar Componentes Pequeños y Enfocados:** Crear componentes con una única responsabilidad para facilitar su reutilización, prueba y mantenimiento.
4. **Centralizar la Lógica en Servicios:** Mover la lógica de negocio, el acceso a datos y otras funcionalidades compartidas a servicios inyectables (`@Injectable`).
5. **Optimizar la Detección de Cambios:** Implementar la estrategia `OnPush` en los componentes para minimizar las verificaciones de la vista y mejorar el rendimiento.
6. **Gestionar Suscripciones a Observables:** Para evitar fugas de memoria, desuscribirse siempre de los `Observables`. La forma más segura y recomendada es usar el *pipe* `async` en las plantillas.
7. **Fomentar la Inmutabilidad:** En lugar de modificar objetos y *arrays* directamente, crear nuevas instancias. Esto garantiza una detección de cambios predecible y robusta, especialmente al usar `OnPush` y `Signals`.
8. **Escribir Pruebas Unitarias:** Asegurar la calidad y facilitar el refactoring mediante la creación de pruebas unitarias para componentes, servicios y *pipes*.

[📇](#índice)

---

[⏪ Regresar a thecnical](../../README.md) | [⏫ Subir un nivel](../README.md)
