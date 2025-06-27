import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isMultipleLinks = typeof source_code_link === "object";

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
    setDropdownOpen(false);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[500px] flex flex-col justify-between"
      >
        {/* Imagem do projeto com botão GitHub */}
        <div className="relative w-full h-[240px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="relative">
              <div
                onClick={() =>
                  isMultipleLinks
                    ? setDropdownOpen(!dropdownOpen)
                    : handleLinkClick(source_code_link)
                }
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>

              {/* Dropdown: Frontend / Backend */}
              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-[#1e1e1e] rounded-md shadow-lg z-10 border border-gray-700 w-[160px]">
                  {source_code_link.front && (
                    <button
                      onClick={() => handleLinkClick(source_code_link.front)}
                      className="px-4 py-2 hover:bg-[#333] text-white text-sm w-full text-left"
                    >
                      Frontend
                    </button>
                  )}
                  {source_code_link.back && (
                    <button
                      onClick={() => handleLinkClick(source_code_link.back)}
                      className="px-4 py-2 hover:bg-[#333] text-white text-sm w-full text-left"
                    >
                      Backend
                    </button>
                  )}
                  {source_code_link.post && (
                    <button
                      onClick={() => handleLinkClick(source_code_link.post)}
                      className="px-4 py-2 hover:bg-[#333] text-white text-sm w-full text-left"
                    >
                      Funcionando
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conteúdo textual */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Meus trabalhos</p>
        <h2 className={styles.sectionHeadText}>Projetos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-3xl leading-[30px]"
        >
          Os projetos a seguir demonstram minhas habilidades e experiência por meio de exemplos reais do meu trabalho. Cada projeto é brevemente descrito com links para repositórios de código e demonstrações ao vivo. Isso reflete minha capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias e gerenciar projetos com eficácia.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");