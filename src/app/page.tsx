'use client'
import Head from 'next/head';
import Image from "next/image";
import { Row, Col, Button } from 'antd';
//import { AiOutlineRocket, AiOutlineDatabase, AiOutlineSetting, AiOutlineDeploymentUnit, AiOutlineCarryOut } from 'react-icons/ai';
import * as AiIcons from 'react-icons/ai';
//import Icon from '@ant-design/icons';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full min-h-screen mx-auto bg-gradient-to-br from-sky-blue-light to-sky-blue-dark">
      <Head>
        <title>Light Blue White | Empowering Innovation with Custom LLMs</title>
        <meta name="description" content="Unlock the power of your data and unleash innovation with custom large language models (LLMs) from Light Blue White." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center px-10 py-4">

        <div className="relative md:hidden">
          <Image
            src="/lbw-logo-horizontal-2.svg"
            alt="Light Blue White Logo"
            width={200}
            height={70}
            priority
          />
        </div>
        <div className="relative hidden md:block 2xl:hidden">
          <Image
            src="/lbw-logo-horizontal-2.svg"
            alt="Light Blue White Logo"
            width={300}
            height={70}
            priority
          />
        </div>
        <div className="relative hidden 2xl:block">
          <Image
            src="/lbw-logo-horizontal.svg"
            alt="Light Blue White Logo"
            width={350}
            height={70}
            priority
          />
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="#services" className="text-white hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">About</a>
            </li>
            <li>
              <a href="https://calendly.com/lschnoller/free-consultation" className="text-white hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col min-h-screen justify-center items-center md:px-40 px-20 pt-40 2xl:pt-40">
        <section className="mb-28 2xl:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >

            <h1 className="text-3xl 2xl:text-4xl font-bold text-center text-white mb-7">
              Unlock the Power of Your Data. Unleash Innovation with Custom LLMs.
            </h1>
            <p className="text-xl text-center text-gray-200 mb-20">
              Light Blue White empowers businesses with LLM and AI solutions that unlock hidden potential.
            </p>
            <div className='mx-auto block text-center'>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full">
                <a href="https://calendly.com/lschnoller/free-consultation">Get Free Consultation</a>
              </button>
            </div>
          </motion.div>
        </section>
        <section id="services" className="mt-30 mb-56 max-w-7xl">
          {/* <h2 className="text-2xl font-semibold text-center text-white mb-8">Our Key Services</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineDeploymentUnit className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">On-premise LLM Deployment</h3>
              <p className="text-gray-300 text-center leading-snug">
                Empower your business ensuring your data remains securely within your own infrastructure.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineDatabase className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Open-Source LLM Expertise</h3>
              <p className="text-gray-300 text-center">
                Leverage expertise in cutting-edge open-source LLMs to deliver private & cost-effective solutions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineSetting className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">LLM with Granular Access Control</h3>
              <p className="text-gray-300 text-center">
                Tailor the LLM for each user enforcing granular access controls (ACLs) to your data to meet compliance needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineCarryOut className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">End-to-End LLM Deployment</h3>
              <p className="text-gray-300 text-center">
                Employ LLM best practices, from data collection to LLM deployment and ongoing maintenance.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineSafety className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Compliant LLM Fine-Tuning</h3>
              <p className="text-gray-300 text-center">
                Fine-tune your custom LLM on anonymized data, unlocking valuable insights while complying with data privacy regulations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineRocket className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Scalable RAG Infrastructure</h3>
              <p className="text-gray-300 text-center">
                Build highly scalable RAG infrastructure that adapts and grows alongside your data volume and evolving business needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}
