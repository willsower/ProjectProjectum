import Store from 'electron-store'

class ContainerDS extends Store {
  constructor (id) {
    super(id)
    this.id = id
    this.container = this.get(id) || []
  }

  save() {
    this.set(this.id, this.container)
  }

  get() {
    this.container = this.get(this.id) || []
    return this.container
  }

  add(obj) {
    this.container = [ ...this.container, obj ]
  }
}