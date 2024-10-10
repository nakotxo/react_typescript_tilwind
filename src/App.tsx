import './i18next/i18n'; // inicializar la traduccion con i18next
import './assets/css/App.css';  // importar el css principal
import './assets/css/webStyle.css'; // importar variables principales de CSS

import Header from './componentes/header/header';
import Body from './componentes/body/body';
import Footer from './componentes/footer/footer';
function App() {
  return (
    <div className="App">
      
        <Header clase="bg-blue-500 text-white p-4"/>
        <div className='container-fluid'>
          <Body />
        </div>
        <Footer/>
    </div>
  );
}

export default App;
