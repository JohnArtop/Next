import { getEntry } from '@/lib/contentstack';
import RenderBlocks from '@/components/RenderBlocks';

export default async function Home() {
  // In a real scenario, change 'page' to your Content Type UID
  const data = await getEntry('page');
  const entry = data[0]; 

  return (
    <main>
      <h1>Next.js + Contentstack</h1>
      {entry?.modular_blocks ? (
        <RenderBlocks blocks={entry.modular_blocks} />
      ) : (
        <p>No content found. Check your CMS entry and .env keys.</p>
      )}
    </main>
  );
}