<h1 align="center">
  <img alt="GetNinjas" title="GetNinjas" src="./assets/logo.svg" width="250px" />
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/getninjas/eslint-config-getninjas?color=0e73e8">
  <img alt="Made by GetNinjas" src="https://img.shields.io/badge/made%20by-GetNinjas-%20?color=fde63f">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/getninjas/eslint-config-getninjas?color=0e73e8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/getninjas/eslint-config-getninjas?color=fde63f">
  <img alt="GitHub license" src="https://img.shields.io/github/license/getninjas/eslint-config-getninjas?color=0e73e8">
</p>

<p align="center">
  <a href="#information_source-how-to-use">ℹ️ How To Use?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-contributing">🚀 Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-author">💻 Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">📝 License</a>
</p>

<p align="center">
  <b>ESLint Config GetNinjas</b> is a set of <b>linting</b> rules for <b>JavaScript</b>, <b>TypeScript</b> and <b>React</b> projects. <b>ESLint Config GetNinjas</b> uses <b>ESLint</b> configurations from <b>Airbnb</b> and <b>Prettier</b> as the basis for linting rules.
</p>

---

# :information_source: How To Use?

1. Install the `eslint-config-getninjas` dependency

```bash
yarn add -D eslint-config-getninjas
```

2. Install the `peerDependencies`

```bash
yarn add \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-base \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-import-resolver-typescript \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  typescript
```

3. Setup
- [React](#react);
- [React TypeScript](#react-typescript);
- [JavaScript Base](#javascript-base);
- [TypeScript](#typescript);

## React
Create a `.eslintrc.json` file extending the config for **React**:
```
{
  "extends": "eslint-config-getninjas/react"
}
```

## React TypeScript
Create a `.eslintrc.json` file extending the config for **React TypeScript**:
```
{
  "extends": "eslint-config-getninjas/react-typescript"
}
```

## JavaScript Base
Create a `.eslintrc.json` file extending the config for **JavaScript Base**:
```
{
  "extends": "eslint-config-getninjas/base"
}
```

## TypeScript
Create a `.eslintrc.json` file extending the config for **JavaScript Base**
```
{
  "extends": "eslint-config-getninjas/typescript"
}
```

# :rocket: Contributing

If you want to contribute to a project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called origin.
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Create a new branch to work on! Branch from develop if it exists, else from master.
- Implement/fix your feature, comment your code.
- Follow the code style of the project, including indentation.
- Add or change the documentation as needed.
- Push your branch to your fork on Github, the remote origin.
- If the maintainer requests further changes just push them to your branch. The PR will be updated automatically.

# :computer: Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GetNinjas/">
        <img src="https://github.com/getninjas.png" width="100px;" alt="Rocketseat"/>
        <br />
        <sub>
          <b>GetNinjas</b>
        </sub>
       </a>
       <br />
       <a href="https://www.getninjas.com.br" title="Linkedin">@GetNinjas</a>
       <br />
    </td>
  </tr>
</table>

# :memo: License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) page for details.
