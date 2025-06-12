import { useState } from 'react';
import Header from '../react/Header';
import CardImagem from '../react/CardImagem';
import FormImagem from '../react/FormImagem';
import CardTarefa from '../react/CardTarefa';
import FormTarefa from '../react/FormTarefa';
import Footer from '../react/Footer';
import './App.css';

const imagensIniciais = [
  { title: 'Praia', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', desc: 'Uma bela praia ao pôr do sol.' },
  { title: 'Montanha', url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', desc: 'Montanha cobertas de neve.' }
];

function App() {
  const [imagens, setImagens] = useState(imagensIniciais);
  const [filtroImagem, setFiltroImagem] = useState('');

  const adicionarImagem = (novaImagem) => {
    setImagens([...imagens, novaImagem]);
  };

  const imagensFiltradas = imagens.filter(img =>
    img.title.toLowerCase().includes(filtroImagem.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <h2>Bem-vindo!</h2>
        <section id="imagens">
          <h3>Galeria de imagens</h3>
          <input
            type="text"
            placeholder="Filtrar por título:"
            value={filtroImagem}
            onChange={e => setFiltroImagem(e.target.value)}
          />
          {imagensFiltradas.map((img, i) => (
            <CardImagem
              key={i}
              title={img.title}
              url={img.url} 
              desc={img.desc}
            />
          ))}
          <FormImagem 
            onAdicionar={adicionarImagem}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
