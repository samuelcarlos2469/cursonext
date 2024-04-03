//componente do next que funciona como a tag link / <a> para mudança de rota
import Link from "next/link";
import "@/public/style/style.css";
import Header from "@/public/components/header";

//utilizando os ícones do font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";

//para utilizar oq foi retornado da API, 'ardata' abaixo
import { cookies } from "next/headers";

export default function Home() {
  const data = cookies().get("cep");
  const ardata = data?.value ? JSON.parse(data.value) : null;

  return (
    <div className="container">
      <Header />

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
          </div >

          {/* arraydata vindo da API, iterando ao longo do array para fornecer os itens que correspondem a pesquisa*/}
          
          <div className="tablebody">
            {ardata && (Array.isArray(ardata) ? 
              ardata.map((item: any, index: any) => (
                <div className="trow" key={index}>
                  <div className="tabledata">{item.logradouro}</div>
                  <div className="tabledata">{item.bairro}</div>
                  <div className="tabledata">{`${item.localidade}/${item.uf}`}</div>
                  <div className="tabledata">{item.cep}</div>
                </div>
              ))
              :
              <div className="trow">
                <div className="tabledata">{ardata.logradouro}</div>
                <div className="tabledata">{ardata.bairro}</div>
                <div className="tabledata">{`${ardata.localidade}/${ardata.uf}`}</div>
                //adicionar item e fazer um toggle pra deixar a descida mais fluida
                <div className="tabledata">{ardata.cep}</div>
              </div>
            )}
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
