import Hero from './blocks/Hero';

const componentMap: Record<string, any> = {
  hero_unit: Hero
};

export default function RenderBlocks({ blocks }: { blocks: any[] }) {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const type = Object.keys(block)[0];
        const Component = componentMap[type];
        
        if (!Component) return <div key={index}>Block "{type}" not found</div>;
        
        return <Component key={index} data={block[type]} />;
      })}
    </>
  );
}