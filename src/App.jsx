export  default function App(){
  return (
    <>
      <div className="container">
        <h1>My React</h1>
        <form className="row">
          <div className="col-3">
            <label htmlFor="">Author</label>
            <input className="form-control" type="text" name="author" onChange={()=>{}} value={""} id="name"></input>
          </div>
          <div className="col-3">
            <label htmlFor="">Title</label>
            <input className="form-control" type="text" name="title" onChange={()=>{}} value={""} id="title"></input>
          </div>
          <div className="col-3">
            <label htmlFor="">Body</label>
            <input className="form-control" type="text" name="body" onChange={()=>{}} value={""} id="body"></input>
          </div>
          <div className="col-3">
            <label htmlFor="">Public</label>
            <input className="form-control" type="text" name="public" onChange={()=>{}} value={""} id="public"></input>
          </div>
        </form>
      </div>
    </>
  )
}