import "./Container.css"

// Componente para centralizar os conteudos da pagina 
const Container = ({children}) => {
  return (
    <div id='container' >
        {children}
    </div>
  )
}

export default Container