const electron = require("electron");
const { app, BrowserWindow } = require("electron");

// Function that will create a desktop window with custom size preferences that will load the HTML file.
function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}

// Since some APIs in the back-end takes time to load so we need to make our app smart that only creates windows after every API is loaded and all the events occurred including asynchronous functions.
app.whenReady().then(createWindow);

// Good practice to quit an app and kill the process if the window is closed by the user.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Since it is common on macOS to re-create a window in the app when the dock icon is clicked and there are no windows open.
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
