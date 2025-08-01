import { Card, CardContent } from "@/components/ui/card";

interface KeyEventProps {
  picture: string;
  title: string;
  description: string;
  alt?: string;
}

const KeyEvent = ({ picture, title, description, alt }: KeyEventProps) => {
  return (
    <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <div className="relative">
        <img 
          src={picture} 
          alt={alt || title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KeyEvent;