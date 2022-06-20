import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavItems.scss'

function NavItems({ navBtns }) {
  return (
    <>
      {navBtns.map((itm, i) => (
        <NavLink to={"/" + itm.pathName} key={itm.id} className="w-100">
          <li className={`navbarr__nav__item ${itm.active ? "navitem-act" : ""}`} onClick={() => itm.active = true}>
            <button className='navbarr__nav__btn' id={itm.id}>
              <i className={itm.icon}></i> {itm.name}
            </button>
          </li>
        </NavLink>
      ))}
    </>
  )
}

export default NavItems
