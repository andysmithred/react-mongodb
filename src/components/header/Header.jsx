import logo from '../../assets/CIV-7-620x350.png'
import './Header.css';
import Clock from '../../utils/Clock';

const Header = () => {
    return (
        <header className={`d-flex mx-1 pb-3 app-header`}>
            <div>
                <img src={logo} className="app-logo" alt="logo" />
            </div>
            <div className="mt-2 mx-5">React Data</div>
            <div className="clock mt-2">
                <Clock />
            </div>
        </header>
    )
};

export default Header;
