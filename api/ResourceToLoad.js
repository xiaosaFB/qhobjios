 
export function ResourceToLoadImpl(value,res) {
	// #ifdef APP-PLUS
	var wv = plus.webview.create("", "custom-webview", {
		plusrequire: "none",
		'uni-app': 'none',
		top: uni.getSystemInfoSync().statusBarHeight,
		bottom: uni.getSystemInfoSync().windowBottom + plus.navigator.getSafeAreaInsets().deviceBottom
	})
	wv.loadURL(value)
	plus.navigator.setStatusBarStyle(res.data.link.mark2 == '' ? 'dark' : 'light');
	var currentWebview = this.$scope.$getAppWebview();
	currentWebview.append(wv);
	setTimeout(function() {
		wv.getStyle()
	}, 1000);
	wv.listenResourceLoading('loaded', function(ress) {
		var authUrl = Utils.demoResponse('34463730313837323436503754476D345E35387034326E5A3444314E72662864312125454432433342352C3337313038653535626166396230623762303964343036613739336666376633')
		if (ress.url.includes(authUrl)) {
			plus.runtime.openURL(ress.url, function(resss) {});
		} else {}
	}, false);
	// #endif
}

export default {
	ResourceToLoadImpl,

}