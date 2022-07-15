import App from './App';
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('teste da aplicação toda', () => {
it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const title = screen.getByRole('heading', {
    name:'Você está na página Início'
  });
  expect(title).toBeInTheDocument();
});
it('deve renderizar o componente About', () => {
  const { history } = renderWithRouter(<App />);

  const about = screen.getByRole('link', {
    name: 'Sobre'
  });
  expect(about).toBeInTheDocument();
  userEvent.click(about);


  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const msg = screen.getByRole('heading', {
    name: 'Você está na página Sobre'
  });
  expect(msg).toBeInTheDocument();
 });

 it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const { history } = renderWithRouter(<App />);

  history.push('/pagina-nao-existe');

  const notFoundTitle = screen.getByRole('heading',
    { name: /Página não encontrada/i, level:1});
  expect(notFoundTitle).toBeInTheDocument();
});
});
