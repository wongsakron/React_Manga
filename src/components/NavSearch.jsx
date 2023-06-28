import React from 'react'

function NavSearch(props) {
    const { value, onValueChange } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
      <div className="ms-auto">
          
                        <form id="from_Search" className="d-flex ">
                            <input 
                            className="nav-item form-control me-2 m-1" 
                            type="text" 
                            placeholder="Search"
                            value={value}
                            onChange={(e)=>{onValueChange(e.target.value)}}
                            />
                            <button  
                            className="nav-item btn btn-funky-moon m-1" 
                            type="button">
                            Search</button>
                          </form>
                    
                </div>
              </div>
    
    </nav>
  )
}


export default NavSearch


