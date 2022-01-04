import Header from "../components/header";
import LeftNav from "../components/menu";
import Settings from "../components/settings";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Settings />      

      <div className="flex grow">
        <LeftNav />
        {/* <Board /> */}
      </div>
    </div>
  );
}

export default Home;
