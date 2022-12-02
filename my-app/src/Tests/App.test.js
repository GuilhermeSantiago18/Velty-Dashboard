import { screen } from '@testing-library/react';
import App from '../App';
import Containers from '../Components/Containers';
import Search from '../Components/Search';
import renderWithRouterAndRedux from './RenderWithRedux'

describe('Verifica elementos da página Home', () => {
  it('Verifica a imagem PEX', () => {
    renderWithRouterAndRedux(<App />);
    const pexImage = screen.getByRole('img', {  name: /pex image/i})


    expect(pexImage).toBeInTheDocument();
  });

  it('Verifica imagem do input Search', () => {
    renderWithRouterAndRedux(<Search />);
    const searchInput = screen.getByAltText('profile')


    expect(searchInput).toBeInTheDocument();
  });

  it('Verifica texto do terceiro container da primeira linha', () => {
    renderWithRouterAndRedux(<Containers />);
    const valueText = screen.getByText('Lucro por venda')


    expect(valueText).toBeInTheDocument();
  });

})
