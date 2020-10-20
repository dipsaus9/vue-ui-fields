<template>
	<form>
		Hoi
		<pre>{{ value }}</pre>
	</form>
</template>

<script lang="ts">
import { getValue, setValueGetter } from '@vue-ui-fields/utils';

export default {
	setup() {
		const setter = setValueGetter('test');
		const value = getValue('test');

		setter('Test setter');

		return {
			value
		};
	}
};
</script>
