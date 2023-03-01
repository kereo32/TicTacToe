import React from 'react';
import withAnimate from './HOCS/WithAnimate';
import MainMenu from './Components/MainMenu';

const test = withAnimate(() => <div className="text-4xl">test</div>, { delay: 1, initialOpacity: 0, whileInViewOpacity: 1 });

function App() {
  return (
    <div className="flex w-full h-full justify-center items-center bg-backgroundColor">
      <MainMenu />
    </div>
  );
}

export default App;
