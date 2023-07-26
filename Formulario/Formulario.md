## Validar Formulario

Partiendo de un documento HTML básico con su estructura correspondiente. Se pide:
1. Crear un formulario de “Datos de Usuario”.
2. El formulario debe de contar con cuatro campos: Usuario, Correo Electrónico, Contraseña y Repita Contraseña. Y un botón 
para enviar los datos.
3. Crear un archivo CSS para darle estilo al formulario.
4. Crear un script para validar el formulario:
• El script deberá comprobar que el nombre de usuario tiene al menos 4 caracteres.
• El script deberá comprobar que el correo electrónico introducido es válido. Para ello haremos uso de una expresión 
regular que se os facilita a continuación: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
5. El script deberá comprobar que la contraseña introducida tiene entre 6 y 12 caracteres.
6. Y finalmente se deberá comprobar que ambas contraseñas coinciden.
7. El programa deberá lanzar un mensaje de alerta para cada campo en el caso de que no se cumplan los requisitos.
