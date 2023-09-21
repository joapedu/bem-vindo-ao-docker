# Mantendo a imagem docker/welcome-to-docker

A imagem está armazenada no repositório oficial `docker/welcome-to-docker`.

Como última tag `latest`, nós usamos a `small-image` branch para fazer algo ideal no passo a passo da experiência do usuário. Quaisquer mudanças na `main` devem vim da  `small-image` também.

Para subir alguma mudança na imagem welcome-to-docker imagem hub:
```
git checkout small-image
docker buildx create --name mybuilder --use --bootstrap # only if not created before
docker buildx build --push --platform linux/amd64,linux/arm64 --tag docker/welcome-to-docker .
```
