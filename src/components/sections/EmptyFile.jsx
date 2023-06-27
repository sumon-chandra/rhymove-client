import empty from "../../assets/empty.svg";

const EmptyFile = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 pt-10">
      <h3 className="text-gray-400 lg:text-lg text-xs text-center">
        Nothing found here!
      </h3>
      <img src={empty} className="w-[200px]" alt="" />
    </div>
  );
};

export default EmptyFile;
