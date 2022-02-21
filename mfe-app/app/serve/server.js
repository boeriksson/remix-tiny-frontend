const express = require('express')
var path = require('path');
const app = express()
const port = 5555

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Testing...')
    res.send('Hello World2!');
})

app.get('/tiny/latest/:name/:version', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    console.log(`tinyFrontendName: ${req.params.name} contractVersion: ${req.params.version}`)
    return res.json({
        "umdBundle": "example-tiny-frontend.umd.js",
        //"cssBundle": "tinyFrontend-css-bundle-name.css" // Optional
    })
})

app.get('/tiny/bundle/:bundleName', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.sendFile(path.resolve(__dirname, `../dist/${req.params.bundleName}`));
})

app.use('/modules', express.static('dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))