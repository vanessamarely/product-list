import './App.css';
import { Footer, Header } from "./components";
import { ProductList } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
