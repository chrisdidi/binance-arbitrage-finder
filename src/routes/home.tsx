import PairsSelector from "../components/PairsSelector";

const Home = () => {
  return (
    <div className=" min-h-screen w-full bg-gradient-to-br from-green-400 to-indigo-400 flex flex-col md:flex-row items-start p-4 pt-24">
      <PairsSelector />
    </div>
  );
};

export default Home;
