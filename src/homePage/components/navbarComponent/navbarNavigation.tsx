import { Listbox, ListboxItem } from "@heroui/react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Discover } from "../../../config/discoverData.ts"
import { Impact } from "../../../config/impactData.ts"

export function NavbarDiscover() {
  const [isDiscoverOpen, setDiscoverOpen] = useState(false);

  const toggleDiscover = () => {
    setDiscoverOpen((prevState) => !prevState);
  };

  return (
    <>
      <a onClick={toggleDiscover} className="flex items-center justify-between w-full cursor-pointer mt-4" >
        Discover {isDiscoverOpen ? <IoIosArrowDown size={21} /> : <IoIosArrowForward size={21} />}
      </a>
      {isDiscoverOpen && (
        <div className='grid ml-1 text-[27px] gap-3 font-bold scale-y-90'>
          <Listbox className="text-lg ml-3 mt-2">
            {Discover.map((item, index) => (
              <ListboxItem href={item.link} key={index}>
                {item.name}
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      )}
    </>
  );
}

export function NavbarImpact() {
  const [isImpactOpen, setImpactOpen] = useState(false);

  const toggleImpact = () => {
    setImpactOpen((prevState) => !prevState);
  };

  return (
    <>
      <a onClick={toggleImpact} className="flex items-center justify-between w-full cursor-pointer mt-4" >
        Impact {isImpactOpen ? <IoIosArrowDown size={21} /> : <IoIosArrowForward size={21} />}
      </a>
      {isImpactOpen && (
        <div className='grid ml-1 text-[27px] gap-3 font-bold scale-y-90'>
          <Listbox className="text-lg ml-3 mt-2">
            {Impact.map((item, index) => (
              <ListboxItem href={item.link} key={index}>
                {item.name}
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      )}
    </>
  );
}
