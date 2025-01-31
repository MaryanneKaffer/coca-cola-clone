export const NavbarNavigation({ name, link }: SectionProps) {
    const [isOpen, setOpen] = React.useState(false);

<a href='' className='mt-6'> Brands </a>

<a onClick={openDiscover} className="flex items-center justify-between w-full"> Discover {isDiscoverOpen ? <IoIosArrowDown size={21} /> : <IoIosArrowForward size={21} />} </a>
{isDiscoverOpen && (
    <Listbox className='text-lg ml-3' >
        <ListboxItem href=''> +one app </ListboxItem>
        <ListboxItem href=''> World Of Coca-Cola Attraction </ListboxItem>
        <ListboxItem href=''> Offerings </ListboxItem>
    </Listbox>
)}