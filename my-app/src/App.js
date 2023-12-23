import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <Sidebar />
      <NavBarSimple testprop = "testing" /> */}
      <NavBarForm />
    </div>
  );
}

export default App;