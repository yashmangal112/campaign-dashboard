import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsFiletypeCsv } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const CampaignTable = ({ campaigns, onReschedule, onViewPricing }) => {
  const { t } = useTranslation();

  const handleReschedule = (campaign, newDate) => {
    onReschedule(campaign, newDate);
  };

  return (
    <table className="min-w-full bg-white border">
      <thead className="bg-slate-200">
        <tr>
          <th className="px-4 py-2 text-left">{t("DATE")}</th>
          <th className="px-4 py-2 text-left">{t("CAMPAIGN")}</th>
          <th className="px-4 py-2 text-left">{t("VIEW")}</th>
          <th className="px-4 py-2 text-left">{t("ACTIONS")}</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign) => (
          <tr key={campaign.name} className="hover:bg-gray-100">
            <td className="px-4 py-2 align-middle">
              {format(new Date(campaign.createdOn), "MMM dd, yyyy")}
              <br />
              <div className="font-light italic">
                {(() => {
                  const createdDate = new Date(campaign.createdOn);
                  const today = new Date();
                  const differenceInTime = createdDate - today;
                  const differenceInDays = Math.ceil(
                    differenceInTime / (1000 * 60 * 60 * 24)
                  );

                  if (differenceInDays > 0) {
                    return `${differenceInDays} ${t("days ahead")}`;
                  } else if (differenceInDays < 0) {
                    return `${Math.abs(differenceInDays)} ${t("days ago")}`;
                  } else {
                    return `${t("Today")}`;
                  }
                })()}
              </div>
            </td>

            <td className="px-4 py-2 align-middle">
              <div className="flex items-center space-x-4">
                <img
                  src={campaign.image_url || "/placeholder.jpg"}
                  alt={campaign.name}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <p className="font-bold">{campaign.name}</p>
                  <p className="text-gray-500">{campaign.region}</p>
                </div>
              </div>
            </td>

            <td className="px-4 py-2 align-middle">
              <button
                className="text-blue-500 flex items-center space-x-2"
                onClick={() => onViewPricing(campaign)}
              >
                <RiMoneyDollarCircleLine />
                <span>{t("View Pricing")}</span>
              </button>
            </td>

            <td className="px-4 py-2 align-middle">
              <div className="flex items-center space-x-6">
                <a
                  href={campaign.csv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 flex items-center space-x-2"
                >
                  <BsFiletypeCsv />
                  <span>{t("CSV")}</span>
                </a>
                <a
                  href={campaign.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 flex items-center space-x-2"
                >
                  <HiOutlineDocumentReport />
                  <span>{t("Report")}</span>
                </a>
                <DatePicker
                  selected={new Date(campaign.createdOn)}
                  onChange={(date) => handleReschedule(campaign, date)}
                  customInput={
                    <button className="text-blue-500 flex items-center space-x-2">
                      <FaRegCalendarAlt />
                      <span>{t("Schedule Again")}</span>
                    </button>
                  }
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CampaignTable;