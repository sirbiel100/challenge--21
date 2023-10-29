import Header from './components/header';
import Main from './components/main';
import Bottom from './components/bottom';
import BackgroundImages from './components/backgroundImages';
import Credits from './components/credits';
import './styles/App.scss';

function App() {
  return (
    <>
      <section className='App'>
        <Header />
        <Main />
      </section>
      <Bottom />
      <BackgroundImages />
      <Credits />
    </>
  );
}

export default App;



//Challenge by Frontend Mentor.Coded by Your Name Here.