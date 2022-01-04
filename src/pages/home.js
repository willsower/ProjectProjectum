import Header from "../components/header";
import LeftNav from "../components/menu";
import Settings from "../components/settings";

function Home() {
  return (
    <div className = "w-screen h-screen">
      <Settings />

      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex grow">
          <LeftNav />
          {/* <Board /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
