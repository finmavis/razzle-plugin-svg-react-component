# Razzle Plugin SVG as ReactComponent

This package contains a plugin to `import` SVG as `ReactComponent`.

Notes: This plugin is only compatible with Razzle v3.3.0 and above. If your project using an older version of Razzle, you could install the 1.0.3 version of this plugin. See [below](#older-version-razzle-below-v3.3.0) explanation for an older version of Razzle.

## Usage in Razzle Projects

- Install `razzle-plugin-svg-react-component` and `@svgr/webpack`

  if you're using `yarn`

  ```
  yarn add razzle-plugin-svg-react-component @svgr/webpack
  ```

  if you're using `npm`

  ```
  npm install razzle-plugin-svg-react-component @svgr/webpack --save
  ```

- create a `razzle.config.js` file in root directory of project (next to the package.json) and put this content inside it

  ```
  // razzle.config.js
  module.exports = {
    plugins: [
      'svg-react-component'
    ],
  };
  ```

## Example

By default you can use SVG like below :

```
import Logo from './logo.svg';

const App = () => (
  <div>
    <img src={Logo} alt="Here are my logo" />
  </div>
);
```

With this plugin, You can also import SVGs directly as React components.

```
import { ReactComponent as Logo } from './logo.svg';

const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
);
```

## Usage with Typescript

If you encounter this error message, `Module '"*.svg"' has no exported member 'ReactComponent'`.

You need to add declaration type for SVG to your `declarations.d.ts` like below:

```
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}
```

Notes: If your project doesn't have `declarations.d.ts` file, you could create a new one inside `src` folder.

## Older version Razzle (below v3.3.0)

## Usage in Razzle Projects

- Install `razzle-plugin-svg-react-component@1.0.3`

  if you're using `yarn`

  ```
  yarn add razzle-plugin-svg-react-component@1.0.3
  ```

  if you're using `npm`

  ```
  npm install razzle-plugin-svg-react-component@1.0.3 --save
  ```

- create a `razzle.config.js` file in root directory of project (next to the package.json) and put this content inside it

  ```
  // razzle.config.js
  module.exports = {
    plugins: [
      'svg-react-component'
    ],
  };
  ```

## Usage with `razzle-plugin-typescript`

- specify `useBabel: true` option in typescript plugin

  ```
  // razzle.config.js
  module.exports = {
    plugins: [
      { name: "typescript", options: { useBabel: true } },
      'svg-react-component',
    ],
  };
  ```

- use target `ES6` or later

  ```
  // tsconfig.json
  {
    "compilerOptions": {
      "target": "ES6",
      "moduleResolution": "Node",
      ...
    }
  }
  ```

Under the hood, this plugin uses `babel-plugin-named-asset-import`. By default, `razzle-plugin-typescript` does not includes babel-loader for .tsx files. To include babel-loader, `useBabel: true` has to be specified.

`babel-plugin-named-asset-import` only transforms ES2015 static `import` and `export` statements and not `require()` calls. If target is `ES5` or below, static `import` statements is transformed to `require` calls. This prevents transformation of `babel-plugin-named-asset-import`.
