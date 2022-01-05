import ItemDS from "../../model/itemDS"

export default class Item {
    constructor(id, x, y, color) {
        this.id = id
        this.x = x
        this.y = y
        this.color = color
        this.ds = new ItemDS(id)
    }

    save() {
        this.ds.setProperty("x", this.x)
        this.ds.setProperty("y", this.y)
        this.ds.setProperty("color", this.color)
        this.ds.save()
    }
}