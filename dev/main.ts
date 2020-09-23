import Vue from 'vue';
import App from './App.vue';
import uiFields from '../src/index';

Vue.config.productionTip = false;

Vue.use(uiFields);
Vue.config.optionMergeStrategies.uiFields = function (toValue, fromVal, vm) {
	console.log(vm);
	Vue.prototype.$uiFields.new('checkout');

	const data = Object.keys(fromVal).reduce((acc, curr) => {
		acc.push({
			...fromVal[curr],
			name: curr,
		});
		return acc;
	}, []);

	Vue.prototype.$uiFields.setFields('checkout', data);
	return data;
};
Vue.mixin({
	beforeCreate() {
		console.log(this.$options.uiFields);
	},
});
new Vue({
	uiFields: {
		hoi: null,
	},
	render: (h) => h(App),
}).$mount('#app');
