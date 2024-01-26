// HomeSelectCard.tsx
import Image from 'next/image';

interface HomeSelectCardProps {
  img: string;
  title: string;
  price: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const HomeSelectCard: React.FC<HomeSelectCardProps> = ({ img, title, price, description, selected, onClick }) => (
  <div className={`flex flex-col bg-white shadow-lg rounded-lg overflow-hidden m-4 cursor-pointer ${selected ? 'border-4 border-green-600' : ''}`} onClick={onClick}>
    <div className="relative w-full h-64">
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="px-6 py-4">
      <h3 className="text-gray-600 font-bold text-xl mb-2">{title}</h3>
      <p className="text-green-600 text-base mb-2">$ {price} est</p>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

export default HomeSelectCard;