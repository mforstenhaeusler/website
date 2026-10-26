import Image from 'next/image';
import { FaPython } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiTailwindcss, SiJavascript, SiDjango, SiNextdotjs, SiTypescript, SiNumpy, SiPandas } from 'react-icons/si';
import '../styles/animation.css';

const skills = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#a38b00' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'currentColor' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#0891b2' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { name: 'Python', Icon: FaPython, color: '#3776ab' },
  { name: 'PyTorch', Icon: SiPytorch, color: '#ee4c2c' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#c46b00' },
  { name: 'Django', Icon: SiDjango, color: '#22855d' },
  { name: 'NumPy', Icon: SiNumpy, color: '#4dabcf' },
  { name: 'pandas', Icon: SiPandas, color: 'currentColor' },
];

export default function ProgrammingSkillsAnimation() {
  return (
    <section aria-labelledby="skills-heading" className="mt-16 grid gap-6 lg:grid-cols-4">
      <h2 id="skills-heading" className="border-l-2 border-navBorder pl-5 text-xl text-primary">Programming skills</h2>
      <div className="min-w-0 lg:col-span-3">
        <div aria-hidden="true" className="skills-orbit mx-auto">
          <Image unoptimized src="/headshot/IMG_0443.jpeg" alt="" width={110} height={110} className="absolute left-1/2 top-1/2 h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover" />
          {[48, 82].map(size => <div key={size} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-card" style={{ width: `${size}%`, height: `${size}%` }} />)}
          {skills.map(({ name, Icon, color }, index) => (
            <div key={name} className="skill-orbit" style={{ width: index < 4 ? '48%' : '82%', height: index < 4 ? '48%' : '82%', animationDelay: `${index < 4 ? index * -5 : (index - 4) * -25 / 6}s`, animationDuration: index < 4 ? '20s' : '25s' }}>
              <Icon className="h-8 w-8 rounded-full bg-primary p-1 sm:h-11 sm:w-11" style={{ color }} />
            </div>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-secondary">{skills.map(({ name }) => <li key={name}>{name}</li>)}</ul>
      </div>
    </section>
  );
}
