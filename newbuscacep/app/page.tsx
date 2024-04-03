//utilizando os componentes que criamos
import Header from "@/public/components/header";
import Formulario from "@/public/components/formulario";

import "@/public/style/style.css";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Formulario />
      </main>
    </div>
  );
}
