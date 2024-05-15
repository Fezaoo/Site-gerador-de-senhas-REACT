import './App.css';
import './dark_theme.css';
import './light.theme.css'
import { MdOutlineContentCopy } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { createContext } from 'react';
// Contexto para o tema claro e escuro 
const ThemeContext = createContext(null) 

function App() {
  // Estados utilizados durante toda a aplicação
  /// Estados para Senhas
  const [Tamanho, setTamanho] = useState(4);
  const [Maiusculas, setMaiusculas] = useState(false);
  const [Minusculas, setMinusculas] = useState(false);
  const [Simbolos, setSimbolos] = useState(false);
  const [Senha, setSenha] = useState('');
  const [Status_bar, setStatus_bar] = useState('25%')
  /// Display para a div copiado começa com falso
  const [Display, setDisplay] = useState(false)
  /// Tema padrão claro
  const [Theme, setTheme] = useState('light')

  // Gatilhos para gerar uma nova senha e novo status de segurança, todas são variáveis para geração de senha.
  useEffect(() => {
    setSenha(gerar_senha());
    largura_status_bar()
  }, [Tamanho, Maiusculas, Minusculas, Simbolos]);

  function gerar_senha() {
    /// Variáveis para geração de senha, sendo a padrão incluindo apenas números.
    const letras_maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const letras_minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const letras_simbolos = '!@#$%&?'
    let incluir = '0123456789'
    let senha = ''
    /// Lógica para incluir ou não variáveis.
    if (Maiusculas) { incluir += letras_maiusculas }
    if (Minusculas) { incluir += letras_minusculas }
    if (Simbolos) { incluir += letras_simbolos }
    let size = incluir.length /// Range de caracteres que podem ser incluídos na senha.
    /// Caractere é sorteado dentre os incluídos, acontece n vezes, sendo n == ${Tamanho}.
    for (let i = 1; i <= Tamanho; i++) {
      senha += incluir[Math.floor(Math.random() * size)]
    }
    return senha
  }

  function largura_status_bar() {
    // Lógica para definir nível de segurança da senha
    /// Caso tenha 20+ caracteres e todas variáveis incluidas.
    if (Tamanho >= 20 && Maiusculas && Minusculas && Simbolos) {
      setStatus_bar('100%')
    }
    /// Caso tenha 12+ caracteres e ao menos uma variável de letras inclusa.
    else if (Tamanho >= 12 && (Maiusculas || Minusculas)) {
      setStatus_bar('75%')
    }
    /// Caso tenha 7+ caracteres.
    else if (Tamanho >= 7 ) {
      setStatus_bar('50%')
    }
    /// Caso tenha 6- caracteres.
    else if (Tamanho <= 6) {
      setStatus_bar('25%')
    }
  }

  function copiar() {
    // Copia a senha para a área de transferência e mostra o alerta: "copiado" por 2 segundos.
    navigator.clipboard.writeText(Senha)
    setDisplay(true)
    setTimeout(() => {
      setDisplay(false)
    }, 2000);
  }

  // Função altera tema.
  const toggle_theme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{Theme, toggle_theme}}>
    <div className="App" id={Theme}>
      <div className='container_content'>
        <section className='content'>
          <header className='header'>
            <div className='header_element'>
              <div className='header_title_theme'>
                <div className='titulo_theme_container'>
                  <div className='language_container'>
                    <select className='language'>
                      <option>Português</option>
                      <option>Inglês</option>
                    </select>
                  </div>
                  <h1 className='titulo'>
                    Gerador de Senhas
                  </h1>
                    <div onClick={toggle_theme} className='theme_icons '>
                      <FaCircle className='seletor '/>
                      <BsFillSunFill />
                      <MdDarkMode />
                    </div>
                </div>
              </div>
              <div className='descricao'>
                <p>
                  Utilize o nosso site online para criar uma senha forte e segura
                </p>
              </div>
            </div>
          </header>
          <main className='corpo_container'>
            <hr></hr>
            <section className='corpo'>
              <section className='senha_section'>
                <div className='senha_container'>
                  <div className='senha'>
                    <p>{Senha}</p>
                  </div>
                  <div className='senha_interacao'>
                    <button className='senha_interacao_botao' onClick={copiar}>
                      <MdOutlineContentCopy  />
                    </button>
                    <button className='senha_interacao_botao' onClick={() => setSenha(gerar_senha)}>
                      <GrPowerReset  />
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
                    <input type='range' className='senha_tamanho' min={4} max={25} step={1} value={Tamanho} onChange={(e) => setTamanho(e.target.value)}></input>
                  </div>
                  <div className='senha_caracteres_container'>
                    <label className='label'>Incluir:</label>
                    <div className='checkbox_container'>
                      <div className='checkbox_option'>
                        <label className='label_checkbox'>
                          <input type='checkbox' className='checkbox maiusculas' checked={Maiusculas} onChange={(e) => setMaiusculas(e.target.checked)} />
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
                          <input type='checkbox' className='checkbox simbolos' checked={Simbolos} onChange={(e) => setSimbolos(e.target.checked)} />
                          <span className='check_icon'>
                            <FaCheck size={11} />
                          </span>
                          Símbolos
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='show_container'>
                  <div className={`show_copy ${Display ? 'show_copy_visivel' : ''}`}><h3>Copiado</h3></div>
                </div>
              </section>
            </section>
          </main>
        </section>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
