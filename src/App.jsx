import './Global.css'

import { AccountField } from './components/AccountField'
import { Gallery } from './components/Gallery'
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <main className="bg-black/30 h-screen flex flex-col">
        <header className="w-screen px-2 md:px-10 py-2 md:py-3 flex items-center ">
          <Nav />

          <AccountField />
        </header>

        <section className=" pt-80 mt-8 mb-5 px-5 lg:ml-20 lg:mb-5 lg:mt-28 lg:pt-96 flex flex-col gap-12 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto self-center snap-y">
          <Gallery title="Originais" />
          <Gallery title="The Mandalorian" />
          <Gallery title="Filmes" />
          <Gallery title="Séries e Especiais" />
          <Gallery title="Documentários" />
        </section>
      </main>
    </>
  )
}

export default App

// bg-gradient-to-b from-zinc-950 to-zinc-950/60