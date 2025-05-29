import { useState } from "react";
import axios from "axios";

// CREATO L'ARRAY CHE PARTE DA STRINGHE VUOTE //
const formInitial = {
  author:"",
  title:"",
  body:"",
  public:""
}
const apiUrl ="https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

export  default function App(){
  const [formData, setFormData] = useState(formInitial);
  const [cardData, setCardData] = useState();


  // FUNZIONE CHE CAMBIA INPUT //
  const handleChangeInput = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  // FUNZIONE CHE GESTISCE IL SUBMIT E LA CARD// 
  const handleSubmitForm = (e) =>{
    e.preventDefault()
    // EFFETTUO LA CHIAMATA AXIOS //
    axios.post(apiUrl, formData)
    .then((res) => {
      console.log(res);
      setCardData({...formData})
    })
    .catch((err)=>{
      alert(console.error("Errore nella risposta!"))
    })
  }
  return (
    <>
      <div className="container">
        <h1>My React</h1>
        <form className="row" onSubmit={handleSubmitForm}>
          <div className="col-3">
            <label>Title</label>
            <input className="form-control" 
            type="text" 
            name="title" 
            onChange={handleChangeInput} 
            value={formData.title} 
            id="name"></input>
          </div>
          <div className="col-3">
            <label>Author</label>
            <input className="form-control" 
            type="text" 
            name="author" 
            onChange={handleChangeInput} 
            value={formData.author} 
            id="title"></input>
          </div>
          <div className="col-3">
            <label >Body</label>
            <input className="form-control" 
            type="text" 
            name="body" 
            onChange={handleChangeInput} 
            value={formData.body} 
            id="body"></input>
          </div>
          <div className="col-3">
            <div className="form-check">
              <input className="form-check" 
              type="checkbox" 
              value={formData.public} 
              onChange={handleChangeInput} 
              id="" 
              />
              <label>
                Pubblico
              </label>
            </div>
            <div className="form-check">
              <input className="form-check" 
              type="checkbox" 
              value={formData.public} 
              onChange={handleChangeInput} 
              id="" 
              />
              <label>
                Bozza
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Invio</button>
          </div>
        </form>
        {cardData && ( 
          <div className="card">
            <div className="card-header">
              <h4>{cardData.title}</h4>
              <h6>{cardData.author}</h6>
            </div>
            <div className="card-body">
              <p>{cardData.body}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}