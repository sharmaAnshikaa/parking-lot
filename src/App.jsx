import AddSlotForm from "./components/AddSlotForm";
import ParkRemove from "./components/ParkRemove";
import SlotList from "./components/SlotList";
import OutputPanel from "./components/OutputPanel";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Parking Lot Management</h1>

      <div className="grid">
        <AddSlotForm />
        <ParkRemove />
        <SlotList />
        <OutputPanel />
      </div>
    </div>
  );
}

export default App;