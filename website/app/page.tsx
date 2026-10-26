import React from 'react';
import SlantedImages from '@/components/slantedImages';
import Card from '@/components/card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactBox from '@/components/contactBox';
import ProgrammingSkillsAnimation from '@/components/animation';
import Modal from '@/components/modal';
import LandingPortrait from '@/components/landingPortrait';
import { featuredPublications } from '@/data/articles';
import Link from 'next/link';

const App: React.FC = () => {

  const headerText = "AI enthusiast, ML researcher and amateur skier ⛷️"
  const subHeaderText = "I'm Max, a machine learning researcher based in Munich 🇩🇪. \
  I currently pursue a PhD at the University of Glasgow 🏴󠁧󠁢󠁳󠁣󠁴󠁿 where I research and develop technologies \
  that aim to ensure privacy in machine learning applications."

  const cardTitle = "Work Experience"
  const cardContent = [
      {
        'company': 'BMW',
        'jobTitle': 'PhD candidate in Federated Learning',
        'start': '03/2024',
        'end': 'Present',
        'imgPath': "/logos/bmw.svg",
        'link': 'https://www.bmw.com/de/index.html',
      },
      {
        'company': 'Caltech',
        'jobTitle': 'Visiting Researcher',
        'start': '11/2022',
        'end': '10/2023',
        'imgPath': "/logos/caltech_seal.png",
        'link': 'https://www.caltech.edu/',
      },
      {
        'company': 'BMW',
        'jobTitle': 'Working Student in Machine Learning',
        'start': '03/2022',
        'end': '10/2022',
        'imgPath': "/logos/bmw.svg",
        'link': 'https://www.bmw.com/de/index.html',
      },
      {
        'company': 'TUM.ai',
        'jobTitle': 'Software Dev Team Lead',
        'start': '06/2021',
        'end': '05/2022',
        'imgPath': "/logos/tumai_blackVioletlarge_logo.png",
        'link': 'https://www.tum-ai.com/',
      },
      {
        'company': 'SAP',
        'jobTitle': 'Working Student - University Collaboration',
        'start': '08/2021',
        'end': '01/2022',
        'imgPath': "/logos/sap.svg",
        'link': 'https://www.sap.com/',
      },
      {
        'company': 'George Washington University',
        'jobTitle': 'Undergraduate Research Assistant',
        'start': '05/2018',
        'end': '05/2020',
        'imgPath': "/logos/gw_seas.jpeg",
        'link': 'https://www.gwu.edu/',
      },
      {
        'company': 'Robert Bosch GmbH',
        'jobTitle': 'Intern - EPS',
        'start': '05/2019',
        'end': '08/2019',
        'imgPath': "/logos/bosch.png",
        'link': 'https://www.bosch.com/',
      },
  ]


  return (

      <div id="wrapper" className=''>
        <Navbar landingPage={true}/>
        <main id="main-content" className='min-w-0 flex-auto p-4 text-primary'>

          <div className='sm:mx-5 md:mx-10 lg:mx-16 xl:mx-20'>
            <div className="header">
              <LandingPortrait />
              <div className="mt-1 p-4 transition ease-in-out delay-15">
                <h1 className="text-3xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl" >
                  {headerText}
                </h1>
              </div>
              <div className="p-4">
                <p className="text-base sm:text-1xl text-secondary"
                style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.5',
                  fontWeight: '300',
                }}
                >
                  {subHeaderText}
                </p>
              </div>
              <ContactBox className='p-4 flex flex-row justify-start ml:5'></ContactBox>
              </div>

          </div>
          <div className="-mx-4">
            <SlantedImages />
          </div>
          <div className="sm:mx-5 md:mx-10 lg:mx-16 xl:mx-20">
              <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 mb-5 mt-[50px] sm:mt-[100px]">
                <section aria-label="Selected publications" className="flex min-w-0 flex-col items-start gap-8">
                  {featuredPublications.map(article => <Modal key={article.key} content={article} />)}
                  <Link href="/publications&projects" className="inline-flex min-h-11 items-center px-4 text-modal-link underline underline-offset-4 hover:text-modal-link-hover">All publications &amp; projects <span aria-hidden="true" className="ml-2">→</span></Link>
                </section>
                <div className='min-w-0'>
                  <Card cardTitle={cardTitle} cardContent={cardContent}/>
                </div>
              </div>

              {<div className='mt-20'>
                <ProgrammingSkillsAnimation></ProgrammingSkillsAnimation>
              </div>}
          </div>

        </main>
        <Footer />

      </div>

  )
}
export default App;
