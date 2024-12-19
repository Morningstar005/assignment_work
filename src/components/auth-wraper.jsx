import { Link } from "react-router-dom";

export default function AuthWrapperOne({ children,
    title,
    bannerTitle,
    bannerDescription,
    description,
    pageImage,
    isSocialLoginActive = false,
    isSignIn = false,
}){
    return (
        <>
    
          <div className="min-h-screen items-center flex-row-reverse justify-between gap-x-8 px-4  lg:flex lg:px-6 xl:gap-x-10 xl:px-7 2xl:px-10  [&>div]:min-h-[calc(100vh-80px)] overflow-hidden h-screen">
            <div className="relative flex w-full items-center justify-center lg:w-5/12 2xl:justify-end 2xl:pe-24">
              <div className=" w-full max-w-sm md:max-w-md lg:py- lg:ps-3 lg:pt- 2xl:w-[630px] 2xl:max-w-none 2xl:ps-20 2xl:pt-2">
               
                <div className="mb-7 px-6 pt-3 text-center md:pt-0 lg:px-0 lg:text-start xl:mb-8 2xl:mb-10">
                  <Link
                    href={'/'}
                    className="mb-6 inline-flex max-w-[168px] xl:mb-4"
                  >
                  
                  </Link>
                  <h2
                    className="mb-5 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-7 lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl"
                  >
                    {title}
                  </h2>
               
                </div>
                
    
                {children}
              </div>
            </div>
    
            <div className="hidden text-center mx-auto w-7/12 items-center justify-center rounded-[20px] bg-gray-50 px-6 lg:flex xl:justify-center 2xl:justify-start 2xl:px-16 dark:bg-gray-100/40">
              <div className="pb- pt-1 text-center xl:pt-0 2xl:block 2xl:w-[1063px]">
                <div className="mx-auto mb-5 max-w-sm pt-2 2xl:max-w-lg">
                  <h2
                    className="mb-2 mt-8 font-semibold !leading-normal lg:text-[26px] 2xl:px-10 2xl:text-[32px]"
                  >
                    {bannerTitle}
                  </h2>
                  <h2 className="leading-[1.85] text-gray-700 md:leading-loose 2xl:px-6">
                    {bannerDescription}
                  </h2>
                </div>
                <div className="md:w-[400px] xl:w-[500px] 2xl:w-[1000px] 3xl:w-[1200px] max-h-[500px] ">
                {pageImage}</div>
              
              </div>
            </div>
          </div>
        </>
      );
}