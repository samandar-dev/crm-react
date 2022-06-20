import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import oqtuvchiObj from '../../../../Objects/OqtuvchiObj'
import { TheacherContext } from '../../../../store/Oqtuvchilar/OqtuvchiContext'
import ContentTop from '../../ContentTop/ContentTop'
import './AddTheacher.scss'

function AddTheacher() {
  const { addTheacherFunc } = useContext(TheacherContext)

  const [fName, setFName] = useState('')
  const [numberr, setNumberr] = useState(0)
  const [science, setScience] = useState('Active')
  const [holati, setholati] = useState('')
  const [mony, setMony] = useState('2 000 000')

  const changeFunc = (e) => {
    if (e.target.id === 'firstName') {
      setFName(e.target.value)
    }
    if (e.target.id === 'number') {
      setNumberr(e.target.value)
    }
    if (e.target.id === 'scienceName') {
      setScience(e.target.value)
    }
    if (e.target.id === 'select') {
      if (e.target.value !== 'Holati') {
        setholati(e.target.value)
      }
    }
  }

  const submitFunc = (e) => {
    e.preventDefault()
    addTheacherFunc({
      oqtuvchiID: oqtuvchiObj.length + 1,
      fullName: fName,
      guruhlari: [1, 3],
      avatar: 'https://picsum.photos/100',
      telifonRaqam: `(99) ${numberr}`,
      fanNomi: science,
      holati: holati,
      hisobHolati: mony,
      vaqti: 'Iyun 20, 2022',
    })
    e.target.reset()
  }

  return (
    <>
      <div className="addTheacher">
        <ContentTop />
        <div className="addTheacher__main">
          <h3 className="addTheacher__title">O'qituvchi qo'shish</h3>
          <form className='addTheacher__form' onSubmit={submitFunc}>
            <div className="addTheacher__form-inp-box">
              <input type="text" name="text" id="firstName" placeholder='Ismi' onChange={changeFunc} required />
              <p>O'qitivchini ismini kiriting</p>
            </div>
            <div className="addTheacher__form-inp-box">
              <input type="number" name="number" id="number" placeholder='Telefon raqam' onChange={changeFunc} required />
              <p>O'qitivchini telefon raqamini kiriting</p>
            </div>
            <div className="addTheacher__form-inp-box">
              <input type="text" name="text" id="scienceName" placeholder='Fanlar' onChange={changeFunc} required />
              <p>O'qitivchini o'tadigan fanlarini kiriting</p>
            </div>
            <div className="addTheacher__form-inp-box">
              <select id="select" onChange={changeFunc}>
                <option>Holati</option>
                <option>Active</option>
                <option>Muzlatilgan</option>
              </select>
              <p>O'qitivchini holatini kiriting</p>
            </div>
            <div className="addTheacher__form-mony-box">
              <p>Oylik bo'yicha</p>
              <p>2 000 000</p>
            </div>

            <Link to={'/oqtuvchilar'}>
              <button className='btn btn-danger me-3' type='button'>Bekor qilish</button>
            </Link>
            <button className='btn btn-primary'>Qo'shish</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddTheacher
