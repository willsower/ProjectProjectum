export default function Settings({ setSettingsOpen }) {
  return (
    <div className = "absolute w-screen h-screen">
      {/* Gray Background */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20">

      </div>

      {/* Inside white */}
      <div className="bg-red-500 z-50 w-96 h-80 relative m-auto translate-y-1/2">
        heyoooo
      </div>
    </div>
  );
}
