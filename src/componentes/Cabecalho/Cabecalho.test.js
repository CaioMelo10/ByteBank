const { render, screen } = require('@testing-library/react');
import Cabecalho from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Caio Melo');
  expect(nomeUsuario).toBeInTheDocument();
});
