# Cómo obtener un Servidor Virtual de 24GB y 4OCPU gratis

#### 1.- Crea una cuenta en la página de [oracle cloud](https://signup.cloud.oracle.com/), el país/territorio que escojas es importante, ya que sólo podrás crear un servidor en la región que escojas.

#### 2.- Ingresa a la página de [instancias](https://cloud.oracle.com/compute/instances) y dale click a "Create Instance"

#### 3.- Personaliza la instancia así:
	Name: El que tu quieras.
	Compartment: Déjalo por defecto.
	Placement: AD 3.
	Image and shape:
		Image: Canonical Ubuntu (No escojas minimal).
		Shape:
			Instance type: Virtual Machine.
			Shape series: Ampere.
			OCPU: 4.
			Memory: 24GB.
				
	Networking:
		Primary network: Create new virtual cloud network
		Subnet: Create new public subnet
		Public IP Address: Assign a public IPv4 address
	
	Add SSH keys: Add / generate your SSH keys (No escojas "No SSH keys")
	
	Boot volume:
		Specify a custom boot volume size: True.
		Boot volume size (GB): 200 (o puedes asignar 199 para asegurar).
#### 4.- Presiona en "crear"
#### 5.- Inicia tu servidor y conéctate a el (Puedes usar clientes SSH como [Bitvise](https://www.bitvise.com/ssh-client-download)).
#### 6.- Como adicional, lo ideal seria que configuraras el Firewall (crear tu propia cuenta y remover la que viene por defecto, modificar los temas de seguridad, puertos, etc).
