// static images
import chevronRightIcon from '../assets/icons/chevron-small-right.png';
import chevronLeftIcon from '../assets/icons/chevron-small-left.png';
import arrowRightLargeIcon from '../assets/icons/arrow-right-large.png';
import serviceBackground from '../assets/images/Vector 14.png';

// components
import SectionHeader from './section-header';
import ServiceCard from './product-card';
import Carousel from './carousel';
import { ServiceData } from '../data/product-data';
import { useState } from 'react';

function CraouselItems() {
  return (
    <>
      {ServiceData.map((val) => {
        return (
          <div
            key={val.id}
            className="w-[380px] max-lg:flex-none max-lg:mr-1 max-md:w-full max-md:mr-0"
          >
            <ServiceCard title={val.title} path={val.path}>
              <p className="text-sm text-white font-normal">{val.content}</p>
            </ServiceCard>
          </div>
        );
      })}
    </>
  );
}

export default function Service() {
  const [currentVal, setCurrentVal] = useState<number>(0);

  const prev = (curr: number) => {
    if (window.innerWidth > 768) {
      curr == 0
        ? setCurrentVal(ServiceData.length - 3)
        : setCurrentVal(curr - 1);
    } else {
      curr == 0
        ? setCurrentVal(ServiceData.length - 1)
        : setCurrentVal(curr - 1);
    }
  };

  const next = (curr: number) => {
    if (window.innerWidth > 768) {
      curr == 1 ? setCurrentVal(0) : setCurrentVal(curr + 1);
    } else {
      curr == ServiceData.length - 1
        ? setCurrentVal(0)
        : setCurrentVal(curr + 1);
    }
  };
  return (
    <section className="mt-24 max-sm:mt-14 relative" id="services">
      <img
        src={serviceBackground}
        alt="hydra service background"
        className="absolute left-0 right-0 -bottom-64 max-lg:hidden"
      />
      <div className="grid grid-cols-12 gap-14 max-md:gap-x-0">
        <SectionHeader
          title="PRODUCT"
          subtitle=""
          path={arrowRightLargeIcon}
        />
      </div>
      <Carousel>
        <div
          className="relative flex justify-between items-center transition duration-500 ease-in mt-28 gap-3 max-lg:gap-0 max-sm:mt-6"
          style={{ transform: `translateX(-${currentVal * 100}%)` }}
        >
          <CraouselItems />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden max-lg:block">
          <button type="button" onClick={() => prev(currentVal)}>
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronLeftIcon} alt="heydra chevron left icon" />
              </div>
            </div>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden max-lg:block">
          <button type="button" onClick={() => next(currentVal)}>
            <div className="bg-slider-icon-1 bg-no-repeat bg-cover p-2">
              <div className="bg-slider-icon-2 bg-no-repeat bg-cover">
                <img src={chevronRightIcon} alt="heydra chevron right icon" />
              </div>
            </div>
          </button>
        </div>
      </Carousel>

      
    </section>
  );
}
