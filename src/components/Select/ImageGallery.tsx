import ListItem from "../ListItem";
import Section from "../Section";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <Section title="Web Development">
      <ul className="grid grid-cols-2 gap-6 cursor-pointer">
        {images.map((src, idx) => (
          <li key={idx} className="relative w-full">
            <ListItem
              imageUrl={src}
              idx={idx}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
