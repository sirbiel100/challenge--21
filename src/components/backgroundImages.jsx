import topMobileImage from '../images/bg-pattern-top-mobile.svg';
import bottomMobileImage from '../images/bg-pattern-bottom-mobile.svg';
import topDesktopImage from '../images/bg-pattern-top-desktop.svg';
import bottomDesktopImage from '../images/bg-pattern-bottom-desktop.svg';
import '../styles/backgroundImage.scss'

function BackgroundImages(){
    return (
        <section className='BGImages'>
            <img src={topMobileImage} alt="" />
            <img src={bottomMobileImage} alt="" />
            <img src={topDesktopImage} alt="" />
            <img src={bottomDesktopImage} alt="" />
        </section>
    );
}

export default BackgroundImages