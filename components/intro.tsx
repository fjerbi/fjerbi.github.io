import Image from 'next/image';
import authorImage from '@/public/images/authors/fjerbi.jpg';
import Badges from './Badges';
import { technologies } from '@/app/constants/Techs';
import TechBadge from './TechBadge';

export default function Intro() {
  
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hey, I&#39;m Firas.</h1>
        <p className="mt-3 font-light text-muted-foreground">
          I&#39;m a software engineer | Front-End developer based in Germany.
          I&#39;m passionate about developing web and mobile applications. Here
          are some of the technologies I’ve been actively using:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechBadge key={index} label={tech} />
          ))}
        </div>
      </div>
      <div className="relative">
        <Image
          className="flex-1 rounded-full"
          src={authorImage}
          alt="Firas JERBI"
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
}
