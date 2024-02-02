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
      <Image placeholder="blur" blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA=" src={img} alt={title} layout="fill" objectFit="cover" />
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
