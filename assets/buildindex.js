
var fs = require('fs')
var data = fs.readFileSync("search-index.js", {encoding: "utf8"})
var documents = JSON.parse(data)

var lunr = require('lunr')
var idx = lunr(function () {
		this.ref('id')
		this.field('url')
		this.field('text')

		documents.forEach(function (doc) {
			this.add(doc)
		}, this)
	})

fs.writeFileSync("searchIndex.json", JSON.stringify(idx), {encoding: "utf8"})	

