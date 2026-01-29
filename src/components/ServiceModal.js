/*LINES 1 - 128 ARE EDITED*/
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Mail, Send, Paperclip, FileText } from 'lucide-react';

const serviceDetails = {
  calibration: {
    title: 'Calibration Services',
    description: 'We provide comprehensive calibration services for various types of equipment ensuring accuracy, reliability, and compliance with international standards.',
    intro: 'Our calibration services are designed to meet the highest standards of precision and accuracy. We utilize state-of-the-art equipment and follow strict protocols to ensure your instruments perform at their best.',
    categories: [
      {
        name: 'Temperature Calibration',
        description: 'Precision temperature measurement and calibration services for various instruments',
        items: [
          { name: 'Digital Thermometer (-45°C to 150°C)', price: '₱800.00', details: 'High-precision digital temperature measurement' },
          { name: 'RTD Probe/Wire Stand', price: '₱1,300.00 - ₱450.00', details: 'Resistance Temperature Detector calibration' },
          { name: 'Liquid Glass Thermometer', price: '₱1,000.00 - ₱800.00', details: 'Traditional mercury and alcohol thermometers' },
          { name: 'Thermocouple with Indicator', price: '₱1,600.00', details: 'Industrial temperature sensing devices' },
          { name: 'Infrared Thermometer', price: '₱2,240.00', details: 'Non-contact temperature measurement' },
        ],
      },
      {
        name: 'Pressure Calibration',
        description: 'Accurate pressure gauge calibration for industrial and medical applications',
        items: [
          { name: 'Pressure Gauge ≤ 500 psi', price: '₱250.00', details: 'Low pressure range calibration' },
          { name: 'Pressure Gauge > 500 psi', price: '₱300.00', details: 'Medium pressure range calibration' },
          { name: 'Pressure Gauge > 1000 psi', price: '₱500.00', details: 'High pressure range calibration' },
          { name: 'Pressure Gauge > 2000 psi', price: '₱900.00', details: 'Extra high pressure calibration' },
          { name: 'Sphygmomanometer', price: '₱840.00', details: 'Medical blood pressure devices' },
        ],
      },
      {
        name: 'Electrical Calibration',
        description: 'Comprehensive electrical instrument calibration services',
        items: [
          { name: 'Oscilloscope Up to 100MHz', price: '₱4,000.00', details: 'Waveform measurement and analysis' },
          { name: 'Oscilloscope 100MHz to 1GHz', price: '₱8,000.00', details: 'High-frequency signal analysis' },
          { name: 'Power Supply Up to 30V/5A', price: '₱3,000.00', details: 'DC power source calibration' },
          { name: 'Function Generator Up to 10 MHz', price: '₱3,550.00', details: 'Signal generation calibration' },
          { name: 'Multimeter Digital (3-7 digits)', price: '₱2,000.00 - ₱8,000.00', details: 'Precision measurement instruments' },
        ],
      },
    ],
    cta: {
      text: 'Interested to our services? Inquire Now!',
      action: 'mailto:mtcc.services@g.batstate-u.edu.ph?subject=Inquiry: Service Request',
    }
  },
  'material-testing': {
    title: 'Material Testing Services',
    description: 'Advanced material testing services for quality assurance, research, development, and compliance with industry standards.',
    intro: 'Our laboratory is equipped with cutting-edge equipment for comprehensive material analysis, ensuring your products meet the required specifications and safety standards.',
    categories: [
      {
        name: 'Mechanical Testing Services',
        description: 'Complete range of mechanical property testing',
        items: [
          { name: 'UTM - Tensile Strength Test', price: '₱250.00 - ₱450.00', details: 'Measure maximum stress material can withstand while being stretched' },
          { name: 'UTM - Compression Test', price: '₱250.00', details: 'Determine material behavior under compressive loads' },
          { name: 'UTM - Flexural Test', price: '₱250.00 - ₱450.00', details: 'Evaluate bending strength and flexibility' },
          { name: 'UTM - Bending Test', price: '₱250.00 - ₱450.00', details: 'Assess ductility and resistance to bending' },
          { name: 'Hardness Test', price: '₱300.00', details: 'Measure material resistance to deformation' },
        ],
      },
      {
        name: 'Physical & Chemical Testing',
        description: 'Comprehensive physical and chemical property analysis',
        items: [
          { name: 'Moisture Test', price: '₱250.00', details: 'Determine water content in materials' },
          { name: 'UV Light Test', price: '₱300.00', details: 'Assess material degradation under UV exposure' },
          { name: 'Coating Thickness Test', price: '₱280.00', details: 'Measure protective coating thickness' },
          { name: 'FTIR Spectrometer Analysis', price: '₱500.00 - ₱800.00', details: 'Identify chemical composition and structure' },
          { name: 'UV-VIS Spectroscopy', price: '₱1,000.00+', details: 'Analyze optical and electronic properties' },
        ],
      },
      {
        name: 'Laboratory Equipment Services',
        description: 'Access to specialized laboratory equipment',
        items: [
          { name: 'Centrifuge (Biotechnology)', price: '₱150.00 - ₱500.00/hour', details: 'Separate substances by density' },
          { name: 'Ultracentrifuge', price: '₱500.00 - ₱750.00/hour', details: 'High-speed separation for research' },
          { name: 'Rotary Evaporator', price: '₱500.00 - ₱750.00/hour', details: 'Efficient solvent removal' },
          { name: 'Freeze Dryer', price: '₱400.00 - ₱600.00/hour', details: 'Lyophilization for sample preservation' },
        ],
      },
    ],
    cta: {
      text: 'Interested to our services? Inquire Now!',
      action: 'mailto:mtcc.services@g.batstate-u.edu.ph?subject=Inquiry: Service Request',
    }
  },
  research: {
    title: 'FTIR Analysis',
    description: 'State-of-the-art research facilities and collaborative development programs to support innovation and scientific advancement.',
    intro: 'Partner with us for cutting-edge research projects. Our experienced team and advanced facilities provide the perfect environment for breakthrough discoveries and product development.',
    categories: [
      {
        name: 'Research Facilities',
        description: 'Access to advanced testing and analysis equipment',
        items: [
          { name: 'Advanced Testing Laboratory Access', price: 'Contact for quotation', details: 'Full access to our modern laboratory facilities' },
          { name: 'Research Consultation Services', price: 'Contact for quotation', details: 'Expert guidance for your research projects' },
          { name: 'Equipment Rental for Research', price: 'Contact for quotation', details: 'Hourly or daily rental of specialized equipment' },
          { name: 'Data Analysis Support', price: 'Contact for quotation', details: 'Professional data interpretation and analysis' },
          { name: 'Sample Preparation Services', price: 'Contact for quotation', details: 'Professional sample handling and preparation' },
        ],
      },
      {
        name: 'Development Programs',
        description: 'Collaborative research and development initiatives',
        items: [
          { name: 'Product Development Support', price: 'Contact for quotation', details: 'From concept to final product testing' },
          { name: 'Quality Assurance Programs', price: 'Contact for quotation', details: 'Comprehensive QA/QC implementation' },
          { name: 'Testing Protocol Development', price: 'Contact for quotation', details: 'Custom testing procedures for your needs' },
          { name: 'Technical Documentation', price: 'Contact for quotation', details: 'Professional technical writing and reports' },
          { name: 'Collaborative Research Projects', price: 'Contact for quotation', details: 'Joint research initiatives with industry partners' },
        ],
      },
    ],
    cta: {
      text: 'Interested to our services? Inquire Now!',
      action: 'mailto:mtcc.services@g.batstate-u.edu.ph?subject=Inquiry: Service Request',
    }
  },
  
};

/*LINES 130 - 144 ARE EDITED*/
export function ServiceModal({ serviceId, onClose }) {
  const service = serviceId ? serviceDetails[serviceId] : null;
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments((prev) => [...prev, ...files]);
  };
  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };
  const hasImages = attachments.some(file => file.type.startsWith('image/'));

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2d3e50] via-[#3a4f66] to-[#4a5f7f] p-8 relative">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
              <h2 className="text-3xl md:text-4xl text-white mb-3 pr-16">{service.title}</h2>
              <p className="text-gray-200 text-lg">{service.description}</p>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-8">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-2xl"
              >
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                  {service.intro}
                </p>
              </motion.div>

              {/* Categories */}
              {service.categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-10 last:mb-0"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl text-[#2d3e50] dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                        whileHover={{ x: 8, backgroundColor: 'rgba(59, 130, 246, 0.08)' }}
                        className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 transition-all hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="text-base md:text-lg text-gray-800 dark:text-white font-medium mb-1">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {item.details}
                                </p>
                              </div>
                            </div>
                          </div>
                          <span className="text-base md:text-lg text-[#2d3e50] dark:text-blue-400 font-semibold whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/*LINES 243 - 373 ARE EDITED*/}
              {/* Inquire Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-col items-center gap-4 py-8 border-t border-gray-100 dark:border-gray-700"
              >
                <button 
                  onClick={() => setIsInquiryOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2d3e50] hover:bg-[#3a4f66] text-white rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="text-xl md:text-2xl italic font-semibold">
                    {service.cta?.text || 'Interested to our services? Inquire Now!'}
                  </span>
                </button>
              </motion.div>
            </div>

            {/* --- 3. UPGRADED DIALOGUE BOX (THE UPGRADE) --- */}
            <AnimatePresence>
              {isInquiryOpen && (
                <motion.div 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  // Fixed 700px width and 600px height for that "Pro" feel
                  className="absolute bottom-0 right-0 md:right-8 w-full md:w-[700px] h-[600px] bg-white dark:bg-gray-900 shadow-[0_-15px_50px_rgba(0,0,0,0.4)] rounded-t-2xl border border-gray-200 dark:border-gray-700 z-[70] flex flex-col overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-[#2d3e50] text-white p-4 flex justify-between items-center flex-shrink-0">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="font-semibold">New Inquiry: {service.title}</span>
                    </div>
                    <button onClick={() => setIsInquiryOpen(false)} className="p-1 hover:bg-white/20 rounded-md transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col gap-4 overflow-y-auto flex-1">
                    <div className="flex items-center gap-2 border-b dark:border-gray-800 pb-2">
                      <span className="text-gray-400 text-m w-12">To:</span>
                      <span className="text-m font-semibold dark:text-gray-200">mtcc.services@g.batstate-u.edu.ph</span>
                    </div>

                                {/* --- SUBJECT LINE (RESTORED) --- */}
                    <div className="flex items-center gap-2 border-b dark:border-gray-800 pb-2">
                      <span className="text-gray-400 text-m w-16">Subject:</span>
                      <input 
                        type="text" 
                        className="flex-1 bg-transparent outline-none text-m font-medium dark:text-white" 
                        defaultValue={`Service Inquiry - ${service.title}`}
                      />
                    </div>
                    <textarea 
                      placeholder="Describe your request..."
                      className="w-full flex-1 p-2 bg-transparent outline-none resize-none text-base dark:text-gray-200 min-h-[200px]"
                      defaultValue={`Dear MTCC Team,\n\nI would like to inquire about ${service.title}. Attached is an image of the equipment/requirements for your review.`}
                    />

                    {/* ATTACHMENTS TRAY */}
                    {attachments.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 rounded-lg">
                            <div className="flex items-center gap-2 overflow-hidden">
                              <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-xs truncate dark:text-gray-300">{file.name}</span>
                            </div>
                            <button onClick={() => removeAttachment(index)} className="text-gray-400 hover:text-red-500">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer / Action Bar */}
                  <div className="p-6 border-t dark:border-gray-800 bg-gray-50/50 dark:bg-black/20 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-6">
                      {/* Send Button Logic applied here */}
                      <button 
                        onClick={() => {
                          alert("Inquiry Sent Successfully!");
                          setIsInquiryOpen(false);
                        }}
                        className="px-10 py-3 rounded-full flex items-center gap-2 font-bold transition-all shadow-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer active:scale-95"
                      >
                        Send <Send className="w-4 h-4" />
                      </button>

                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        className="hidden" 
                        multiple 
                        accept="image/*" 
                      />
                      
                      <button 
                        onClick={() => fileInputRef.current.click()}
                        className="p-3 text-gray-500 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all"
                        title="Attach Image"
                      >
                        <Paperclip className="w-6 h-6" />
                      </button>
                    </div>

                    {!hasImages && (
                      <div className="text-right">
                        <p className="text-[15px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest">
                          MTCC
                        </p>
                        <p className="text-[12px] text-gray-400">Material Testing and Calibration Center</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}