import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className='pt-14 pb-14'>
            <div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="container mx-auto text-center"
            >
                
                <div className="flex justify-center space-x-6 text-white mb-6">
                <a href="https://www.linkedin.com/in/jayavandhana-s-e-240a09274" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white transition ease-in-out delay-100 hover:-translate-y-1' size={24}></FaLinkedin>
                </a>
                <a href="https://www.instagram.com/kothai_elango_/?hl=en" target="_blank" rel="noopener noreferrer"> 
                <FaInstagram className='text-white transition ease-in-out delay-100 hover:-translate-y-1' size={24}></FaInstagram></a>
                <a href="https://github.com/Jayavandhana21" target="_blank" rel="noopener noreferrer"> 
                <FaGithub className='text-white transition ease-in-out delay-100 hover:-translate-y-1' size={24}></FaGithub> </a>
                </div>

                <button 
                    onClick={scrollToTop} 
                    className="text-sm text-blue-500 underline mb-4">
                    Back to Top
                </button>

                <p className="text-white text-sm">
                    © {currentYear} Jayavandhana. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
