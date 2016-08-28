# Useful commands

## Add new package dependency

```
docker-compose run web npm install --save THE_PACKAGE
```

(or just `--save-dev` if it's a devlopment dependency)

## When upstream `package.json` has changed

```
docker-compose run web npm install
```
