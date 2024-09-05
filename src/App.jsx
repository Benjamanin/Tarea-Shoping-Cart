import './App.css'
import {products} from './mocks/products.json'
import Header from './componentes/Header'
import Filters from './componentes/Filters'
import Item from './componentes/Item'
import Productos from './componentes/'

function App() {

  return(
    <>
      <Header/>
      <Filters/>
      <Item/>
    </>
  )
}

export default App
