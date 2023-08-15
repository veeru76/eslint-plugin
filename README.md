# eslint-plugin
It is eslint plugin

## How to use
Add this as dependency in package.json

```
"devDependencies": {
  ...
  "eslint-plugin-custom": "git+ssh://git@github.com:iphios/eslint-plugin.git#<commit_id>/<tag_id>"
  ...
}
```

Add below code in `.eslintrc.yml`

```
plugins:
  - custom

rules:
  custom/name-length:
    - error
    - 50
```
