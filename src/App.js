import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import CampaignTable from "./components/CampaignTable";
import PricingModal from "./components/PricingModal";
import campaignsData from "./data/campaigns.json";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const [currentTab, setCurrentTab] = useState("Upcoming Campaigns");
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load campaigns from localStorage or fallback to initial data
  useEffect(() => {
    const storedCampaigns = localStorage.getItem("campaigns");
    if (storedCampaigns) {
      const storedData = JSON.parse(storedCampaigns);
      if (JSON.stringify(storedData) !== JSON.stringify(campaignsData.data)) {
        // Clear outdated localStorage and load new data
        localStorage.removeItem("campaigns");
        setCampaigns(campaignsData.data);
      } else {
        setCampaigns(storedData);
      }
    } else {
      setCampaigns(campaignsData.data);
    }
  }, []);
  

  const handleReschedule = (campaign, newDate) => {
    const updatedCampaigns = campaigns.map((c) =>
      c.name === campaign.name ? { ...c, createdOn: newDate.getTime() } : c
    );
    setCampaigns(updatedCampaigns);
    localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns)); // Save to localStorage
  };

  const handleViewPricing = (campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const filterCampaigns = (status) => {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0); 
    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(todayStart.getDate() + 1); 
  
    if (status === "Upcoming Campaigns") {
      // Campaigns with a createdOn date greater than today's start
      return campaigns.filter((c) => new Date(c.createdOn) >= tomorrowStart);
    } else if (status === "Live Campaigns") {
      // Campaigns with a createdOn date within today's bounds
      return campaigns.filter(
        (c) =>
          new Date(c.createdOn) >= todayStart &&
          new Date(c.createdOn) < tomorrowStart
      );
    } else if (status === "Past Campaigns") {
      // Campaigns with a createdOn date before today's start
      return campaigns.filter((c) => new Date(c.createdOn) < todayStart);
    } else {
      return [];
    }
  };
  
  

  const filteredCampaigns = filterCampaigns(currentTab);

  return (
<div className="p-4">
  <div className="flex items-center justify-between flex-wrap mb-4">
    <h1 className="text-2xl font-bold">Manage Campaigns</h1>
    <LanguageSwitcher />
  </div>
  <Tabs currentTab={currentTab} setTab={setCurrentTab} />
  <CampaignTable
    campaigns={filteredCampaigns}
    onReschedule={handleReschedule}
    onViewPricing={handleViewPricing}
  />
  <PricingModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    campaign={selectedCampaign}
  />
</div>

  );
}

export default App;
