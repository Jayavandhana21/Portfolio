import { EDUCATION } from '../constants';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        🍃 Education.🎐
      </h1>

      {EDUCATION.map((education) => (
        <div key={education.institution + education.degree} className='mb-8 flex flex-wrap lg:justify-center'>
          <div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className='w-full lg:w-1/4'
          >
            <p className='mb-2 text-sm text-neutral-400'>{education.duration}</p>
          </div>

          <div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className='w-full max-w-xl lg:w-3/4'
          >
            <h4 className='mb-2 font-semibold'>{education.degree}</h4>
            <h6 className='mb-2 font-semibold text-sm'>{education.institution}</h6>
            <p className='mb-4 text-neutral-400 text-justify'>{education.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
