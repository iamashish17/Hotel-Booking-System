import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import AllRooms from './Pages/AllRooms';
import Footer from './Components/Footer';
import RoomDetail from './Pages/RoomDetail';
import MyBooking from './Pages/MyBooking';
import HotelReg from './Components/HotelReg';
import Layout from './Pages/hotelOwner/Layout';
import DashBoard from './Pages/hotelOwner/DashBoard';
import AddRoom from './Pages/hotelOwner/AddRoom';
import ListRoom from './Pages/hotelOwner/ListRoom';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar /> }
      { false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>
          <Route path='/my-bookings' element={<MyBooking/>}/>
          <Route path='/owner' element={<Layout/>}>
              <Route index element ={<DashBoard />} />
              <Route index element ={<AddRoom />} />
              <Route index element ={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App