import { Tooltip, Listbox, ListboxItem, Button } from "@heroui/react";
import { GoPerson } from "react-icons/go";

export default function Profile() {
    const handleLogin = () => {
        window.open(import.meta.env.VITE_LINK_PORTFOLIO, "_blank");
    };

    const handleSignUp = () => {
        window.open(import.meta.env.VITE_LINK_PORTFOLIO, "_blank");
    };

    return (
        <Tooltip content={(
            <Listbox className='text-sm bg-white w-[370px] min-h-[100px] p-6' >
                <ListboxItem className="cursor-default">
                    <p> Want a personalized experience and access to exclusive content?</p>
                </ListboxItem>
                <ListboxItem>
                    <div className="flex space-x-2 text-lg">
                        <Button onPress={handleLogin} target="_blank" className='bg-black text-white rounded-3xl px-4 py-2 w-[150px] font-bold cursor-pointer'>
                            Log in
                        </Button>
                        <Button onPress={handleSignUp} target="_blank" className='border-black border-2 text-black rounded-3xl px-4 py-2 w-[150px] font-bold cursor-pointer'>
                            Sign Up
                        </Button>
                    </div>
                </ListboxItem>
            </Listbox>
        )} placement={"bottom-end"}>
            <div className="ml-auto cursor-pointer">
                <GoPerson size={25} className='flex items-center gap-1' />
            </div>
        </Tooltip>
    )
}