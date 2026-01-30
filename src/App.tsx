import './App.scss';
import Button from './components/Button/Button';
import Title from './components/Title/Title';

function App() {
  const text = "Сохранить"

  return (
    <>
      <div>Hello</div>
      <Button text={text} />
      <Title title="заголовок" style={{fontSize: '54px'}} level={1} />
      <Title title="заголовок" style={{fontSize: '40px'}} level={2} />
    </>
  )
}

export default App
