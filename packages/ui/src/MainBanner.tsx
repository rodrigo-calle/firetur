type Props = {
  content: {
    title: string;
    imageUrl: string;
  }[];
};

const MainBanner = ({ content }: Props) => {
  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": true
      }'
      className="relative h-4/5"
    >
      <div className="relative overflow-hidden w-full min-h-3/4 bg-white h-full">
        <div className="hs-carousel-body absolute top-0 bottom-0 left-0 flex flex-nowrap transition-transform duration-1000 ease-in-out opacity-100">
          {content.map(({ title, imageUrl }, index) => (
            <div
              key={index}
              className="hs-carousel-slide transform transition-transform duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="flex h-full bg-gray-100 p-6 dark:bg-neutral-900 transition-opacity duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="self-center text-4xl text-gray-800 dark:text-white">
                  <h1 className="text-white font-bold text-6xl mb-4">
                    {title.split("-")[0]}
                  </h1>
                  <p className="text-white font-bold text-4xl">
                    {title.split("-")[1]}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {content.length > 1 && (
        <>
          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 left-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-l-lg dark:text-white dark:hover:bg-white/10"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 right-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-r-lg dark:text-white dark:hover:bg-white/10"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>
          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
            {content.map((_, index) => (
              <span
                key={index}
                className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MainBanner;
