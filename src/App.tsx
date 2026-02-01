import Button from './components/Button/Button';
import Menu from './components/Menu/Menu';
import Title from './components/Title/Title';
import Logo from './components/Logo/Logo';
import menuData from "./data/menuHeader.json";

import './App.scss';

function App() {
  const text = "Сохранить"
  const menu = menuData?.data;
  return (
    <>
      <div>Hello</div>
      <Button text={text} />
      <Title title="заголовок" style={{fontSize: '54px'}} level={1} />
      <Title title="заголовок" style={{fontSize: '40px'}} level={2} />
      <Menu menu={menu} />
      <Logo style={{maxWidth: '155px'}} />
      <Logo style={{maxWidth: '117px'}} />
    </>
  )
}

export default App
