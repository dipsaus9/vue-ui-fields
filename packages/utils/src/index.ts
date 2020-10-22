import { inject } from 'vue';
import { getValueSymbol, setValueSymbol } from '@vue-ui-fields/provider';

import type { ComputedRef } from 'vue';
import type { IGetValueProvider, ISetValue, ISetValueProvider, MaskFunction } from '@vue-ui-fields/provider/types';

const getValue = (key: string): ComputedRef | null => {
	const getter = inject<IGetValueProvider>(getValueSymbol);

	if (!getter) return null;

	return getter(key)
};

const setValueGetter = (key: string, hooks: MaskFunction[]= []): ISetValue => {
	const setter = inject<ISetValueProvider>(setValueSymbol);

	if (!setter) return null;

	return setter(key, hooks)
};

const activateMask = (newValue: string, masks: ((value: string) => string)[]): string => {
	let value = newValue;
	masks.forEach((mask) => {
		value = mask(newValue);
	});
	return value;
}

export { getValue, activateMask, setValueGetter };
