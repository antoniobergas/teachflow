import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Links } from "./links";

const SideNav = () => {
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <span className="text-3xl">TeachFlow</span>
        <AcademicCapIcon className="w-10 ml-2" />
      </div>
      <Links />
    </>
  );
};

export default SideNav;
