import React from 'react'

const About = () => {
  return (
    <div className='mt-20 flex content-start h-screen'>

      {/* About - left side */}
      <div className='flex w-[45%] ml-[5%] mr-[5%]'>
        <img src="https://images.unsplash.com/photo-1551822620-21205daf9f3b" className='rounded-lg h-[50%]' />
      </div>

      {/* About - right side */}
      <div className='flex flex-col w-[50%] mr-[5%]'>
        <h2 className='text-center text-2xl font-bold my-[5%]'>React.js Development by Umer Aslam</h2>
        <p className='text-center mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corrupti quae, velit quidem, assumenda, fugit provident accusantium dolorem hic atque mollitia perferendis laborum at repudiandae beatae asperiores rem. Dolorem, consectetur!</p>

        <p className='my-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi, exercitationem fuga omnis eveniet harum magnam earum voluptatibus totam qui expedita mollitia voluptatum vel excepturi consequuntur. Sapiente, itaque! Ullam, soluta?</p>
      </div>



    </div>
  )
}

export default About