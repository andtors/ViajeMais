import "./InputComponent.css"

// Componente de botão e seus props, utilizado na pagina de Contato (Contact.jsx)
const InputComponent = ({name, type, placeholder, handleonchange, value}) => {
  return (
   <input value={value} id={name} type={type} name={name} placeholder={placeholder} onChange={handleonchange} required/>
  )
}

export default InputComponent
