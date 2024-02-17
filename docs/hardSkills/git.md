# GIT

Git es un sistema de control de versiones distribuido, creado por Linus Torvalds. Su objetivo es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos.

## INSTALACIÓN

Para instalar Git en un sistema operativo Linux, se puede usar el gestor de paquetes del sistema operativo. En el caso de Ubuntu, se puede usar el siguiente comando:

```bash
sudo apt install git
```

## CONFIGURACIÓN

Para configurar Git, se debe usar el comando `git config`.

```bash
git config --global user.name "John Doe"
git config --global user.email
```

## COMANDOS

Para ver la lista de comandos disponibles, se puede usar el comando `git help`.

```bash
git help
```

Para clonar un repositorio, se puede usar el comando `git clone`.

```bash
git clone <url>
```

Para hacer checkout de un archivo en particular de un commit, se puede usar el comando `git checkout`.

```bash
git checkout <commit> <archivo>
```

Para hacer commit de un archivo en particular, se puede usar el comando `git add`.

```bash
git add <archivo>
```

Para hacer commit de un archivo en particular, se puede usar el comando `git commit`.

```bash
git commit -m "<mensaje>"
```

Para hacer push de un archivo en particular, se puede usar el comando `git push`.

```bash
git push
```

Para hacer pull de un archivo en particular, se puede usar el comando `git pull`.

```bash
git pull
```
