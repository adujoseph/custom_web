import logo from './logo.svg';
import './App.css';


const android_url = 'https://play.google.com/store/apps/details?id=com.seamless_hrms';
const ios_url = 'https://apps.apple.com/us/app/seamlesshrms/id1549679995'
function App() {
  const { mobile, platform } = navigator.userAgentData
  if (mobile) {
    setTimeout(function () {
      if (platform.toLowerCase() === 'android') window.location = android_url;
      if (platform.toLowerCase() === 'ios') window.location = ios_url;
    }, 100);
    window.location.href = "breezeapp://";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button> Use mobile app </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
