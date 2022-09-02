function Card({item,cartItem, addtokart}){
    return  <div className="col-lg-4 mb-2">
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/90/50"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">
          {item.price}
        </p>
        <button disabled={cartItem.some((obj)=> obj.id===item.id)} onClick={()=>{addtokart(item)}} class="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  </div>
}

export default Card;

