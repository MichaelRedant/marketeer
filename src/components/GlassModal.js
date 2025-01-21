import React from 'react';
import { motion } from 'framer-motion';

function GlassModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose} // Sluit modal bij klik buiten het venster
    >
      <motion.div
        className="bg-white/70 rounded-lg shadow-lg max-w-lg w-full p-6 border border-gray-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Voorkom sluiten bij klik in modal
      >
        {/* Sluitknop */}
        <button
          onClick={onClose}
          className="text-red-600 font-bold mb-4"
        >
          Sluiten
        </button>
        {/* Titel */}
        {title && <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>}
        {/* Inhoud */}
        <div className="text-gray-700 leading-relaxed">{children}</div>
      </motion.div>
    </div>
  );
}

export default GlassModal;
