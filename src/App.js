import './App.css';
import { MdOutlineContentCopy } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { useState, useEffect } from 'react';

function App() {
  const [Tamanho, setTamanho] = useState(4)
  const [Maiusculas, setMaiusculas] = useState(false)
  const [Minusculas, setMinusculas] = useState(false)
  const [Simbolos, setSimbolos] = useState(false)
  const [Senha, setSenha] = useState(gerar_senha())
  const [Status_bar, setStatus_bar] = useState('70%')

  useEffect(() => {
    setSenha(gerar_senha());
  }, [Tamanho, Maiusculas, Minusculas, Simbolos]);
  
  function gerar_senha() {
    const letras_maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const letras_minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const letras_simbolos = '!@#$%&?'
    let incluir = '0123456789'
    let senha = ''
    if (Maiusculas) { incluir += letras_maiusculas }
    if (Minusculas) { incluir += letras_minusculas }
    if (Simbolos) { incluir += letras_simbolos }
    console.log(Tamanho)
    for (let i = 1; i < Tamanho; i++) {
      senha += incluir[Math.floor(Math.random() * incluir.length)]
    }
    console.log(senha)
    return senha
  }

  function largura_status_bar() {
    if (Senha.length <= 6) {
      setStatus_bar('25%')
    }
    else if (Senha.length > 6 && Senha.length < 12) {
      setStatus_bar('50%')
    }

  }

  function copiar() {
    navigator.clipboard.writeText(Senha)
  }


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
                <p>{Senha}</p>
              </div>
              <div className='senha_interacao'>
                <button className='senha_interacao_botao' onClick={copiar}>
                  <MdOutlineContentCopy size={30} />
                </button>
                <button className='senha_interacao_botao' onClick={() => setSenha(gerar_senha)}>
                  <GrPowerReset size={30} />
                </button>
              </div>
            </div>
            <div className='status_bar_container'>
              <div className='status_bar_externo status_bar'>
                <div style={{ width: Status_bar }} className='status_bar_interno status_bar' />
              </div>
            </div>
          </section>
          <section className='senha_config'>
            <h2 className=''>
              Personalizar
            </h2>
            <div className='config'>
              <div className='senha_tamanho_container'>
                <label className='label'>Tamanho: {Tamanho}</label>
                <input type='range' className='senha_tamanho' min={4} max={25} step={1} value={Tamanho} onChange={(e) =>  setTamanho(e.target.value) }></input>
              </div>
              <div className='senha_caracteres_container'>
                <label className='label'>Incluir:</label>
                <div className='checkbox_container'>
                  <div className='checkbox_option'>
                    <label className='label_checkbox'>
                      <input type='checkbox' className='checkbox maiusculas' checked={Maiusculas} onChange={(e) =>  setMaiusculas(e.target.checked)} />
                      <span className='check_icon'>
                        <FaCheck size={11} />
                      </span>
                      Maiúsculas
                    </label>
                  </div>
                  <div className='checkbox_option'>
                    <label className='label_checkbox'>
                      <input type='checkbox' className='checkbox minusculas' checked={Minusculas} onChange={(e) => setMinusculas(e.target.checked)} />
                      <span className='check_icon'>
                        <FaCheck size={11} />
                      </span>
                      Minúsculas
                    </label>
                  </div>
                  <div className='checkbox_option'>
                    <label className='label_checkbox'>
                      <input type='checkbox' className='checkbox simbolos' checked={Simbolos} onChange={(e) =>  setSimbolos(e.target.checked)} />
                      <span className='check_icon'>
                        <FaCheck size={11} />
                      </span>
                      Símbolos
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
