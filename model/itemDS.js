import Store from 'electron-store'

export default class ItemDS extends Store {
  constructor (id) {
    super(id)
    this.id = id
    this.item = this.get(id) || {}
  }

  save() {
    this.set(this.id, this.item)
  }

  get() {
    this.item = this.get(this.id) || []
    return this.item
  }

  getProperty(name) {
    return this.item[name]
  }

  setProperty(name, value) {
    this.item[name] = value
  }

  removeProperty(name) {
    delete this.item[name]
  }
}