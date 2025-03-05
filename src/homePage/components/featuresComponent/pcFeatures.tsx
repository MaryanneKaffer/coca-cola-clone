
import { PcFeaturesData } from "../../../config/data/pcFeaturesData";

export default function PcFeatures() {
    return (
        <div className="hidden lg:block">
            <p className="text-center text-4xl font-bold mt-15 mb-14 scale-y-95">Features</p>
            {PcFeaturesData.map((features) => features.card)}
        </div>
    );
}
