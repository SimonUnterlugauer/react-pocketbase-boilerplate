/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tc0t1zpqe3lc19i")

  collection.listRule = "@request.headers.x_token = \"test\""
  collection.viewRule = "@request.headers.x_token = \"test\""
  collection.createRule = "@request.headers.x_token = \"test\""
  collection.updateRule = "@request.headers.x_token = \"test\""
  collection.deleteRule = "@request.headers.x_token = \"test\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tc0t1zpqe3lc19i")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
