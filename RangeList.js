class RangeList {
  constructor() {
    this.range = []
  }

  // add new Range to the list
  add(newRange) {
    if (this.range.length === 0) {
      this.range = [newRange]
    } else {
      let start = newRange[0]
      let end = newRange[1]
      const res = []
      this.range.forEach(r => {
        if (r[1] < start) {
          res.push(r)
        } else if (r[0] > end) {
          res.push([start, end])
          start = r[0]
          end = r[1]
        } else {
          start = Math.min(start, r[0])
          end = Math.max(end, r[1])
        }
      })
      res.push([start, end])
      this.range = res
    }
  }

  // remove a range from the list
  remove(rangeToRemove) {
    const res = []
    this.range.forEach(r => {
      if (r[0] >= rangeToRemove[1] || r[1] <= rangeToRemove[0]) {
        res.push(r)
      }
      if (r[0] < rangeToRemove[0] && rangeToRemove[0] < r[1]) {
        res.push([r[0], rangeToRemove[0]])
      }
      if (r[0] < rangeToRemove[1] && rangeToRemove[1] < r[1]) {
        res.push([rangeToRemove[1], r[1]])
      }
    })
    this.range = res
  }

  // return the list content as a string
  output() {
    const res = []
    this.range.forEach(r => {
      res.push(`[${r[0]}, ${r[1]})`)
    })
    return res.join(" ")
  }

  // print out the list
  print() {
    console.log(this.output())
  }
}

module.exports = RangeList