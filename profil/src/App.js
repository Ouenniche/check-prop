import Profile from './componant/Profile';
import './App.css';


function App() {
  const data = {
    FullName : "Ouenniche Omar",
    Bio : "I'm an It Technicien",
    Profession : "web developer",
    Img : "Pic1.jpg"
}
  return (
    <div className="App">
     <Profile data={data} />
    </div>
  );
}

export default App;
