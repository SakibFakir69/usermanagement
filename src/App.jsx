import { useState } from "react";
import HeaderLayout from "./Componenent/HeaderLayout";
import NewUser from "./pages/NewUser";
import Management from "./pages/Management";

function App() {
  return (
    <div>
      <header>
        <HeaderLayout />
      </header>

      <main className="px-4 mt-10">

        <section className="border mx-auto container px-6 p-4">
          <div>
            <NewUser />
          </div>
          <div>
            <Management />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
