import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()


  let navbarComponent

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia - Renan Ramos</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <div className='hover:underline'>Categoria</div>
              <Link to='/categoria' className='hover:underline'>Categorias</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar