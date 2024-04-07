import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Blush from './pages/Blush'
import Bronzer from './pages/Bronzer'
import Eyebrow from './pages/Eyebrow'
import Eyeliner from './pages/Eyeliner'
import Eyeshadow from './pages/Eyeshadow'
import Foundation from './pages/Foundation'
import Lipliner from './pages/Lipliner'
import Lipstick from './pages/Lipstick'
import Mascara from './pages/Mascara'
import Nailpolish from './pages/Nailpolish'
import Bybeautybay from './pages/Bybeautybay'
import Almay from './pages/Almay'
import Alva from './pages/Alva'
import Anabelle from './pages/Anabelle'
import Benefit from './pages/Benefit'
import Maybeline from './pages/Maybeline'
import W3people from './pages/W3people'
import Anabelleproducts from './pages/Anabelleproducts'
import Almayproduct from './pages/Almayproduct'
import Alvaproduct from './pages/Alvaproduct'
import Benefitproduct from './pages/Benefirproduct'
import Maybelineproduct from './pages/Maybelineproduct'
import W3peopleproduct from './pages/W3peopleproduct'
import Blushproduct from './pages/Blushproduct'
import Bag from './pages/Bag'
import Likes from './pages/Likes'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Bybeautybay/>} />
        <Route path='/blush' element={<Blush/>} />
        <Route path='/blush/:productId' element={<Blushproduct/>} />
        <Route path='/bronzer' element={<Bronzer/>} />
        <Route path='/bronzer/:productId' element={<Blushproduct/>} />
        <Route path='/eyebrow' element={<Eyebrow/>} />
        <Route path='/eyebrow/:productId' element={<Blushproduct/>} />
        <Route path='/eyeliner' element={<Eyeliner/>} />
        <Route path='/eyeliner/:productId' element={<Blushproduct/>} />
        <Route path='/eyeshadow' element={<Eyeshadow/>} />
        <Route path='/eyeshadow/:productId' element={<Blushproduct/>} />
        <Route path='/foundation' element={<Foundation/>} />
        <Route path='/foundation/:productId' element={<Blushproduct/>} />
        <Route path='/lipliner' element={<Lipliner/>} />
        <Route path='/lipliner/:productId' element={<Blushproduct/>} />
        <Route path='/lipstick' element={<Lipstick/>} />
        <Route path='/lipstick/:productId' element={<Blushproduct/>} />
        <Route path='/mascara' element={<Mascara/>} />
        <Route path='/mascara/:productId' element={<Blushproduct/>} />
        <Route path='/nailpolish' element={<Nailpolish/>} />
        <Route path='/nailpolish/:productId' element={<Blushproduct/>} />
        <Route path='/almay' element={<Almay/>} />
        <Route path='/almay/:productId' element={<Almayproduct/>} />
        <Route path='/alva' element={<Alva/>} />
        <Route path='/alva/:productId' element={<Alvaproduct/>} />
        <Route path='/anabelle' element={<Anabelle/>} />
        <Route path='/anabelle/:productId' element={<Anabelleproducts/>} />
        <Route path='/benefit' element={<Benefit/>} />
        <Route path='/benefit/:productId' element={<Benefitproduct/>} />
        <Route path='/maybeline' element={<Maybeline/>} />
        <Route path='/maybeline/:productId' element={<Maybelineproduct/>} />
        <Route path='/w3people' element={<W3people/>} />
        <Route path='/w3people/:productId' element={<W3peopleproduct/>} />
        <Route path='/bag' element={<Bag/>} />
        <Route path='/likes' element={<Likes/>} />
      </Routes>
    </>
  )
}

export default App
