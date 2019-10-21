// sudo mongo <hostname>:<port>/<database> -u <user> -p <password> <pathToFile>

try {
  print('\n** INSERT **')
  const document = { item: 'ca\'rd', qty: 15 }
  print(JSON.stringify(document, null, 1))
  const result = db.test.bulkrite([
    { insertOne : { document } },
    { insertOne : { document } },
    { insertOne : { document } }
  ])
  printjson(result)
  print()
} catch (e) {
  print(e)
  print()
}
  