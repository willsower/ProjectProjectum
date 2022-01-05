import Header from "../components/header";
import LeftNav from "../components/menu";
import Settings from "../components/settings";

import React, { useState } from "react";

function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className = "w-screen h-screen">
      <Settings settingsOpen = {settingsOpen} setSettingsOpen = {setSettingsOpen} />

      <div className="flex flex-col h-screen">
        <Header setSettingsOpen = {setSettingsOpen} />

        <div className="flex grow">
          <LeftNav />
          {/* <Board /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
