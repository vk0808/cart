import "./styles.css";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

export default function App() {
  const { loading } = useGlobalContext();
  
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
