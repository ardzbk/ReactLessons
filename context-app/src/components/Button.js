import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme,setTheme} = useTheme();
  return (
    <div>
        <h1>Button Components</h1>
        Active Theme : {theme}

    <br></br>
    <br></br>
        
        <button onClick={()=>setTheme(theme ==="light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Button