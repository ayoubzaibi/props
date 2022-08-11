import React from 'react'
import PropTypes from "prop-types";

const Voiture = ({car , handlePrice }) => {
    console.log(car);
  return (
    <div>
       {
        car.map(el=>(
            <dir>
                <h1>{el.brand}</h1>
                <img style={{width:"500 px" ,height:"500px"}} src={el.image} alt="image" />
                <button onClick={()=> handlePrice(el.brand,el.price)}>show price </button>
            </dir>
        ))
       }
    </div>
  )
}
Voiture.propTypes = {
  car:PropTypes.array,
  handlePrice:PropTypes.func,
};
export default Voiture