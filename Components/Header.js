import React from 'react'
import Nav from '@/Components/Nav'

const Header = (props) => {
  return (
    <div className='bg-green-200 p-5'>
        Mai Hu MJ84EE21

        <Nav num = {props.num} />
    </div>
  )
}

export default Header