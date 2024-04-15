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
          <section className='senha_section'>
            <div className='senha_container'>
              <div className='senha'>
                <p>pSdoaASDASDAASDASDASDASDASDASDDds</p>
              </div>
              <div className='senha_interacao'>
                <button className='senha_interacao_botao'>
                  <MdOutlineContentCopy size={30} />
                </button>
                <button className='senha_interacao_botao'>
                  <GrPowerReset size={30} />
                </button>
              </div>
            </div>
            <div className='status_bar_container'>
              <div className='status_bar_externo status_bar'>
                <div className='status_bar_interno status_bar' />
              </div>
            </div>
          </section>
          <section className='senha_config'>
            <h2 className=''>
              Personalizar
            </h2>
            <div className='config'>
              <div className='senha_tamanho_container'>
                <label className='label'>Tamanho: </label>
                <input type='range' className='senha_tamanho' min={4} max={25} step={1}></input>
              </div>
              <div className='senha_caracteres_container'>
                <label className='label'>Incluir:</label>
                <div className='checkbox_container'>
                  <div className='checkbox_option'>
                    <label className='label_checkbox'>
                    <input type='checkbox' className='checkbox'/> Maiúsculas
                    </label>
                  </div>
                  <div className='checkbox_option'>
                    <label className='label_checkbox'>
                    <input type='checkbox' className='checkbox'/> Minúsculas
                    </label>
                  </div>
                  <div className='checkbox_option'>
                    <label className='label_checkbox'>
                    <input type='checkbox' className='checkbox'/> Símbolos
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
