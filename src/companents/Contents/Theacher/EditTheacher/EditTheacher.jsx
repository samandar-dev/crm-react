import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TheacherContext } from '../../../../store/Oqtuvchilar/OqtuvchiContext'
import ContentTop from '../../ContentTop/ContentTop'
import './EditTheacher.scss'

function EditTheacher() {
  const uselocation = useLocation()
  const [editFullName, setEditFullName] = useState('')
  const [editData, setEditData] = useState('')
  const [editNumber, setEditNumber] = useState('')

  const { editFunc, editID, oqtuvchilar } = useContext(TheacherContext)



  const changeFunc = (e) => {
    console.log(editID);
    oqtuvchilar.map(obj => {
      setEditFullName(obj.fullName)
      setEditNumber(obj.telifonRaqam)
      if (obj.oqtuvchiID == uselocation.pathname.split('/').at(-1)) {
        if (e.target.id === 'fullName') {
          obj.fullName = e.target.value
          setEditFullName(e.target.value)
        }
        if (e.target.id === 'number') {
          obj.telifonRaqam = e.target.value
          setEditNumber(e.target.value)
        }
      }
    })
  }

  const submitFunc = (e) => {
    e.preventDefault()
    editFunc({
      editFullName: editFullName,
      editData: editData,
      editNumber: editNumber,
    })
    e.target.reset()
  }

  return (
    <>
      <div className="editTheach">
        <ContentTop />
        <div className="editTheach__main">
          <h3>O'quvchini tahrirlash</h3>

          <div className="editTheach__con-box">
            <div className="editTheach__user-box">
              <div className='editTheach__img-name-box'>
                <img src="https://picsum.photos/100" alt="" />
                <div className='editTheach__name'>
                  <p>{editFullName}</p>
                  <p>{editNumber}</p>
                </div>
              </div>
              <div className='editTheach__desc'>
                <p>Guruhlar: <span>1 ta</span></p>
                <p>Jami qoldirgan darslari: <span>0 ta</span></p>
              </div>
            </div>
            <form className="editTheach__form" onSubmit={submitFunc}>
              <div className="editTheach__form-inps">
                <div className="editTheach__inp-box">
                  <input
                    type="text" name='text'
                    id='fullName' placeholder='Valibek Nasimov'
                    onChange={changeFunc}
                    value={editFullName}
                  />
                  <p>O'quvchining ismini kiriting</p>
                </div>
                <div className="editTheach__inp-box">
                  <input
                    type="number" name='data'
                    id='data' placeholder='26-09-1996'
                    onChange={changeFunc}
                    value={editData}
                  />
                  <p>O'quvchining tug'ilgan sanasini kiriting</p>
                </div>
                <div className="editTheach__inp-box">
                  <input
                    type="number" name='number'
                    id='number' placeholder='(90) 196-10-10'
                    onChange={changeFunc}
                    value={editNumber}
                  />
                  <p>O'quvchining telefon raqamini kiriting</p>
                </div>
              </div>

              <div className="editTheach__groups-money">
                <div>
                  <p className='guruh'>Guruh #11</p>
                  <p className='fani'>Ona tili</p>
                  <p className='money'>UZS 180,000</p>
                </div>
                <button><i className='bx bx-user-plus'></i> Guruh qo'shish</button>
              </div>

              <div className="editTheach__form-btns">
                <Link to='/oqtuvchilar'>
                  <button className='btn btn-danger' type='button'>Bekor qilish</button>
                </Link>
                <button className='btn btn-primary ms-3'>Saqlash</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTheacher
