# Entrega Módulo 00

A continuación voy a ir describiendo los pasos a seguir para esta entrega.

1. **Creamos un repositorio en local**

    > Abrimos la terminal y navegamos hasta el directorio donde deseamos crear el repositorio.

    ````
    cd Desktop/Entregas
    ````

    > Creamos una carpeta con el nombre del repositorio.

    ````
    mkdir Modulo00
    ````

    > Ingresamos a la carpeta que acabamos de crear.

    ````
    cd Modulo00
    ````

    > Abrimos Visual Studio Code

    ````
    code .
    ````

    > Inicializamos el repositorio de Git.

    ````
    git init
    ````

    > Creamos el archivo readme.md y lo guardamos en nuestra BBDD de git local

    ````
    git add .
    git commit -m "commit inicial"
    ````

2. **Subir el repositorio a GitHub**

    > Creamos un nuevo repositorio en GitHub, copiamos la URL del repositorio que acabamos de crear en GitHub y conectamos el repositorio local con el repositorio en GitHub.

    ````
    git remote add origin git@github.com:LuciCarrillo/Entregas.git
    
    git push -u origin main
    ````

3. **Hacer un commit y un push**

    > Creamos un archivo en la carpeta del repositorio, añadimos el archivo al staging y creamos un commit con un mensaje descriptivo.

    ````
    git add .

    git commit -m "Añado al staging el archivo fichero1"
    ````

    > Subimos los cambios al repositorio en GitHub.

    ````
    git push
    ````

4. **Crear una rama**

    > Creamos una rama nueva llamada "development".

    ````
    git branch development
    ````

    > Cambiamos a la nueva rama.

    ````
    git checkout development
    ````

    > Realizamos algunos cambios en el archivo que creamos, añadimos y hacemos un commit con los cambios en la rama "development".

    ````
    git add.

    git commit -m "Añadida rama development con cambios en el fichero 1"
    ````

    > Subimos los cambios a Github.

    ````
    git push -u origin development
    ````

5. **Hacer un merge**

    > Volvemos a la rama "main".

     ````
    git checkout main
    ````

    > Hacemos un merge de la rama "development" a la rama "main"
        
    ````
    git merge development
    ````

    > Como nos da conflictos, tenemos que resolver los conflictos y ya luego hacer el merge.

    ````
    git add .

    git commit -m "Merge con conflicto resuelto"
    ````

    > Hacemos un push de los cambios al repositorio en GitHub.

    ````
    git push
    ````