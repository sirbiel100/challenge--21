import '../styles/header.scss'
import CountUp from 'react-countup';

function Header() {
    return (
        <section className='header'>
            <h1><CountUp start={5000} end={10000} duration={3} decimal=',' suffix="+"></CountUp> of our users love our products.</h1>
            <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </section>
    );
}

export default Header;