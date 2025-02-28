import { ContentCard } from "@/components/ContentCard";

const Home = () => {
  return (
    <>
      <div className="basis-3/4">
        <ContentCard>Something</ContentCard>
      </div>
      <div className="basis-1/4">
        <ContentCard>Side content</ContentCard>
      </div>
    </>
  );
};

export default Home;
