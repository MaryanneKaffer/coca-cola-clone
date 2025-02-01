import { DiscoverData } from '../../../config/discoverData';
import { ImpactData } from "../../../config/impactData"
import { Listbox, ListboxItem } from "@heroui/react";

export function NavbarDiscover() {
  return (
    <>
      <div className='grid ml-1 text-[27px] gap-3 font-bold scale-y-90'>
        <Listbox className="text-lg ml-3 mt-2">
          {DiscoverData.map((item: any, index: number) => (
            <ListboxItem href={item.link} key={index}>
              {item.name}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </>
  );
}

export function NavbarImpact() {
  return (
    <>
      <div className='grid ml-1 text-[27px] gap-3 font-bold scale-y-90'>
        <Listbox className="text-lg ml-3 mt-2">
          {ImpactData.map((item: any, index: number) => (
            <ListboxItem href={item.link} key={index}>
              {item.name}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </>
  );
}