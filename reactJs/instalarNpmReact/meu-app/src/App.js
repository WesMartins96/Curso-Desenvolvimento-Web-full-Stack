// import Header from './Header';
import Counter from './Counter'

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true);

  let time = 0;

  useEffect(() => {
    let timer = setInterval(() => {
      time++;
      console.log(time);
      if (time > 5) {
        clearInterval(timer);
        setShow(false)
      }
    }, 1000)
  }, [time])



  if (show) {
    return (
      <div>
        {/* <Header name="Loja Wes" links={["Sobre", "Comprar", "Contato", "Login"]}></Header> */}
        <Counter count={3}></Counter>
      </div>

    );
  } else {
    <div>
      sem contator
    </div>
  }
}

export default App;
