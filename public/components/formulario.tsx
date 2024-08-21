"use client";
//será executado no navegador, permitindo o uso de hooks como useState

//hook do React que permite adicionar estado ao componente funcional
import { useState } from "react";

//usada para processar o formulário ao ser submetido
import { buscar } from "@/app/middleware/action";

//pra importar ícones da biblioteca, sendo o import debaixo para um ícone especifico
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function Formulario() {
  return (
    //usa a função buscar pra lidar com o form ao ser submetido
    <form className="form" action={buscar}>
      <div className="rowwrap">
        <label htmlFor="pesquisa">Pesquisar utilizando:</label>
        {/*O valor selecionado é controlado pelo estado opcao, e a alteração dispara a função mudarOpcao*/}
        <select id="pesquisa">
          <option value="cep">CEP</option>
          <option value="endereco">Endereço</option>
        </select>
      </div>
      {/* a depender da opção selecionada, renderiza os campos correspondentes */}

      <div className="wrap">
        <div className="input-box">
          <label htmlFor="codigocep">Digite o CEP:</label>
          <input
            type="text"
            name="codigocep"
            id="codigocep"
            placeholder="No formato: 00000-000"
          />
        </div>
      </div>

      <div className="wrap">
        <div className="input-box">
          <label htmlFor="rua">Nome da Rua ou Avenida</label>
          <input type="text" id="rua" name="rua" />
        </div>
        <div className="input-box">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" />
        </div>
        <div className="input-box">
          <label htmlFor="estado">Estado</label>
          <input type="text" id="estado" name="estado" />
        </div>
      </div>

      <button type="submit" className="pesquisar">
        Buscar
        <FontAwesomeIcon
          icon={faMagnifyingGlassLocation}
          className="iconepesquisar"
        />
      </button>
    </form>
  );
}
