import React from 'react'
import ContentTop from '../ContentTop/ContentTop'
import guruhlarObj from '../../../Objects/GuruhlarObj'
import './Groups.scss'
import { useContext } from 'react'
import { GroupsContext } from '../../../store/Guruhlar/GuruhContext'
import oqtuvchiObj from '../../../Objects/OqtuvchiObj'

function Groups() {
  const { guruhlar, removeFunc } = useContext(GroupsContext)
  return (
    <>
      <div className="groups">
        <ContentTop />
        <div className="groups__main">
          <div className="groups__add-box">
            <div className="groups__title-form">
              <div className="groups__title">
                <h2 className='me-4'>O'quvchilar</h2>
                <button className='btn btn-primary'>Oquvchilar qo'shish</button>
              </div>
              <form className="groups__form">
                <span><i className='bx bx-search' ></i></span>
                <input className='input' type="text" name="text" id="text" placeholder={`Isim bo'yicha qidirish`} />
              </form>
            </div>
            <div>
              <span>1-7 / 33 tadan</span>
            </div>
          </div>

          <div className="groups__tabel">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">GUGUR NOMI</th>
                  <th scope='col'>HOLATI</th>
                  <th scope='col'>FAN NOMI</th>
                  <th scope='col'>TALIM SHAKLI</th>
                  <th scope='col'>TOLOV MIQDORI</th>
                  <th scope='col'>OQTUVCHI</th>
                </tr>
              </thead>
              <tbody>
                {guruhlar.map((obj, inx) => (
                  <tr key={inx + 1}>
                    <th scope='row'>{inx + 1}</th>
                    <td className='table__name'>
                      <p>GURUH #{obj.guruhID}</p>
                    </td>
                    <td >
                      <p>{obj.holati}</p>
                    </td>
                    <td>
                      <p>{obj.guruhFani}</p>
                    </td>
                    <td>
                      <p>{obj.talimShakli}</p>
                    </td>
                    <td>
                      <p>UZS {obj.tolov}</p>
                    </td>
                    <td>
                      {/* {oqtuvchiObj.map(itm => (
                        <div className="theacher__box">
                          <img src={itm.avatar} alt="" />
                          <p>{itm.fullName}</p>
                        </div>
                      ))} */}
                    </td>
                    <td>
                      <div className="table__btns-box">
                        <button className='table__eror_btn'>
                          <i className='bx bx-error-circle'></i>
                        </button>
                        <button className='table__edit'>
                          <i className='bx bx-edit-alt'></i>
                        </button>
                        <button className='table__remov' onClick={() => removeFunc(obj.guruhID)}>
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

export default Groups
