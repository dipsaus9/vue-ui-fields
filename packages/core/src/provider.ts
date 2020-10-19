// We use symbols as unique identifiers.
import { defineComponent, provide, reactive, computed } from 'vue';

function activateMask(newValue: string, masks: ((value: string) => string)[]): string {
	let value = newValue;
	masks.forEach((mask) => {
		value = mask(newValue);
	});
	return value;
}

export default defineComponent({
	render() {
		if (!this.$slots.default) return;
		return this.$slots.default();
	},
	setup() {
		const uiFields = reactive(new Map());

		const getValue = (key: string) => computed(() => uiFields.get(key));

		const getValues = computed(() => [...uiFields.values()]);

		const setValue = (name: string, masks: ((value: string) => string)[] = []) => (newVal: string) => {
			const value = activateMask(newVal, masks);
			uiFields.set(name, value);
		};

		const computedValue = (name: string, hooks: ((value: string) => string)[] = [], initialValue: string = '') => {
			if (initialValue) {
				const val = activateMask(initialValue, hooks);
				uiFields.set(name, val);
			}
			return computed({
				get: () => uiFields.get(name),
				set: setValue(name, hooks)
			});
		};

		provide('getUIFields', uiFields);

		provide('getUIFieldsValue', getValue);
		provide('setUIFieldsValue', setValue);

		provide('getUIFieldsValues', getValues);
		provide('UIFieldsValue', computedValue);
	}
});
