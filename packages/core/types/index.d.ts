import ProviderComponent from '../src/provider';

declare module '@vue-ui-fields/core' {
	const UIFieldsProvider: typeof ProviderComponent;
}
