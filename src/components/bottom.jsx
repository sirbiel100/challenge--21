import Colton from '../images/image-colton.jpg'
import Irene from '../images/image-irene.jpg'
import Anne from '../images/image-anne.jpg'
import '../styles/bottom.scss'

function Bottom() {
    return (
        <section className='Bottom'>

            <header>
                <div className='profile'>
                    <img src={Colton} alt="Colton Smith" />
                    <div>
                        <h1>Colton Smith</h1>
                        <span>Verified Buyer</span>
                    </div>
                </div>
                <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
            </header>

            <main>
                <div className='profile'>
                    <img src={Irene} alt="Irene Roberts" />
                    <div>
                        <h1>Irene Roberts</h1>
                        <span>Verified Buyer</span>
                    </div>
                </div>
                <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>

            </main>

            <bottom>
                <div className='profile'>
                    <img src={Anne} alt="Anne Wallace" />
                    <div>
                        <h1>Anne Wallace</h1>
                        <span>Verified Buyer</span>
                    </div>
                </div>
                <p>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
            </bottom>

        </section>
    );
}

export default Bottom;