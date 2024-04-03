//para uso apenas do lado do servidor
"use server";

//o que fornecerá os dados para a pagina de resultado
import { cookies } from "next/headers";

//não se utiliza window.redirect, utilizado na linha 35
import { redirect } from "next/navigation";

//capturando os campos do formulário para utilizar a API
export async function buscar(fData: FormData) {
  cookies().delete("cep");
  //caso seja pesquisa por endereço
  if(!fData.get("codigocep")) {
    const rua = fData.get("rua");
    const cidade = fData.get("cidade");
    const estado = fData.get("estado");

    //utilização básica da API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`);
    const data = await response.json();

    cookies().set("cep", JSON.stringify(data));
  }
  else{
    //caso seja por CEP
    const busca = fData.get("codigocep");

    const response = await fetch(`https://viacep.com.br/ws/${busca}/json/`);
    const data = await response.json();

    cookies().set("cep", JSON.stringify(data));
  }
  
  redirect("/resultado");
}
