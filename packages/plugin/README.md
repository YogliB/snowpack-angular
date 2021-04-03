# @snowpack-angular/plugin

-   Notice that This plugin is best used with [@snowpack-angular/template](https://github.com/YogliB/@snowpack-angular/template)

When developing or building your site with Snowpack, this plugin will run Angular's [`ngc`](https://angular.io/guide/aot-compiler) CLI in your project and pipe the output through Snowpack.

## Usage

```bash
npm i --save-dev @snowpack-angular/plugin
```

Then add the plugin to your Snowpack config:

```js
// snowpack.config.js

module.exports = {
	plugins: ['@snowpack-angular/plugin'],
};
```

## Plugin Options

| Name   |   Type   | Description                                                                                                                                                                               |
| :----- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args` | `string` | Optional arguments to pass to the `ngc` CLI. For example, you can configure a custom project directory (with a custom `tsconfig.json` file) using `args: "--project ./your/custom/path"`. |
