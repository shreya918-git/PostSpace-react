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
New way of creating and exporting context in the same file.it would decrease the number of imports-
Create a theme.js or any js file
<br>
import React,{useContext} from 'react'
<br>
export IntialContext=React.createcontext(     we can pass the shared variables directly into createcontext
    {
        thememode:'light', 
        lightmode:()=>{},
        darkmode:()=>{}
   }
)
export Contextprovider=IntialContext.Provider();
<br>
export default Access=()=>{return useContext(IntialContext)};
now in main.jsx or app.jsx wherever provider is being used 
<br>
import React,{createroot},{useState,useEffect} from 'react'
import {Contextprovider} from ./theme.js
import App from ./App.jsx
createroot(document.getelementbyid('root).render(
  <Strictmode>
  const[thememode,settheme]=useState("light");
  const lightmode=()=>settheme("light");
  const darkmode=()=>settheme("dark);
  useEffect(
    ()=>{
    document.queryselector("html").classlist.remove("light","dark");
    document.queryselector("html").classlist.add(thememode);
    },[thememode]
  )
  <Contextprovider value={{thememode,lightmode,darkmode}}>  //we will have to give the accessing values to provider because then werent given in declaration.
  <App/>
  </Contextprovider>
  </Strictmode>
))
themebutton functionality-
import Access from ./theme.js
export default function ThemeBtn() {
    const {thememode,lightmode,darkmode}=Access();
    const change=(e)=>{
        const darkmode=e.current.checked;
        if darkmode darkmode()
        else lightmode()
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={change}
                checked="thememode=='dark'"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );  
}
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkmode:class(),  //important update to change themes
  theme: {
    extend: {},
  },
  plugins: [],
}