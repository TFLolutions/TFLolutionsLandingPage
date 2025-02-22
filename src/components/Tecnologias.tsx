import { FC } from 'react';
import { IconType } from 'react-icons';
import { 
    SiJavascript, SiReact, SiNodedotjs, SiPython, 
    SiAwsamplify, SiDocker, SiKubernetes, SiMongodb,
    SiPostgresql, SiTypescript, SiAngular, SiVuedotjs
} from 'react-icons/si';

interface Technology {
    icon: IconType;
    name: string;
    category: string;
}

const Tecnologias: FC = () => {
    const techStack: Technology[] = [
        { icon: SiJavascript, name: 'JavaScript', category: 'Frontend' },
        { icon: SiTypescript, name: 'TypeScript', category: 'Frontend' },
        { icon: SiReact, name: 'React', category: 'Frontend' },
        { icon: SiAngular, name: 'Angular', category: 'Frontend' },
        { icon: SiVuedotjs, name: 'Vue.js', category: 'Frontend' },
        { icon: SiNodedotjs, name: 'Node.js', category: 'Backend' },
        { icon: SiPython, name: 'Python', category: 'Backend' },
        { icon: SiAwsamplify, name: 'AWS', category: 'Cloud' },
        { icon: SiDocker, name: 'Docker', category: 'DevOps' },
        { icon: SiKubernetes, name: 'Kubernetes', category: 'DevOps' },
        { icon: SiMongodb, name: 'MongoDB', category: 'Database' },
        { icon: SiPostgresql, name: 'PostgreSQL', category: 'Database' }
    ];

    return (
        <div className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Nuestro Stack Tecnológico
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {techStack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="flex flex-col items-center group">
                                <Icon className="w-16 h-16 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                <span className="mt-2 text-sm text-gray-400 group-hover:text-white">
                                    {tech.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {tech.category}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tecnologias; 