const renderer = require('./renderer')

async function run () {
  const html = await renderer('<x-content>hello there</x-content><x-fetch></x-fetch>')
  console.log(html)
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})
