require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 6700
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/resume', (req, res) => {
	res.redirect('https://drive.google.com/file/d/12p5jP_o5jCNZhSEPlyA4XiYmbV432bWW/view?usp=sharing')
})

app.get('*', (req, res) => {
	return res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
	console.log('Server Online.')
})
