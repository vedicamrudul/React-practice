import { createContext } from "react";
import { useContext } from "react";

export const ThemeContext=createContext({
    currentTheme: "light",
    darkTheme:()=>{},
    lightTheme: ()=>{}
})
// instead of creating a seprate jsx file for creating the global variable and storing it inside the Context, we directly put some default variables inside the context here, jiska value him baadme change kar sakte hai, ya phir jaise function hai humne define kiya hua yaha pe lightTheme ya darkTheme so woh bhi humlog dusre file mei jaake likh sakte hai ya functionality define kar sakte hai whatever.


export const ThemeProvider=ThemeContext.Provider;
// instead of creating a seperate jsx file and then creating a function ThemeProvider which will enclose everything in the contextName.provider tag in which we pass the value of what we want inside the context, we just create a tag Themeprovider here than we can directly use in App.jsx


export default function useTheme(){
    return useContext(ThemeContext)
}

// instead of importing useContext and the context (contextName) everytime and then storing the variable like
// const {whatever}= useContext(ContextName), 
// we just enclose the right hand side step into one function that returns the value so we can directly get any varible or function stored in the context by using useTheme hook which is a default hook that we have created.