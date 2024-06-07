const express = require('express')
const app = express()


// Api for files in the public folder
app.get('/file/:name', async function (req, res, next) {
  var options = {
    root: './public',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})


// Api for data and fuctions
app.get('/data/:name', async function (req, res, next) {
  var fileName = req.params.name

  //filter data request
  if (fileName = "test") {
    //fetch some data or do something
    const data = "random data 1234"
    try {
      res.send(data)
    } catch (err) {
      next(err);
  
    }

  }
})



app.listen(8080)

