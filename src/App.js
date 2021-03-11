import "./styles.css";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

export default function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
