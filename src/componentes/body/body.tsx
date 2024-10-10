import logo from '../../assets/imagenes/logo.svg';
import '../../i18next/i18n'; //inicializar la traduccion con i18next
import Parrafo from '../parrafo/parrafo';
import Enlace from '../enlace/enlace';


function App() {
  return (
      <div className="body">
        <div className="bg-blue-500 text-white p-4">
          <Parrafo text='tailwind.holaTailwind' clase='text-4xl font-bold'/>
          <Parrafo text ='tailwind.exploraTailwind' clase='text-lg'/>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />

        <div className="bg-blue-500 text-white p-4">
            <Parrafo text="react" clase='text-4xl text-red-500 font-bold'/>
            <Enlace mensaje='irReact' clase='text-4xl text-white-500 font-bold' url='https://reactjs.org' externo= {true} />
        </div>
      </div>
  );
}
export default App;
