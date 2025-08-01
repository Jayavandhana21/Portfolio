const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h1 className="my-20 text-center text-4xl">
        🪁About <span className="text-neutral-500">Me.☀️</span>
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col  items-center gap-12 px-4">
        <div className="w-full">
          <div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <p className="my-4 max-w-xl py-6 font-medium text-justify lg:max-w-3xl">
              Hello! I’m a passionate Computer Science and Data Analytics graduate
              from PSG College of Arts & Science in Coimbatore, Tamil Nadu. I’ve
              always been curious about how things work on the web, which led me to
              dive deep into front-end development.
              <br />
              <br />
              I have a strong foundation in programming languages like Python and
              JavaScript. I enjoy building clean, responsive, and engaging interfaces
              using React.js, JavaScript, and Tailwind CSS. I love turning ideas into
              real, functional websites that not only work well but also look great.
              <br />
              <br />
              I’ve gained practical experience as a Web Developer Intern at Hashmato,
              where I worked on websites for restaurants in Singapore. I’m always
              eager to learn and explore new areas in software development.
              <br />
              <br />
              I also participate in extracurricular activities and hold certifications
              in Cyber Security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
