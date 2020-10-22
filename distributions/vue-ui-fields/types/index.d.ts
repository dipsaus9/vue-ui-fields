import type { ComputedRef } from 'vue';

export interface IGetValueProvider {
	(key: string): ComputedRef;
}

export interface MaskFunction {
	(value: string): string
}

export interface ISetValue {
	(newVal: string): void
}

export interface ISetValueProvider {
	(name: string, masks?: MaskFunction[]): ISetValue
}
