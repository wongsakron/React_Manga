import React, { useState } from 'react'

const objvalue = { title:"",img:"",url:""}
function PostForm() {
  const url ="YOU DATA BASE"

  const [data,setData] = useState(objvalue)

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }

  function submit(e){
    e.preventDefault();
    fetch(url, {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify({title:data.title,img:data.img,url:data.url}),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }).then(res=>{
      alert(res);
      window.location.reload(false);
    }).catch(error=>{
      alert(error);
    });
  }
 

  return (
    <div>
        <form onSubmit={(e)=> submit(e)}>
          <div className="form-group ">
           <label>Title</label>
           <input 
            className="form-control"
            onChange={(e)=>handle(e)}
            id="title"
            value={data.title}
            placeholder="ชื่อเรื่อง" 
            type="text"
            maxLength={25}
            required />
           <label>Img Url</label>
           <input 
            className="form-control"
            onChange={(e)=>handle(e)}
            id="img"
            value={data.img}
            placeholder="Link Img URL" 
            type="text" 
            required/>
            <label>Web URL</label>
           <input 
            className="form-control"
            onChange={(e)=>handle(e)}
            id="url"
            value={data.url}
            placeholder="Link Web Manga URL" 
            type="text" 
            required/>
             <div className="modal-footer">
                  <button className="btn btn-success" >Submit</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default PostForm;

