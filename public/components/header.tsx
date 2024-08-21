//otimizar o carregamento de imagens, citar lazy loading otimização automática, e dimensionamento responsivo.
import Image from "next/image";

//módulos CSS (.module.css) garante que os estilos são escopados localmente ao componente, evitando conflitos de nomes de classes
import header from "../style/header.module.css";

import logo from "../img/logo.png";

//componentes começam em Maiuscula para diferenciação dos elementos nativos do HTML
export default function Header() {
  //pode ser importado sem chaves em outros arquivos
  return (
    //aplica a classe CSS header definida no arquivo header.module.css.
    //O header.header refere-se ao estilo, o primeiro header é o nome do CSS
    //e o segundo header é a classe dentro desse arquivo.
    <header className={header.header}>
      <Image src={logo} height={100} width={300} alt="Logo da API utilizada" />
    </header>
  );
}
