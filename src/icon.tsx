export const Icon = ({count})=>{
    return (
        <li className="ui dropdown">
      <div className="option_links" title="Cart">
        <i className="uil uil-shopping-cart-alt"></i>
        {count}
      </div>
    </li>
    )
}