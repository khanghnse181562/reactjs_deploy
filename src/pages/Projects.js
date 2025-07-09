import React from 'react'

const Projects = () => {
  return (
   <>
    <h2 className='center p-2'>My Projects</h2>
    <div className='flex'>
       <div className='p-2'>
        <h3>Facebook</h3>
        <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBb3rF7n6jrx82EqP1p_uOD3xwilQSX58Fg&s' alt='Facebook' className='img-responsive'/></div>
        <p>A social network to stay in touch with friends</p>
       </div>
       <div className='p-2'>
        <h3>Twitter (now X)</h3>
        <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpc2pjwAp359o_hs9w-DeB_d8k5kzKfICsHw&s' alt='Twitter' className='img-responsive'/></div>
        <p>Post an update or tweet sharing news, facts, or anything else.</p>
       </div>
       <div className='p-2'>
        <h3>Quora</h3>
        <div><img src='https://static-00.iconduck.com/assets.00/quora-icon-495x512-sp3u96sp.png' alt='Facebook' className='img-responsive'/></div>
        <p>Ask Questions, or Answer questions asked by others.</p>
       </div>
    </div>
   </>
  )
}

export default Projects