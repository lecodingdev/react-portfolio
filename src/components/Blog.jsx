import React from 'react'

const Blog = () => {
  return (
    <section id='blog' className='pt-36 pb-32 bg-slate-100'>
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className='font-semibold text-lg text-primary mb-2'>Blog</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>My Article</h2>
                    <p className='font-medium text-md text-secondary md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae deserunt molestias dolore.</p>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src='https://source.unsplash.com/360x200?programming'className='w-full' />
                        <div className="py-8 px-6">
                            <h3> <a href="#" className='block font-semibold text-2xl text-dark hover:text-primary truncate'>How to Mastering ReactJs</a></h3>
                            <p className='font-medium text-secondary text-lg mb-3'>Write by Alan Tanadi</p>
                            <p className='font-medium text-base text-secondary mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint asperiores aspernatur deleniti. Rerum amet nulla quibusdam!</p>
                            <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src='https://source.unsplash.com/360x200?software'className='w-full' />
                        <div className="py-8 px-6">
                            <h3> <a href="#" className='block font-semibold text-2xl text-dark hover:text-primary truncate'>Jira is Best Agile Method</a></h3>
                            <p className='font-medium text-secondary text-lg mb-3'>Write by Alan Tanadi</p>
                            <p className='font-medium text-base text-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src='https://source.unsplash.com/360x200?API'className='w-full' />
                        <div className="py-8 px-6">
                            <h3> <a href="#" className='block font-semibold text-2xl text-dark hover:text-primary truncate'>Sanity Headless CMS</a></h3>
                            <p className='font-medium text-secondary text-lg mb-3'>Write by Alan Tanadi</p>
                            <p className='font-medium text-base text-secondary mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, laudantium ipsam!</p>
                            <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog