import { useState, useEffect } from 'react'
import { Product_Card } from "../product/Product"
import axios from 'axios'
import { Row } from 'react-bootstrap'
export function Product_List() {

    const [products , setProducts] = useState([])

    useEffect(() =>{
      axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((error) =>{
        console.log(error);
      })
    }, [])


  return (
      <div className='product py-5'>
        <Row>
            {products.map(product =>{
            return <Product_Card key={product.id} product={product} />
            })}
        </Row>
      </div>
  )
}
