import cart from './images/icon-cart.svg'
import teste from './images/teste.jpg'
import './Card.css'

export function Card() {
  return (
  <div className="relative">
    <div className="retangle-g">
      <div className="group-5">
          <div className="name"> <section>PERFUME</section></div>
          <div className="tittle"> <section>Gabrielle Essence Eau De Parfum</section></div>
          <div className="description"> <section>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</section></div>

          <div className="price"> <section>$149.99</section></div>
          <div className="discount">$169.99</div>
        
            <div className="group">
            <div className="retangle-cart">
              <div className="txt">
                <img src={cart} className="product-cart"/>
                <div className="txt"> Add to Cart </div> 
              </div> 
            </div>
          </div>
            <img src={teste} className="retangle"/>
      </div>
    </div>
  </div>
)
}