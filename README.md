# Vue UI Fields

Welcome to Vue UI Fields. UI Fields is a Vue plugin to manage and setup forms with just a few lines of code. UI Fields will then create all the components for you and manage all data you need to submit your form.

The idea of UI Fields started in 2018. For multiple projects Dennis created some component based forms to manage the checkout of a ecommerce website. As these componenents progressed we found multiple issues regarding the state management of Vue. This is why we created a plugin using the Vuex state management that can create forms. This was the first version of UI Fields.

UI Fields was made to create forms with the same layout along a larger development team. UI Fields consisted of multiple single field options, like a text input. These componenents could be included anywhere in your project. The main problem was that a single component could not manipulate data over other components. This resulted in a complex strucutre using the emit functions from Vue with a lot of chaos among the developers.

When creating larger forms in Vue you often use Vuex to solve the problem described above. This is a good solution as Vue offers this with the help of computed getters and setters. But as your form grows the Vuex increases in mutation listeners. If you use a computed value with some watchers this can result in some slow feedback along your website and a decrease in performance.

From this point of view and many iterations UI Fields was created to solve these problems. UI Fields now offers the ability to create faster forms with logic among the components. UI Fields uses data manipulation based on Vue prototype wich has a much faster resolving as it skips a lot of mutation handlers by Vue. You can subscribe and listen to these events programmatically if needed.

## Documentation

To get started on UI Fields download the node module and follow the instructions. UI Fields offers a way to create simple forms to complex logic for toggle methods and SSR validation combined with client validation.

You can find the documentation on [https://vue-ui-fields.dev](https://vue-ui-fields.dev).

## Author

UI Fields is created by [@dipsaus9](https://github.com/dipsaus9). The project is open source so feel free to submit a PR.
