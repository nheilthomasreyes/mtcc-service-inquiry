import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from 'lucide-react';

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
  },
  research: {
    title: 'Research and Development',
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
  },
  training: {
    title: 'Personnel Training',
    description: 'Professional training and certification programs designed to enhance technical competencies and laboratory skills.',
    intro: 'Invest in your team\'s professional development. Our comprehensive training programs combine theoretical knowledge with hands-on practical experience.',
    categories: [
      {
        name: 'Training Programs',
        description: 'Comprehensive skill development courses',
        items: [
          { name: 'Equipment Operation Training', price: 'Contact for quotation', details: 'Hands-on training for laboratory equipment' },
          { name: 'Calibration Procedures Workshop', price: 'Contact for quotation', details: 'Learn standard calibration protocols' },
          { name: 'Material Testing Techniques', price: 'Contact for quotation', details: 'Master various testing methodologies' },
          { name: 'Laboratory Safety Training', price: 'Contact for quotation', details: 'Essential safety protocols and practices' },
          { name: 'Quality Management Systems', price: 'Contact for quotation', details: 'ISO standards and implementation' },
          { name: 'Data Recording & Analysis', price: 'Contact for quotation', details: 'Proper documentation and analysis methods' },
        ],
      },
      {
        name: 'Certification Programs',
        description: 'Professional certification and competency assessment',
        items: [
          { name: 'Calibration Technician Certification', price: 'Contact for quotation', details: 'Accredited calibration specialist program' },
          { name: 'Material Testing Certification', price: 'Contact for quotation', details: 'Certified testing professional program' },
          { name: 'Laboratory Quality Manager', price: 'Contact for quotation', details: 'Advanced quality management certification' },
          { name: 'Equipment Operator Certification', price: 'Contact for quotation', details: 'Specialized equipment handling credentials' },
        ],
      },
    ],
  },
};

export function ServiceModal({ serviceId, onClose }) {
  const service = serviceId ? serviceDetails[serviceId] : null;

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

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl"
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  For detailed quotations and custom service packages, please contact us at <span className="font-semibold text-[#2d3e50] dark:text-blue-400">mtcc@g.batstate-u.edu.ph</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
