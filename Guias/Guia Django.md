<h1>Guía Django</h1>

<h3>Glosario</h3>

- Preparación
  - [Preparación del Entorno Virtual](#1)
  - [Creación del Entorno Virtual](#2)
  - [Instalando Django](#3)
  - [Creando una Aplicación](#4)
- Configuración
  - [Creando un Template](#5)
  - [Configurando la Aplicación y nuestro Template](#6)

---

<h3>Preparación del Entorno Virtual</h3><a name="1"></a>

Para preparar el Entorno Virtual, primero debemos buscar un lugar donde alojarlo, lo recomendable es que se aloje en `C:/` (Disco Local C). Para comenzar, abriremos una consola de comandos con la siguiente combinación `win + r` y en el buscador, pondremos `cmd`, luego daremos enter.

![image](https://user-images.githubusercontent.com/51482182/169057109-b7417985-7a8b-4cb0-bdea-835b3ee24f69.png)

Una vez en el CMD, ingresaremos el comando `cd ../..` para ir a nuestro disco local C (también, pueden usar `C:`).

![image](https://user-images.githubusercontent.com/51482182/169057219-e1d663f5-56d3-46c5-861f-8809ebab01ce.png)

En el disco local C, nosotros crearemos la carpeta de nuestro entorno virtual, con el comando `mkdir <nombre>`. En mi caso sería: `mkdir "Entorno Virtual"`, cuando se cree la carpeta, debemos entrar en ella, utilizando nuevamente el comando `cd <carpeta>`. En mi caso, sería `cd "Entorno Virtual"`

![image](https://user-images.githubusercontent.com/51482182/169057431-20164b59-190c-4d8b-9383-b7ecd3c376fb.png)

---

<h3>Creando el Entorno Virtual</h3><a name="2"></a>

Cuando estemos en la carpeta de nuestro entorno virtual, debemos crearlo con el comando `python -m venv <nombre entorno>`. En mi caso sería: `python -m venv EntornoAriel`. Obviamente, para esto, se necesita tener [Python](https://www.python.org/downloads/) instalado.

La creación del entorno virtual puede tardar. Una vez listo, debería dejarles escribir en la línea de comandos:

![image](https://user-images.githubusercontent.com/51482182/169057848-0efc08ea-6b36-4151-83d7-741981f9ea30.png)

Tendremos que entrar a la carpeta de nuestro entorno virtual, con el comando que usamos antes. En mi caso sería: `cd EntornoAriel`. Luego, meternos en la carpeta `Scripts`, utilizando el comando anterior usado. En mi caso: `cd scripts`. Una vez en la carpeta scripts, deberemos ejecutar el archivo `activate`, escribiendo su nombre en la línea de comandos. Con todo esto, nuestro entorno virtual estaría andando. Sabrán que todo funcionó correctamente porque, antes del nombre de la carpeta en la que están, saldrá el nombre de su entorno virtual, como se ve en la imagen.

![image](https://user-images.githubusercontent.com/51482182/169057885-3d52d9ca-d0f2-4a94-a608-2cc0f4a5dc7a.png)

Una vez listo, tendremos que volver a la carpeta del entorno virtual, utilizando el comando `cd ..`.

---

<h3>Instalando Django</h3><a name="3"></a>

Para instalar Django, debemos estar la carpeta de nuestro entorno virtual y ejecutar el siguiente comando: `pip install django`. Si todo salió bien, debería de salirles como en la imagen.

![image](https://user-images.githubusercontent.com/51482182/169058058-83c76ec4-1a9d-4597-8d47-0022a65e4cdd.png)

*No se asusten por el Warning, probablemente les saldrá si no tienen el `PIP` actualizado. No es tan necesario actualizarlo, pero en caso de que quieran hacerlo deben usar el comando `pip install --upgrade pip`. Para hacer esto, deberán de haber abierto el CMD como administrador.*

Seguido a la instalación de django, lo que tienen que hacer ahora es crear un proyecto de Django, esto lo harán con el siguiente comando: `django-admin startproject <nombre proyecto>`. En mi caso será: `django-admin startproject proyecto`.

Luego, tendrán que entrar a la carpeta del proyecto que crearon, con el comando `cd`. En mi caso sería: `cd proyecto`.

Una vez dentro de la carpeta del proyecto, tendrán que iniciar el servidor con el siguiente comando: `python manage.py runserver`. Esto les devolverá en la consola la IP de la página del cohetito (`http://127.0.0.1:8000/`, localhost por defecto).

![image](https://user-images.githubusercontent.com/51482182/169058133-8ff9b6fa-3578-4f8c-8460-655f69440521.png)

Cuando ingresen a esa [página](http://127.0.0.1:8000/), les mostrará el cohetito.

![image](https://user-images.githubusercontent.com/51482182/169058223-2263422f-6678-4ef6-a999-46507cf1be23.png)

---

<h3>Creando una Aplicación</h3><a name="4"></a>

Para crear una aplicación, primero debemos apagar el proyecto, lo haremos presionando `CTRL + C`. Seguido a esto, deberemos ejecutar el siguiente comando: `django-admin startapp <nombre aplicación>`. En mi caso sería: `django-admin startapp aplicacion`.

Con esto, tendríamos la instalación de Django y la creación de la Aplicación lista. Teniendo esto, podremos comenzar a configurar nuestro proyecto y aplicación, crear las páginas, configurar la base de datos, etc.

---

<h3>Creando un Template</h3><a name="5"></a>

Para crear un template, primero, tendremos que abrir la carpeta del proyecto (siguiendo el ejemplo anterior, la carpeta `proyecto`) en Visual Studio Code. Una vez abierta, en la carpeta de nuestra aplicación (siguiendo el ejemplo anterior, la carpeta `aplicacion`) tendremos que crear dos carpetas, una llamada `templates` y la otra llamada como nuestra aplicación, en mi caso, `aplicacion`.

![image](https://user-images.githubusercontent.com/51482182/169058348-cbf5645f-f895-48b3-85c8-3992a5ff8f6a.png)

Seguido a eso, tendremos que crear un archivo `.html` para nuestra página inicial, lo ideal es que se llame `home.html`. Todo esto en la carpeta `aplicacion`, dentro de la carpeta `templates`.

![image](https://user-images.githubusercontent.com/51482182/169058401-0eb49e28-8eb3-4ca7-bfd6-7b45e4f5c9de.png)

Una vez creado el archivo, pueden editarlo tanto como quieran.

---

<h3>Configurando la Aplicación y nuestro Template</h3><a name="6"></a>

Después de haber creado nuestra aplicación y nuestro archivo `home.html`, tendremos que ir a la carpeta de nuestro proyecto e ingresar al archivo `settings.py` y buscar la lista llamada `INSTALLED_APPS`. Una vez localizada la lista, debemos agregar al final de esta, nuestra aplicación, tal y como se verá en la imagen.

![image](https://user-images.githubusercontent.com/51482182/169058462-b063d0c0-e311-46bf-9015-7c9bc5d27acb.png)

*También, si es que queremos, podemos colocar el idioma de nuestra aplicación en español y con la zona horaria de Santiago, correspondiente a la de Chile. Para esto, debemos ir casi al final del archivo `settings.py` y cambiar los siguientes valores: `LANGUAGE_CODE` de `en-us` a `es-cl` (`LANGUAGE_CODE = 'es-cl'`). Y `TIME_ZONE` de `UTC` a `America/Santiago` (`TIME_ZONE = 'America/Santiago')`.*

![image](https://user-images.githubusercontent.com/51482182/169058552-ea1baee0-7117-4b33-9291-ff261594c7e3.png)

Para continuar, debemos ir al archivo `urls.py` de la carpeta de nuestro proyecto. Allí, en la Lista llamada `urlpatterns` debemos agregar lo siguiente: `path('', include('tuaplicacion.urls'))`. En mi caso sería: `path('', include('aplicacion.urls'))`. También, tendremos que importar la función `include`, editando la línea `from django.urls import path`, añadiéndole `, include`. Quedaría así: `from django.urls import path, include`

Luego de hacer esto, debemos crear el archivo `urls.py` en la carpeta de nuestra aplicación.

![image](https://user-images.githubusercontent.com/51482182/169058643-5e1dabe6-22ed-4150-8c5b-4bf531aebd12.png)

Dentro de esa carpeta escribiremos lo siguiente:

```python
from proyecto.urls import path
#from aplicacion.views import home

# Patterns
urlpatterns = [
    path('', home, name="home")
]
```

Aquí, estamos diciendo que, la url `''` (es decir, vacía) mandará a nuestra vista llamada Home, que crearemos ahora mismo.
