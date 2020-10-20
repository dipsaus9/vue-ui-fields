import { inject } from 'vue';
import { getValueSymbol } from '@vue-ui-fields/core';

import type { ComputedRef } from 'vue';
import type { UIFieldsGetValue } from '@vue-ui-fields/core';

const getValue = (key: string): ComputedRef | null => {
	const getter = inject<UIFieldsGetValue>(getValueSymbol);

	if (!getter) return null;

	return getter(key)
};

export { getValue };
