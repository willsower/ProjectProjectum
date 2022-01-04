import ItemDS from "../../model/itemDS"

class Item {
    constructor(id, x, y, color) {
        this.id = id
        this.x = x
        this.y = y
        this.color = color
    }

    save() {
        let ds = new ItemDS(this.id)
        ds.setProperty("x", this.x)
        ds.setProperty("y", this.y)
        ds.setProperty("color", this.color)
        ds.save()
    }
}