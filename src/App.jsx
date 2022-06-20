
import Navbar from './companents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './companents/Contents/Home/Home';
import Groups from './companents/Contents/Groups/Groups';
import Theacher from './companents/Contents/Theacher/Theacher';
import './App.scss';
import AddTheacher from './companents/Contents/Theacher/AddTheacher/AddTheacher';
import EditTheacher from './companents/Contents/Theacher/EditTheacher/EditTheacher';

function App() {
  return (
    <>
      <section className='app d-flex'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/guruhlar' element={<Groups />} />
          <Route path='/oqtuvchilar' element={<Theacher />} />
          <Route path='/addTheacher' element={<AddTheacher />} />
          <Route path='/edit/:id' element={<EditTheacher />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
