import React, { useState } from 'react'
import {FaFutbol,FaBars,FaUser, FaUserCircle, FaTimes, FaHome, FaCalendar, FaFilm, FaNewspaper, FaTable, FaUserAstronaut} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [closess,setClosess]=useState(false);
    return (
        <div className="nav">
            <i className="nav-logo"><FaFutbol></FaFutbol></i>
            <div className="nav-list">
                <ul>
                    <li><Link to="/"><p className="link">Trang Trủ</p></Link></li>
                    <li><Link to="/"><p className="link">Lịch Chiếu</p></Link></li>
                    <li><Link to="/"><p className="link">Cụm Rạp</p></Link></li>
                    <li><Link to="/"><p className="link">Tin tức</p></Link></li>
                    <li><Link to="/"><p className="link">Khuyến Mại</p></Link></li>
                    
                </ul>
            </div>
            <div className="nav-log">
           <Link to="/"><p className="link"> <i><FaUser></FaUser></i> &ensp; Đăng Nhập</p> </Link> 
           <p>|</p>
           <Link to="/"><p className="link"> <i><FaUserCircle></FaUserCircle></i> &ensp; Đăng Ký</p> </Link> 
            </div>
            
            <p className="nav-icons">
                <i onClick={()=>setClosess(true)}><FaBars></FaBars></i></p>
                <div className={`${closess?"nav-khung mo":"nav-khung"}`} onClick={()=>setClosess(false)}>
                    <div className="nav-kh">
                        <ul>
                            <li>
                               <i className="nav-close" onClick={()=>setClosess(false)}>
                                   <FaTimes></FaTimes>
                               </i>
                                
                            </li>
                            <Link to="/"><li className="link"><i className="text-primary"><FaUser></FaUser></i><b>Đăng Nhập</b></li></Link>
                            <Link to="/"><li className="link"><i  className="text-sencondary"><FaUserCircle></FaUserCircle></i><b>Đăng Ký</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-success"><FaHome></FaHome></i><b>Trang trủ</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-danger"><FaCalendar></FaCalendar></i><b>Lịch Chiếu</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-dark"><FaFilm></FaFilm></i><b>Cụm Rạp</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-warning"><FaNewspaper></FaNewspaper></i><b>Tin Tức</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-body"><FaTable></FaTable></i><b>Ứng Dụng</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-muted"><FaUserAstronaut></FaUserAstronaut></i><b>Đăng xuất</b></li></Link>

                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Navbar
