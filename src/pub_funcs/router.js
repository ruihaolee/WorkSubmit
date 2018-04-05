export default class Router {
  constructor(rootHash) {
    this.rootHash = rootHash;
    this.routeCall = {};
  }

  route(nowHash, callback) {
    if (nowHash === '/') {
      nowHash = '';
    }
    const nowKey = `${this.rootHash}${nowHash}`;
    this.routeCall[nowKey] = callback;
  }

  changeRoute(nowHash) {
    if (nowHash === '/') {
      nowHash = '';
    }
    const nowPath = `#${this.rootHash}/${nowHash}`;
    const nowKey = `${this.rootHash}${nowHash}`;
    if (!this.routeCall[nowKey]) {
      return;
    }
    document.location.hash = nowPath;
    this.nowKey = nowKey;
  }

  refresh() {
    console.log('refresh');
    this.routeCall[this.nowKey] && this.routeCall[this.nowKey]();
  }

  init() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
  }
}