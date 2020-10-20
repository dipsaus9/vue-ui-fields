import { defineComponent, provide, reactive, computed } from 'vue';
import { activateMask } from '@vue-ui-fields/utils';

import type { MaskFunction, IGetValueProvider, ISetValueProvider } from '../types/index';

export const getUIFieldsSymbol = Symbol('UIFields');
export const getValueSymbol = Symbol('UIFieldsGetValue');
export const getComputedSymbol = Symbol('UIFieldsGetComputed');
export const getValuesSymbol = Symbol('UIFieldsGetValue');

export const setValueSymbol = Symbol('UIFieldsSetValue');


const UIFieldsProvider = defineComponent({
	render() {
		if (!this.$slots.default) return;
		return this.$slots.default();
	},
	setup() {
		const uiFields = reactive(new Map());

		const getValueProvider: IGetValueProvider = (key: string) => computed(() => uiFields.get(key));
		provide(getValueSymbol, getValueProvider); // Single value getter


		const setValueProvider: ISetValueProvider = (name: string, masks: MaskFunction[] = []) => (newVal: string) => {
			const value = activateMask(newVal, masks);
			uiFields.set(name, value);
		};
		provide(setValueSymbol, setValueProvider); // Single setter


		const getValuesProvider = computed(() => [...uiFields.values()]);
		provide(getValuesSymbol, getValuesProvider); // All values in array


		const computedValue = (name: string, hooks: ((value: string) => string)[] = [], initialValue = '') => {
			if (initialValue) {
				const val = activateMask(initialValue, hooks);
				uiFields.set(name, val);
			}
			return computed({
				get: () => uiFields.get(name),
				set: setValueProvider(name, hooks)
			});
		};
		provide(getComputedSymbol, computedValue); // Full computed version with setter

		provide(getUIFieldsSymbol, uiFields); // Full Map

	}
});

export { UIFieldsProvider };
