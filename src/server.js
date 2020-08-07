const proffys = [
    {
        name: "Walter White",
        avatar: "https://cdnb.artstation.com/p/assets/images/images/000/016/783/large/front_front_1_pass_main_add_beard_close_up_new.jpg?1443929473&dl=1",
        whatsapp: "34999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1240
        ]
    },
    {
        name: "Walter White",
        avatar: "https://cdnb.artstation.com/p/assets/images/images/000/016/783/large/front_front_1_pass_main_add_beard_close_up_new.jpg?1443929473&dl=1",
        whatsapp: "34999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1240
        ]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = + subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        
        proffys.push(data)

        return res.redirect("/study") //redireciona para a página Study
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//Rotas da aplicação
.get("/", (pageLanding))
.get("/study", (pageStudy))
.get("/give-classes", (pageGiveClasses))
.listen(5500)