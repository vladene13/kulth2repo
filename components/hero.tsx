import heroImage from '../assets/images/hero-image.png';
import arrowIcon from '../assets/icons/arrow-small-right.png';
import vector1 from '../assets/images/Vector 1.png';
import vector2 from '../assets/images/Vector 2.png';


import Button from './button';

export default function Hero() {
  return (
    <section className="mt-24 max-sm:mt-12" id="hero">
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-7 max-md:row-start-2 max-md:col-span-full bg-vektor-4 bg-no-repeat bg-contain max-md:relative">
          <div className="max-sm:text-center">
            <p className="bg-gradient-to-r from-linear-one to-linear-one bg-clip-text text-transparent text-6xl sm:text-9xl font-montserrat-bold">
              AI assisted storyselling around cultural products
              {' '}
              <span className="text-2xl text-white sm:text-[50px]">
                
              </span>
            </p>
            <div className="my-16"></div>
            <p className="text-white text-2xl sm:text-3xl font-montserrat-bold">
              {'Helping cultural operators incresing their sales and culture enthusiast discovering the meaningful story behind cultural products '}
              <span className="bg-gradient-to-r from-linear-one to-linear-two bg-clip-text text-transparent text-4xl sm:text-[40px]">
                
              </span>
            </p>
          </div>
          <div className="max-sm:hidden">
            <p className="text-base text-white mt-4">
              {}
            </p>
          </div>
          {}
        </div>
        <div className="col-span-5 max-md:row-start-3 max-md:mx-auto max-md:col-span-full">
          <div className="bg-hero-image bg-no-repeat bg-center bg-contain object-fill relative p-2">
            <img
              src={vector1}
              alt="background vector one hero images"
              className="absolute -z-20 top-1/2 -translate-y-1/2"
            />
            <img
              src={vector2}
              alt="background vector one hero images"
              className="absolute -z-20 top-1/2 -translate-y-1/2 rotate-90 w-3/4 left-0"
            />
            <img
              src={vector2}
              alt="background vector one hero images"
              className="absolute -z-20 top-1/2 -translate-y-1/2 rotate-90 w-3/4 left-0"
            />
            <img src={heroImage} alt="kulth hero image" className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
