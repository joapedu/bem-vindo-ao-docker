# Bem vindo ao Docker

Esse é um repositório para iniciantes do Docker.

Rode usando o seguinte comando:
```zsh
docker run -d -p 8088:80 --name welcome-to-docker docker/welcome-to-docker
```

Ou caso queira, baixe a imagem localmente:
```zsh
docker build -t welcome-to-docker .
```


Após isso, abra `http://localhost:8088` no navegador.

## Building

Mantenedores vide [MAINTAINERS.md](MAINTAINERS.md).

_Obs: Esse repositório foi elaborado pegando como base o [Welcome to Docker Oficial](https://github.com/docker/welcome-to-docker)_

Build e rode:
```zsh
docker build -t bem-vindo-ao-docker . 
docker run -d -p 8088:3000 --name bem-vindo-ao-docker bem-vindo-ao-docker
```
Após isso, abra `http://localhost:8088` no navegador.

---

## Alguns comandos úteis:

- FROM -> Setar uma imagem como base de OS.

- WORKDIR -> Diretório do projeto de trabalho dentro do ambiente Docker.

- COPY -> Copia e direciona no novo ambiente de desenvolvimento os arquivos necessários.

- RUN -> Roda comandos no ambiente Docker.

- EXPOSE -> Expõe uma porta de saída da aplicação.

- CMD -> Comando padrão que será utilizado quando container iniciar sua execução.

_Para mais informações vide Dockerfile._
