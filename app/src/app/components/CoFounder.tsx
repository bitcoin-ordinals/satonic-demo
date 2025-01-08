import Image from 'next/image'

interface CoFounderProps {
  name: string;
  role: string;
  image: string;
}

export default function CoFounder({ name, role, image }: CoFounderProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 ">
        <Image src={image} alt={name} width={128} height={128} className="object-cover" />
      </div>
      <h2 className="text-red-500 text-xl font-bold">{name}</h2>
      <p className="text-gray-400">{role}</p>
    </div>
  )
}

