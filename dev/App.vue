<template>
	<div id="app">
		<UiFields name="checkout" />
		<input type="text" v-model="test" />
	</div>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		test: '',
	}),
	uiFields: {
		optional_value: {
			type: 'checkbox',
			options: [
				{
					value: 'true',
					label: 'Do you want to ship your order to a different address?',
				},
			],
			validation: [
				{
					name: 'required',
					message: 'This is required',
				},
			],
		},
		shipping_address: {
			label: 'Address',
			validation: [
				{
					name: 'custom',
					options: 'UiFields is awesome',
					message: 'Is not matching the validation',
					validation: (value, option) => value.toLowerCase() === option.toLowerCase(),
				},
			],
		},
	},

	created() {
		this.$uiFields.setCondition(
			'checkout',
			'optional_value',
			async (val) => {
				if (Array.isArray(val)) {
					return val.includes('true');
				}
				return false;
			},
			'checkout',
			'shipping_address'
		);
	},
};
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
