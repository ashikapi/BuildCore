type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div
      className="
        md:w-[547px] md:h-[106px] w-full h-24 px-6
        md:px-10 flex flex-col justify-center
        bg-[linear-gradient(270deg,#2C2E34_0%,#1A1D23_80.77%)]
        shadow-[0px_2px_20px_rgba(0,0,0,0.25)]
        rounded-md
      "
    >
      <h2 className="text-[#FA7A16] md:text-[40px] text-2xl font-medium leading-none">
        {value}
      </h2>
      <p className="mt-1 text-gray-400 md:text-base text-sm">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
