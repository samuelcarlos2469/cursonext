import Link from "next/link"; //para criar links internos na aplicação
import "@/public/style/style.css";
import Header from "@/public/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import { cookies } from "next/headers"; //permite acessar os cookies no servidor

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div className="rowwrap">
          <Link href={"/"} className="voltar">
            <FontAwesomeIcon icon={faRotateLeft} className="iconevoltar" />
          </Link>
          <h1>Resultado da pesquisa</h1>
        </div>
        <div className="table">
          <div className="tablehead">
            <div className="trow">
              <div className="tabledata">Logradouro/Nome</div>
              <div className="tabledata">Bairro/Distrito</div>
              <div className="tabledata">Localidade/UF</div>
              <div className="tabledata">CEP</div>
            </div>
          </div>
          <div className="tablebody">
            <div className="trow">
              <div className="tabledata"></div>
              <div className="tabledata"></div>
              <div className="tabledata"></div>
              <div className="tabledata"></div>
            </div>

            <div className="trow">
              <div className="tabledata"></div>
              <div className="tabledata"></div>
              <div className="tabledata"></div>
              <div className="tabledata"></div>
            </div>
          </div>
        </div>
        <Link href={"/"} className="pesquisar">
          Nova Pesquisa
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="iconevoltar"
          />
        </Link>
      </main>
    </div>
  );
}
