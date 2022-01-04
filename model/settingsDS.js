import Store from 'electron-store'

class SettingsDS extends Store {
  constructor (settings) {
    super(settings)
    this.settings = this.get('settings') || {}
  }

  saveSettings() {
    this.set('settings', this.settings)
  }

  getSettings() {
    this.settings = this.get('settings') || []
    return this.settings
  }

  getSetting(name) {
    return this.settings[name]
  }

  setSetting(name, value) {
    this.settings[name] = value
  }
}