<p align="center">
  <a href="https://js-sdsl.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://js-sdsl.org/assets/image/logo/logo-removebg.png" alt="js-sdsl logo" width="120" />
  </a>
</p>

<h3><p align="center">Une bibliothèque JavaScript de structures de données standard inspirée de C++ STL</p></h3>

<p align="center">
  <a href="https://www.npmjs.com/package/js-sdsl"><img src="https://img.shields.io/npm/v/js-sdsl.svg" alt="NPM Version" /></a>
  <a href="https://github.com/js-sdsl/js-sdsl/actions/workflows/build.yml"><img src="https://img.shields.io/github/actions/workflow/status/js-sdsl/js-sdsl/build.yml" alt="Build Status" /></a>
  <a href='https://coveralls.io/github/js-sdsl/js-sdsl?branch=main'><img src='https://coveralls.io/repos/github/js-sdsl/js-sdsl/badge.svg?branch=main' alt='Coverage Status' /></a>
  <a href="https://github.com/js-sdsl/js-sdsl"><img src="https://img.shields.io/github/stars/js-sdsl/js-sdsl.svg" alt="GITHUB Star" /></a>
  <a href="https://npmcharts.com/compare/js-sdsl?minimal=true"><img src="https://img.shields.io/npm/dm/js-sdsl.svg" alt="NPM Downloads" /></a>
  <a href="https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js"><img src="https://img.badgesize.io/https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js?compression=gzip&style=flat-square/" alt="Gzip Size"></a>
  <a href="https://openbase.com/js/js-sdsl?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge"><img src="https://badges.openbase.com/js/rating/js-sdsl.svg?token=fh3LMNOV+JSWykSjtg1rA8kouSYkJoIDzGbvaByq5X0=" alt="Rate this package"/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/js-sdsl.svg" alt="MIT-license" /></a>
  <a href="https://github.com/js-sdsl/js-sdsl/"><img src="https://img.shields.io/github/languages/top/js-sdsl/js-sdsl.svg" alt="GITHUB-language" /></a>
</p>

<p align="center"><a href="https://github.com/js-sdsl/js-sdsl/blob/main/README.md">English</a> | Français</p>

## ✨ Structures de données incluses

- **Stack** - Pile LIFO
- **Queue** - File FIFO
- **PriorityQueue** - File de priorité implémentée avec un tas
- **Vector** - Tableau protégé dont les propriétés telles que `length` ne peuvent pas être manipulées directement
- **LinkList** - Liste chaînée dont les adresses mémoire ne sont pas contiguës
- **Deque** - File à double extrémité; insertion aux deux extrémités et accès par index en O(1)
- **OrderedSet** - Ensemble ordonné implémenté avec un arbre rouge-noir
- **OrderedMap** - Dictionnaire ordonné implémenté avec un arbre rouge-noir
- **HashSet** - Ensemble de hachage inspiré du [polyfill Set ES6](https://github.com/rousan/collections-es6)
- **HashMap** - Dictionnaire de hachage inspiré du [polyfill Set ES6](https://github.com/rousan/collections-es6)

## ⚔️ Tests de performance

Nous avons comparé cette bibliothèque à d'autres bibliothèques de structures de données et dépassons même les bibliothèques les plus populaires dans certains scénarios.

Consultez le [benchmark](https://js-sdsl.org/#/zh-cn/test/benchmark-analyze) pour plus d'informations.

## 🖥 Plateformes prises en charge

| ![][Edge-Icon]<br/>IE / Edge | ![][Firefox-Icon]<br/>Firefox | ![][Chrome-Icon]<br/>Chrome | ![][Safari-Icon]<br/>Safari | ![][Opera-Icon]<br/>Opera | ![][NodeJs-Icon]<br/>NodeJs |
| :--------------------------: | :---------------------------: | :-------------------------: | :-------------------------: | :-----------------------: | :-------------------------: |
|           Edge 12            |              36               |             49              |             10              |            36             |             10              |

## 📦 Installation

Import direct via CDN

- [js-sdsl.js](https://unpkg.com/js-sdsl/dist/umd/js-sdsl.js) (pour le développement)
- [js-sdsl.min.js](https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js) (pour la production)

Installation avec npm

```bash
npm install js-sdsl
```

Vous pouvez aussi installer individuellement l'un des packages suivants selon vos besoins.

| package                                           | npm                                                                   | size                                                             | docs                        |
| ------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------- |
| [@js-sdsl/stack][stack-package]                   | [![NPM Package][stack-npm-version]][stack-npm-link]                   | [![GZIP Size][stack-umd-size]][stack-umd-link]                   | [link][stack-docs]          |
| [@js-sdsl/queue][queue-package]                   | [![NPM Package][queue-npm-version]][queue-npm-link]                   | [![GZIP Size][queue-umd-size]][queue-umd-link]                   | [link][queue-docs]          |
| [@js-sdsl/priority-queue][priority-queue-package] | [![NPM Package][priority-queue-npm-version]][priority-queue-npm-link] | [![GZIP Size][priority-queue-umd-size]][priority-queue-umd-link] | [link][priority-queue-docs] |
| [@js-sdsl/vector][vector-package]                 | [![NPM Package][vector-npm-version]][vector-npm-link]                 | [![GZIP Size][vector-umd-size]][vector-umd-link]                 | [link][vector-docs]         |
| [@js-sdsl/link-list][link-list-package]           | [![NPM Package][link-list-npm-version]][link-list-npm-link]           | [![GZIP Size][link-list-umd-size]][link-list-umd-link]           | [link][link-list-docs]      |
| [@js-sdsl/deque][deque-package]                   | [![NPM Package][deque-npm-version]][deque-npm-link]                   | [![GZIP Size][deque-umd-size]][deque-umd-link]                   | [link][deque-docs]          |
| [@js-sdsl/ordered-set][ordered-set-package]       | [![NPM Package][ordered-set-npm-version]][ordered-set-npm-link]       | [![GZIP Size][ordered-set-umd-size]][ordered-set-umd-link]       | [link][ordered-set-docs]    |
| [@js-sdsl/ordered-map][ordered-map-package]       | [![NPM Package][ordered-map-npm-version]][ordered-map-npm-link]       | [![GZIP Size][ordered-map-umd-size]][ordered-map-umd-link]       | [link][ordered-map-docs]    |
| [@js-sdsl/hash-set][hash-set-package]             | [![NPM Package][hash-set-npm-version]][hash-set-npm-link]             | [![GZIP Size][hash-set-umd-size]][hash-set-umd-link]             | [link][hash-set-docs]       |
| [@js-sdsl/hash-map][hash-map-package]             | [![NPM Package][hash-map-npm-version]][hash-map-npm-link]             | [![GZIP Size][hash-map-umd-size]][hash-map-umd-link]             | [link][hash-map-docs]       |

## 🪒 Utilisation

Vous pouvez [visiter notre page d'accueil](https://js-sdsl.org/) pour plus d'informations.

Nous fournissons également une [documentation API complète](https://js-sdsl.org/js-sdsl/index.html) pour référence.

Pour consulter la documentation des versions précédentes, visitez:

`https://js-sdsl.org/js-sdsl/previous/v${version}/index.html`

Par exemple:

[https://js-sdsl.org/js-sdsl/previous/v4.1.5/index.html](https://js-sdsl.org/js-sdsl/previous/v4.1.5/index.html)

### Utilisation dans le navigateur

```html
<script src="https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js"></script>
<script>
    const {
        Vector,
        Stack,
        Queue,
        LinkList,
        Deque,
        PriorityQueue,
        OrderedSet,
        OrderedMap,
        HashSet,
        HashMap,
    } = sdsl;
    const myOrderedMap = new OrderedMap();
    myOrderedMap.setElement(1, 2);
    console.log(myOrderedMap.getElementByKey(1)); // 2
</script>
```

### Importation avec npm

```javascript
// esModule
import { OrderedMap } from "js-sdsl";
// commonJs
const { OrderedMap } = require("js-sdsl");
const myOrderedMap = new OrderedMap();
myOrderedMap.setElement(1, 2);
console.log(myOrderedMap.getElementByKey(1)); // 2
```

## 🛠 Tests

### Tests unitaires

Nous utilisons les frameworks [karma](https://karma-runner.github.io/) et [mocha](https://mochajs.org/) pour les tests unitaires, avec publication sur [coveralls](https://coveralls.io/github/js-sdsl/js-sdsl). Vous pouvez les reconstruire avec la commande `yarn test:unit`.

### Vérification des performances

我们对于编写的所有 API 进行了性能测试，并将结果同步到了 [`gh-pages/performance.md`](https://github.com/js-sdsl/js-sdsl/blob/gh-pages/performance.md) 中，你可以通过 `yarn test:performance` 命令来重现它

您也可以访问[我们的网站](https://js-sdsl.org/#/zh-cn/test/performance-test)来获取结果

## ⌨️ Développement

Vous pouvez utiliser Gitpod pour modifier le projet en ligne:

[![Open in Gippod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/js-sdsl/js-sdsl)

Vous pouvez aussi récupérer le code source et développer localement avec les commandes suivantes:

```bash
$ git clone https://github.com/js-sdsl/js-sdsl.git
$ cd js-sdsl
$ npm install
$ npm run dev   # development mode
```

Les artefacts générés en mode `dev` seront ensuite disponibles dans le dossier `dist/cjs`.

## 🤝 Contribution

Nous invitons tous les développeurs à soumettre des issues ou des pull requests. La [guide de contribution](https://github.com/js-sdsl/js-sdsl/blob/main/.github/CONTRIBUTING.md) peut être utile.

### Contributeurs

Merci aux développeurs qui ont contribué à ce projet:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.linkedin.com/in/takatoshi-kondo-02a91410/"><img src="https://avatars.githubusercontent.com/u/275959?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Takatoshi Kondo</b></sub></a><br /><a href="https://github.com/js-sdsl/js-sdsl/commits?author=redboltz" title="Code">💻</a> <a href="https://github.com/js-sdsl/js-sdsl/commits?author=redboltz" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://www.youtube.com/c/noname0310"><img src="https://avatars.githubusercontent.com/u/48761044?v=4?s=100" width="100px;" alt=""/><br /><sub><b>noname</b></sub></a><br /><a href="https://github.com/js-sdsl/js-sdsl/commits?author=noname0310" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

本项目遵循 [all-contributors](https://github.com/all-contributors/all-contributors) 规范。 欢迎任何形式的贡献！

## ❤️ Sponsors

Remerciements particuliers aux sponsors et soutiens suivants, qui nous ont aidés dès les débuts:

<a href="https://eslint.org/"><img src="https://js-sdsl.org/assets/image/sponsors/eslint-logo-color.png" alt="eslint logo" width="150"></a>

Merci également à ces sponsors et soutiens:

[![sponsors](https://opencollective.com/js-sdsl/tiers/sponsors.svg?avatarHeight=36)](https://opencollective.com/js-sdsl#support)

[![backers](https://opencollective.com/js-sdsl/tiers/backers.svg?avatarHeight=36)](https://opencollective.com/js-sdsl#support)

## 🪪 Licence

[MIT](https://github.com/js-sdsl/js-sdsl/blob/main/LICENSE) © [ZLY201](https://github.com/zly201)

[Edge-Icon]: https://js-sdsl.org/assets/image/platform/edge.png
[Firefox-Icon]: https://js-sdsl.org/assets/image/platform/firefox.png
[Chrome-Icon]: https://js-sdsl.org/assets/image/platform/chrome.png
[Safari-Icon]: https://js-sdsl.org/assets/image/platform/safari.png
[Opera-Icon]: https://js-sdsl.org/assets/image/platform/opera.png
[NodeJs-Icon]: https://js-sdsl.org/assets/image/platform/nodejs.png
[stack-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/OtherContainer/Stack.ts
[stack-npm-version]: https://img.shields.io/npm/v/@js-sdsl/stack
[stack-npm-link]: https://www.npmjs.com/package/@js-sdsl/stack
[stack-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/stack/dist/umd/stack.min.js?compression=gzip&style=flat-square/
[stack-umd-link]: https://unpkg.com/@js-sdsl/stack/dist/umd/stack.min.js
[stack-docs]: https://js-sdsl.org/js-sdsl/classes/Stack.html
[queue-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/OtherContainer/Queue.ts
[queue-npm-version]: https://img.shields.io/npm/v/@js-sdsl/queue
[queue-npm-link]: https://www.npmjs.com/package/@js-sdsl/queue
[queue-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/queue/dist/umd/queue.min.js?compression=gzip&style=flat-square/
[queue-umd-link]: https://unpkg.com/@js-sdsl/queue/dist/umd/queue.min.js
[queue-docs]: https://js-sdsl.org/js-sdsl/classes/Queue.html
[priority-queue-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/OtherContainer/PriorityQueue.ts
[priority-queue-npm-version]: https://img.shields.io/npm/v/@js-sdsl/priority-queue
[priority-queue-npm-link]: https://www.npmjs.com/package/@js-sdsl/priority-queue
[priority-queue-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/priority-queue/dist/umd/priority-queue.min.js?compression=gzip&style=flat-square/
[priority-queue-umd-link]: https://unpkg.com/@js-sdsl/priority-queue/dist/umd/priority-queue.min.js
[priority-queue-docs]: https://js-sdsl.org/js-sdsl/classes/PriorityQueue.html
[vector-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/SequentialContainer/Vector.ts
[vector-npm-version]: https://img.shields.io/npm/v/@js-sdsl/vector
[vector-npm-link]: https://www.npmjs.com/package/@js-sdsl/vector
[vector-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/vector/dist/umd/vector.min.js?compression=gzip&style=flat-square/
[vector-umd-link]: https://unpkg.com/@js-sdsl/vector/dist/umd/vector.min.js
[vector-docs]: https://js-sdsl.org/js-sdsl/classes/Vector.html
[link-list-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/SequentialContainer/LinkList.ts
[link-list-npm-version]: https://img.shields.io/npm/v/@js-sdsl/link-list
[link-list-npm-link]: https://www.npmjs.com/package/@js-sdsl/link-list
[link-list-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/link-list/dist/umd/link-list.min.js?compression=gzip&style=flat-square/
[link-list-umd-link]: https://unpkg.com/@js-sdsl/link-list/dist/umd/link-list.min.js
[link-list-docs]: https://js-sdsl.org/js-sdsl/classes/LinkList.html
[deque-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/SequentialContainer/Deque.ts
[deque-npm-version]: https://img.shields.io/npm/v/@js-sdsl/deque
[deque-npm-link]: https://www.npmjs.com/package/@js-sdsl/deque
[deque-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/deque/dist/umd/deque.min.js?compression=gzip&style=flat-square/
[deque-umd-link]: https://unpkg.com/@js-sdsl/deque/dist/umd/deque.min.js
[deque-docs]: https://js-sdsl.org/js-sdsl/classes/Deque.html
[ordered-set-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/TreeContainer/OrderedSet.ts
[ordered-set-npm-version]: https://img.shields.io/npm/v/@js-sdsl/ordered-set
[ordered-set-npm-link]: https://www.npmjs.com/package/@js-sdsl/ordered-set
[ordered-set-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/ordered-set/dist/umd/ordered-set.min.js?compression=gzip&style=flat-square/
[ordered-set-umd-link]: https://unpkg.com/@js-sdsl/ordered-set/dist/umd/ordered-set.min.js
[ordered-set-docs]: https://js-sdsl.org/js-sdsl/classes/OrderedSet.html
[ordered-map-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/TreeContainer/OrderedMap.ts
[ordered-map-npm-version]: https://img.shields.io/npm/v/@js-sdsl/ordered-map
[ordered-map-npm-link]: https://www.npmjs.com/package/@js-sdsl/ordered-map
[ordered-map-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/ordered-map/dist/umd/ordered-map.min.js?compression=gzip&style=flat-square/
[ordered-map-umd-link]: https://unpkg.com/@js-sdsl/ordered-map/dist/umd/ordered-map.min.js
[ordered-map-docs]: https://js-sdsl.org/js-sdsl/classes/OrderedMap.html
[hash-set-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/HashContainer/HashSet.ts
[hash-set-npm-version]: https://img.shields.io/npm/v/@js-sdsl/hash-set
[hash-set-npm-link]: https://www.npmjs.com/package/@js-sdsl/hash-set
[hash-set-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/hash-set/dist/umd/hash-set.min.js?compression=gzip&style=flat-square/
[hash-set-umd-link]: https://unpkg.com/@js-sdsl/hash-set/dist/umd/hash-set.min.js
[hash-set-docs]: https://js-sdsl.org/js-sdsl/classes/HashSet.html
[hash-map-package]: https://github.com/js-sdsl/js-sdsl/blob/main/src/container/HashContainer/HashMap.ts
[hash-map-npm-version]: https://img.shields.io/npm/v/@js-sdsl/hash-map
[hash-map-npm-link]: https://www.npmjs.com/package/@js-sdsl/hash-map
[hash-map-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/hash-map/dist/umd/hash-map.min.js?compression=gzip&style=flat-square/
[hash-map-umd-link]: https://unpkg.com/@js-sdsl/hash-map/dist/umd/hash-map.min.js
[hash-map-docs]: https://js-sdsl.org/js-sdsl/classes/HashMap.html
