import "./styles.css";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import ReactLoading from 'react-loading';

export default function App() {
  const { loading } = useGlobalContext();
  
  if (loading) {
    return (
      <div className="loading">
        <ReactLoading type={"bars"} color={"grey"} />
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
