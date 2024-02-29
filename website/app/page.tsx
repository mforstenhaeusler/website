"use client"

import React, { useState, useEffect } from 'react';
import "../globals.css";
import SlantedImages from '@/components/slantedImages';
import Card from '@/components/card';
import Animation from '@/components/animation';
import ImageScroll from '@/components/imageScroll';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactBox from '@/components/contactBox';
import ArticleCard from '@/components/articleCard';
//import dynamic from "next/dynamic";
//const Animator = dynamic(
//  import("react-scroll-motion").then((it) => it.Animator),
//  { ssr: false }
//);
import { Animator, Fade, FadeIn, FadeOut, ScrollContainer, ScrollPage, batch, MoveIn, Sticky, Zoom} from 'react-scroll-motion';
import ProgrammingSkillsAnimation from '@/components/animation';
import Modal from '@/components/modal';
import Image from 'next/image';


const App: React.FC = () => {

  const fadeIn = {
    '0%': { opacity: 0, transform: "translateX(-300px)" },
    '50%': { opacity: 0.5 },
    '100%': { opacity: 1 },
  };

  const headerText = "AI enthusiast, ML researcher and amatuer skier ⛷️"
  const subHeaderText = "I'm Max, a machine learning reseacher based in Munich 🇩🇪. \
  I currently pursue a PhD at the University of Glasgow 🏴󠁧󠁢󠁳󠁣󠁴󠁿 where I ressearch and develop technologies \
  that aim to ensure privacy in machine learning applications."
  
  const cardTitle = "Work Experience"
  const cardContent = [
      {
        'company': 'BMW',
        'jobTitle': 'PhD candidate in AI and Privacy',
        'start': '03/2024',//'Mar 2024',
        'end': 'Present',//'Present',
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
        'start': '03/2024',//'Mar 2024',
        'end': 'Present',//'Present',
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
        'jobTitle': 'Undergraduate Research Assistent',
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

  const publicationsProjects = [
    {
      imgPath: "/project_images/thesis.png",
      link: "https://mediatum.ub.tum.de/node?id=1726945",
      code: "",
      title: "Physics-Informed Geometric Deep Learning for Molecular Property Prediction",
      authors: "Forstenhäusler, M.",
      pdf: "",
      date: "September, 2023",
      abstract: "In recent years, data-driven methods have become increasingly appealing to predict and accelerate chemical property prediction and molecular dynamics. Leveraging graph representations, graph neural networks have become the method of choice for this task. Initially, these models aimed to incorporate invariance to permutations and translations to align with the laws of physics. Nevertheless, subsequent work demonstrated that it is crucial to not only account for invariances but also to address rotational equivariance of molecular structures. Most commonly, performance benchmarking of machine learning models in this space occurs on the QM9 and MD17 datasets. However, most recently, it was shown that electron densities inherently contain more information than energy and other common properties of these benchmarks. Hence, this work emphasizes predicting a molecule’s electron density from its 3-dimensional atomistic representation via a data-driven approach. To predict densities, this study provides an extension to the QM9 dataset by computing density target values, i.e., densities coefficients, via density functional theory. Moreover, this work extends two algorithmic methodologies, a message passing and an attention-based methodology, to maintain rotational equivariance while including an arbitrary number of type-l features per irreducible representation, which is a prerequisite to predict and compute the electron density. Initial benchmarking revealed that the message passing model performs considerably better than the attention-based model. In fact, the message passing model, benchmarked on common public datasets, performs on par with state-of- the-art methodologies. Likewise, the electron density predictions achieve excellent results with mean absolute errors of 0.30%. Even when training on a small subset of data, decent errors of 1.37% on the test dataset are achievable. In summary, two different methodologies of equivariant machine learning models are introduced and benchmarked on common datasets. In addition, the scope of available properties within the QM9 dataset is extended to allow the prediction of information-rich electron densities.",
      key: "modal1"
    },
    {        
      imgPath: "/project_images/publication1.png",
      link: "http://casopisi.junis.ni.ac.rs/index.php/FUMechEng/article/view/6927",
      code: "https://github.com/mforstenhaeusler/AFMviscoelastic",
      title: "Guidlines to simulate linear viscoelastic materials with an arbitarty number of characteristic times in the context of atomicforce microscopy",
      authors: "Maximilian Forstenhäusler, Enrique A. López-Guerra, Santiago D. Solares",
      pdf: "http://casopisi.junis.ni.ac.rs/index.php/FUMechEng/article/view/6927/3904",
      date: "April, 2021",
      abstract: "We provide guidelines for modeling linear viscoelastic materials containing an arbitrary number of characteristic times, under atomic force microscopy (AFM) characterization.",
      key: "modal0"
    },
    {
      imgPath: "/project_images/quantum_SVM.png",
      link: "", 
      code: "https://github.com/mforstenhaeusler/Quantum-Support-Vector-Machines",
      title: "Quantum Support Vector Machines",
      authors: "Forstenhäusler, M.",
      pdf: "https://github.com/mforstenhaeusler/Quantum-Support-Vector-Machines/blob/main/Slides/Quantum_Support_Vector_Machines_final.pdf",
      date: "December, 2021",
      abstract: "As part of a Seminar at during my M.Sc. at TUM, I experimented with the implementation of Quantum Support Vector Machines and Classical Suport Vector Machines.",
      key: 'modal3'
    },
  ]

  const marginTop: number = 24;
  //const [minTop, setMinTop] = useState<number>(27);
  //const [maxTop, setMaxTop] = useState<number>(180); // Adjust the maximum scroll position as needed  

  //const [top, setTop] = useState<number>(maxTop);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [minScale, setMinScale] = useState<number>(1);
  const [maxScale, setMaxScale] = useState<number>(2); // change to 2.5
  const [scale, setScale] = useState<number>(maxScale);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const scrollDelta= lastScrollTop - currentScroll
      if (scrollDelta < 0) {
        // Scrolling down
        //const newTop = Math.max(Math.min(top-scrollDelta, maxTop), minTop);
        //setTop(newTop); // Adjust the pixels for downward movement
        const distanceTravelledPercentage = Math.abs(currentScroll / (marginTop+256));
        const newScale = Math.max(maxScale*(Math.abs(maxScale - minScale)*(1-distanceTravelledPercentage)), minScale);
        let newScaleChecked = Math.max(newScale, minScale);
        newScaleChecked = Math.min(newScaleChecked, maxScale);
        setScale(newScaleChecked);
      } else {
        // Scrolling up
        //if (currentScroll < maxTop){
        //  const newTop = Math.min(Math.max(top-scrollDelta, minTop), maxTop);
        //  setTop(newTop); // Adjust the pixels for upward movement
        const distanceTravelledPercentage = Math.abs(currentScroll / (marginTop+256));
        const newScale = Math.min(maxScale*(Math.abs(maxScale - minScale)*(1-distanceTravelledPercentage)), maxScale);
        let newScaleChecked = Math.max(newScale, minScale);
        newScaleChecked = Math.min(newScaleChecked, maxScale);
        setScale(newScaleChecked);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);

      const navbar = document.getElementById('Navbar');
      console.log(currentScroll)
      console.log(scrollDelta)

      if (currentScroll >= marginTop+113){
        if (navbar !== null){
          navbar.style.marginTop = `${marginTop+255}px`
          navbar.style.position = 'absolute'
        } 
      } if (scrollDelta > 0){
        // Scrolling down
        if (navbar !== null){
          if (currentScroll <= marginTop+120){
            navbar.style.marginTop = `${0}px`
            navbar.style.position = 'fixed'
          }
        }
      }

    };

  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollTop]);

  return (
    
      <div id="wrapper" className=''>
        <Navbar landingPage={true}/>
        <main className='flex-auto p-4 text-primary overflow-hidden' style={{ overflow: "hidden"}}> {/* bg-zinc-300 */}
        {/*<ScrollContainer>
          <ScrollPage style={{ overflow: "", height: "100%", marginBottom: "128px"}} className=''>
  <Animator animation={batch()}>*/}
          <div className='sm:mx-5 md:mx-10 lg:mx-16 xl:mx-20'>
            <div className="header">
              <div id="overflow" className='h-[100px] flex items-center justify-start'
              style={{
                marginTop: `${marginTop}px`,
              }}
              > {/* bg-blue-400 */}
                <img
                    src="/headshot/IMG_0443.jpeg"
                    alt="Round Image"
                    className="rounded-full w-12 h-12 object-cover ml-10 bg-primary p-0.5 border border-nav shadow-sm"
                    style={{
                      scale: `${scale}`
                    }}
                />
              </div>
              <div className="mt-1 p-4 transition ease-in-out delay-15"> 
                <p className="text-4xl sm:text-6xl font-medium text-primary" > 
                  {headerText}
                </p> 
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

              {<div className='overflow-x-hidden'>
                <SlantedImages />
              </div>}

              <div className="grid xl:grid-cols-1 2xl:grid-cols-2 gap-8 mb-5 mt-[50px] sm:mt-[100px]">
                <div className='flex flex-col md:m-auto sm:items-start'> 
                      {publicationsProjects.map((content, key) => (
                        key === 0 ?
                          <div className='p-2' key={key}> 
                            <Modal content={content} />
                          </div>
                        : 
                        <div className='p-2 mt-10' key={key}> 
                          <Modal content={content} />
                        </div>
                      ))}
                </div>
                <div className='md:m-auto xl:mt-10'>
                  <Card cardTitle={cardTitle} cardContent={cardContent}/>
                </div>
              </div>

              {<div className='mt-20'>
                <ProgrammingSkillsAnimation bigAnimation='false'></ProgrammingSkillsAnimation>
              </div>}
          </div>
              
              
              {/*</Animator>
            </ScrollPage>*/}
          
          {/*<ScrollPage>
            <Animator animation={batch(Fade())}>
              <div className='flex justify-center items-center mt-[80px] sm:mt-[100px]'>
                <Card cardTitle={cardTitle} cardContent={cardContent}/>
              </div>
            </Animator>
          </ScrollPage>*/}

          {/*<ScrollPage style={{height: '100%'}} className='bg-zinc-400'>
                <Animator animation={batch(FadeIn())}>*/}

          {/*</Animator>
          </ScrollPage>*/}

          {/*<ScrollPage style={{ height: '100%'}}>
            <Animator animation={batch(FadeIn())}>
            
            </Animator>
        </ScrollPage>*/}
        
          
        {/*</ScrollContainer>*/}
        </main>
        <Footer />
        
      </div>
    
    
  )
}
export default App;
