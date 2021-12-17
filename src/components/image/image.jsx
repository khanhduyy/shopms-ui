import "./image.css"
import { Parallax } from 'react-scroll-parallax';

const MyImage = ({src, parallax}) => {
    if (parallax)
        return (
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                <img src={src} alt="image" />
            </Parallax>
        )
    else
        return (
            <img src={src} alt="image" />
        )   
}

export default MyImage