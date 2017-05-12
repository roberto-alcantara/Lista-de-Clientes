# Lista de Clientes

Aplicação para armazenar, listar, editar e excluir clientes de um banco de dados. A aplicação foi desenvolvida utilizando Node.js no back-end, AngularJS no front-end e banco de dados MySQL.

Instalando depêndencias e executando a aplicação em plataforma Linux

### Atualizando pacotes
sudo apt-get update
  
### Instalação do npm: 
sudo apt-get install npm

### Instalação do Node.js >= 6.x:
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs
  
### Instalando módulos: (OBS.: Execute o comando abaixo dentro do diretório raiz da aplicação)
npm install
  
### Instalação do MySQL:
sudo apt-get install mysql-server
  
### Após instalados os pacotes acima, vamos criar e configurar a database da aplicação.
- No diretório database abra o arquivo databse.sql e execute a query no MySQL.
- No diretório config abra o arquivo db.js e configura os campos (user e password) de acordo com seu banco de dados.

Executando a aplicação.
- Dentro do diretório raiz execute o comando:

npm start
  
Abra o navegador e acesse o link: localhost:1800

OBS.: Você pode mudar a porta dentro do diretório middlewares no arquivo config.js
