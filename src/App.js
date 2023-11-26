// import "./styles.css";
import { Routes, Route } from "react-router-dom";

import ReportsPage from "./pages/ReportsPage";
import SalesPage from "./pages/SalesPage";
import InventoryPage from "./pages/InventoryPage";
import { InventoryForm } from "./components/inventoryForm";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/sales" element={<SalesPage />} />
      </Routes>
    </div>
  );
}
