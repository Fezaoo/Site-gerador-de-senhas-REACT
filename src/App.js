import './App.css';
import { MdOutlineContentCopy } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='header_element'>
          <div className='titulo_container'>
            <h1 className='titulo'>
              Gerador de Senhas
            </h1>
          </div>
          <div className='descricao'>
            <p>
              Utilize o nosso site online para criar uma senha forte e segura
          </p>
          </div>
        </div>
      </header>
      <main className='corpo_container'>
        <section className='corpo'>
          <div className='senha_section'>
            <div className='senha_container'>
              <div className='senha'>
                <p>pSdoaASDASDASDASDASDASDASDDASDASSDASDDASASDASDASDASDASDASDDds</p>
              </div>
              <div className='senha_interacao'>
              <button className='senha_interacao_botao'>
                <MdOutlineContentCopy size={30} />
              </button>
              <button className='senha_interacao_botao'>
                <GrPowerReset size={30}/>
              </button>
              </div>
            </div>
              <div className='status_bar_container'>
                <div className='status_bar_externo status_bar'>
                <div className='status_bar_interno status_bar'/>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
