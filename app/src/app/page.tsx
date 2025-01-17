'use client'

import { motion } from 'framer-motion'
import { getBasePath } from '@/utils/path'
import TypingEffect from './components/TypingEffect'
import FileButton from './components/FileButton'
import BlockchainBackground from './components/BlockchainBackground'
import CoFounder from './components/CoFounder'

const preUploadedFiles = [
  { name: 'Project Information Form', url: getBasePath('/files/Team-Satonic_Project_Information_Form.pdf') },
  { name: 'Project Specification Document', url: getBasePath('/files/T2428_Project_Specification_Document.pdf') },
  { name: 'Project Analysis and Requirement Report', url: getBasePath('/files/CS491_Analysis_and_Requirement_Report_Template_v2.2 (1).pdf') },
  { name: 'Demo Presentation', url: getBasePath('/files/Demo_Presentation.pdf') },
]

const coFounders = [
  { name: 'Kaan', role: 'Blockchain Architect', image: getBasePath('/images/kaan.png') },
  { name: 'Bersan', role: 'Smart Contract Developer', image: getBasePath('/images/bersan.png') },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
      <BlockchainBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 text-center"
      >
        <TypingEffect text="SATONIC" />
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {preUploadedFiles.map((file, index) => (
            <FileButton key={index} file={file} />
          ))}
        </div>
        <div className="mt-16 flex justify-center gap-8">
          {coFounders.map((founder, index) => (
            <CoFounder key={index} {...founder} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

