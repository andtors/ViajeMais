import InputComponent from "../components/InputComponent"
import { Send, Email, Phone, LocationOn } from "@mui/icons-material"

import "./Contact.css"

import { useState } from "react"

const Contact = () => {

  const [contact, setContact] = useState({})

  function handleSubmit(e){
    e.preventDefault()
    alert(`Nome: ${contact.name}, E-mail: ${contact.email}, Mensagem: ${contact.message}`)
    console.log(contact)
  }

  function handleChange(e) {
    setContact({...contact, [e.target.name]: e.target.value})
  }


  return (
    <div id="contact">
      <h1 id="contact-title">Entre me Contato</h1>
      <h2 id="contact-subtitle">Tem alguma dúvida ou sugestão? Adoraríamos ouvir de você!</h2>
      <div id="form-contact">
          <div id="form-side">
            <form onSubmit={handleSubmit}>
              <h2>Envia sua mensagem</h2>
              <div className="form-group" >
                <label>Nome</label>
                <InputComponent  name="name" type="text" placeholder="Digite seu nome" handleonchange={handleChange}/>
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <InputComponent name="email" type="email" placeholder="Digite seu e-mail" handleonchange={handleChange}/>
              </div>

              <div className="form-group">
                <label>Deixe sua mensagem</label>
                <textarea rows={5} name="message" onChange={handleChange} placeholder="Digite sua mensagem" required></textarea>
              </div>
              <div className="form-group">
                <input type="submit" />
              </div>
            </form>
          </div>
          <div id="contact-side">
            <h2>Outras formas de contato</h2>
            <strong>E-mail</strong>
            <p className="contact-info">contato@viajemais.com</p>
            <strong>Telefone  </strong>
            <p className="contact-info">(11)9999-9999</p>
            <strong>Endereço</strong>
            <p className="contact-info">São Paulo, SP - Brasil</p>
            <div id="schedule">
              <strong>Horario de atendimento:</strong>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 14h</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact