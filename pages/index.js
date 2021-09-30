import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className="transition duration-500 ease-out btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Log in
        </a>
        <a
          href="#"
          className="ml-2 transition duration-500 ease-out btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Sign up
        </a>
      </div>

      <header className="mt-4">
        <h2 className="text-6xl font-semibold leading-none tracking-wider text-gray-700">
          Recipes
        </h2>
        <h3 className="text-2xl font-semibold tracking-wider">For Ninjas</h3>
      </header>

      <div>
        <h4 className="pb-2 mt-12 font-bold border-b border-gray-200">
          Latest Recipes
        </h4>

        <div className="grid gap-10 mt-8 lg:grid-cols-3">
          <div className="card hover:shadow-lg">
            <Image
              width={476}
              height={297.17}
              src="/stew.jpg"
              alt="stew"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div className="m-4">
              <span className="font-bold">5 Bean Chili Stew</span>
              <span className="block text-sm text-gray-500">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <svg
                className="inline-block w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <Image
              width={476}
              height={297.17}
              src="/noodles.jpg"
              alt="noodles"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Veg Noodles</span>
              <span className="block text-sm text-gray-500">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <svg
                className="inline-block w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <Image
              width={476}
              height={297.17}
              src="/curry.jpg"
              alt="curry"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Tofu Curry</span>
              <span className="block text-sm text-gray-500">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <svg
                className="inline-block w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
        </div>

        <h4 className="pb-2 mt-12 font-bold border-b border-gray-200">
          Most Popular
        </h4>

        <div className="grid gap-10 mt-8 lg:grid-cols-3">
          <div className="card hover:shadow-lg">
            <Image
              width={476}
              height={297.17}
              src="/stew.jpg"
              alt="stew"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div className="m-4">
              <span className="block font-bold truncate">
                5 Bean Chili Stew with Feta Cheese
              </span>
              <span className="block text-sm text-gray-500">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <svg
                className="inline-block w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <Image
              width={476}
              height={297.17}
              src="/noodles.jpg"
              alt="noodles"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Veg Noodles</span>
              <span className="block text-sm text-gray-500">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <svg
                className="inline-block w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <Image
              width={476}
              height={297.17}
              src="/curry.jpg"
              alt="curry"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Tofu Curry</span>
              <span className="block text-sm text-gray-500">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <svg
                className="inline-block w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="inline-block transition duration-300 ease-out transform btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:scale-125 hover:bg-opacity-50">
          Load more
        </div>
      </div>
    </>
  );
}
