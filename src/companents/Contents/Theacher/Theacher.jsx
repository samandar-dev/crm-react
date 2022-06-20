import React from 'react'
import { useContext } from 'react'
import ContentTop from '../ContentTop/ContentTop'
import { TheacherContext } from '../../../store/Oqtuvchilar/OqtuvchiContext'
import './Theacher.scss'
import { Link } from 'react-router-dom'

function Theacher() {
  const { oqtuvchilar, removeFunc, setEitdID } = useContext(TheacherContext)
  return (
    <>
      <div className="theacher">
        <ContentTop />
        <div className="theacher__main">
          <div className="theacher__add-box">
            <div className="theacher__title-form">
              <div className="theacher__title">
                <h2 className='me-4'>O'quvchilar</h2>
                <Link to={'/addTheacher'}>
                  <button className='btn btn-primary'>Oquvchilar qo'shish</button>
                </Link>
              </div>
              <form className="theacher__form">
                <span><i className='bx bx-search' ></i></span>
                <input className='input' type="text" name="text" id="text" placeholder={`Isim bo'yicha qidirish`} />
              </form>
            </div>
            <div>
              <span>1-7 / 33 tadan</span>
            </div>
          </div>

          <div className="theacher__tabel">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ISM</th>
                  <th scope="col">GUGUR</th>
                  <th scope='col'>TELIFON RAQAM</th>
                  <th scope='col'>VAQTI</th>
                  <th scope='col'>HOLATI</th>
                  <th scope='col'>HISOB HOLATI</th>
                </tr>
              </thead>
              <tbody>
                {oqtuvchilar.map((obj, inx) => (
                  <tr key={inx + 1}>
                    <th scope='row'>{inx + 1}</th>
                    <td className='table__name'>
                      <div className='table__avatar-img'>
                        <img src={obj.avatar} alt={obj.holati} />
                      </div>
                      <p>
                        {obj.fullName}
                      </p>
                    </td>
                    <td >
                      <p>Guruh #{inx + 1}</p>
                    </td>
                    <td>
                      <p>{obj.telifonRaqam}</p>
                    </td>
                    <td>
                      <p>{obj.vaqti}</p>
                    </td>
                    <td>
                      <p>{obj.holati}</p>
                    </td>
                    <td>
                      <p>UZS {obj.hisobHolati}</p>
                    </td>
                    <td>
                      <div className="table__btns-box">
                        <button className='table__eror_btn'>
                          <i className='bx bx-error-circle'></i>
                        </button>
                        <Link to={`/edit/${obj.oqtuvchiID}`} >
                          <button className='table__edit'>
                            <i className='bx bx-edit-alt'></i>
                          </button>
                        </Link>
                        <button className='table__remov' onClick={() => removeFunc(obj.oqtuvchiID)}>
                          <i className='bx bx-x' ></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Theacher
