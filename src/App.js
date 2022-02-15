
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Remainder_Temp from "./components/Remainder_Temp";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import All from "./components/All";
import AddingData from "./components/AddingData";
import Quota from "./components/Quota";
import AA from "./components/AA";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
    
        <Routes>
          <Route path="all/" element = {<All/> }/>
          {/* <Route path="" element = {<Home /> }/> */}
          <Route path="quota/" element = {<Quota/> }/>
          <Route path="remainder/" element = {<Remainder_Temp/>}/>
          <Route path="signin/" element = {<SignIn/>} />
          <Route path="signup/" element = {<SignUp/> }/>
          <Route path="all/addingData/" element = {<AddingData/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
