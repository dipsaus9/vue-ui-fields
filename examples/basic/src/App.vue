<template>
	<UIFieldsProvider>
		<Form />
	</UIFieldsProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UIFieldsProvider } from '@vue-ui-fields/core';

import Form from './components/form.vue';

export default defineComponent({
	name: 'App',
	components: {
		UIFieldsProvider: UIFieldsProvider,
		Form
	}
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
