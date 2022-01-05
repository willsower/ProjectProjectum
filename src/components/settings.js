import React, { useState } from "react";
import "../styles/settings.css";

export default function Settings({ setSettingsOpen, settingsOpen }) {
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
      {settingsOpen && (
        <>
          {/* Gray Background */}
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"
            onClick={() => {
              setSettingsOpen(false);
            }}
          ></div>

          {/* Inside white */}
          <div className="bg-white z-20 max-w-2xl h-96 relative m-auto mt-12 rounded-xl flex">
            {/* Settings Nav */}
            <div className="w-40 ml-5 mt-5">
              <p
                className={`settingsName ${
                  accountSettingsClicked && "settingsNameOnActive"
                }`}
                onClick={() => setCurrentTab("Account Settings")}
              >
                Account Settings
              </p>
              <p
                className={`settingsName ${
                  appearanceClicked && "settingsNameOnActive"
                }`}
                onClick={() => setCurrentTab("Appearance")}
              >
                Appearance
              </p>
              <p
                className={`settingsName ${
                  preferencesClicked && "settingsNameOnActive"
                }`}
                onClick={() => setCurrentTab("Preferences")}
              >
                Preferences
              </p>
              <p
                className={`settingsName ${
                  menuOptionsClicked && "settingsNameOnActive"
                }`}
                onClick={() => setCurrentTab("Menu Options")}
              >
                Menu Options
              </p>
            </div>

            {/* Output */}
            <div className="grow p-5 pl-8 overflow-auto">
              {/* Account Settings Clicked */}
              {accountSettingsClicked && (
                <>
                  <p className="settingsTitle">Account Settings</p>
                </>
              )}

              {/* Appearance Clicked */}
              {appearanceClicked && (
                <>
                  <p className="settingsTitle">Appearance</p>
                </>
              )}

              {/* Preferences Clicked */}
              {preferencesClicked && (
                <>
                  <p className="settingsTitle">Preferences</p>

                  {/* Preferences 1 */}
                  <div className="flex">
                    <div>
                      <p className="settingsHeader">
                        Prevent cards from overlapping
                      </p>
                      <p className="settingsDesc">
                        Automatically move nearby cards when editing causes a
                        card to grow
                      </p>
                    </div>
                    <label class="switch ml-6 mt-8">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>

                  {/* Preferences 2 */}
                  <div className="flex relative">
                    <div>
                      <p className="settingsHeader">
                        Enable 3D effects when dragging cards
                      </p>
                      <p className="settingsDesc">
                        Disabling will improve performance on older machines
                      </p>
                    </div>
                    <label class="switch absolute ml-6 mt-8">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>

                  {/* Preferences 3 */}
                  <div className="flex relative">
                    <div>
                      <p className="settingsHeader">Show grid by default</p>
                      <p className="settingsDesc">
                        Right click on the background to change this setting on
                        an individual board
                      </p>
                    </div>
                    <label class="switch absolute ml-6 mt-8">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>

                  {/* Preferences 4 */}
                  <div className="flex relative">
                    <div>
                      <p className="settingsHeader">
                        Show template suggestions
                      </p>
                      <p className="settingsDesc">
                        Recommended templates will be shown every time you
                        create a board
                      </p>
                    </div>
                    <label class="switch absolute ml-6 mt-8">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>

                  {/* Preferences 5 */}
                  <div className="flex relative">
                    <div>
                      <p className="settingsHeader">Show "helpers" on cards</p>
                      <p className="settingsDesc">
                        When a note is duplicated, ask “Keep this copy in sync?”
                      </p>
                      <p className="settingsDesc">
                        When a note becomes too long, ask “Convert to a
                        document?”
                      </p>
                      <p className="settingsDesc">
                        When you create multiple to-do items, ask “Add a title
                        to this list?”
                      </p>
                      <p className="settingsDesc">
                        When items are checked off a to-do list, ask “Delete
                        completed tasks?”
                      </p>
                    </div>

                    <div>
                      <label class="switch ml-6 mt-8">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <label class="switch ml-6 mt-0.5">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label><br/>
                      <label class="switch ml-6 mt-0.5">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label><br/>
                      <label class="switch ml-6 mt-0.5">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                  {/* Preferences 6 */}
                  <div className="flex relative">
                    <div>
                      <p className="settingsHeader">
                        Enable ink effect when drawing
                      </p>
                      <p className="settingsDesc">
                        Speed and pressure will affect the line thickness when
                        you draw
                      </p>
                    </div>
                    <label class="switch absolute ml-6 mt-8">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </>
              )}

              {/* Menu Options Clicked */}
              {menuOptionsClicked && (
                <>
                  <p className="settingsTitle">Menu Options</p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
