import "./App.css";

import Appbar from "./Components/Appbar/Appbar";
import Mainbody from "./Components/Mainbody/Mainbody";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
	return (
		<div className={"container"}>
			<Appbar />
			<Mainbody />
			<Footer />
		</div>
	);
}

export default App;
