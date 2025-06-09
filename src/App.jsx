import { useState } from 'react';
import Header from '../react/Header';
import CardImagem from '../react/CardImagem';
import FormImagem from '../react/FormImagem';
import Footer from '../react/Footer';
import './App.css';

const imagensIniciais = [
  { title: 'Praia', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', desc: 'Uma bela praia ao pôr do sol.' },
  { title: 'Montanha', url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', desc: 'Montanha cobertas de neve.' }
];

function App() {
  const [imagens, setImagens] = useState(imagensIniciais);

  const adicionarImagem = (novaImagem) => {
    setImagens([...imagens, novaImagem]);
  }

  return (
    <>
      <Header />
      <main>
        <h2>Bem-vindo ao React!</h2>
        <section id="imagem">
          <h2>Galeria de imagens</h2>
          {imagens.map((img, i) => (
            <CardImagem
              key={i}
              title={img.title} 
              url={img.url} 
              desc={img.desc} 
            />
          ))}
        </section>
        <FormImagem 
          onAdicionar={adicionarImagem}
        />
      </main>
      <Footer />
    </>
  );
}
export default App;
