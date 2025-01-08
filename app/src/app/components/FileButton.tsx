import { Button } from "@/app/components/button"

interface FileButtonProps {
  file: {
    name: string;
    url: string;
  }
}

export default function FileButton({ file }: FileButtonProps) {
  const handleClick = () => {
    window.open(file.url, '_blank')
  }

  return (
    <Button 
      onClick={handleClick} 
      className="bg-red-600 hover:bg-red-700 text-black shadow-lg shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
    >
      {file.name}
    </Button>
  )
}

