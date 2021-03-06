// import { account } from './app/account';

// console.log(`Running ${account()}`);

import fastify from 'fastify'
// import { button } from '@tvg/fuse'
// const button = 'woop'

const server = fastify()

server.get('/ping', async (request, reply) => {
  // return `pong\n ${button()}`
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    // process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
