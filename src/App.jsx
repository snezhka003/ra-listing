import Listing from "./Components/Listing";
import items from "./data/etsy.json";
import './App.css';

export default function App() {
  return (
    <Listing items={items} />
  );
}
