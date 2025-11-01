export const TeamMember = ({ name, role, image, link }) => {
  const content = (
    <div className="relative flex flex-col gap-2 justify-center items-center group cursor-pointer">
      <div className="relative">
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-[2px] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-sui-blue/30 group-hover:animate-shake">
          <div className="w-full h-full rounded-full bg-sui-bg flex items-center justify-center overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-sui-blue">
                {name.charAt(0)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-2">
        <h3 className="text-white font-semibold text-base md:text-lg">
          {name}
        </h3>
        <p className="text-white/60 text-xs md:text-sm">
          {role}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-105"
      >
        {content}
      </a>
    );
  }

  return content;
};
