# AWS: Servicios Clave, Arquitectura y Seguridad

Amazon Web Services (AWS) es la plataforma de nube más completa y ampliamente adoptada del mundo. La solidez técnica en AWS se demuestra con el conocimiento de sus pilares fundamentales (Compute, Storage, Database) y las prácticas de seguridad.

## Índice

- [AWS: Servicios Clave, Arquitectura y Seguridad](#aws-servicios-clave-arquitectura-y-seguridad)
  - [Índice](#índice)
  - [1. Servicios Esenciales de AWS](#1-servicios-esenciales-de-aws)
    - [1.1. EC2 (Elastic Compute Cloud) - Cómputo](#11-ec2-elastic-compute-cloud---cómputo)
    - [1.2. S3 (Simple Storage Service) - Almacenamiento de Objetos](#12-s3-simple-storage-service---almacenamiento-de-objetos)
    - [1.3. RDS (Relational Database Service) - Base de Datos Administrada](#13-rds-relational-database-service---base-de-datos-administrada)
    - [1.4. Lambda - Cómputo Serverless (Sin Servidor)](#14-lambda---cómputo-serverless-sin-servidor)
  - [2. Conceptos Fundamentales de Arquitectura](#2-conceptos-fundamentales-de-arquitectura)
    - [2.1. Regiones y Zonas de Disponibilidad (AZ)](#21-regiones-y-zonas-de-disponibilidad-az)
    - [2.2. VPC (Virtual Private Cloud) - Redes](#22-vpc-virtual-private-cloud---redes)
  - [3. Principios Básicos de Seguridad](#3-principios-básicos-de-seguridad)
    - [3.1. IAM (Identity and Access Management) - Identidad y Acceso](#31-iam-identity-and-access-management---identidad-y-acceso)
    - [3.2. Seguridad a Nivel de Red](#32-seguridad-a-nivel-de-red)

## 1. Servicios Esenciales de AWS

Los siguientes cuatro servicios son la base de casi cualquier arquitectura moderna en AWS:

### 1.1. EC2 (Elastic Compute Cloud) - Cómputo

EC2 proporciona capacidad de cómputo redimensionable en la nube. Esencialmente, son servidores virtuales (máquinas virtuales) que pueden ser lanzados y configurados rápidamente.

- **¿Qué es?**: Infraestructura como Servicio (IaaS). Te da control total sobre el sistema operativo.
- **Instancias**: Una instancia EC2 es una máquina virtual con un tipo específico (familia), definido por la cantidad de CPU virtual (vCPU), memoria (RAM), almacenamiento y rendimiento de red.
- **Escalabilidad**: Se integra con Auto Scaling Groups para aumentar o disminuir automáticamente el número de instancias según la demanda.
- **Almacenamiento (EBS)**: El almacenamiento persistente para la instancia EC2 se proporciona mediante Elastic Block Store (EBS), que funciona como un disco duro de red.

### 1.2. S3 (Simple Storage Service) - Almacenamiento de Objetos

S3 es un servicio de almacenamiento de objetos con durabilidad, disponibilidad y escalabilidad líderes en la industria.

- **¿Qué es?**: Almacenamiento de objetos. Los datos se almacenan como objetos en buckets (cubos). Es ideal para datos no estructurados.
- **Usos Comunes**: Alojamiento de sitios web estáticos, almacenamiento de copias de seguridad (backups), lagos de datos (data lakes), y almacenamiento de archivos multimedia.
- **Durabilidad**: Ofrece una durabilidad del 99.999999999% (Once nueves), lo que significa que la pérdida de datos es extremadamente improbable.
- **Clases de Almacenamiento**: Ofrece diferentes clases (Standard, Infrequent Access, Glacier) para optimizar el coste según la frecuencia de acceso.

### 1.3. RDS (Relational Database Service) - Base de Datos Administrada

RDS facilita la configuración, operación y escalado de bases de datos relacionales en la nube. AWS se encarga de las tareas administrativas (parches, copias de seguridad).

- **¿Qué es?**: Plataforma de Base de Datos como Servicio (DBaaS).
- **Motores Soportados**: [MySQL](../dbs/mysql.md), [PostgreSQL](../dbs/postgresql.md), [MariaDB](../dbs/mariadb.md), [Oracle](../dbs/oracle.db), [SQL Server](../dbs/sql-server.md) y [Amazon Aurora](../dbs/aurora.md) (el motor optimizado de AWS).
- **Alta Disponibilidad**: Permite la configuración Multi-AZ (Multi-Zona de Disponibilidad) para replicar automáticamente los datos a una instancia en espera en otra zona geográfica, garantizando la continuidad del negocio ante fallos.

### 1.4. Lambda - Cómputo Serverless (Sin Servidor)

Lambda es un servicio de cómputo serverless que permite ejecutar código sin aprovisionar ni gestionar servidores.

- **¿Qué es?**: Función como Servicio (FaaS). El código se ejecuta en respuesta a eventos.
- **Modelo de Pago**: Se paga solo por el tiempo de cómputo consumido (milisegundos) mientras se ejecuta el código.
- **Event-Driven**: Se activa por eventos (ej. una carga de archivo en S3, un mensaje en una cola SQS, una solicitud HTTP de API Gateway).
- **Ventajas**: Elimina la gestión de infraestructura y escala automáticamente a picos de demanda.

[📇](#índice)

## 2. Conceptos Fundamentales de Arquitectura

### 2.1. Regiones y Zonas de Disponibilidad (AZ)

La infraestructura de AWS está construida sobre un modelo geográfico para asegurar la resiliencia global.

- **Región**: Una ubicación física en el mundo donde AWS tiene múltiples Centros de Datos.
- **Zona de Disponibilidad (AZ)**: Uno o más centros de datos discretos dentro de una Región. Están aislados unos de otros para prevenir la propagación de fallos, pero están conectados por enlaces de red de baja latencia.
- **Alta Disponibilidad**: Para lograr la máxima disponibilidad (ej. para RDS o EC2), se debe desplegar la infraestructura a través de múltiples AZs.

### 2.2. VPC (Virtual Private Cloud) - Redes

VPC te permite aprovisionar una sección lógicamente aislada de la Nube de AWS donde puedes lanzar recursos de AWS en una red virtual que defines.

- **Subredes**: Divisiones de la VPC.
  - **Subredes Públicas**: Contienen recursos que deben ser accesibles desde Internet (ej. Balanceadores de Carga, servidores web front-end).
  - **Subredes Privadas**: Contienen recursos que no deben ser accesibles directamente desde Internet (ej. Bases de datos RDS, servidores de aplicaciones de back-end).
- **Internet Gateway (IGW)**: Permite la comunicación entre tu VPC y el Internet.
- **NAT Gateway**: Permite que los recursos en las subredes privadas inicien conexiones salientes a Internet (ej. para descargar parches) sin permitir conexiones entrantes no solicitadas.

[📇](#índice)

## 3. Principios Básicos de Seguridad

La seguridad en AWS se basa en el Modelo de Responsabilidad Compartida. AWS se encarga de la seguridad **de** la nube (la infraestructura global); el cliente es responsable de la seguridad **en** la nube (configuración de los servicios).

### 3.1. IAM (Identity and Access Management) - Identidad y Acceso

IAM es el servicio que controla quién está autenticado (identidad) y autorizado (acceso) para usar los recursos de AWS.

- **Usuarios**: Identidades utilizadas por personas o aplicaciones para acceder a AWS.
- **Grupos**: Colecciones de usuarios que comparten el mismo conjunto de permisos.
- **Roles**: Identidades que las instancias EC2, las funciones Lambda u otros servicios pueden asumir temporalmente para interactuar con otros servicios de AWS (la forma recomendada de dar permisos a los recursos).
- **Políticas**: Documentos JSON que definen los permisos específicos (qué acciones en qué recursos). Siempre sigue el Principio de Mínimo Privilegio.

### 3.2. Seguridad a Nivel de Red

Estos servicios actúan como firewalls en diferentes capas de la red:

- **Security Groups (Grupos de Seguridad)**: Actúan como firewalls a nivel de instancia EC2 (capa 4).
  - Son **Stateful** (con estado): Si permites el tráfico entrante, el tráfico saliente de respuesta se permite automáticamente.
  - **Mejor Práctica**: Utilizar SGs para definir reglas de tráfico específicas (protocolo, puerto, fuente).
- **Network Access Control Lists (NACLs)**: Actúan como firewalls a nivel de subred (capa 3).
  - Son **Stateless** (sin estado): Debes definir reglas separadas para el tráfico entrante y el saliente.
  - **Uso**: Una capa de seguridad secundaria, menos granular, que puede bloquear rangos de IP completos a nivel de subred.

[📇](#índice)

---

[⏫ Subir un nivel](../README.md)
