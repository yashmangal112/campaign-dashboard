import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PricingModal = ({ isOpen, onClose, campaign }) => {
  if (!campaign) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Campaign Details"
      className="p-6 bg-white rounded shadow-lg max-w-lg mx-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold mb-4">{campaign.name}</h2>
      <p>
        <strong>Region:</strong> {campaign.region}
      </p>
      <p>
        <strong>Price:</strong> {campaign.price}
      </p>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default PricingModal;
