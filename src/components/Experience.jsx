import {EXPERIENCES} from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <h1 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
         className='my-20 text-center text-4xl'>🎐Work <span className='text-neutral-500'>Experience</span>.🎁</h1>
    <div>
        {EXPERIENCES.map((experience,index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div  whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div whileInView={{x:0,opacity:1}}
            animate={{x:100,opacity:0}} 
            transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{experience.role} - <span className='font-bold'>{experience.company}</span> </h6>
                    <p className='mb-4 text-neutral-400 text-justify'>{experience.description}</p>
                    {experience.technologies.map((tech,index) => (
                        <span key={index} className='mr-2 mt-4  rounded-md bg-neutral-900 p-2 px-2 py-1 font-medium text-purple-500'>{tech}</span>
                    ))}
                </div>
            </div>
        ))} 
    </div>

    </div>
  )
}

export default Experience