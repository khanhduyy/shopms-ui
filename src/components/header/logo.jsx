import MyImage from "../image/image"
import './header.css'
const Logo = () => {
    return (
        <div className="LogoWrapper">
            <div className="Logo">
                <MyImage src="./logo192.png" />
            </div>
        </div>
    )
}

export default Logo