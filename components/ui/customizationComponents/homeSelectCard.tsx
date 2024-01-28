// HomeSelectCard.tsx
import Image from "next/image";

interface HomeSelectCardProps {
  img: string;
  title: string;
  price: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const HomeSelectCard: React.FC<HomeSelectCardProps> = ({
  img,
  title,
  price,
  description,
  selected,
  onClick,
}) => (
  <div
    className={`mb-4 flex cursor-pointer flex-col overflow-hidden text-pretty rounded border-2 border-border bg-white transition-all duration-200 ${
      selected ? "border-green-600 shadow-md shadow-primary/25" : ""
    }`}
    onClick={onClick}
  >
    <div className="relative h-24 w-full">
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h3 className="text-base font-semibold text-black">{title}</h3>
      <p className="text-base font-medium text-black">
        ${price} <span className="text-sm text-black/60">est.</span>
      </p>
      <p className="mt-2 text-sm font-medium text-black">{description}</p>
    </div>
  </div>
);

export default HomeSelectCard;
