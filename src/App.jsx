import { useState } from "react"
// CREATO L'ARRAY CHE PARTE DA STRINGHE VUOTE //
const formInitial = {
  author:"",
  title:"",
  body:"",
}

export  default function App(){
  const [formData, setFormData] = useState(formInitial);

  // FUNZIONE CHE CAMBIA INPUT //
  const handleChangeInput = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  
  return (
    <>
      <div className="container">
        <h1>My React</h1>
        <form className="row">
          <div className="col-4">
            <label htmlFor="">Author</label>
            <input className="form-control" 
            type="text" 
            name="author" 
            onChange={handleChangeInput} 
            value={formData.author} 
            id="name"></input>
          </div>
          <div className="col-4">
            <label htmlFor="">Title</label>
            <input className="form-control" 
            type="text" 
            name="title" 
            onChange={handleChangeInput} 
            value={formData.title} 
            id="title"></input>
          </div>
          <div className="col-4">
            <label htmlFor="">Body</label>
            <input className="form-control" 
            type="text" 
            name="body" 
            onChange={handleChangeInput} 
            value={formData.body} 
            id="body"></input>
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Invio</button>
          </div>
        </form>
      </div>
    </>
  )
}