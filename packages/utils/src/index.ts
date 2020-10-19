import { inject } from 'vue';

const getValue = (key: string) => {
	const getter = inject('getUIFieldsValue');

	// if (getter) return getter(key);

	return getter;
};

export { getValue };
