import React from 'react'
import './ContentTop.scss'

function ContentTop() {
  return (
    <>
      <div className="content__top">
        <div className="content__top-search-box">
          <span>
            <i className='bx bx-search'></i>
          </span>
          <input type="text" name="text" id="text" placeholder='Search transections, invoices or help' />
        </div>
        <div className="content__right-top-user">
          <button>
            <i className='bx bxs-bell'></i>
          </button>
          <select>
            <option value="Berdiyev Javohir">Berdiyev Javohir</option>
            <option value="Jamoliddin Najmiddinov">Jamoliddin Najmiddinov</option>
            <option value="Berdiyev Javohir">Berdiyev Javohir</option>
          </select>

          <div className='content__right-user-img'>
            <img src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" alt="avatar" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentTop
