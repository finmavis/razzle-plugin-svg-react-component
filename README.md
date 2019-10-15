# Razzle Plugin SVG as ReacComponent

This package contains a plugin to `import` SVG as `ReactComponent`.

## Usage in Razzle Projects

- Install `razzle-plugin-svg-react-component`

  if you're using `yarn`

  ```
  yarn add razzle-plugin-svg-react-component
  ```

  if you're using `npm`

  ```
  npm install razzle-plugin-svg-react-component --save
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
