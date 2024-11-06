-what is a jsx file?
it is a file that enables using html like elements in javascript.raect uses it for making ui making it easy to structure and read components easily.
-react renders function in html format
-we can create functions/objects outside the main.jsx but it wont display as react has different notations in a object model.
-it wont abide with our key value pairs.
-instead we can create a variable and store a new element using React.createelement method and render it .
-react stores variables after ending key-value pairs by their names.
-what is props and tailwind?
tailwind is a library that applies css to our elements in easier way and makes the site responsive just like bootstrap.
props is an object which can be passed as an argument to any function,from anotherr file either as a variable,object or array.
-Context hook
Context hooks in react allows components to share variables using a global object.
a main context file is made first where usecontext hook is called from react and then exports a variable calling that hook.
then the exported variable can act as a provider of variables to the passed children components.
we make a seperate file where a variable is exported which defines the variables shared using usestate such that either the value of that variable can be fetched or provided by the components.this variable takes children as the argument and usestates are defined where variables are objects and multiple values/keys can be passed in them.then we import the intial usecontext file and use provider function which takes values={{}} as props/arguments and the children. this variable is then imported in main.jsx file where app.jsx can pass multiple components in the main.jsx.
whenever a component will have to access the variable or the setting fucntion it will always have to import the original usecontext file where the variables are managed and shared.