import { TeamMember } from './TeamMember';
import LandingDarkButton from '../buttons/LandingDarkButton';

const teamMembers = [
  {
    name: 'Mayowa Ogungbola',
    role: 'Software & Devrel Engineer',
    link: "https://www.linkedin.com/in/mayowa-ogungbola-a71810229/",
  },
  {
    name: 'Kinyichukwu Oselukwue',
    role: 'AI & Software Engineer',
    image: "",
    link: "https://www.linkedin.com/in/kinyichukwu-oselukwue-69a49622b/",
  }
];

export const OurTeam = () => {
  return (
    <div className="text-white py-20 md:py-28 lg:py-32 w-full flex flex-col relative overflow-hidden bg-gradient-to-b from-sui-bg via-sui-blue/10 to-sui-bg border-y border-white/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-sui-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-purple-end/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sui-blue-dark/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-6 relative w-full px-4">
        <LandingDarkButton text="MEET THE TEAM" isIcon={false} />

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Our Team
        </h2>

        <p className="text-white/60 max-w-2xl text-base md:text-lg mb-6">
          Meet the talented individuals behind SuiFlow, dedicated to building the future of blockchain visualization.
        </p>

        <section className="flex gap-10 lg:gap-14 flex-wrap w-full max-w-5xl justify-center items-center mt-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              link={member.link}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
