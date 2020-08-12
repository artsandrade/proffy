const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Configurar arquivos estáticos (css, scripts, imagens)
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))

//Rotas da aplicação
.get("/", (pageLanding))
.get("/study", (pageStudy))
.get("/give-classes", (pageGiveClasses))
.post("/save-classes", (saveClasses))
.listen(5500)