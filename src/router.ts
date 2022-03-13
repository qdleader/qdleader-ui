import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './views/doc/SwitchDoc.vue';
import ButtonDemo from './views/doc/ButtonDoc.vue';
import DialogDemo from './views/doc/DialogDoc.vue';
import TabsDemo from './views/doc/TabsDoc.vue';
import Markdown from './components/Markdown.vue';

import {h} from 'vue';
// @ts-ignore
import intro from './markdown/intro.md';
// @ts-ignore
import getStarted from './markdown/fast.md';
// @ts-ignore
import install from './markdown/install.md';

const history = createWebHashHistory();
const md = (string) => h(Markdown, {content: string, key: string});
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    }
  ]
});
router.afterEach(() => {
  console.log('路由切换了');
});