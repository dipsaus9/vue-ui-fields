<template>
	<Provider>
		<Form />
	</Provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Provider } from 'vue-ui-fields';

import Form from './components/form.vue';

export default defineComponent({
	name: 'App',
	components: {
		Provider,
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
