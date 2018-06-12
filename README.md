# mdcat

# use

basic
```bash
cat md.json | node index.js
```

all together
```bash
curl -s https://api-prod.thedailybeast.com/v1/new-jersey-gop-candidate-running-for-seat-in-danger-of-flipping-diversity-is-a-bunch-of-crap-and-un-american | jq .mobiledoc -M | node index.js
```
