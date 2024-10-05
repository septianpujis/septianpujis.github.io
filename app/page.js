"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      imageSrc: "https://picsum.photos/400/300",
      title: "Project 1",
      description: "Short description of Project 1",
    },
    {
      imageSrc: "https://picsum.photos/400/301",
      title: "Project 2",
      description: "Short description of Project 2",
    },
    {
      imageSrc: "https://picsum.photos/400/302",
      title: "Project 3",
      description: "Short description of Project 3",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 flex flex-col items-center">
            <Image
              src={"/images/septi.jpeg"}
              width={300}
              height={300}
              alt="John Doe"
              className="w-56 h-56 rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Septian Puji
            </h1>
            <p className="text-xl text-gray-600">Web Developer (Full Stack)</p>
          </header>

          <CosmeticSection />

          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Projects
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  thumbnail={project.imageSrc}
                  title={project.title}
                  desc={project.description}
                />
              ))}
            </ul>
          </section>
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Skills
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

const ProjectCard = ({
  thumbnail = "https://picsum.photos/400/300",
  title = "Project 1",
  desc = "Short description of Project 1",
  link = "https://picsum.photos/400/300",
}) => {
  return (
    <li className="bg-gray-100 rounded-lg overflow-hidden border-solid border-2 border-gray-300">
      <Link href={link} target="_blank">
        <Image
          src={thumbnail}
          width={400}
          height={300}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title} </h3>
          <p className="text-gray-600">{desc} </p>
        </div>
      </Link>
    </li>
  );
};

import { motion } from "framer-motion";

const CosmeticSection = () => {
  return (
    <section className="bg-white shadow rounded-lg p-6 mb-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg text-white"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">
          I'm a web developer with experience in full stack development. I
          specialize in creating responsive and user-friendly websites using
          modern web technologies like Next.js.
        </p>
      </motion.div>
    </section>
  );
};
