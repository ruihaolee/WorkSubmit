import {routerView} from './routerView.js';
export default class Router {
	constructor(rootHash) {
		this.rootHash = rootHash;
	}
	changeHash(nowHash) {
		document.location.hash = this.rootHash + '/' + nowHash;
		this.changeView(nowHash);
	}
	changeView(nowHash) {
		if (this.rootHash == 'student') {
			switch(nowHash) {
				case 'abc':
					break;
			}
		}
		else if(this.rootHash == 'teacher') {
			switch(nowHash) {
				case 'abc':
					break;
			}
		}
	}
}
