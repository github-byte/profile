import logo from './logo.svg';
import './App.css';
import Profile from './profile'

const App = () => {
  return (
    <div className="App" style={{
      backgroundImage:`url('https://shridharportfolio.netlify.app/assets/herobg-ecbfddc8.png')`, backgroundRepeat: 'no-repeat', backgroundSize:"cover", height:'100vh', backgroundColor:'navyblue'}}>
      <Profile/>
    </div>
  );
}

export default App;
