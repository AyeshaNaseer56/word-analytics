import { useState } from "react";

import Stats from "./Stats";
import Textarea from "./Textarea";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />

      <Head>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Head>

      <Footer />
    </>
  );
}

export default App;
