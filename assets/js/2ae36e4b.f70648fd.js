"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[641],{62362:e=>{e.exports=JSON.parse('{"functions":[{"name":"createStore","desc":"Creates a new `store` instance. This is the main entry point for the library. The \\"name\\" parameter is used to identify the store in the Roblox data store. The \\"template\\" parameter is used to define the default values for the store, which will be reconciled when the player joins.\\n\\n```lua\\nlocal keyForm = require(path.to.keyForm)\\n\\nlocal store = keyForm.createStore(\\"storeName\\", {\\n\\tfoo = \\"bar\\",\\n})\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"template","desc":"","lua_type":"{ [key: string]: any }"}],"returns":[],"function_type":"static","source":{"line":41,"path":"src/init.luau"}},{"name":"showTrace","desc":"\\t\\nEnables verbose logging to the output window. This is useful for debugging.\\n\\n```lua\\nlocal keyForm = require(path.to.keyForm)\\n\\nkeyForm.showTrace()\\n```","params":[],"returns":[],"function_type":"static","source":{"line":54,"path":"src/init.luau"}}],"properties":[],"types":[],"name":"keyForm","desc":"The root namespace for the library.","source":{"line":24,"path":"src/init.luau"}}')}}]);