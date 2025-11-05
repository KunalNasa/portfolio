'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type ExperienceProps = {
  company: string;
  role: string;
  from: string;
  to: string;
  description: string;
  logoSrc: string;
};

export default function Accordion({
  company,
  role,
  from,
  to,
  description,
  logoSrc,
}: ExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-gray-100 dark:bg-[#0a0a0a] my-3 dark:text-white rounded-xl border border-neutral-300 dark:border-neutral-800 px-5 py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* On small: vertical; md+: horizontal */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-3">
        {/* Avatar + company/role */}
        <div className="flex items-start sm:items-center gap-3">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={logoSrc} alt={company} />
            <AvatarFallback>{company[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-black dark:text-white">{company}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        {/* Dates + chevron */}
        {/* On small: margin-top to separate */}
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {from} – {to}
          </span>
          <FiChevronDown
            className={`transition-transform duration-300 text-xl flex-shrink-0 ${isOpen ? '' : '-rotate-90'
              }`}
          />
        </div>
      </div>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden mt-4"
          >
            <p
              className="text-sm text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
