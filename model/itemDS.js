import Store from 'electron-store'

class ItemDS extends Store {
  constructor (id) {
    super(id)
    this.id = id
    this.card = this.get(id) || {}
  }

  save() {
    this.set(this.id, this.card)
  }

  get() {
    this.card = this.get(this.id) || []
    return this.card
  }

  getProperty(name) {
    return this.card[name]
  }

  setProperty(name, value) {
    this.card[name] = value
  }
}