import CategoryCard from '@/components/CategoryCard';
import MainFeaturedPost from './MainFeaturedPost';

export default function Home() {
  return (
    <main>
      <MainFeaturedPost />
      <CategoryCard />
    </main>
  );
}
