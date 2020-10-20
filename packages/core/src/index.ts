import { defineComponent, provide, reactive, computed, ComputedRef } from 'vue';

function activateMask(newValue: string, masks: ((value: string) => string)[]): string {
	let value = newValue;
	masks.forEach((mask) => {
		value = mask(newValue);
	});
	return value;
}

export const getUIFieldsSymbol = Symbol('UIFields');
export const getValueSymbol = Symbol('UIFieldsGetValue');
export const getValuesSymbol = Symbol('UIFieldsGetValue');

export interface UIFieldsGetValue {
	(key: string): ComputedRef;
}


const UIFieldsProvider = defineComponent({
	render() {
		if (!this.$slots.default) return;
		return this.$slots.default();
	},
	setup() {
		const uiFields = reactive(new Map());

		const getValue: UIFieldsGetValue = (key: string) => computed(() => uiFields.get(key));
		provide(getValueSymbol, getValue); // Single value


		const setValue = (name: string, masks: ((value: string) => string)[] = []) => (newVal: string) => {
			const value = activateMask(newVal, masks);
			uiFields.set(name, value);
		};
		provide('setUIFieldsValue', setValue);


		const getValues = computed(() => [...uiFields.values()]);



		const computedValue = (name: string, hooks: ((value: string) => string)[] = [], initialValue = '') => {
			if (initialValue) {
				const val = activateMask(initialValue, hooks);
				uiFields.set(name, val);
			}
			return computed({
				get: () => uiFields.get(name),
				set: setValue(name, hooks)
			});
		};

		provide(getUIFieldsSymbol, uiFields); // Full Map
		provide(getValuesSymbol, getValues); // All values in array


		provide('UIFieldsValue', computedValue);

		setValue('test')('hallo');
	}
});

export { UIFieldsProvider };
