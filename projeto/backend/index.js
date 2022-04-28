const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')


const app = express()

// Config JSON response 
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))


// Routes
const UserRoutes = require('./routes/UserRoutes')
const RentRoutes = require('./routes/RentRoutes')

app.use('/users', UserRoutes)
app.use('/Rent', RentRoutes)


 //5000 para o backend e 3000 para frontend
 //Criar tabelas antes da aplicação rodar - Create tables before the application runs
conn
  .sync()
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))

  //app.listen(5000)
