# ClientesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



-------------------------------------------------------------


CLASE 4

INSTALACIÓN DE HERRAMIENTAS PARA EL FRONT:

NODE.JS  :  
	
	USA LA ULTIMA VERSION ESTABLE (LTS).
	https://nodejs.org/en/
	
		LUEGO EN EL LA TERMINAL POWERSHELL  VERIFICA LA VERSION:  
			node -v
			npm -v
			
	
TYPESCRIPT :
           SE INSTALA DE FORMA GLOBAL. SE USA PARA OBTENER LOS ERRORES DE ESCRITURA EN EL CODIGO DE ANGULAR.
	
	EN EL POWERSHELL COMO ADMINISTRADOR:
		npm install -g typescript
		
		tsc -v
	
		Ya lo solucione, debes ejecutar el powershell como administrador y ejecutar el comando Set-ExecutionPolicy Unrestricted

ANGULAR CLI :

	https://angular.io/start
	https://angular.io/guide/setup-local
	
	npm install -g @angular/cli



CHROME

ATOM 

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 5

	ATOM 
		PLUGINS:
			
			ANGULAR-2-TYPESCRIPT-SNIPPETS
				SI DA ERROR INSTALARLO POR EL ATOM, INTALALO POR LA POWER SHELL COMO ADM: 
				apm install angular-2-typescript-snippets
				
			ATOM-TYPESCRIPT
			
			ATOM BOOTSTRAP 3
			
			ATOM BOOTSTRAP 4
			
			V-BOOTSTRAP4
			
			PLATFORMIO-IDE-TERMINAL
			
			FILE-ICONS
			
			EMMET : AUTOCOMPLETA EL HTML. opcional.
			

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 6

	CREA CARPETA PARA EL CURSO
	CREA CARPETA PARA ANGULAR
	CREA PROYECTO DE ANGULAR
	
		ng new clientes-app
		
		ELIGE ROUTING … NO
		
		STYLE … CSS ….SOLO DALE ENTER.
		
		
			
	ABRE PROYECTO EN ATOM …CARPETA clientes-app
	
	ARRANCA EL PROYECTO
		PS C:\users\fanta\documents\11.-spring_con_angular\angular\clientes-app> ng serve -o
		
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 10

	EN tsconfig.json … TODAS LAS CONFIGURACIONES QUE CONTENGAN LA PALABRA STRICT DEBEN ESTAR EN FALSE.
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 11

INTEGRA BOOTSTRAP CON ANGULAR

https://getbootstrap.com/docs/5.2/getting-started/download/

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ClientesApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
  <app-root></app-root>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>

				
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

			
CLASE 12

SE CREA MANUALMENTE EL HEADER.COMPONENT.TS

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 14
	
	CREA FOOTER CON CMD
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>cd src
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src>cd app
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app>mkdir footer
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app>cd footer
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app\footer>ng generate class footer.component

	QUITALE EL PUNTO DESPUÉS:
	
		export class Footer.Component {
		}

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 15

	CREAR COMPONENTE DESDE LA CONSOLA:
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>ng generate component directiva
	CREATE src/app/directiva/directiva.component.html (24 bytes)
	CREATE src/app/directiva/directiva.component.spec.ts (647 bytes)
	CREATE src/app/directiva/directiva.component.ts (287 bytes)
	CREATE src/app/directiva/directiva.component.css (0 bytes)
	UPDATE src/app/app.module.ts (572 bytes)
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 17

	CREA UN COMPONENTE CLIENTE Y UNA CLASE CLIENTE:
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>ng generate component clientes
	CREATE src/app/clientes/clientes.component.html (23 bytes)
	CREATE src/app/clientes/clientes.component.spec.ts (640 bytes)
	CREATE src/app/clientes/clientes.component.ts (283 bytes)
	CREATE src/app/clientes/clientes.component.css (0 bytes)
	UPDATE src/app/app.module.ts (662 bytes)
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>cd src
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src>cd app
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app>cd .\clientes\
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app\clientes>ng g class cliente
	CREATE src/app/clientes/cliente.spec.ts (158 bytes)
	CREATE src/app/clientes/cliente.ts (25 bytes)
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 20

	CREA UNA CLASE DE SERVICIO CON LA CONSOLA:
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>cd src
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src>cd app
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app>cd clientes
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app\src\app\clientes>ng g service cliente
	CREATE src/app/clientes/cliente.service.spec.ts (362 bytes)
	CREATE src/app/clientes/cliente.service.ts (136 bytes)
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 23

	IMPLEMENTANDO RUTAS
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 35

	CREA UNA BASE DE DATOS DESDE LA CMD :

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 49

	CREA EL COMPONENTE FORM DENTRO DE LA CARPETA "CLIENTES". CON FLAT SE LE DICE Q NO CREE LA CARPETA "FORM", PARA Q DEJE TODO EN LA CARPETA "CLIENTES"
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>ng g c clientes/form --flat
	CREATE src/app/clientes/form.component.html (19 bytes)
	CREATE src/app/clientes/form.component.spec.ts (612 bytes)
	CREATE src/app/clientes/form.component.ts (267 bytes)
	CREATE src/app/clientes/form.component.css (0 bytes)
	UPDATE src/app/app.module.ts (1297 bytes)
	 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 53

	https://sweetalert2.github.io/#download

	INSTALA SWEET ALERT 2
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>npm install sweetalert2 --save
	
	CON --SAVE … CREA LA ENTRADA A LA DEPENDENCIA EN EL PACKAGE.JSON
	
	Con la nueva versión, solo hay que llamar al método fire, según la documentación sería:
				
				1)         // ES6 Modules or TypeScript
				2)         import swal from 'sweetalert2';
				3)         .... 
				4)         swal.fire(  'The Internet?',  'That thing is still around?',  'success');
				5)         ...
				Links:  https://sweetalert2.github.io/#examples
				
				Además, en la nueva versión NO agrega automáticamente los estilos CSS, hay que hacerlo a mano en el archivo angular.json, por ejemplo agregando los estilos en la propiedad "styles":
				
				6)                 "styles": [
				7)                   "src/styles.css",
				8)                   ...
				9)                   "node_modules/sweetalert2/dist/sweetalert2.min.css",
				10)                 ],
				
				
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 58
	
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('ASJHAS','AKSJHD','HasASG@KDJFH.COM','2018-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('ZIZU','SDS','A@KDJFH.COM','2019-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('OWR','ZXC','ADS@KDJFH.COM','2015-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('ZXCX','WQE','DF@KDJFH.COM','2016-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('MKO','RTY','XC@KDJFH.COM','2012-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('NMBFFS','QQW','WER@KDJFH.COM','2018-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('QUTW','ZXC','XCV@KDJFH.COM','2018-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('WMNWM','ERT','XCVj@KDJFH.COM','2021-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('ZOCXIU','ZXC','XCAV@KDJFH.COM','2022-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('AHSKJ','TYU','HASDASG@KDJFH.COM','2010-01-01');
	INSERT INTO clientes (nombre, apellido, email, create_at) VALUES ('MAASD','QW','QEEEW@KDJFH.COM','2011-01-01');

	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 68

	AGREGA ESTA DEPENDENCIA PARA LAS VALIDACIONES: 


	1. 	<dependency>
	2. 			<groupId>org.springframework.boot</groupId>
	3. 			<artifactId>spring-boot-starter-validation</artifactId>
	4. 		</dependency>
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE  85

SE CREA EL COMPONENTE DE PAGINATOR

C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app>ng g c paginator
CREATE src/app/paginator/paginator.component.html (24 bytes)
CREATE src/app/paginator/paginator.component.spec.ts (647 bytes)
CREATE src/app/paginator/paginator.component.ts (287 bytes)
CREATE src/app/paginator/paginator.component.css (0 bytes)
UPDATE src/app/app.module.ts (1689 bytes)


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE  95

INSTALLACION DE ANGULAR MATERIAL

PARA EL DATe PICKER … LA WEA DE LA FECHA.
https://material.angular.io/guide/getting-started
https://material.angular.io/components/datepicker/overview

PARA Q FUNCIONE SE IMPORTA EN EL APP MODULE.

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE  …

	DEL APPLICATION PROPERTIES, ESTAS LINEAS SON PARA  QUE NO SE RESTE UN DÍA AL SELECCIONAR LA FECHA EN EL DATEPICKER DE ANGULAR
	
	spring.jackson.time-zone = America/Santiago
	spring.jackson.locale=CL
	



CLASE 97 


	DEL APPLICATION PROPERTIES, PARA CONFIGURAR EL TAMAÑO MAXIMO PERMITIDO DE LAS IMÁGENES QUE SE VAN A SUBIR.
	
	spring.servlet.multipart.max-file-size = 10MB
	spring.servlet.multipart.max-request-size = 10MB
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


CLASE  101

	 Añadiendo componente detalle para el upload en el front-end
	
	Desde <https://www.udemy.com/course/angular-spring/learn/lecture/11730316#overview> 
	

	https://getbootstrap.com/docs/5.2/forms/input-group/#custom-file-input
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 105

	BARRA DE PROGRESO AL SUBIR ARCHIVO
	
	https://angular.io/guide/http#tracking-and-showing-request-progress
	
	https://getbootstrap.com/docs/5.2/components/progress/#how-it-works


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 106

AGREGANDO MODAL


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 107

SE CREA UNA CLASE SERVICE LLAMADA MODAL, EN CLIENTES ---> DETALLE 


C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng generate service clientes/detalle/modal
CREATE src/app/clientes/detalle/modal.service.spec.ts (352 bytes)
CREATE src/app/clientes/detalle/modal.service.ts (134 bytes)



SE TOMA UN MODAL DE BOOTSTRAP

https://getbootstrap.com/docs/5.2/components/modal/

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 109

ICONOS 

	https://www.iconfinder.com
	
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 123

	OAUTH 2    JWT
	
	<!-- https://mvnrepository.com/artifact/org.springframework.security.oauth/spring-security-oauth2 -->
	<dependency>
	    <groupId>org.springframework.security.oauth</groupId>
	    <artifactId>spring-security-oauth2</artifactId>
	    <version>2.5.2.RELEASE</version>
	</dependency>
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 135

	CERTIFICADO RSA PARA MAYOR SEGURIDAD
	OPEN SSL
	
	https://www.openssl.org/community/
	https://wiki.openssl.org/index.php/Binaries
	https://slproweb.com/products/Win32OpenSSL.html
	
	configura variable de entorno en el path con la carpeta bin.

	-------------
		CMD
	-------------
	Microsoft Windows [Versión 10.0.19044.2364]
	(c) Microsoft Corporation. Todos los derechos reservados.
	
	C:\Users\Fanta>openssl genrsa -out jwt.pem
	Generating RSA private key, 2048 bit long modulus (2 primes)
	...........+++++
	............+++++
	e is 65537 (0x010001)
	
	C:\Users\Fanta>openssl rsa -in jwt.pem
	writing RSA key
	-----BEGIN RSA PRIVATE KEY-----
	MIIEogIBAAKCAQEArjLvRdOaJTKm8vXdSW726jZho75rulArhWOf/3IKnRWb7CUN
	2CDhJmsC43ZFINcsn24yZ58lGzL55f40p7+J/CO/OJVYLByLz89TfTQ1JCZa9q3w
	bDenZ7lYtGH0m5YTdh0pKFvIeAUSKwWRB75tzaUK9OmwwKB96akaPBr7ln13/cNr
	9+qhhXyk19AKDEXIL8bKnZavaBu4010b4M4O5PXt9MjGaRmyiQZFSxNyUSVggkeJ
	DiDPZCVl+dH9Xf4tPsJmHsLbraBhgsp4vRib5YXBsweSNoJXDPUYx3Q/ZphGNxHt
	UpmwlBVX/b5pAvDxDLNM716r8S8CWXfQHsJT7QIDAQABAoIBADYliPBodKqJUxGE
	UPNpdYCZxMHUB8JS9yQwMmSBe0EWnW/KmMIMfk+lxbEUayppF+q6oxpIgo0wzDKs
	UIuv4uEn72FUMqMLgH3o0OfDGZ2R+oZgzLGmnveDyknPhOvzuzrkl41+8hI0aVBM
	G6ePjqv0WDKGjTVi7aB6urfiHz/IXwJs70DKvGSA0XlP98SMQSpYEa+djEJZerVm
	n/OtrNoOT/J8WQFQBTJ4Jdagl3T+POLEpGN35LBaSBUfv+rBoXfhBwgiVtRPyeL8
	ZqDlSEU3L2UfZy9Yh2IM5rYb/bsp1oPiR1fW5/x7pXtjWFFqfairuk3McQjg8ShK
	7LoKc/UCgYEA0/IAtD9JAfu2ErkqQTxy0iZg1ra/VpsrBoVuVfr4841olaLudSwK
	Khf0Z4TERWlhUKMv3Rkuk9a6FwDAPFtrrVTMQ8bi2LRk01wFt1PDwlf36szJSb7W
	Uwnsj8bvUP4z5bLPutKpFGjvpHUlQFGpcZ9Cxh2RoaYqwKaVAbp9afsCgYEA0mhh
	Fu5uKNQRhRyBc9pq7GcoJf9OVOst7yef6VHsxrHhfilCEDjDMgAgekxKwDT+QsEz
	p/v66hQGAFlyZ8QogfslkAzVYWfQPoFfSGN9LMO8mxCIjKvNj2JGMPiLBAIg0kz6
	vTYoFRt7IaTp5G6jtm5DnOfPCloScbbBam9jfTcCgYA2F29ikTw6y1j+kk9ccucD
	B1RzuBRBMDzc3zT3sKPU1OQ6PGkLcn/tmkuAF/xXkruJbvyKOyEODiFUOZbWUKa8
	iAXRznKax/9rifLThQdTFExrmnRM4+2jJ8c+MpFlZFsuZmJp1dXdJaLzoAovziem
	nfTWxzkhvlzu6hThag0T/QKBgAuBqc2XPG7/KfYdmPa8+xvyiD+LtrzuH5T0lcos
	sMYs9CfyGarJb+NMHnqRsYTRYRZFeo21OgOTFMDwI1GJaK2zDlrSWNj61GiWqp9K
	0Y2hJq9UOCN5QcSVm0ESVofhlenqS8wNKiP9XL56RlA3vLw9S3VJOAlY46lUVT98
	1/QBAoGAFFzVTmBfIO7BlJVLLh3iTSJkJPDTYEUFo1hwjN250oUAo9JcY87z7PwZ
	kBV9kZIYqnmQZhe/OvEQm4oJLczX6qmBVdJCy9sNWDN6tVTB8Wp1zSTuH0Ucw5O3
	kNJgZ8gnaCa0wDcEgsYGAKwW5+g7Q3scr1zyXokIE/cToK1d4E8=
	-----END RSA PRIVATE KEY-----
	
	C:\Users\Fanta>openssl rsa -in jwt.pem -pubout
	writing RSA key
	-----BEGIN PUBLIC KEY-----
	MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArjLvRdOaJTKm8vXdSW72
	6jZho75rulArhWOf/3IKnRWb7CUN2CDhJmsC43ZFINcsn24yZ58lGzL55f40p7+J
	/CO/OJVYLByLz89TfTQ1JCZa9q3wbDenZ7lYtGH0m5YTdh0pKFvIeAUSKwWRB75t
	zaUK9OmwwKB96akaPBr7ln13/cNr9+qhhXyk19AKDEXIL8bKnZavaBu4010b4M4O
	5PXt9MjGaRmyiQZFSxNyUSVggkeJDiDPZCVl+dH9Xf4tPsJmHsLbraBhgsp4vRib
	5YXBsweSNoJXDPUYx3Q/ZphGNxHtUpmwlBVX/b5pAvDxDLNM716r8S8CWXfQHsJT
	7QIDAQAB
	-----END PUBLIC KEY-----
	
	C:\Users\Fanta>
	
	
	-----------------------
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 143
	
	SE CREA COMPONENTE PARA LOGIN. CREA UNA CARPETA USUARIOS Y DENTRO DE ESTA EL COMPONENTE LOGIN. EL --flat=true ES PARA Q NO CREE OTRA CARPETA LOGIN DENTRO DE USUARIOS.
	
		C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng g c usuarios/login --flat=true
		CREATE src/app/usuarios/login.component.html (20 bytes)
		CREATE src/app/usuarios/login.component.spec.ts (619 bytes)
		CREATE src/app/usuarios/login.component.ts (271 bytes)
		CREATE src/app/usuarios/login.component.css (0 bytes)
		UPDATE src/app/app.module.ts (2279 bytes)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 145

	SE CREA LA CLASE USUARIO
	
		C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng g class usuarios/usuario
		CREATE src/app/usuarios/usuario.spec.ts (158 bytes)
		CREATE src/app/usuarios/usuario.ts (25 bytes)
		
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 146

	SE CREA CLASE SERVICE LLAMADA AUTH, DENTRO DE DIRECTORIO usuarios.
	
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng g s usuarios/auth
	CREATE src/app/usuarios/auth.service.spec.ts (347 bytes)
	CREATE src/app/usuarios/auth.service.ts (133 bytes)
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 156


	GUARD ……….AÑADIENDO GUARD AL PROYECTO:   EN USUARIOS CREA ÑA CARPETA GUARDS Y EL ARCHIVO SE LLLAMARÁ AUTH.
	
	//CLASE 156 ..... DESPUÉS ESTO SE APLICA EN LAS RUTAS DEL APP MODULE.
	//ESTE GUARD ES PARA VALIDAR LA AUTHENTICACION.
	
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng g g usuarios/guards/auth
	? Which interfaces would you like to implement? CanActivate
	CREATE src/app/usuarios/guards/auth.guard.spec.ts (331 bytes)
	CREATE src/app/usuarios/guards/auth.guard.ts (457 bytes)
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 157

						SE CREA UN GUARD PARA VALIDAR LOS ROLES DEL USUARIO
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng g g usuarios/guards/role
	? Which interfaces would you like to implement? CanActivate
	CREATE src/app/usuarios/guards/role.guard.spec.ts (331 bytes)
	CREATE src/app/usuarios/guards/role.guard.ts (457 bytes)
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 159

	HTTP INTERCEPTORS 

	SE CREA CLASE INTERCEPTOR, PARA PERFECCIONAR EL CÓDIGO QUE YA SE TIENE. ES PARA AÑADIR EL TOKEN A LAS CABECERAS Y AHORRAR COGIGO.


	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-2>ng g class usuarios/interceptors/token
	CREATE src/app/usuarios/interceptors/token.spec.ts (150 bytes)
	CREATE src/app/usuarios/interceptors/token.ts (23 bytes)
		
	https://angular.io/guide/http#intercepting-requests-and-responses
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
CLASE 170

	SE CREAN LAS CLASES factura .. itemFactura .. producto

	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular>cd clientes-app-3
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng g class facturas/models/factura
	CREATE src/app/facturas/models/factura.spec.ts (158 bytes)
	CREATE src/app/facturas/models/factura.ts (25 bytes)
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng g class facturas/models/itemFactura
	CREATE src/app/facturas/models/item-factura.spec.ts (175 bytes)
	CREATE src/app/facturas/models/item-factura.ts (29 bytes)
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng g class facturas/models/producto
	CREATE src/app/facturas/models/producto.spec.ts (162 bytes)
	CREATE src/app/facturas/models/producto.ts (26 bytes)


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 173

	SE CREA COMPONENTE DE DETALLE DE FACTURA Y SU CLASE SERVICE. SE CREA DIRECTAMENTE EN FACTURAS CON EL --FLAT
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng g c facturas/detalleFactura --flat
	CREATE src/app/facturas/detalle-factura.component.html (30 bytes)
	CREATE src/app/facturas/detalle-factura.component.spec.ts (683 bytes)
	CREATE src/app/facturas/detalle-factura.component.ts (310 bytes)
	CREATE src/app/facturas/detalle-factura.component.css (0 bytes)
	UPDATE src/app/app.module.ts (3311 bytes)
	
	
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng g s facturas/services/facturas
	CREATE src/app/facturas/services/facturas.service.spec.ts (367 bytes)
	CREATE src/app/facturas/services/facturas.service.ts (137 bytes)
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 178

	SE CREA EL COMPONENTE FORMULARIO DE LA FACTURA
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng g c facturas
	CREATE src/app/facturas/facturas.component.html (23 bytes)
	CREATE src/app/facturas/facturas.component.spec.ts (640 bytes)
	CREATE src/app/facturas/facturas.component.ts (283 bytes)
	CREATE src/app/facturas/facturas.component.css (0 bytes)
	UPDATE src/app/app.module.ts (3461 bytes)
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 180

	AUTO COMPLETE DE ANGULAR MATERIAL:
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 194

	
	DEPLOY               (VE LOS VIDEOS DE ESTA WEA PA DESPLEGAR ALGUNA WEA TUYA PQ HAY Q CAMBIAR ALGUNAS WEAS EN LOS ARCHIVOS DE CONFIG DEL APACHE Y WEAS.)
	
	se cambia a esto en con controllers: 
	
	//@CrossOrigin(origins={"http://localhost:4200"})				//PARA USO LOCAL.
	@CrossOrigin(origins={"http://localhost:4200", "*"})			//PARA USO CON DEPLOY EN SERVIDOR EXTERNO. EL "*" ES EL NOMBRE DEL SERVIDOR. CON * ACEPTA CUALQUIER NOMBRE.
	
	
	en ResourceServerConfig se cambia esto: 
	
	//config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));				//ESTE LO USO EN LOCAL.
	config.setAllowedOrigins(Arrays.asList("http://localhost:4200","*"));				//ESTE LO USO EN EL DEPLOY. EL "*" ES PARA Q TOME CUALQUIER NOMBRE DE SERVIDOR EXTERNO.
	


	en el archivo import.sql abre propiedades y cambia el idioma a ISO-8859-1 , para q no se rompan los caracters con acentos al subir a un servidor externo.
	
	
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 195

	GENERANDO EL JAR
	
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR_BACKEND_V3\springboot-back-apirest>.\mvnw.cmd clean package
	
	
	PUBLICANDO EL JAR
	
	
	C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR_BACKEND_V3\springboot-back-apirest>java -jar .\target\springboot-back-apirest-0.0.1-SNAPSHOT.jar
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 196

	https://angular.io/guide/deployment


	PUBLICAR ANGULAR
	
		C:\Users\Fanta\Documents\11.-SPRING_CON_ANGULAR\angular\clientes-app-3>ng build --prod
		Option "--prod" is deprecated: No need to use this option as this builder defaults to configuration "production".
		√ Browser application bundle generation complete.
		√ Copying assets complete.
		√ Index html generation complete.
		
		Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
		main.1d6aba6f94366625.js      | main          | 565.10 kB |               134.78 kB
		styles.9faa5472d5aa308c.css   | styles        |  92.90 kB |                10.75 kB
		polyfills.1915bce4b20393e6.js | polyfills     |  33.13 kB |                10.64 kB
		runtime.fdc49a18371ff78c.js   | runtime       |   1.06 kB |               600 bytes
		
		                              | Initial Total | 692.20 kB |               156.76 kB
		
		Build at: 2023-01-12T19:41:32.290Z - Hash: 4f0963331cc352ea - Time: 14472ms
		
		Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 192.20 kB with a total of 692.20 kB.
	
	
	CONFIGURAR APACHE PARA Q FUNCIONEN LAS RUTAS URL 
	

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASE 197


	DESCARGA APACHE
	
	https://dlcdn.apache.org/httpd/binaries/win32/
	
	https://www.apachelounge.com/download/
	


	LEVANTAR APACHE
	
		C:\Users\Fanta>cd ..
		
		C:\Users>cd ..
		
		C:\>cd apache24
		
		C:\Apache24>cd bin
		
		C:\Apache24\bin>.\httpd.exe
		AH00558: httpd.exe: Could not reliably determine the server's fully qualified domain name, using fe80::e299:aaf8:f996:2c6e. Set the 'ServerName' directive globally to suppress this message
	

		
![image](https://github.com/user-attachments/assets/b90c5d6b-028f-4536-bf17-b0895edd94a9)

