//isso utiliza a função já imbuída no Next de otimização de imagens
//que visa fornecer otimização automática baseada no tamanho de tela do dispositivo
//como por exemplo o lazyloading, que carrrega as imagens somente quando o viewport correspondente for atingido
//economizando banda e reduzindo tempos de carregamento, particularmente útil em páginas com muitas imagens
import Image from "next/image";
import header from "../style/header.module.css";

//nossa imagem não necessita e nem utiliza tal optmization
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className={header.header}>
      <Image src={logo} height={100} width={300} alt="Logo da API utilizada" />
    </header>
  );
}
