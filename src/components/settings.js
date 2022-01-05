import React, { useState } from "react";
import "../styles/settings.css";

export default function Settings({ setSettingsOpen }) {
  const [accountSettingsClicked, setAccountSettingsClicked] = useState(true);
  const [appearanceClicked, setAppearanceClicked] = useState(false);
  const [preferencesClicked, setPreferencesClicked] = useState(false);
  const [menuOptionsClicked, setMenuOptionsClicked] = useState(false);

  // Function that will set the current settings tab clicked
  function setCurrentTab(clicked) {
    setAccountSettingsClicked(false);
    setAppearanceClicked(false);
    setPreferencesClicked(false);
    setMenuOptionsClicked(false);

    switch (clicked) {
      case "Account Settings":
        setAccountSettingsClicked(true);
        break;
      case "Appearance":
        setAppearanceClicked(true);
        break;
      case "Preferences":
        setPreferencesClicked(true);
        break;
      case "Menu Options":
        setMenuOptionsClicked(true);
        break;
      default:
        break;
    }
  }

  return (
    <div className="absolute w-screen h-screen">
      {/* Gray Background */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"></div>

      {/* Inside white */}
      <div className="bg-white z-20 max-w-xl h-96 relative m-auto mt-12 rounded-xl flex">
        {/* Settings Nav */}
        <div className="w-36 ml-5 mt-5">
          <p className="settingsName">Account Settings</p>
          <p className="settingsName">Appearance</p>
          <p className="settingsName">Preferences</p>
          <p className="settingsName">Menu Options</p>
        </div>

        {/* Output */}
        <div className="bg-blue-200 grow">
          {/* Account Settings Clicked */}
          {accountSettingsClicked && (
            <>
              <p>Account Settings</p>
            </>
          )}

          {/* Appearance Clicked */}
          {appearanceClicked && (
            <>
              <p>Appearance</p>
            </>
          )}

          {/* Preferences Clicked */}
          {preferencesClicked && (
            <>
              <p>Preferences</p>
            </>
          )}

          {/* Menu Options Clicked */}
          {menuOptionsClicked && (
            <>
              <p>Menu Options</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
