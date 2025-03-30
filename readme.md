# ワイヤードの犬

## develop

```
docker run --rm --volume="$PWD:/srv/jekyll" -p4000:4000 -it jekyll/jekyll:3.8 jekyll serve
```

## deploy

```
docker run --rm --volume="$PWD:/srv/jekyll" -p4000:4000 -it jekyll/jekyll:3.8 jekyll build
rsync -azP -e 'ssh -i ~/.ssh/digitalocean_rsa' --delete _site/ doggyzone
```
