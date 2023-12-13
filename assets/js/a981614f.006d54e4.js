"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[499],{68176:e=>{e.exports=JSON.parse('{"functions":[{"name":"read","desc":"Returns the current data for the key. Not editable, doesn\'t update data.\\n\\n```lua\\nlocal keyForm = require(path.to.keyForm)\\n\\nlocal store = keyForm.createStore(\\"storeName\\", {\\n\\tfoo = \\"bar\\",\\n})\\n\\nlocal myKey = store:loadKey(\\"keyName\\")\\n\\nprint(myKey:read()) -- Prints the current data for the key\\n```","params":[],"returns":[{"desc":"","lua_type":"data"}],"function_type":"method","source":{"line":158,"path":"src/init.luau"}},{"name":"lockAsync","desc":"Locks the key. This prevents other servers from interacting with the key. This function is asynchronous.","params":[],"returns":[{"desc":"","lua_type":"status boolean"}],"function_type":"method","source":{"line":167,"path":"src/init.luau"}},{"name":"unlockAsync","desc":"Unlocks the key. This allows other servers to interact with the key again.","params":[],"returns":[],"function_type":"method","source":{"line":174,"path":"src/init.luau"}}],"properties":[],"types":[],"name":"key","desc":"Represents a key in a data store. You can create a new key using the `store:loadKey` function.\\n\\n```lua\\nlocal keyForm = require(path.to.keyForm)\\n\\nlocal store = keyForm.createStore(\\"storeName\\", {\\n\\tfoo = \\"bar\\",\\n})\\n\\nlocal myKey = store:loadKey(\\"keyName\\") -- Creates a new key within the `storeName` data store, with the key\'s name being \\"keyName\\"\\n```","source":{"line":137,"path":"src/init.luau"}}')}}]);