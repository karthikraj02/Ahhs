import { BrowserRouter } from 'react-router-dom';
import NccNss from './components/Nss';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <NccNss />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
