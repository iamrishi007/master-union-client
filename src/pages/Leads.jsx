import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../features/leads/leadSlice";
import LeadList from "../components/Lead/LeadList";
import LeadForm from "../components/Lead/LeadForm";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";

export default function Leads() {
  const dispatch = useDispatch();
  const { leads, loading } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Navbar />
        <h3 style={{ color: "var(--primary-color)" }}>Leads</h3>
        <LeadForm />
        {loading ? <p>Loading...</p> : <LeadList leads={leads} />}
      </div>
    </div>
  );
}
