/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("87vcbu9llr3ro90");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "87vcbu9llr3ro90",
    "created": "2023-12-20 23:56:05.576Z",
    "updated": "2023-12-21 00:12:23.690Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vduvakrj",
        "name": "message",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qvdb2dvv",
        "name": "author",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "thsmquie",
        "name": "created_at",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.headers.x_token = \"test\"",
    "viewRule": "@request.headers.x_token = \"test\"",
    "createRule": "@request.headers.x_token = \"test\"",
    "updateRule": "@request.headers.x_token = \"test\"",
    "deleteRule": "@request.headers.x_token = \"test\"",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
