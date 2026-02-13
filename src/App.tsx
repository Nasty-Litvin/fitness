
import Header from './components/Header/Header';
import TextCard from './components/TextCard/TextCard';

import './App.scss';

function App() {

  return (
    <>
      <Header />
      <TextCard title="123" className="hero"/>
       <TextCard title="123" className="sale"/>
    </>
  )
}

export default App
