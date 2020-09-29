# J2LJ prototype project

## eject 없이 mobx 적용하기

```
// npm
npm install --save -d customize-cra
npm install --save -d react-app-rewired

// yarn
yarn add --dev customize-cra
yarn add --dev react-app-rewired
```

## 패키지 수정

기존

```
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```

변경

```
"scripts": {
	"start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject",
}
```

config-overrides.js 생성 package.json과 같은위치에

```javascript
const {
  // useBabelRc,
  addDecoratorsLegacy,
  disableEsLint,
  override,
} = require("customize-cra");

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy() /*, useBabelRc()*/),
};
```
