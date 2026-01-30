import './App.scss';
import Button from './components/Button/Button';
import Title from './components/Title/Title';

function App() {
  const text = "Сохранить"

  return (
    <>
      <div>Hello</div>
      <Button text={text} />
      <Title title="заголовок" level={1} />
      <Title title="заголовок" level={2} />
    </>
  )
}

export default App
