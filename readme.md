# ワイヤードの犬

## develop

```
docker pull jekyll/jekyll
docker run --rm --volume="$PWD:/srv/jekyll" -p4000:4000 -it jekyll/jekyll jekyll serve
```

## deploy

```
docker run --rm --volume="$PWD:/srv/jekyll" -p4000:4000 -it jekyll/jekyll jekyll build
rsync -azP -e 'ssh -i ~/.ssh/digitalocean_rsa' --delete _site/ doggyzone
```
