import Koa from 'koa'

const app = new Koa()

app.use(ctx => {
    ctx.body = 'Hello Koa'
})

app.listen(process.env.PORT, function () {
    console.log('running on port ', process.env.PORT)
})
