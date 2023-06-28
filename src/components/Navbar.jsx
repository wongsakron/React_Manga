import React from "react";
const Navbar = () => { 
    return (      
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">Manga</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>   
                <div id="navbar1" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">หน้าแรก</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#myModal">เพิ่มมังงะ</a>
                        </li>
                        <li className="nav-item">
                            <a href="/About" className="nav-link">เกี่ยวกับเรา</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;