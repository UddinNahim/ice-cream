
  import React from "react";
  const Builder = () =&gt; {'{'}
  return (
  <div className="builder">
    <h3>Build your own Ice Cream Sundae</h3>
    {/* items start */}
    <div className="react" id="items">
      <ul>
        {/* item start */}
        <li className="react item" id="item">
          <span>Vanilla</span>
          <span className="quantity">2</span>
          <div className="right">
            <button type="button" className="plus rounded">+</button>
            <button type="button" className="minus rounded">-</button>
          </div>
        </li>
        {/* item end */}
        <li className="item">
          <span>Chocolate</span>
          <div className="right">
            <button type="button" className="plus rounded">+</button>
            <button type="button" className="minus rounded">-</button>
          </div>
        </li>
        <li className="item">
          <span>Strawberry</span>
          <div className="right">
            <button type="button" className="plus rounded">+</button>
            <button type="button" className="minus rounded">-</button>
          </div>
        </li>
        <li className="item">
          <span>Orange</span>
          <div className="right">
            <button type="button" className="plus rounded">+</button>
            <button type="button" className="minus rounded">-</button>
          </div>
        </li>
      </ul>
    </div>
    {/* items end */}
    {/* total price start */}
    <div className="total react" id="total">
      <div>Total Price</div>
      <div>3000.00 Tk</div>
    </div>
    {/* total price end */}
    <button type="button" onclick="next()" className="order rounded">
      Add to Cart
    </button>
  </div>
  )
  {'}'};
  export default Builder;

