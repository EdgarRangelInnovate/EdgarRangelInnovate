# **Java: Conceptos Clave y Ecosistema (Enfoque Empresarial)**

Java es una de las plataformas preferidas en el entorno empresarial por su combinación única de **robustez, portabilidad y un ecosistema maduro**. Su principio "Write Once, Run Anywhere" (WORA), habilitado por la **Máquina Virtual de Java (JVM)**, permite que las aplicaciones se ejecuten de manera consistente en cualquier sistema operativo. Esto, sumado a su fuerte tipado, gestión automática de memoria (Garbage Collection) y soporte nativo para multithreading, lo convierte en una opción segura y escalable para sistemas críticos.

Objetivo: Resumir los fundamentos de Java y su ecosistema, esenciales para el desarrollo de aplicaciones robustas, escalables y orientadas a microservicios.

## **Índice**

- [**Java: Conceptos Clave y Ecosistema (Enfoque Empresarial)**](#java-conceptos-clave-y-ecosistema-enfoque-empresarial)
  - [**Índice**](#índice)
  - [**Fundamentos de la Plataforma Java**](#fundamentos-de-la-plataforma-java)
    - [**JVM (Java Virtual Machine)**](#jvm-java-virtual-machine)
    - [**Orientación a Objetos (POO)**](#orientación-a-objetos-poo)
    - [**Tipos de Datos: Primitivos vs. Objetos**](#tipos-de-datos-primitivos-vs-objetos)
    - [**Recolección de Basura (Garbage Collection - GC)**](#recolección-de-basura-garbage-collection---gc)
  - [**Programación Funcional y Modernización (Java 8+)**](#programación-funcional-y-modernización-java-8)
    - [**Expresiones Lambda y Interfaces Funcionales**](#expresiones-lambda-y-interfaces-funcionales)
    - [**Streams API**](#streams-api)
    - [**Tipos de Datos Inmutables (Records)**](#tipos-de-datos-inmutables-records)
  - [**Ecosistema y Frameworks: Spring Boot**](#ecosistema-y-frameworks-spring-boot)
    - [**Inyección de Dependencias (DI) e Inversión de Control (IoC)**](#inyección-de-dependencias-di-e-inversión-de-control-ioc)
    - [**Arquitectura y Anotaciones Clave**](#arquitectura-y-anotaciones-clave)
    - [**Conectividad (Bases de Datos)**](#conectividad-bases-de-datos)
  - [**Concurrencia y Asincronía**](#concurrencia-y-asincronía)
    - [**Ciclo de Vida de un Hilo (Thread Lifecycle)**](#ciclo-de-vida-de-un-hilo-thread-lifecycle)
    - [**Problemas Clásicos de la Concurrencia**](#problemas-clásicos-de-la-concurrencia)
    - [**Mecanismos de Sincronización y Soluciones**](#mecanismos-de-sincronización-y-soluciones)
  - [**Depuración**](#depuración)
  - [**Buenas Prácticas**](#buenas-prácticas)

---

## **Fundamentos de la Plataforma Java**

### **JVM (Java Virtual Machine)**

Es el componente central que permite a Java ser **"Write once, run anywhere" (WORA)**. La JVM interpreta el *bytecode* (archivos .class) generado por el compilador, traduciéndolo a código nativo de la máquina subyacente.

- **Importancia en Infraestructura:** Permite que las aplicaciones Java se ejecuten en cualquier sistema operativo (Windows, Linux, macOS) y facilita la contenerización (Docker/Kubernetes).

### **Orientación a Objetos (POO)**

Java es puramente orientado a objetos, siguiendo los cuatro pilares:

1. **Encapsulamiento:** Ocultar los detalles de implementación mediante el uso de modificadores de acceso (private, public, protected).  
2. **Herencia:** Reutilización de código a través de la relación "es un".  
3. **Polimorfismo:** Capacidad de una variable, función u objeto de tomar múltiples formas. Se logra mediante la sobrecarga de métodos (*Overloading*) o la anulación de métodos (*Overriding*).  
4. **Abstracción:** Mostrar solo la información esencial al usuario, utilizando interfaces y clases abstractas.

### **Tipos de Datos: Primitivos vs. Objetos**

Entender esta diferencia es clave para la gestión de memoria y el rendimiento.

- **Tipos Primitivos:** (`int`, `double`, `boolean`, `char`, etc.). Almacenan el valor directamente en la memoria **stack** (si son variables locales) o como parte de un objeto en el **heap**. Son rápidos y eficientes en memoria, pero no son objetos (no tienen métodos).
- **Tipos de Objeto (o de Referencia):** (Cualquier clase, como `String`, `Integer`, o `Producto`). La variable almacena una **referencia** (un puntero) en el **stack** que apunta a la ubicación del objeto real en la memoria **heap**. Permiten el polimorfismo y tienen métodos, pero conllevan una sobrecarga de memoria y acceso.
- **Wrapper Classes y Autoboxing:** Java provee clases *wrapper* (`Integer`, `Double`) para cada tipo primitivo, permitiendo tratarlos como objetos. El proceso de conversión automática entre primitivos y sus wrappers se llama *autoboxing/unboxing*.

### **Recolección de Basura (Garbage Collection \- GC)**

Proceso automático de gestión de memoria de Java. La JVM libera la memoria ocupada por objetos que ya no son referenciados por la aplicación, evitando fugas de memoria (*memory leaks*).

- **Consideraciones:** El GC puede pausar momentáneamente la ejecución de la aplicación (pausas "Stop-the-World"). En entornos de alto rendimiento, es crucial elegir el recolector de basura adecuado (ej. G1GC, Shenandoah, ZGC) y ajustar los parámetros de la JVM.

[📇](#índice)

---

## **Programación Funcional y Modernización (Java 8+)**

### **Expresiones Lambda y Interfaces Funcionales**

Java 8 introdujo el soporte para la programación funcional.

- **Expresión Lambda:** Una sintaxis concisa para representar métodos anónimos, que no tienen nombre, pero sí una lista de parámetros y un cuerpo.

  ```java
    // Antes de Java 8 (clase anónima)  
    Runnable r \= new Runnable() {  
        @Override  
        public void run() {  
            System.out.println("Corriendo...");  
        }  
    };

    // Con Lambda (código conciso)  
    Runnable rLambda \= () \-\> System.out.println("Corriendo...");
  ```

- **Interfaces Funcionales:** Interfaces que tienen exactamente un método abstracto (ej. Runnable, Consumer, Supplier, Function, Predicate). Son el tipo al que se asignan las expresiones Lambda.

### **Streams API**

Una abstracción para procesar secuencias de datos de forma declarativa y, opcionalmente, en paralelo. Permite operaciones de alto nivel sobre colecciones, como filtrar, mapear y reducir.

- **Operaciones Comunes:**
  - **Intermedias:** filter(), map(), sorted(), distinct(). Son *lazy* (no se ejecutan hasta que se llama a una operación terminal).
  - **Terminales:** forEach(), collect(), reduce(), count(). Inician el procesamiento del *stream*.

### **Tipos de Datos Inmutables (Records)**

Introducidos en Java 16, los records son una forma concisa de crear clases de datos inmutables. Reducen significativamente el *boilerplate code* (constructores, getters, equals, hashCode, toString).

```java
// Definición de un record  
public record Producto(String nombre, double precio, int stock) {  
    // El constructor, getters, equals(), hashCode() y toString() se generan automáticamente.  
}
```

[📇](#índice)

---

## **Ecosistema y Frameworks: Spring Boot**

Spring Boot es el *framework* dominante en Java para construir aplicaciones robustas, especialmente microservicios. Simplifica la configuración de Spring Framework.

### **Inyección de Dependencias (DI) e Inversión de Control (IoC)**

- **IoC:** Principio en el que el *framework* (Spring) controla el flujo del programa, no la aplicación.
- **DI:** Patrón de diseño donde el *framework* se encarga de proporcionar las dependencias a un objeto (en lugar de que el objeto las cree por sí mismo).
- **Contenedor IoC (ApplicationContext):** El núcleo de Spring; gestiona la creación, configuración y ciclo de vida de los **Beans** (objetos gestionados por Spring).

### **Arquitectura y Anotaciones Clave**

Spring utiliza anotaciones para declarar *Beans* y configurar su comportamiento:

| Anotación                     | Propósito                                                                                                      | Capa (Capa de la aplicación) |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| @SpringBootApplication        | Agrupa @Configuration, @EnableAutoConfiguration y @ComponentScan para iniciar la app.                          | Aplicación                   |
| @Component                    | Marcador genérico para cualquier clase gestionada por Spring.                                                  | General                      |
| @Service                      | Clases que contienen la lógica de negocio.                                                                     | Lógica de Negocio            |
| @Repository                   | Clases que manejan el acceso a datos (ej. JPA, JDBC).                                                          | Persistencia                 |
| @Controller / @RestController | Clases que exponen la interfaz (ej. APIs REST). @RestController asume que todos los métodos retornan JSON/XML. | Presentación                 |
| @Autowired                    | Inyecta una dependencia (otro Bean) automáticamente.                                                           | Inyección                    |
| @Value                        | Inyecta valores desde archivos de configuración (application.properties / .yml).                               | Configuración                |

### **Conectividad (Bases de Datos)**

- **Spring Data JPA:** Simplifica el acceso a datos ORM (Object-Relational Mapping), permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) y consultas personalizadas con solo definir interfaces (@Repository).
- **Entity:** Clase Java mapeada a una tabla de la base de datos (@Entity).
- **Repository:** Interface que extiende a JpaRepository y proporciona métodos de persistencia listos para usar.

[📇](#índice)

---

## **Concurrencia y Asincronía**

[![multithread lifecycle](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwH2kce7chGieYTXGo1Di0lio1VyARzyrKagqwtDX-5DkGvBOCH5_zPm2Ak4qc7_Cbb-jnz8W5xmKcz-PQewe2rHD61FBPZxpeKHjLxRNdPiFoLMMnr51HrHLPxi0bojNgbFboXueehgTK/s1600/Presentation1.png)](https://codehungry.blogspot.com/2018/02/lifecycle-of-thread-in-java.html)

Java fue diseñado con la concurrencia en mente, pero su manejo incorrecto introduce riesgos complejos.

- **Threads y Runnable:** Unidad básica de concurrencia. Una clase Runnable define la tarea a ejecutar en el *thread*.
- **ExecutorService:** Una interfaz para gestionar *pools* de *threads*. Permite reutilizar *threads* y limitar el número de tareas concurrentes, lo cual es vital para el rendimiento y la estabilidad del servidor.
- **CompletableFuture:** (Introducido en Java 8\) Clase para manejar operaciones asíncronas de forma más legible y componible, evitando el anidamiento de *callbacks*.

### **Ciclo de Vida de un Hilo (Thread Lifecycle)**

Un hilo en Java pasa por varios estados durante su ejecución:

- **`NEW`**: El hilo ha sido creado pero aún no ha comenzado su ejecución (`start()` no ha sido invocado).
- **`RUNNABLE`**: El hilo está listo para ejecutarse y está esperando tiempo de CPU del planificador del sistema operativo. Incluye tanto el estado "listo" como "en ejecución".
- **`BLOCKED`**: El hilo está bloqueado esperando por un monitor (un lock), típicamente al intentar entrar en un bloque `synchronized`.
- **`WAITING`**: El hilo está en espera indefinida por una acción de otro hilo (ej. `Object.wait()`, `Thread.join()`).
- **`TIMED_WAITING`**: El hilo está en espera por un período de tiempo específico (ej. `Thread.sleep(ms)`, `Object.wait(ms)`).
- **`TERMINATED`**: El hilo ha completado su ejecución.

### **Problemas Clásicos de la Concurrencia**

- **Condiciones de Carrera (Race Conditions):** Ocurren cuando múltiples hilos acceden y modifican un estado compartido mutable sin control, llevando a resultados impredecibles.
- **Visibilidad de Memoria:** Los cambios realizados por un hilo en una variable compartida pueden no ser visibles inmediatamente para otros hilos debido a cachés de CPU.
- **Bloqueos Mutuos (Deadlocks):** Dos o más hilos se bloquean indefinidamente, esperando recursos que los otros hilos poseen.

### **Mecanismos de Sincronización y Soluciones**

- **`synchronized`:** Palabra clave que garantiza la **exclusión mutua**. Un bloque o método `synchronized` solo puede ser ejecutado por un hilo a la vez, previniendo condiciones de carrera y asegurando la visibilidad de memoria.
- **`volatile`:** Palabra clave que garantiza la **visibilidad de memoria** para una variable. Asegura que cualquier lectura de la variable vea la escritura más reciente, pero no garantiza la atomicidad de operaciones compuestas (como `i++`).
- **Paquete `java.util.concurrent`:** Proporciona herramientas de alto nivel para manejar la concurrencia de forma más robusta y flexible.
  - **`ExecutorService`:** Interfaz para gestionar *pools* de hilos. Reutiliza hilos para reducir la sobrecarga de creación y destrucción, siendo fundamental para la estabilidad del servidor.
  - **Locks (`ReentrantLock`):** Una alternativa más flexible y potente a `synchronized`, con capacidades como timeouts y la posibilidad de interrumpir un hilo en espera.
  - **Clases Atómicas (`AtomicInteger`, `AtomicBoolean`):** Permiten realizar operaciones atómicas (indivisibles) sobre tipos primitivos sin necesidad de bloqueos explícitos, usando mecanismos de hardware eficientes (Compare-And-Swap).
  - **Colecciones Concurrentes (`ConcurrentHashMap`, `CopyOnWriteArrayList`):** Colecciones optimizadas para el acceso concurrente, ofreciendo mayor rendimiento que envolver colecciones estándar con `Collections.synchronized...`.
- **`CompletableFuture` (Java 8+):** Clase para manejar operaciones asíncronas de forma componible y legible, evitando el "infierno de callbacks" (*callback hell*) y facilitando la orquestación de tareas no bloqueantes.

[📇](#índice)

---

## **Depuración**

Comando para depurar

```java
System.out.println(String msg);
```

[📇](#índice)

---

## **Buenas Prácticas**

- **Uso de Inmutabilidad:** Diseñar objetos de negocio como inmutables (ej. usando final y Records) para simplificar la concurrencia y reducir errores.  
- **Manejo de Excepciones:**  
  - Usar excepciones *Checked* (ej. IOException) para errores de los que el código puede recuperarse.  
  - Usar excepciones *Unchecked* (ej. RuntimeException) para errores de programación (ej. NullPointerException).  
  - **Nunca atrapar la excepción genérica Exception sin un propósito claro.**  
- **Estándares de Código:** Seguir convenciones como Camel Case para métodos y variables, y Pascal Case para clases e interfaces.  
- **Logging:** Utilizar *frameworks* de *logging* (ej. SLF4J con Logback) en lugar de System.out.println() para tener control sobre los niveles de severidad y el formato.

[📇](#índice)

---

[⏫ Subir un nivel](../README.md)
