<template>
	<form>
		Hoi
	</form>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	setup() {
		const uiFields = inject('getUIFieldsValues');

		return {
			uiFields
		};
	}
};
</script>
