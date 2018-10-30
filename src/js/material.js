import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTabBar} from '@material/tab-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const tab = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

var listsEle = document.querySelectorAll('#my-list');

listsEle.forEach(function(listEle){
	var list = new MDCList(listEle);
	list.singleSelection = true;
})
