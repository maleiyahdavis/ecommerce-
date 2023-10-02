import React from 'react';

// export const MerchItem = (props) => {
//     const { image, name, price} = props.data;
//     return <div className='merchItem'>
//         <img src={image}></img>
//         <div>
//             <h1>{name}</h1>
//             <p>${price}</p>
//         </div>
//     </div>
// }

function MerchItem({image, name, price}) {

  return (
    <div className='merchItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
        <button className='addToCart-btn'>Add To Cart</button>  
    </div>
  )
}
 export default MerchItem;