import ServiceProps from '../interface/service-interface';


export default function ServiceCrad2({ ...props }: ServiceProps) {
  return (
    <>
      <div className="px-9 py-10 rounded-[40px] max-sm:w-4/5 max-sm:mx-auto max-[456px]:w-full">
        <div className="flex justify-center">
          {/* <div className="bg-service-image bg-no-repeat bg-contain p-2 object-center"> */}
            <img src={props.path} alt="peoples service images" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h5 className="text-2xl text-white font-montserrat-bold">
            {props.title}
          </h5>
          <hr className="mt-4 w-[154px] mx-auto" />
        </div>
        <div className="mt-6">{props.children}</div>
        <div className="flex justify-center mt-8">
        </div>
      {/* </div> */}
    </>
  );
}
