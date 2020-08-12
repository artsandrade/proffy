const Database = require('./db.js')
const createProffy = require('./createProffy.js')

Database.then(async(db) =>{
    //Inserir dados

    proffyValue = {
        name: "Walter White",
        avatar: "https://cdnb.artstation.com/p/assets/images/images/000/016/783/large/front_front_1_pass_main_add_beard_close_up_new.jpg?1443929473&dl=1",
        whatsapp: "34999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 200,
            time_to: 1000
        },
        {
            weekday: 1,
            time_from: 200,
            time_to: 1000
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados
    //Proffys
    //const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //Consultar classes de professor e seus respectivos dados
    /*const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (proffys.id = classes.proffy_id)
        WHERE classes.proffy_id=1;
    `)*/
    //console.log(selectedClassesAndProffys)

    const selectedClassesSchedule = await db.run(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "300"
    `)
    console.log(selectedClassesSchedule)
})