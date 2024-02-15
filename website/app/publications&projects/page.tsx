'use client'
import React from "react"
import "../../globals.css";
import ArticleCard from "@/components/articleCard";
import Modal from "@/components/modal";

const PublicationsProjects: React.FC = () => {
    const header = "Things I’ve made trying to put my dent in the universe."
    const publications = [
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
        imgPath: "/project_images/Senior_Design_Thesis.png",
        link: "https://scholarspace.library.gwu.edu/work/k643b1941",
        code: "",
        title: "Microscale Force Indentation Device",
        authors: "Forstenhaeusler, M., McCraw, M., Chambers, J., ",
        pdf: "https://scholarspace.library.gwu.edu/work/k643b1941",
        date: "May, 2020",
        abstract: "The device is a novel concept based on the mechanics of atomic force microscopy (AFM) devices performing measurements of deflection and force at microscale with the specific application of recording the viscoelastic material properties of bulk tissue. With a wide range of applications, the immediate field of focus for this device is the ex vivo, bioptic analysis of human tissue with the intention to identify and study diseases and other medical phenomena such as skin cancer by assignment of physical properties.",
        key: "modal2"
      }
    ]
    
    const projects = [
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
        {
            imgPath: "/project_images/Siamese-LSTM.png",
            link: "", 
            code: "", 
            title: "Siamese LSTM for Semantic Similarity",
            authors: "Forstenhäusler, M.",
            pdf: "",
            date: "November, 2021",
            abstract: "An implementation of a Deep Learning Pipeline that can be used to evaulate the semantic similarity of two sentenences using PyTorch using a Siamese LSTM Neural Network.",
            key: "modal4"
        },
        {
            imgPath: "/project_images/smart_dispencing_vehicle_nus.png",
            link: "", 
            code: "",
            title: "Smart Pesticide Dispensing Vehicle Project",
            authors: "Choong Wai Kean, Gan Chin Boon, Gwee Meng Hong, Maximilian Forstenhäusler, Saung Su Su Phoo, Tan Chung Haw",
            pdf: "https://drive.google.com/file/d/1ewguY0TwIuy52ovIh0YmmO3P974NwQAV/view?usp=sharing",
            date: "December, 2018",
            abstract: "An implementation of a Deep Learning Pipeline that can be used to evaulate the semantic similarity of two sentenences using PyTorch using a Siamese LSTM Neural Network.",
            key: "modal5"
        }
    ]

    return (
        <div className="sm:px-8 mt-12 sm:mt-24">
            <div className="text-4xl font-bold">
                {header}
            </div>
            {/*<div>
                Subheader
    </div>*/}
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 mt-20">
                <div className="lg:row-span-5 lg:col-span-1 border-l-[2px] border-navBorder"> 
                    <h1 className="text-lg ml-10 text-primary"> Publications </h1>
                </div>
                <div className='flex flex-col items-start lg:col-span-3'> 
                      {publications.map((article, key) => (
                        key === 0 ?
                          <div className='p-2' key={key}> 
                            <Modal content={article} />
                          </div>
                        : 
                        <div className='p-2 mt-10' key={key}> 
                          <Modal content={article} />
                        </div>
                      ))}
                </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 mt-20">
                <div className="lg:row-span-5 lg:col-span-1 border-l-[2px] border-navBorder"> 
                    <h1 className="text-lg ml-10 text-primary"> Projects </h1>
                </div>
                <div className='flex flex-col items-start lg:col-span-3'> 
                      {projects.map((article, key) => (
                        key === 0 ?
                          <div className='p-2' key={key}> 
                            <Modal key={key} content={article} />
                          </div>
                        : 
                        <div className='p-2 mt-10' key={key}> 
                          <Modal key={key} content={article} />
                        </div>
                      ))}
                </div>
            </div>

            <div className="mt-20 w-full flex items-center justify-center">
                
            </div>

        </div>      
    )
}

export default PublicationsProjects