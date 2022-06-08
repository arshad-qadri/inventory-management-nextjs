import { Button } from 'react-bootstrap'
import React from 'react'

const Header = () => {
  return (
    <div className='w-100 bg-primary header border-bottom px-5'>
      <div className='d-flex justify-content-end align-items-center h-100'>
        <Button variant="light" size="sm">Add Item</Button>
      </div>
    </div>
  )
}

export default Header
