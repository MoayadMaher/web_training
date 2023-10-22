const express = require("express");
const app = express()
console.dir(app)

// app.use((req, res)=>{
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage! </h1>')
// })

app.get('/' , (req, res) => {
    res.send('This is the home page')
})

app.get('/r/:subreddit' , (req, res)=>{
    const {subreddit, postId} = req.params
    res.send(`<h1 Browsing the ${subreddit} subreddit </h1>`)
})

app.get('/r/:subreddit/:postId' , (req, res)=>{
    const {subreddit, postId} = req.params
    res.send(`<h1>Viewing Post ID:${postId} on the  ${subreddit} subreddit </h1>`)
})

app.post('/cats', (req, res)=> {
    res.send('POST REQUEST TO /cats THIS IS DIFFRENT THAN A GET REQUEST!!')
})

app.get('/cats', (req, res) => {
    res.send('Meow!!')
} )

app.get('/dogs' , (req, res) => {
    res.send('Woof!')
})

// Query string
app.get('/sheach', (req, res)=>{
    const {q} = req.query;
    if (!q){
        res.send('NOTHING FOUND IF NOTHING SEARCHED!!!')
    }
    console.log(req.query)
    res.send(`<h1>Search results for: ${q} </h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
} )



// /r/somethig

// /cats => 'meow'
// /dogs => 'woof'
// '/' 

app.listen(3000, ()=>{
    console.log("LISTEING ON PORT 3000!")
}) 