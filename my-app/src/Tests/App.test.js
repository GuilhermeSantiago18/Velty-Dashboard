import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from './RenderWithRedux'

describe('Verifica elementos da página Home', () => {
  it('renders learn react link', () => {
    renderWithRouterAndRedux(<App />);
    const linkElement = screen.getByRole('img', {  name: /pex image/i})
    expect(linkElement).toBeInTheDocument();
  });

})
