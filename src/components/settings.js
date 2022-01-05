import "../styles/settings.css";

export default function Settings({ setSettingsOpen }) {
  return (
    <div className="absolute w-screen h-screen">
      {/* Gray Background */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"></div>

      {/* Inside white */}
      <div className="bg-white z-20 max-w-xl h-96 relative m-auto mt-12 rounded-xl flex">
        {/* Settings Nav */}
        <div className="w-36 ml-5 mt-5">
          <p className = "settingsName">Account Settings</p>
          <p className = "settingsName">Appearance</p>
          <p className = "settingsName">Preferences</p>
          <p className = "settingsName">Menu Options</p>
        </div>

        {/* Output */}
        <div className="bg-blue-200 grow"></div>
      </div>
    </div>
  );
}
