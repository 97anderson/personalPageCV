// src/app/page.tsx

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const skills = [
    { skill: 'DevOps & CI/CD', level: 90 },
    { skill: 'Kubernetes y Docker', level: 95 },
    { skill: 'Seguridad Informática', level: 85 },
    { skill: 'Infraestructura Cloud (AWS)', level: 92 },
    { skill: 'Desarrollo Backend (Java, Node.js, Python)', level: 60 },
  ];

  const projects = [
    {
      title: 'Plataforma de Monitoreo Cloud',
      description: 'Sistema completo de observabilidad con Prometheus, Grafana y alertas personalizadas.',
      tech: ['AWS', 'Docker', 'Grafana'],
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'Chatbot de Ventas con IA',
      description: 'Asistente virtual para ventas automatizadas conectado a una base de datos PostgreSQL.',
      tech: ['Python', 'IA', 'PostgreSQL'],
      image: '/project2.jpg',
      link: '#',
    },
  ];

  const SectionDivider = () => (
    <div className="relative w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 320" className="w-full h-20">
       
      </svg>
    </div>
  );

  return (
    <main className="relative min-h-screen text-black font-sans overflow-hidden">
      {/* Fondo animado con video y overlay blanco con opacidad del 40% */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white opacity-20" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <header className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white bg-opacity-40 backdrop-blur-lg">
          <h1 className="text-2xl font-bold tracking-wide">Anderson</h1>
          <nav className="space-x-4 text-md font-medium">
            <a href="#about" className="hover:text-cyan-600 transition duration-300 ease-in-out">Sobre mí</a>
            <a href="#skills" className="hover:text-cyan-600 transition duration-300 ease-in-out">Habilidades</a>
            <a href="#experience" className="hover:text-cyan-600 transition duration-300 ease-in-out">Experiencia</a>
            <a href="#projects" className="hover:text-cyan-600 transition duration-300 ease-in-out">Proyectos</a>
            <a href="#contact" className="hover:text-cyan-600 transition duration-300 ease-in-out">Contacto</a>
          </nav>
        </header>

        {/* Sección de presentación */}
        <section className="flex flex-col md:flex-row items-center justify-center px-4 py-32 gap-12">
          {/* Texto a la izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-center md:text-left"
          >
            <h2 className="text-5xl font-extrabold mb-6 drop-shadow-xl text-white">
              Anderson Jiménez
            </h2>
            <p className="text-lg text-black leading-relaxed bg-white bg-opacity-70 p-4 rounded-xl shadow-xl">
              Ingeniero en Sistemas, arquitecto de soluciones cloud, experto en DevOps, Kubernetes, seguridad informática y desarrollo de software moderno. Apasionado por crear soluciones de alto impacto y liderar proyectos tecnológicos innovadores.
            </p>
          </motion.div>

          {/* Foto a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-60 h-60 md:w-100 md:h-100"
          >
            <Image
              src="/andersonj.jpg"
              alt="Foto de perfil de Anderson"
              fill
              className="rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </motion.div>
        </section>

        <SectionDivider />

        {/* Sección de habilidades */}
        <section id="skills" className="bg-white bg-opacity-40 py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Habilidades</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map(({ skill, level }) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium">{skill}</p>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-black h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Sección de experiencia */}
        <section id="experience" className="bg-white bg-opacity-40 py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Experiencia</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[{
              title: 'Líder de Arquitectura Cloud - Banco Nacional',
              years: '2023 - Presente',
              desc: 'Diseño e implementación de una arquitectura híbrida para el core bancario, incluyendo despliegue de más de 400 microservicios, seguridad, observabilidad y alta disponibilidad.',
            }, {
              title: 'Consultor DevOps - Freelance',
              years: '2020 - 2023',
              desc: 'Automatización de infraestructuras, pipelines CI/CD y migración a Kubernetes en múltiples startups tecnológicas.',
            }].map(({ title, years, desc }) => (
              <motion.div
                key={title}
                className="bg-white bg-opacity-60 p-6 rounded-xl shadow-xl border border-gray-300 transition duration-300 hover:scale-105"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-sm text-gray-700">{years}</p>
                <p className="mt-2 text-gray-800">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Sección de proyectos */}
        <section id="projects" className="bg-white bg-opacity-40 py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Proyectos liderados</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(({ title, description, tech, image, link }) => (
              <motion.a
                key={title}
                href={link}
                className="bg-white bg-opacity-60 rounded-xl overflow-hidden shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-48 relative">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{title}</h4>
                  <p className="text-gray-800 text-sm mb-2">{description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white">
                    {tech.map(t => (
                      <span key={t} className="bg-black px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Sección de contacto */}
        <section id="contact" className="bg-white bg-opacity-40 py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Contacto</h3>
          <div className="max-w-xl mx-auto text-center text-black text-lg">
            <p>¿Te gustaría trabajar conmigo o tienes alguna pregunta?</p>
            <p className="mt-4">
              Escríbeme a <a href="mailto:contacto@blucodesolutions.com" className="text-cyan-700 underline">projects@blucodesolutions.com</a>
            </p>
          </div>
        </section>

        <footer className="text-center text-gray-700 text-sm py-8 opacity-70">
          © {new Date().getFullYear()} Anderson. Todos los derechos reservados.
        </footer>
      </div>
    </main>
  );
}