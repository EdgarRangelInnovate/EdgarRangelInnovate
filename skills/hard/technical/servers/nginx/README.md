# NGINX

NGINX es un servidor web y proxy inverso de alto rendimiento y un proxy de correo electrónico. Fue creado por Igor Sysoev en lenguaje C y se lanzó por primera vez en 2004. Es software libre y de código abierto, licenciado bajo la Licencia BSD simplificada. NGINX se usa ampliamente para servir contenido estático, así como para funcionar como un proxy inverso para servidores de aplicaciones HTTP. También se usa como un balanceador de carga y un proxy de correo electrónico (IMAP/POP3).

Allí se puede encontrar la documentación oficial de [NGINX](https://nginx.org/en/docs/) o en la [wiki](https://es.wikipedia.org/wiki/Nginx)

## INSTALACIÓN

Para instalar NGINX en un sistema operativo Linux, se puede usar el gestor de paquetes del sistema operativo. En el caso de Ubuntu, se puede usar el siguiente comando:

```bash
sudo apt install nginx
```

## CONFIGURACIÓN

La configuración de NGINX se realiza mediante el archivo de configuración `/etc/nginx/nginx.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX. Para realizar cambios en la configuración, se debe crear un archivo de configuración en el directorio `/etc/nginx/conf.d/` con la extensión `.conf`. Allí se puede encontrar la configuración por defecto de NGINX.

Formato para crear un archivo de configuración:

```bash
sudo nano /etc/nginx/conf.d/<nombre_archivo>.conf
```

Sintaxis para crear un archivo de configuración:

```bash
server {
    listen 80;
    server_name <nombre_servidor>;
    location / {
        root <ruta_archivos>;
        index index.html index.htm;
    }
}
```

### Carácteres especiales

En un archivo de configuración de nginx, la virgulilla (~) y el acento circunflejo (^) se utilizan para diferentes propósitos:

Virgulilla (~):

Coincidencia de expresiones regulares: Se utiliza para comparar una cadena con una expresión regular. Por ejemplo, la siguiente regla coincide con todas las solicitudes que comienzan con "/api/":
location ~ ^/api/ {
...
}
Negación de una condición: Se puede utilizar delante de una condición para negarla. Por ejemplo, la siguiente regla coincide con todas las solicitudes que no son imágenes:
location ~ ^/(?!image/) {
...
}
Acento circunflejo (^):

Inicio de una cadena: Se utiliza para indicar que la expresión regular debe coincidir al principio de la cadena. Por ejemplo, la siguiente regla coincide con todas las solicitudes que comienzan con "www.":
location ^~ www\. {
...
}
Agrupación de expresiones regulares: Se puede utilizar para agrupar sub-expresiones dentro de una expresión regular compleja. Por ejemplo, la siguiente regla coincide con todas las solicitudes que tienen un nombre de archivo y una extensión:
location ~ ^/([^/]+)\.(.+)$ {
...
}
Ejemplos adicionales:

Redireccionamiento: Se puede utilizar la virgulilla para redireccionar una solicitud a otra ubicación. Por ejemplo, la siguiente regla redirecciona todas las solicitudes a "/index.html":
rewrite ^/(.\*)$ /index.html;
Proxy inverso: Se puede utilizar el acento circunflejo para configurar un proxy inverso a un servidor backend. Por ejemplo, la siguiente regla envía todas las solicitudes a "/api/" a un servidor que se ejecuta en el puerto 8080:

```bash
location ^/api/ {
  proxy_pass http://localhost:8080/;
}
```

### Notas sobre la sintaxis

```bash
  # Descripción del dominio
  server {
    listen 8080;
    listen 8443 ssl;
    server_name <dominio expuesto a internet>;
    recursive_error_pages on;

    # Descripción de la ruta
    location ~ ^/<sub-folder> {
        client_max_body_size 50m;
        more_set_headers "Access-Control-Allow-Origin: *";
        if ($cookie_scope ~ ^[a-z0-9]([a-z0-9\-]+)?$) {
            set $scope "${cookie_scope}";
            proxy_pass http://$scope.domain.internal.com; break;
        }
  }
```

Si se desea forzar el recurso https, puede agregar:

```bash
if ($is_ssl != "1") {
    rewrite ^ https://$host$request_uri? permanent;
    break;
}
```

Un ejemplo completo sería:

<!-- server_name ~^www\.global-selling\.mercadoli(bre|vre)\.com$ ~^global-selling\.mercadoli(bre|vre)\.com$; -->
<!-- location ~ ^/help/api/content {
    if ($cookie_meliLab ~ ^(stage|alpha)$) {
        proxy_pass http://stage.cx-support-peach-frontend.melifrontends.com;
        break;
    }
    if ($cookie_meliLab ~ ^(dev)$) {
        proxy_pass http://dev.cx-support-peach-frontend.melifrontends.com;
        break;
    }
    proxy_pass http://prod.cx-support-peach-frontend.melifrontends.com;
    break;
} -->

```bash
include nginx.conf;

server {
  listen 8080;
  listen 8443 ssl;
  server_name ejemplo.com;
  recursive_error_pages on;

  # Microfrontend 1
  location ~ ^/microfrontend1 {
      client_max_body_size 50m;
      more_set_headers "Access-Control-Allow-Origin: *";
      if ($cookie_scope ~ ^[a-z0-9]([a-z0-9\-]+)?$) {
          set $scope "${cookie_scope}";
          proxy_pass http://$scope.domain.internal.com/microfrontend1; break;
      }
  }

  # Microfrontend 2
  location ~ ^/microfrontend2 {
      client_max_body_size 50m;
      more_set_headers "Access-Control-Allow-Origin: *";
      if ($cookie_scope ~ ^[a-z0-9]([a-z0-9\-]+)?$) {
          set $scope "${cookie_scope}";
          proxy_pass http://$scope.domain.internal.com/microfrontend2; break;
      }
  }
}
```

Para realizar pruebas de unidad, se puede usar el siguiente comando:

```bash
curl -k https://<dominio expuesto a internet>/<sub-folder>
```

o

```bash
test_rule all_fe <dominio expuesto> /<path a probar> <url interna> -H "<pseudónimo>-ssl:1"

test_status_with_redirect <Dominio expuesto> /<path a probar> <301 código esperado> '<path completo>'
```

Para probar junto con la variable de la cookie, se puede hacer lo siguiente agregándola al final.

```bash
test_rule GET <dominio expuesto> "/<Path a probar>" <url interna> -H "<pseudónimo>-ssl:1" -H "cookie-scope:dev"
```

## COMANDOS

Para iniciar el servicio de NGINX se puede usar el siguiente comando:

```bash
sudo systemctl start nginx
```

Para detener el servicio de NGINX se puede usar el siguiente comando:

```bash
sudo systemctl stop nginx
```

Para reiniciar el servicio de NGINX se puede usar el siguiente comando:

```bash
sudo systemctl restart nginx
```

Para verificar el estado del servicio de NGINX se puede usar el siguiente comando:

```bash
sudo systemctl status nginx
```
