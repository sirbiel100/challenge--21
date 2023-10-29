import starIcon from '../images/icon-star.svg'
import '../styles/main.scss'

function Main() {
    return (
        <section className='Main'>

            <div className='Testimonial'>
                <div>
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                </div>
                <p>Rated 5 Stars in Reviews</p>
            </div>

            <div className='Testimonial'>
                <div>
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                </div>
                <p>Rated 5 Stars in Report Guru</p>
            </div>

            <div className='Testimonial'>
                <div>
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                    <img src={starIcon} alt="star" />
                </div>
                <p>Rated 5 Stars in BestTech</p>
            </div>

        </section>
    );
}

export default Main;