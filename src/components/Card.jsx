import PropTypes from "prop-types";

const Card = ({item}) => {

    return (
    <div className="container-fluid">   
        <div className="rounded-sm p-3 shadow-sm h-100">
            <div className="mb-3">
                <img className="img-fluid w-100" src={item.img} alt="" />
            </div>
            <div>
                <h2 className="fs-6">{item.name}</h2>
                <h3 className="fs-6">₦{item.price}</h3>
               <button className="btn btn-primary rounded" onClick={()=>{  
                }}>
                     Add to Cart
                </button>
            </div>
         </div> 
    </div> 
  )
};

Card.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
    
}

export default Card