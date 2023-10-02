import React from 'react';
import { MerchList } from '../../helpers/merchlist';
import MerchItem from '../merchitem/MerchItem';
import "./Merchandise.css";

function Merchandise() {
  return (
    // <div className='merch'>
    //   <div className='title'> 
    //     <h1>Merchandise</h1>
    //   </div>
    //   <div className='merchList'>
    //     {" "}
    //     {MerchList.map((merch) => (
    //       <MerchItem data={merch} />
    //     ))}
    //   </div>
    // </div>
    <div className='merch'>
      <h1 className='title'>Merchandise</h1>
      <div className='merchList'>
        {MerchList.map((merchItem, key) =>{
        return (
          <MerchItem
            key={key}
            image={merchItem.image}
            name={merchItem.name}
            price={merchItem.price}/>
        )
      })}
      </div>
    </div>
  )
}

export default Merchandise;