import React from 'react'
import { Link } from 'react-router-dom'
import ContentTop from '../ContentTop/ContentTop'
import './Home.scss'

function Home() {
  return (
    <>
      <div className="content">
        <ContentTop />

        <div className="content__main">
          <div className="content__right-general">
            <h2>Umumiy malumo'tlar</h2>

            <div className="content__right_datas">
              <ul className='content__right_datas_categor_list'>
                <Link to={'/addTheacher'} className="content__right-datas-categor-link">
                  <li className='content__right_datas_categor_item'>
                    <div>
                      <h4>O'quvchilar</h4>
                      <p>239 nafar</p>
                      <span><i className='bx bx-down-arrow-alt'></i> 5 nafar</span>
                    </div>
                    <div className="content__right_datas_categor_item_icon">
                      <i className='bx bxl-deezer'></i>
                      <i className='bx bxl-deezer bx-flip-horizontal' ></i>
                    </div>
                  </li>
                </Link>
                <Link to={'/oqtuvchilar'} className="content__right-datas-categor-link">
                  <li className='content__right_datas_categor_item'>
                    <div>
                      <h4>O'qtuvchilar</h4>
                      <p>7 nafar</p>
                      <span><i className='bx bx-up-arrow-alt'></i> 2 nafar</span>
                    </div>
                    <div className="content__right_datas_categor_item_icon">
                      <i className='bx bxl-deezer'></i>
                      <i className='bx bxl-deezer bx-flip-horizontal' ></i>
                    </div>
                  </li>
                </Link>
                <Link to={'/guruhlar'} className="content__right-datas-categor-link">
                  <li className='content__right_datas_categor_item'>
                    <div>
                      <h4>Guruhlar</h4>
                      <p>33 nafar</p>
                      <span><i className='bx bx-down-arrow-alt'></i> 1 nafar</span>
                    </div>
                    <div className="content__right_datas_categor_item_icon">
                      <i className='bx bxl-deezer'></i>
                      <i className='bx bxl-deezer bx-flip-horizontal' ></i>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
