import React, {useState, useEffect} from 'react';
import "../styles/slantedImages.css";
import Image from 'next/image';

const SlantedImages: React.FC = () => {

  
  //const img1 = ["/images/IMG_8258.jpg", "/images/IMG_2310.jpeg", "/images/IMG_9229.jpeg", "/images/IMG_9162.jpeg"]
  //const img2 = ["/images/20221127-IMG_4907.jpg", "/images/IMG_2135.JPG", "/images/IMG_5602.jpeg", "/images/IMG_5850.jpeg", "/images/IMG_8973.jpeg"]
  //const img3 = ["/images/IMG_5044.jpeg", "/images/IMG_1334.jpeg", "/images/IMG_1877.jpeg", "/images/IMG_2495.jpeg", "/images/IMG_5545.jpeg", "/images/IMG_3926.jpeg"]
  //const img4 = ["/images/IMG_9621.jpeg", "/images/IMG_9754.jpeg", "/images/IMG_2589.jpeg", "/images/IMG_5911.jpeg"]
  //const img5 = ["/images/IMG_2777.JPG", "/images/IMG_3044.jpeg", "/images/IMG_4939.jpeg", "/images/IMG_8834.JPG", ]

  const img1 = ["/images/IMG_8258.jpg", "/images/IMG_2310.jpeg", ]
  const img2 = ["/images/20221127-IMG_4907.jpg", "/images/IMG_2135.JPG", ]
  const img3 = ["/images/IMG_5044.jpeg", "/images/IMG_1334.jpeg", ]
  const img4 = ["/images/IMG_9621.jpeg", "/images/IMG_9754.jpeg", ]
  const img5 = ["/images/IMG_2777.JPG", "/images/IMG_3044.jpeg", ]

  const img1Interval = 25000 // 60 sec
  const img2Interval = 40000 // 
  const img3Interval = 20000 // 
  const img4Interval = 50000 // 
  const img5Interval = 35000 // 
  
  const [selectedImg1, setSelectedImg1] = useState<string[]>([]);
  const [selectedImg2, setSelectedImg2] = useState<string[]>([]);
  const [selectedImg3, setSelectedImg3] = useState<string[]>([]);
  const [selectedImg4, setSelectedImg4] = useState<string[]>([]);
  const [selectedImg5, setSelectedImg5] = useState<string[]>([]);


  const selectRandomImage1 = () => {
    // Shuffle the array to randomize the order
    const shuffledImages = img1.sort(() => Math.random() - 0.5);
    //console.log(shuffledImages);
    // Select the first images from the shuffled array
    const selected = shuffledImages.slice(0, 1);
    // Update the selected images state
    setSelectedImg1(selected);
  };

  const selectRandomImage2 = () => {
    const shuffledImages = img2.sort(() => Math.random() - 0.5);
    //console.log(shuffledImages);
    const selected = shuffledImages.slice(0, 1);
    setSelectedImg2(selected);
  };

  const selectRandomImage3 = () => {
    const shuffledImages = img3.sort(() => Math.random() - 0.5);
    //console.log(shuffledImages);
    const selected = shuffledImages.slice(0, 1);
    setSelectedImg3(selected);
  };

  const selectRandomImage4 = () => {
    // Shuffle the array to randomize the order
    const shuffledImages = img4.sort(() => Math.random() - 0.5);
    console.log(shuffledImages);
    // Select the first images from the shuffled array
    const selected = shuffledImages.slice(0, 1);
    // Update the selected images state
    setSelectedImg4(selected);
  };

  const selectRandomImage5 = () => {
    // Shuffle the array to randomize the order
    const shuffledImages = img5.sort(() => Math.random() - 0.5);
    //console.log(shuffledImages);
    // Select the first images from the shuffled array
    const selected = shuffledImages.slice(0, 1);
    // Update the selected images state
    setSelectedImg5(selected);
  };
  
  /* */

  const randomIntervalImg1 = () => {
    // Call the function initially to select images immediately
    selectRandomImage1();

    // Set interval to call the function every 60 seconds
    const interval = setInterval(selectRandomImage1, img1Interval);

    //// Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  
  }

  const randomIntervalImg2 = () => {
    selectRandomImage2();
    const interval = setInterval(selectRandomImage2, img2Interval); // 60000 === 60 sec
    return () => clearInterval(interval);
  
  }

  const randomIntervalImg3 = () => {
    selectRandomImage3();
    const interval = setInterval(selectRandomImage3, img3Interval); // 60000 === 60 sec
    return () => clearInterval(interval);
  
  }

  const randomIntervalImg4 = () => {
    selectRandomImage4();
    const interval = setInterval(selectRandomImage4, img4Interval); // 60000 === 60 sec
    return () => clearInterval(interval);
  
  }

  const randomIntervalImg5 = () => {
    selectRandomImage5();
    const interval = setInterval(selectRandomImage5, img5Interval); // 60000 === 60 sec
    return () => clearInterval(interval);
  
  }

  useEffect(() => {
    randomIntervalImg1();
    randomIntervalImg2();
    randomIntervalImg3();
    randomIntervalImg4();
    randomIntervalImg5();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //console.log(selectedImg1)

  return (
    <div className="mt-16 sm:mt-20 h-[300px] overflow-hidden">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 absolute left-[-150px] right-[-150px]">
        {selectedImg1.map((image, key) => (
          <div id={image} key={key} className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image 
              alt={image}
              loading="eager" 
              width="3936" 
              height="2624" 
              decoding="async" 
              data-nimg="1"
              className="slantedImag1 absolute inset-0 h-full w-full object-cover animate-fading-ing" 
              sizes="(min-width: 640px) 18rem, 11rem" 
              src={image} 
              />
          </div>
        ))
        }
        {selectedImg2.map((image, key) => (
          <div id={image} key={key} className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image 
              alt={image} 
              loading="lazy" 
              width="3936" 
              height="2624" 
              decoding="async" 
              data-nimg="1"
              className="slantedImg2 absolute inset-0 h-full w-full object-cover animate-fading-ing" 
              sizes="(min-width: 640px) 18rem, 11rem" 
              src={image} 
              />
          </div>
        ))
        }
        {selectedImg3.map((image, key) => (
          <div id={image} key={key} className="slantedImages relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image 
              alt={image} 
              loading="lazy" 
              width="3936" 
              height="2624" 
              decoding="async" 
              data-nimg="1"
              className="slantedImg3 absolute inset-0 h-full w-full object-cover animate-fading-ing" 
              sizes="(min-width: 640px) 18rem, 11rem" 
              src={image} 
              />
          </div>
        ))
        }
        {selectedImg4.map((image, key) => (
          <div id={image} key={key} className="slantedImages relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image 
              alt={image} 
              loading="lazy" 
              width="3936" 
              height="2624" 
              decoding="async" 
              data-nimg="1"
              className="slantedImages4 absolute inset-0 h-full w-full object-cover animate-fading-ing" 
              sizes="(min-width: 640px) 18rem, 11rem" 
              src={image} 
              />
          </div>
        ))
        }
        {selectedImg5.map((image, key) => (
          <div id={image} key={key} className="slantedImages relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image 
              alt={image} 
              loading="lazy" 
              width="3936" 
              height="2624" 
              decoding="async" 
              data-nimg="1"
              className="slantedImages5 absolute inset-0 h-full w-full object-cover animate-fading-ing" 
              sizes="(min-width: 640px) 18rem, 11rem" 
              src={image} 
              />
          </div>
        ))
        }
        {/*<div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
        <Image 
          alt="" 
          loading="lazy" 
          width="3936" 
          height="2624" 
          decoding="async" 
          data-nimg="1"
          className="absolute inset-0 h-full w-full object-cover" 
          sizes="(min-width: 640px) 18rem, 11rem" 
          srcSet="IMG_8258.jpg" 
          style={{color: "transparent"}}/>
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <Image 
          alt="" 
          loading="lazy" 
          width="3936" 
          height="2624" 
          decoding="async" 
          data-nimg="1"
          className="absolute inset-0 h-full w-full object-cover" 
          sizes="(min-width: 640px) 18rem, 11rem" 
          srcSet="20221127-IMG_4907.jpg" 
          style={{color: "transparent"}}/>
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <Image 
          alt="" 
          loading="lazy" 
          width="3936" 
          height="2624" 
          decoding="async" 
          data-nimg="1"
          className="absolute inset-0 h-full w-full object-cover" 
          sizes="(min-width: 640px) 18rem, 11rem" 
          src="IMG_3044.jpeg" 
          style={{color: "transparent"}}/>
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
        <Image 
          alt="" 
          loading="lazy" 
          width="3936" 
          height="2624" 
          decoding="async" 
          data-nimg="1"
          className="absolute inset-0 h-full w-full object-cover" 
          sizes="(min-width: 640px) 18rem, 11rem" 
          srcSet="IMG_8834.jpg" 
          style={{color: "transparent"}}
        />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
          <Image 
            alt="" 
            loading="lazy" 
            width="3936" 
            height="2624" 
            decoding="async" 
            data-nimg="1"
            className="absolute inset-0 h-full w-full object-cover" 
            sizes="(min-width: 640px) 18rem, 11rem" 
            srcSet="IMG_5850.jpeg" 
            style={{color: "transparent"}}
          />
      </div>*/}
        
      </div>
    </div>
  );
};

export default SlantedImages;

{/* <div className='bg-blue-400 mt-16 sm:mt-20'>
      <div 
        className="-my-4 flex justify-center"
      >
        <div className="-rotate-2 w-full overflow-hidden relative">
          <Image
              src="https://placekitten.com/200/200"
              alt="Round Image"
              className="rounded-xl 
              w-[512px] h-[384px]
              "
              //sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-[512px] lg:h-[384px]  
          />
        </div>
        <div className="rotate-2 w-full overflow-hidden relative">
          <Image
              src="https://placekitten.com/200/200"
              alt="Round Image"
              className="rounded-xl 
              sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-[512px] lg:h-[384px]"
          />
        </div>
        <div className="rotate-2 w-full overflow-hidden relative">
          <Image
              src="https://placekitten.com/200/200"
              alt="Round Image"
              className="rounded-xl 
              sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-[512px] lg:h-[384px]  
              "
          />
        </div>
        {/*<div className="-rotate-2 w-full overflow-hidden relative">
          <Image
              src="https://placekitten.com/200/200"
              alt="Round Image"
              className="rounded-xl 
              sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-[512px] lg:h-[384px] 
              "
          />
        </div>
        <div className="-rotate-2 w-full overflow-hidden relative">
          <Image
              src="https://placekitten.com/200/200"
              alt="Round Image"
              className="rounded-xl 
              sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-[512px] lg:h-[384px]  
              "
          />
  </div>
      </div>
          
        </div> */}