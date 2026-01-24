type InfoCardProps = {
  title: string;
  text: React.ReactNode;
  icon: React.ReactNode;
};

const InfoCard = ({ title, text, icon }: InfoCardProps) => {
  return (
    <div
      className="
        md:w-[547px] md:h-[120px] w-full min-h-[106px]
        px-6 md:px-10 py-4
        flex items-start gap-5
        bg-[linear-gradient(270deg,#111317_0%,#1B1E24_80.77%)]
        shadow-[0px_4px_50px_0px_#00000040]
        rounded-md
      "
    >
      {/* Icon */}
      <div
        className="
          flex-none
          md:w-14 md:h-14 w-10 h-10
          rounded-md
          bg-gradient-to-r from-[#FA7E16] to-[#FE9619]
          flex items-center justify-center
        "
      >
        <span className="text-[#FAFAFA] md:text-2xl text-base">{icon}</span>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h2 className="text-[#FAFAFA] md:text-xl text-lg font-normal">
          {title}
        </h2>
        <p className="mt-1 text-[#8F96A3] font-normal md:text-base text-sm">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
