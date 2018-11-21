import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTabBar} from '@material/tab-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";
import {MDCTextField} from '@material/textfield';


const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const tab = new MDCTabBar(document.querySelector('.mdc-tab-bar'));