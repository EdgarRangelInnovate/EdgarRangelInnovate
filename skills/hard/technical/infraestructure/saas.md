# **Infraestructura: conceptos generales para bases de datos, servidores y apps**

Objetivo: agrupar conceptos operativos y herramientas que aplican tanto a bases de datos como a servidores y aplicaciones.

## **Índice**

- [**Infraestructura: conceptos generales para bases de datos, servidores y apps**](#infraestructura-conceptos-generales-para-bases-de-datos-servidores-y-apps)
  - [**Índice**](#índice)
  - [**Alcance**](#alcance)
  - [**Conceptos clave**](#conceptos-clave)
  - [**Herramientas y componentes frecuentes (resumen)**](#herramientas-y-componentes-frecuentes-resumen)
  - [**Buenas prácticas operativas**](#buenas-prácticas-operativas)
  - [**Lecturas y referencias rápidas**](#lecturas-y-referencias-rápidas)
  - [**NAS (Network Attached Storage)**](#nas-network-attached-storage)

---

## **Alcance**

Aplica a despliegue, disponibilidad, recuperación y operación de servicios (DB, APIs, frontends, colas, etc.).

[📇](#índice)

---

## **Conceptos clave**

- Cluster: conjunto de nodos que actúan como una única unidad lógica (alta disponibilidad y/o escalado).  
- Replicación: copia de datos entre nodos (síncrona / asíncrona). Patrones: primary/replica, leader/follower, multi-leader.  
- Sharding / Partitioning: división horizontal de datos para escalar capacidad y escritura.  
- Consistencia y modelos: strong, causal, eventual — impacto en diseño y experiencia.  
- Redundancia y HA: réplicas, quorum, elección de líder, zonas/zonificación (AZs, regiones).  
- Failover y conmutación por error: automática o manual; definir RTO (Recovery Time Objective \- cuánto tiempo puedo estar caído) y RPO (Recovery Point Objective \- cuántos datos puedo perder).  
- Backups y DR: snapshots, backups incrementales, PITR (Point-in-Time Recovery), verificación periódica de restores.  
- Sincronización / replication lag: monitorizar lag y diseñar tolerancia en la aplicación (ej. leer de la réplica solo para datos que aceptan consistencia eventual).  
- Monitorización y observabilidad: métricas (latencia, throughput, uso de recursos, replication lag), logs, traces y alertas.  
- Seguridad e aislamiento: firewalls, redes privadas, cifrado (en tránsito y reposo), gestión de secretos, control de accesos y auditoría.  
- Mantenimiento y operaciones: rolling upgrades (actualizaciones sin interrupción del servicio), reindexado, compactación, resync de réplicas y pruebas de rollback.  
- Balanceo de carga y enrutamiento: separación lectura/escritura (read/write splitting), circuit breakers (para aislar servicios fallidos), backpressure (para evitar sobrecarga).  
- Automatización e Infraestructura como Código (IaC): Terraform, Ansible, Helm — reproducibilidad y revisión.  
- Costos operativos: IOPS (medida de rendimiento de disco), almacenamiento, transferencia de datos entre zonas/regiones (generalmente más costosa).  
- Autoescalamiento:  
  - Vertical: Aumentar los recursos (CPU, RAM) de un nodo existente (escalar hacia arriba). Límite por el hardware del nodo, requiere downtime (tiempo de inactividad) para el cambio.  
  - Horizontal: Añadir más nodos al cluster (escalar hacia afuera). Ilimitado, ideal para entornos de alta concurrencia, permite zero-downtime.

[📇](#índice)

---

## **Herramientas y componentes frecuentes (resumen)**

- NGINX: proxy reverso, load balancer y terminador TLS; uso típico para enrutar tráfico hacia aplicaciones y manejar TLS/HTTP.  
- Docker: contenedores para empaquetar aplicaciones y dependencias; facilita reproducibilidad y despliegue.  
- Kubernetes: orquestador de contenedores; despliegue, escalado automático, configuración de servicios, ingress, statefulsets para bases de datos con operadores.  
- WSL (Windows Subsystem for Linux): entorno Linux en Windows para desarrollo local; no para producción.  
- Sistemas de orquestación de DB: operadores (Postgres Operator, MongoDB Operator), gestionan backups, recuperación y reconfiguración.  
- Sistemas de cache / KV: Redis, Memcached — para latencia baja y reducción de carga en la fuente de verdad.  
- **Mensajería/Colas:** Kafka, RabbitMQ, SQS, Pub/Sub — desacoplamiento de servicios y gestión de picos de tráfico.  
- **Almacenamiento de Bloques:** EBS (AWS), Persistent Disk (GCP) — discos virtuales para EC2/VMs, ideal para sistemas operativos y bases de datos.  
- Observabilidad: Prometheus \+ Grafana para métricas; ELK / OpenSearch para logs; Jaeger/Zipkin para trazas.  
- **Gestión de Secretos:** HashiCorp Vault, AWS Secrets Manager — almacenamiento seguro de contraseñas, claves API y certificados.

[📇](#índice)

---

## **Buenas prácticas operativas**

- Documentar topología: replicación, shards, zonas, y políticas de backup.  
- Probar backups/restores y failover en entornos controlados (simulación de desastres o *Chaos Engineering*).  
- Definir SLO (Service Level Objective) / SLA (Service Level Agreement) y medir: RTO/RPO, latencia p95/p99, errores.  
- Diseñar para degradación controlada: circuit breakers, caches, timeouts y retry policies.  
- Automatizar despliegues y configuraciones (IaC \+ pipelines CI/CD).  
- Segregar entornos (dev/staging/prod) y simular cargas antes de cambios en prod.

[📇](#índice)

---

## **Lecturas y referencias rápidas**

- Patrones de replicación y particionado.  
- Documentación oficial de Kubernetes, Docker, NGINX.  
- Guías de RTO/RPO y planes de recuperación ante desastres.

[📇](#índice)

---

## **NAS (Network Attached Storage)**

El NAS es un concepto de almacenamiento de archivos a nivel de red, generalmente a través de protocolos como NFS (Network File System) o SMB (Server Message Block), usado para:

- **Casos de uso:** Almacenar datos compartidos por múltiples servidores, archivos de configuración centralizados, o repositorios de logs.  
- **Diferencia con S3/Bloque:** Es un sistema de archivos tradicional (tiene estructura de carpetas y permisos a nivel de archivo) accesible por red, a diferencia del almacenamiento de objetos (S3) o de bloques (EBS).

[📇](#índice)

---

[⏫ Subir un nivel](./README.md)
