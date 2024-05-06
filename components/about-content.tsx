import AboutProps from '../interface/about-interface';
import Button from './button';

export default function AboutContent({ ...props }: AboutProps) {
  return (
    <>
      <div className="col-span-6 max-md:col-span-full">
        <img
          src={props.path1}
          alt="heydra about image"
          className="relative max-md:w-4/5 max-md:mx-auto max-sm:min-w-full"
        />
        <img
          src={props.path2}
          alt="heydra image vector about"
          className="absolute top-1/3 max-md:hidden"
        />
        <img
          src={props.path3}
          alt="heydra image vector about"
          className="absolute top-3/4 max-md:hidden"
        />
      </div>
      <div className="col-span-6 flex flex-col justify-center max-md:col-span-full max-md:items-center">
        <h3 className="text-4xl text-white font-montserrat-bold max-md:hidden">
          {props.title}
        </h3>
        <small className="text-4xl font-light text-slate-300 max-md:hidden">
          {props.subtitle}
        </small>
        <div className="mt-10 mb-7 max-md:mt-0">
          <p className="text-sm text-white font-light">
            XR&AI storyselling around cultural products and heritage.
          </p>
        </div>
        <Button
          textColor="text-primary"
          bgColor="bg-gradient-to-r from-linear-two to-linear-two"
          textSize="text-xs"
          height="h-[48px]"
          width="w-[214px]"
        >
          DOWNLOAD KULTH
        </Button>
      </div>
    </>
  );
}
