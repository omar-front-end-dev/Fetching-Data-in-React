import { Container } from 'react-bootstrap'
import './App.css'
import Nav_bar from './components/nav_bar/nav_bar'
import { Product_List } from './components/product_list/Product_List'


function App() {
  

 

  return (
    <>
    <Nav_bar/>
    <Container>
      <Product_List />
    </Container>
    </>
  )
}

export default App
