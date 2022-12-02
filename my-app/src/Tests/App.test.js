import { screen } from "@testing-library/react";
import App from "../App";
import Containers from "../Components/Containers";
import ContainersFooter from "../Components/ContainersFooter";
import ContainersSecondLine from "../Components/ContainersSecondLine";
import ContainersThirdLine from "../Components/ContainersThirdLine";
import Search from "../Components/Search";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import renderWithRouterAndRedux from "./RenderWithRedux";
import Filterdata from "../Components/Filterdata";

describe("Verifica elementos da página Home", () => {
  it("Verifica a imagem PEX", () => {
    renderWithRouterAndRedux(<Sidebar />);
    const pexImage = screen.getByRole("img", { name: /pex image/i });

    expect(pexImage).toBeInTheDocument();
  });

  it("Verifica Título da página", () => {
    renderWithRouterAndRedux(<Header />);
    const searchInput = screen.getByText("Velty Dashboard");

    expect(searchInput).toBeInTheDocument();
  });

  it("Verifica input Filter data", () => {
    renderWithRouterAndRedux(<Filterdata />);
    const searchInput = screen.getByText("Filtrar por data");

    expect(searchInput).toBeInTheDocument();
  });

  it("Verifica imagem do input Search", () => {
    renderWithRouterAndRedux(<Search />);
    const searchInput = screen.getByAltText("profile");

    expect(searchInput).toBeInTheDocument();
  });

  it("Verifica texto do terceiro container da primeira linha", () => {
    renderWithRouterAndRedux(<Containers />);
    const valueText = screen.getByText("Lucro por venda");

    expect(valueText).toBeInTheDocument();
  });

  it("Verifica texto do primeiro container da segunda linha", () => {
    renderWithRouterAndRedux(<ContainersSecondLine />);
    const valueText = screen.getByText("Clientes ativos");

    expect(valueText).toBeInTheDocument();
  });

  it("Verifica texto do segundo container da terceira linha", () => {
    renderWithRouterAndRedux(<ContainersThirdLine />);
    const valueText = screen.getByText("Vendas finalizadas");

    expect(valueText).toBeInTheDocument();
  });

  it("Verifica texto do segundo container do footer", () => {
    renderWithRouterAndRedux(<ContainersFooter />);
    const valueText = screen.getByText("4 categorias em uso");

    expect(valueText).toBeInTheDocument();
  });
});
