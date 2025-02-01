import GooglePlay from '../../../assets/googlePlay.png';
import AppStore from '../../../assets/appStore.png';

interface SocialMediaIconsProps {
    Icon: React.ElementType;
    Name: string;
}

export default function SocialMedia({ Icon, Name }: SocialMediaIconsProps) {
    return (
        <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
            <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" aria-label={Name}>
                <Icon size={18} alt={Name} className='text-white' />
            </a>
        </div>
    )
}

export function StoreApps() {
    return (
        <div className="flex gap-3">
            <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank">
                <img src={AppStore} alt='App Store Link' className='h-[5vh] w-[18vh] object-contain' />
            </a>
            <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank">
                <img src={GooglePlay} alt='Google Play Link' className='h-[5vh] w-[18vh] object-contain' />
            </a>
        </div>
    )
}