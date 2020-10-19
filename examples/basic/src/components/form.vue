<template>
	<form>
		Hoi
		<pre>{{ value }}</pre>
	</form>
</template>

<script lang="ts">
import { getValue } from '@vue-ui-fields/core';

export default {
	setup() {
		const value = getValue('test');

		return {
			value
		};
	}
};
</script>
