const server = require('./server')

const port = process.env.PORT || 80

server.listen(port, () => console.log('Listening on port', port))
