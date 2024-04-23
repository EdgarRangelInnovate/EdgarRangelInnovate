# Desarrollo seguro

Parte de la expertise que se va adquiriendo durante los años de trabajo, es el desarrollo seguro siempre evitando que las comunicaciones via web no tengan vulnerabilidades.

## BACKEND FOR FRONTEND [BFF](/others/glossary.md#b)

Es una estrategia de seguridad que consiste en tener un backend específicamente diseñado para cada frontend o interfaz de usuario. Esta estrategia se utiliza para optimizar la seguridad de una aplicación al limitar el acceso a datos y funciones específicas de cada frontend y evitar posibles vulnerabilidades o ataques.

Al separar el backend en varios componentes específicos para cada frontend, se limita la superficie de ataque y se facilita la gestión de permisos y autorizaciones. Esto significa que cada frontend solo tiene acceso a las funciones y datos necesarios para su funcionamiento, minimizando el riesgo de exposición de información sensible o la ejecución de acciones no autorizadas.

Además, al utilizar BFF como estrategia de seguridad, se pueden implementar medidas de autenticación y autorización específicas para cada frontend, lo que aumenta la protección de la aplicación y brinda mayor control sobre quién puede acceder a determinados recursos y funciones.

En resumen, la estrategia de seguridad de utilizar [BFF](/others/glossary.md#b) (Backend for Frontend) ayuda a optimizar la seguridad de una aplicación al limitar el acceso a datos y funciones específicas de cada frontend, reduciendo la exposición a posibles ataques y mejorando la gestión de permisos y autorizaciones.

## Tipos de datos

Validar el tipo de dato es un aspecto fundamental en la seguridad de un software por varias razones:

1. Prevención de inyección de código: Si los datos ingresados por los usuarios no se validan correctamente, existe el riesgo de que un atacante pueda introducir código malicioso en la aplicación a través de campos de texto, formularios o cualquier otro tipo de entrada de datos. Al validar el tipo de dato se asegura que solo se permitan datos del tipo esperado y se evitan ataques de inyección de código, como SQL injection o XSS (Cross-Site Scripting).

2. Protección contra vulnerabilidades: Validar el tipo de dato también ayuda a proteger la aplicación contra vulnerabilidades como desbordamiento de búfer (buffer overflow) u otros problemas de seguridad relacionados con el manejo incorrecto de datos. Al asegurarse de que los datos ingresados cumplan con el tipo de dato esperado, se reducen los riesgos de errores de programación que podrían comprometer la seguridad del sistema.

3. Garantizar la integridad de los datos: Validar el tipo de dato también ayuda a garantizar la integridad de los datos almacenados en la aplicación. Si los datos ingresados no cumplen con el tipo de dato esperado, se pueden generar inconsistencias en la información, lo que podría afectar el funcionamiento correcto de la aplicación y la confiabilidad de los datos almacenados.

En resumen, validar el tipo de dato es esencial en la seguridad de un software porque ayuda a prevenir ataques de inyección de código, proteger contra vulnerabilidades y garantizar la integridad de los datos. Al implementar una adecuada validación de tipos de datos, se reduce significativamente la exposición a posibles vulnerabilidades y se mejora la seguridad general del sistema.

## Integridad de datos

La integridad de los datos es un aspecto crítico en la seguridad de un software, ya que garantiza que la información almacenada en la aplicación sea precisa, consistente y confiable. Validar que el usuario sea quien hace las peticiones es una medida importante para asegurar la integridad de los datos, ya que ayuda a prevenir posibles suplantaciones de identidad y accesos no autorizados a la información.

Al validar la identidad del usuario que realiza una petición a la aplicación, se puede asegurar que solo las personas autorizadas pueden acceder a los datos y realizar operaciones en el sistema. Esto ayuda a evitar que un atacante se haga pasar por otro usuario legítimo para acceder a información confidencial, modificar registros o llevar a cabo acciones malintencionadas.

Para validar la identidad del usuario, es importante implementar medidas de autenticación sólidas, como el uso de contraseñas seguras, autenticación de dos factores, certificados digitales, tokens de acceso o biometría, entre otras técnicas. Además, es importante establecer políticas de gestión de sesiones y control de accesos para garantizar que solo los usuarios autorizados puedan acceder a las funcionalidades y datos específicos de la aplicación.

En resumen, validar que el usuario sea quien hace las peticiones es fundamental para garantizar la integridad de los datos en un software, ya que ayuda a prevenir suplantaciones de identidad y accesos no autorizados a la información. Al implementar medidas sólidas de autenticación y control de accesos, se fortalece la seguridad de la aplicación y se protege la integridad de los datos almacenados en el sistema.
