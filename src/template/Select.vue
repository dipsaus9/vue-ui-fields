<template>
	<div>
		<select
			:id="`${form}_${name}`"
			v-model="value"
			:name="fieldData.name"
			:type="fieldData.type"
			v-bind="fieldData.htmlSettings"
			:class="`${className}__input ${fieldData.type}__input`"
			@blur="setValue"
		>
			<option v-for="(option, key) in fieldData.options" :key="key" :value="option.value" :disabled="option.disabled">
				{{ option.label }}
			</option>
		</select>
		<label :class="`${className}__element ${fieldData.type}__element`" :for="`${form}_${name}`">
			<span
				:class="[
					fieldData.htmlSettings.required
						? `${fieldData.type}__label--is-required ${className}__label ${fieldData.type}__label`
						: `${className}__label ${fieldData.type}__label`,
				]"
				v-html="fieldData.label"
			>
			</span>
			<span
				v-if="fieldData.htmlSettings.required && fieldData.requiredText"
				:class="`${className}__label--required ${className}__label ${fieldData.type}__label ${fieldData.type}__label--required`"
			>
				{{ fieldData.requiredText }}
			</span>
		</label>
		<uiErrors :form="form" :name="name" />
	</div>
</template>
<script lang="ts">
import { mixins } from 'vue-class-component';
import { Vue, Component } from 'vue-property-decorator';
import UIFieldsMixin from '../helpers/mixin';

@Component
export default class UiSelect extends mixins(UIFieldsMixin) {
	public component: string = 'ui-select';

	get className() {
		return this.$uiFields.getClassName(this.form);
	}
}
</script>
