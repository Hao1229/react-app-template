import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactSVG } from 'react-svg';
import logo from '../public/img/logo.svg';

function Main() {
  return (
    <>
      <h1>Hello World!!</h1>
      <ReactSVG src={logo} />
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
