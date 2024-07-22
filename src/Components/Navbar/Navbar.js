// import React, { useState } from 'react'; 
// import { FaCartPlus , FaShoppingBag } from 'react-icons/fa';
// import './Navbar.css'
// import { Link } from 'react-router-dom';
// function Navbar(){
//     const [menu,setmenu] = useState("shop")
//     return(
//         <>
//         <div id='navbar'>
//         <FaShoppingBag className='logo'/>
    
       
//         <ul className='list'>
//             <li onClick={()=>{setmenu("shop")}}> <Link style={{textDecoration:"none"}}   to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
//             <li onClick={()=>{setmenu("men")}}><Link  style={{textDecoration:"none"}} to='/men'>Men</Link> {menu==="men"?<hr/>:<></>} </li>
//             <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:"none"}} to='/women'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
//             <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
//         </ul>
//         <div className='btn'>
//             <Link style={{textDecoration:"none"}} to='/login'><button className='loginbtn'>Login</button></Link>
//             <Link  style={{textDecoration:"none"}} to='/cart'><FaCartPlus className='cart-icon'/></Link>
          
//             <div className='nav-count'>0</div>
//         </div>
//         </div>
//         </>
//     )
// }
// export default Navbar;
import React, { useState, useEffect } from 'react'; 
import { FaCartPlus, FaShoppingBag, FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    // Close the sidebar when the screen size changes to larger than 900px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setSidebar(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div id='navbar'>
                <FaShoppingBag className='logo'/>
                <ul className={`list ${sidebar ? 'active' : ''}`}>
                    <li onClick={() => { setMenu("shop") }}> 
                        <Link style={{ textDecoration: "none" }} to='/'>Shop</Link> 
                        {menu === "shop" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("men") }}>
                        <Link style={{ textDecoration: "none" }} to='/men'>Men</Link> 
                        {menu === "men" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("women") }}>
                        <Link style={{ textDecoration: "none" }} to='/women'>Women</Link> 
                        {menu === "women" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("kids") }}>
                        <Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link> 
                        {menu === "kids" ? <hr /> : null}
                    </li>
                </ul>
                <div className='btn'>
                    <Link style={{ textDecoration: "none" }} to='/login'><button className='loginbtn'>Login</button></Link>
                    <Link style={{ textDecoration: "none" }} to='/cart'><FaCartPlus className='cart-icon'/></Link>
                    <div className='nav-count'>0</div>
                </div>
                <FaBars className='hamburger' onClick={toggleSidebar} />
            </div>
            {sidebar && (
                <div className='sidebar'>
                    <ul className='sidebar-list'>
                        <li onClick={() => { setMenu("shop"); toggleSidebar(); }}> 
                            <Link style={{ textDecoration: "none" }} to='/'>Shop</Link>
                        </li>
                        <li onClick={() => { setMenu("men"); toggleSidebar(); }}>
                            <Link style={{ textDecoration: "none" }} to='/men'>Men</Link>
                        </li>
                        <li onClick={() => { setMenu("women"); toggleSidebar(); }}>
                            <Link style={{ textDecoration: "none" }} to='/women'>Women</Link>
                        </li>
                        <li onClick={() => { setMenu("kids"); toggleSidebar(); }}>
                            <Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link>
                        </li>
                        <li onClick={toggleSidebar}>
                            <Link style={{ textDecoration: "none" }} to='/login'><button className='loginbtn'>Login</button></Link>
                        </li>
                        <li onClick={toggleSidebar}>
                            <Link style={{ textDecoration: "none" }} to='/cart'><FaCartPlus className='cart-icon'/></Link>
                            <div className='nav-count'>0</div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;



