import React from "react";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isMenuOpen,
  onToggle,
}) => {
  return (
    <motion.button
      className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-gray-800 rounded focus:outline-none"
      onClick={onToggle}
      aria-expanded={isMenuOpen}
      aria-label="Toggle Menu"
      whileHover={{ scale: 1.05 }} // Slight hover effect
      whileTap={{ scale: 0.95 }} // Tap effect
    >
      {/* Line 1 */}
      <motion.span
        className="block w-6 h-1 bg-white rounded transition-transform"
        initial={false}
        animate={{
          rotate: isMenuOpen ? 45 : 0,
          y: isMenuOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Line 2 */}
      <motion.span
        className="block w-6 h-1 bg-white rounded my-1"
        initial={false}
        animate={{
          opacity: isMenuOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Line 3 */}
      <motion.span
        className="block w-6 h-1 bg-white rounded transition-transform"
        initial={false}
        animate={{
          rotate: isMenuOpen ? -45 : 0,
          y: isMenuOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default MobileMenuButton;
