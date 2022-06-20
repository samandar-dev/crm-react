import React, { useState } from 'react'
import NavItems from './NavItems/NavItems'
import './Navbar.scss'

function Navbar() {

  const btns = [
    {
      id: 1,
      name: `Umumiy malumo'tlar`,
      icon: 'bx bxs-bar-chart-square',
      active: true,
      pathName: 'home',
    },
    {
      id: 2,
      name: `Hisob holati`,
      icon: 'bx bx-window',
      active: false,
      pathName: 'hisob',
    },
    {
      id: 3,
      name: `O'quvchilar`,
      icon: 'bx bxs-user-voice',
      active: false,
      pathName: 'addTheacher',
    },
    {
      id: 4,
      name: `Guruhlar`,
      icon: 'bx bxs-group',
      active: false,
      pathName: 'guruhlar',
    },
    {
      id: 5,
      name: `Dars Jadvali`,
      icon: 'bx bx-calendar-edit',
      active: false,
      pathName: 'dars',
    },
    {
      id: 6,
      name: `Hisobotlar`,
      icon: 'bx bxs-save',
      active: false,
      pathName: 'hisobotlar',
    },
    {
      id: 7,
      name: `O'qtuvchilar`,
      icon: 'bx bx-user',
      active: false,
      pathName: 'oqtuvchilar',
    },
    {
      id: 8,
      name: `Sozlanma`,
      icon: 'bx bxs-cog',
      active: false,
      pathName: 'addTheacher',
    },
    {
      id: 9,
      name: `Log Out`,
      icon: 'bx bx-log-in',
      active: false,
      pathName: '/edit/:id',
    },
  ]
  const [navBtns, setNavBtns] = useState([...btns])

  return (
    <>
      <div className="navbarr col-2">
        <div className="navbarr__title-box">
          <h3>FAJJ EDUCATION</h3>
          <button>
            <i className='bx bx-x'></i>
          </button>
        </div>

        <nav className="navbarr__nav">
          <ul className="navbarr__nav__list">
            <NavItems navBtns={navBtns} />
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
