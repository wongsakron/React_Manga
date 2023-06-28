import React, { useEffect, useState } from 'react';
import GetData from '../Api/GetData';

const Manga = (props) =>{
    const [count, setCount] = useState([]);
    const {filters} = props
    useEffect(() =>{
        GetData.then((data)=>{
          setCount(data)
        })
    },[])

const data = count.filter((discounts)=>{
        return discounts.title.toLowerCase().includes(filters.toLowerCase())
        }).map((counts =>{
            return (
                <div className="col-sm-6  col-md-4  col-xl-2 " key={counts.uuid}>
                <div className=" d-grid container p-3 ">
                  <div className="content">{counts.title}</div>
                  <img className="img-rounded bg-test rounded mx-auto d-block" src={counts.img} width="90%"/>   
                  <button className="btn btn-funky-moon btn-rounded"> Click Read </button>
                </div>
                </div>
          )
      }))
    return(
        <div className="container">
                <div className="row">
                    {data}
                </div>  
            </div>
       
    )
}

export default Manga;