# Control 2 TEL-335

## Instalación

Ejecute los siguientes comandos:

```
npm install
npm start
```

Debería ver el siguiente mensaje:

```
> control_2@1.0.0 start /Users/franciscocabezas/Documents/TEL-335/2022_1/controles/control_2_version_2
> babel src --out-dir dist  --copy-files && node dist/index.js

Successfully compiled 6 files with Babel (529ms).
Server is running on port 3000
```

En caso de que vea un mensaje similar sin errores, es posible partir con el control.

## Enunciado

Para este desarrollo en particular, asuma que existe una base de datos de usuarios (básicamente es un arreglo de usuarios en memoria). Este tiene información del usuario: Nombre, email y bitcoinAddress, y además, el id de usuario.

Deberemos implementar un servicio que nos provea la información del usuario, dado un id como input, de forma `segura`.
Para hacerlo, emularemos un proceso de obtención de token para luego consultar la información del usuario.

Para realizar el flujo completo deberemos implementar 2 endpoints:

### get-token

El primer endpoint nos permitirá obtener el token. Debe recibir 3 parámetros:

- El `id` del usuario a consultar. Para efectos de prueba, el `id` puede ser cualquier número entre 1 y 10000.
- Un `secret` que corresponde en este caso a una llave privada entre el cliente y servidor. Para efectos de esta prueba, busque el valor asociado en el archivo `.env`. En un servidor productivo real, las variables de entorno se cargan a través de un servidor de configuraciones (Como [Vault](https://www.vaultproject.io/)).
- Un `key` que sería la llave pública. Para efectos de esta prueba, busque el valor asociado en el archivo `.env`.

La respuesta exitosa recibida debería ser algo como sigue:

```
{
    "token": "88d65a2a-dc96-4f52-a153-045a660abf3f"
}
```

Para generar el token, implementaremos un generador de llaves UUID version 4. La función ya se encuentra definida en `utils/uuid.js`.

Si alguno de los parámetros, `key` o `secret`, son incorrectos, debe enviar un mensaje alusivo con el código de error respectivo (Ver [códigos de error](https://kb.iu.edu/d/bfrc)).
En caso de error, debería retornar un mensaje alusivo, también con un código de error que entregue información de que es un error.

### get-user

Una vez obtenido el token, genere un endpoint para obtener la información del usuario. Para este efecto, el token que generó en el paso previo debería estar asociado al usuario, puesto que este endpoint **solo debe recibir el token como input**.
Devuelva el objeto de usuario tal cual como está en el código.

---

Piense en las siguientes preguntas:

- ¿Qué códigos de respuesta usaría en ambos casos, para cada caso de uso?
Para el primer utilice un codigo 200 para decir que se recibio el requerimiento y que se encontro lo que se estaba buscando, un 404 al tener uno de los datos incorrectos, ya sea el id, secret o el key, dado que uno de esos esta incorrecto y no se encontro lo que se buscaba y para el get-users seria aparentemente lo mismo, dado que se busca un usuario a traves de un token utilice el 204 para simbolizar que el requerimiento llego pero no se encontro lo que se buscaba y simplemente un 200 cuando se encontro al usuario.
- ¿Cómo asociaría un token que generó a un usuario?
Como es un objeto simplemente al buscar el usuario se le incluiria el token generado
- ¿Qué verbos http usaría para cada caso?
Para el primer caso (get-token) usaria un POST dado que hay mucha informacion importante que no puede ser vista por otros y dado que post ofrece una cobertura seria lo apropiado y para el segundo caso (get-user) utilizaria simplemente un get
- ¿Qué formato de inputs/outputs usaría?


**Happy coding!**
