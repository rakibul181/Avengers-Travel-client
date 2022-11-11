import React from "react";

const AddService = () => {
  const handelAddService = (e) => {
    e.preventDefault();
    const serviceName = e.target.name.value
    const email = e.target.email.value
    const imgUrl = e.target.url.value
    const price = e.target.price.value
    const details = e.target.details.value 
    const sort = e.target.sort.value
    const service = {
        serviceName:serviceName,
        sort :sort,
        email:email,
        imgUrl:imgUrl,
        details:details,
        price:price
    }
    console.log(service);
    fetch('http://localhost:5000/service',{
            method: 'POST',
            headers:{
                'Content-type' :'application/json'
            },
            body:JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    alert('Service added sussccsfuly')
                }
                e.target.reset()
            })
            .catch(err => console.error(err))

  };

  return (
    <div className="w-full m-auto max-w-xl xl:px-8 xl:w-5/12">
      <div className="bg-neutral rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Add A Service
        </h3>
        <form onSubmit={handelAddService}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Service Name
            </label>
            <input
              placeholder="John"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              name="name"
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              placeholder="john.doe@example.org"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Services Photo
            </label>
            <input
              placeholder="Image url"
              required
              type="url"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              name="url"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Services Price
            </label>
            <input
              placeholder="$ Price"
              required
              type="number"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="Sort" className="inline-block mb-1 font-medium">
              Sort description
            </label>

            <textarea
              placeholder="Write Services Details"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Sort"
              name="sort"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="details" className="inline-block mb-1 font-medium">
              Services Details
            </label>

            <textarea
              placeholder="Write Services Details"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="details"
              name="details"
            />
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="btn btn-primary inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddService;
