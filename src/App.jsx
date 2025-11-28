import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Body from './components/Header/Body';
import Footer from './components/Header/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  ); 
}

export default App;
