import './App.css';
import MyImage from './components/image/image';
import BannerImage from './images/home/banner.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';
const App = () => {
	return (
		<ParallaxProvider>
			<div className="App">
				<div className="AppBanner">
					<MyImage src={BannerImage} />
				</div>
			</div>
			<div className="AppBanner">
					<MyImage src={BannerImage} />
				</div>
				<div className="AppBanner">
					<MyImage src={BannerImage} />
				</div>
				<div className="AppBanner">
					<MyImage src={BannerImage} />
				</div>
		</ParallaxProvider>
  	);
}

export default App;
