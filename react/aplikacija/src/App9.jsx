import "./App.css";
import { createContext, useContext, useState } from "react";
// useContext hook
const ThemeContext = createContext(null);

export default function App() {
    const { theme, setTheme } = useState("light");
    return (
        <div className="App-header">
            <ThemeContext.Provider value={theme}>
                <h1>Vjezba Context: {theme}</h1>
                <label>
                    <input
                        type="checkbox"
                        checked={theme === "dark"}
                        onChange={(e) => {
                            setTheme(e.target.checked ? "dark" : "light");
                        }}
                    />
                    Koristi dark temu
                </label>
                <Button>Prijavi me</Button>
<Form/>

                <Form>
                  <p>Dodatan sadrzaj za formu</p>
                </Form>
            </ThemeContext.Provider>
        </div>
    );
}

function Form({children}){
  return(
            <Panel title="Dobro dosli">
              <Button>Prijavi se</Button>
              <br />
              {children}
              <br />
              <Button>Registriraj se</Button>
            </Panel>

  )
}
function Panel({title, children}) {
    const theme = useContext(ThemeContext);
    const klasaIme = "panel-" + theme;
  return(
 <section className={klasaIme}>
  <h2>{title}</h2>
  {children}
 </section>
  )
}
function Button({ children }) {
    const theme = useContext(ThemeContext);
    const klasaIme = "button-" + theme;
    return <button className={klasaIme}>{children}</button>;
}
