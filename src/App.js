import React, {useState} from 'react'
import { Main } from './components/Main'
import Language from './context/Language'

function App() {
  let [language, setLanguage] = useState(localStorage.getItem('language')||'ru')
  localStorage.setItem('language', language)
  function changeLanguage() {
    language === 'ru' ? localStorage.setItem('language','en') : localStorage.setItem('language', 'ru')
    language === 'ru' ? setLanguage('en') : setLanguage('ru')
  }
  return (
    <div>
      <Language.Provider value={{language:language, changeLanguage: changeLanguage}}>
        <Main />
      </Language.Provider>
    </div>
  );
}

export default App;
 