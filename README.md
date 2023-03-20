# eslint-plugin
It is eslint plugin

## How to use
Add this as dependency in package.json

```
"devDependencies": {
  ...
  "eslint-plugin-name": "git+ssh://git@github.com:iphios/eslint-plugin.git#<commit_id>"
  ...
}
```

Add below code in `.eslintrc.yml`

```
plugins:
  - name

rules:
  name/name-length: warn
```
