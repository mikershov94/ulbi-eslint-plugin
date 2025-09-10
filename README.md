# eslint-plugin-mikershov

Плагин ESLint, созданный для закрытия собственных нужд линтинга, на основе плагина Тимура Ульби

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-mikershov`:

```sh
npm install eslint-plugin-mikershov --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-mikershov` and add `mikershov` to the `plugins` key:

```js
import { defineConfig } from "eslint/config";
import mikershov from "eslint-plugin-mikershov";

export default defineConfig([
    {
        plugins: {
            mikershov
        }
    }
]);
```


Then configure the rules you want to use under the `rules` key.

```js
import { defineConfig } from "eslint/config";
import mikershov from "eslint-plugin-mikershov";

export default defineConfig([
    {
        plugins: {
            mikershov
        },
        rules: {
            "mikershov/rule-name": "warn"
        }
    }
]);
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


