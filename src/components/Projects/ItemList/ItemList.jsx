import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"

const ItemList = ({data}) => {
  return (
    <div className='item-list'>
        {
            data.map((item, index) => (
                <Item cover_image={item.cover_image} demo_link={item.demo_link} repository_link={item.repository_link} title={item.title} key={index} />
            ))
        }
    </div>
  )
}

export default ItemList