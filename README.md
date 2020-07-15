# Vue UI Fields

Welcome to Vue UI Fields. UI Fields is a Vue plugin to manage and setup forms with just a few lines of code. UI Fields will then create all the components for you and manage all data you need to submit your form.

The idea of UI Fields started a long time ago. For multiple projects some people at Matise created some component based forms to manage the checkout of a ecommerce website. As these componenents progressed we found multiple issues regarding the state management of Vue. This is why we created a global Vuex state management that can create forms. This was the first version of UI Fields.

Vue UI Fields has progressed from a Vuex dependend plugin to a full lightweight component plugin with some reactive ES6 state management. This way the plugin doesn't use too much JavaScript and all data will be removed on destroy events. This prevents JS memomery issues.

UI Fields creates a form based on a two steps. First you need to create a new form so UI Fields knows you are creating html. After this you can add fields to the form with the setField function. Now you are ready to go, this will render all the html you need for your form.

## Documentation

To get started on UI Fields download the node module and follow the instructions. UI Fields offers a way to create simple forms to complex logic for toggle methods and SSR validation combined with client validation.

You can find the documentation on [https://vue-ui-fields.dev](https://vue-ui-fields.dev).

## Author

UI Fields is created by [@dipsaus9](https://github.com/dipsaus9). The project is open source so feel free to submit a PR.
