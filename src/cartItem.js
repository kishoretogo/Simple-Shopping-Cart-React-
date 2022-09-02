function CartItem({cartItem, removekart}) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{cartItem.name}</div>
        {cartItem.price}
      </div>
      <button onClick={()=>(removekart(cartItem))} class="badge bg-primary rounded-pill">X</button>
    </li>
  );
}

export default CartItem;
