import InputComponent from "../components/InputComponent"

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
      <h1 id="contact-title">Dúvidas, reclamações ou feedbacks? Entre em contato conosco!</h1>
    
          <form onSubmit={handleSubmit}>
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
              <textarea rows={5} name="message" onChange={handleChange} placeholder="Digite sua mensagem"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" />
            </div>
          </form>
      
    </div>
  )
}

export default Contact