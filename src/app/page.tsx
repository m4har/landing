import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconCloud } from "@/components/ui/icon-cloud";
import Marquee from "@/components/ui/marquee";
import { Meteors } from "@/components/ui/meteors";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Portfolio() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mahardicka Nurachman</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary">
                  Skills
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          id="about"
          className="py-20 flex flex-col-reverse md:flex-row items-center gap-8"
        >
          <Meteors number={30} />
          <div className="flex-1 space-y-4 ">
            <h2 className="text-4xl font-bold">Hi, I'm Mahardicka Nurachman</h2>
            <p className="text-xl text-muted-foreground">
              A passionate Full Stack Developer with a love for creating
              innovative web solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/m4har" target="_blank">
                <Button>
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mahardicka404/"
                target="_blank"
              >
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </Link>
              <Link href="mailto:mahardicka404@gmail.com">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQGK41uvstlYqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724811325940?e=1743033600&v=beta&t=dmBYL-Eypvo5vkcnP2CY4_kEFLeBQghlZQM2JW3Lsnc"
              alt="Me"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="overflow-x-auto pb-4">
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {[1, 2, 3, 4, 5, 6].map((project) => (
                  <Card key={project} className="w-[300px]">
                    <CardContent className="p-0">
                      <Image
                        src={`/placeholder.svg?text=Project ${project}`}
                        alt={`Project ${project}`}
                        width={300}
                        height={200}
                        className="rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          Project {project}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          A brief description of the project and its key
                          features.
                        </p>
                        <Button variant="outline" className="w-full" asChild>
                          <a
                            href={`https://project${project}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> View
                            Project
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "JavaScript",
                icon: SiJavascript,
                color: "text-yellow-400",
              },
              { name: "React", icon: SiReact, color: "text-blue-400" },
              { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
              { name: "Python", icon: SiPython, color: "text-blue-500" },
              {
                name: "PostgreSQL",
                icon: SiPostgresql,
                color: "text-blue-300",
              },
              { name: "Git", icon: SiGit, color: "text-orange-500" },
              { name: "AWS", icon: FaAws, color: "text-yellow-500" },
              { name: "Docker", icon: SiDocker, color: "text-blue-400" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center flex flex-col items-center"
              >
                <skill.icon className={`text-4xl ${skill.color} mb-2`} />
                {skill.name}
              </div>
            ))}
          </div>
          <div className="relative flex size-full max-w-screen items-center justify-center overflow-hidden rounded-lg ">
            <IconCloud images={images} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2015 Mahardicka Nurachman. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-primary">
              <Github />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-primary">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
