import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
//import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <>
      
      <Navbar/>

      <ItemListContainer greeting='Bienvenidos a OverDrive'/>

      <Footer/>

    </>
  )
}

export default App
