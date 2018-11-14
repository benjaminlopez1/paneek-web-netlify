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

/*
if(window.location.pathname=="/"){
	const buttonRipple = new MDCRipple(document.querySelector('.jumbotron-button'));
}

if(window.location.pathname=="/faq/"){
	var listsEle = document.querySelectorAll('#my-list');
	listsEle.forEach(function(listEle){
		var list = new MDCList(listEle);
		list.singleSelection = true;
	})
}

if(window.location.pathname=="/login/"){
	const username = new MDCTextField(document.querySelector('.username'));
	const password = new MDCTextField(document.querySelector('.password'));

	const register_username = new MDCTextField(document.querySelector('.register-username'));
	const register_email = new MDCTextField(document.querySelector('.register-email'));
	const register_password = new MDCTextField(document.querySelector('.register-password'));
	const register_repassword = new MDCTextField(document.querySelector('.register-repassword'));

	new MDCRipple(document.querySelector('.go'));
	new MDCRipple(document.querySelector('.next'));
	new MDCRipple(document.querySelector('.back'));
	new MDCRipple(document.querySelector('.register'));
}
*/