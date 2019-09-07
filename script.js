
function Point(x=0, y=0, z=0) {
    this.x = x, this.y = y, this.z = z
}

Point.prototype.move = function (xShift=0, yShift=0, zShift=0) {
    this.x = this.x + xShift
    this.y = this.y + yShift
    this.z = this.z + zShift
}

Point.prototype.locate = function () {
    return 'x = '+ this.x + ', y = '+ this.y + ', z = '+ this.z 
}
