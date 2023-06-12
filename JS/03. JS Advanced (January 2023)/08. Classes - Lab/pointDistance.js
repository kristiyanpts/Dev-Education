class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(fPoint, sPoint) {
    return Math.sqrt(
      Math.pow(sPoint.x - fPoint.x, 2) + Math.pow(sPoint.y - fPoint.y, 2)
    );
  }
}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
