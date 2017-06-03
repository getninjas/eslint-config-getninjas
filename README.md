# eslint-config-getninjas
This is our eslint config, to centralize and to distribute this config by npm. We are extending `eslint-config-airbnb-base` (not the `eslint-config-airbnb`, because we don't have necessity of `eslint-plugin-jsx-a11y` and `eslint-plugin-react` - for now).

# Installing
On your project, run the code below:

```JavaScript
( export PKG=eslint-config-getninjas;   npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"; )
```
