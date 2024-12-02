import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At ArtExpression, we believe in the power of creativity to heal, inspire, and unite. Our platform is a safe and nurturing space for individuals to express themselves through poetry, visual arts, and storytelling, offering a means of emotional release and personal growth. Our mission is to provide a global community for those whose voices have been silenced by the challenges of life—whether due to war, trauma, or personal struggles—and give them the tools and audience they deserve to be heard.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We envision a world where art and poetry transcend boundaries, offering individuals across the globe a voice. Whether in the heart of a warzone or a peaceful neighborhood, our platform is a reminder that everyone has a story worth telling. We aim to empower individuals—especially those affected by conflict, loss, or displacement—to share their creativity and find solidarity in the universal experience of art.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>OUR <span className='text-gray-700 font-semibold'>VALUES</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer' >
          <b>Healing Through Art: </b>
          <p>We believe that art is a powerful tool for healing. Whether through painting, writing, or other forms of self-expression, creativity has the potential to restore peace, offer comfort, and inspire change.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Community and Connection:</b>
          <p>At ArtExpression, community comes first. We connect individuals across cultures, bringing them together to share stories, offer support, and form relationships that foster healing and resilience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Social Impact:</b>
          <p>We strive to make a positive social impact. By helping individuals express their stories and showcasing their artwork, we amplify voices that often go unheard and contribute to a larger cultural shift toward empathy and understanding</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Empowerment and Expression:</b>
          <p>We empower individuals to take ownership of their stories and express themselves freely. Whether you are a seasoned artist or someone trying art for the first time, you are welcome here. Your voice matters.</p>
        </div>
      </div>

    </div>
  )
}

export default About
