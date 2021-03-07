//domain/.netlify/functions/hello

const items=[
 {id: 1, name: 'Scott'},
 {id: 2, name:'Adam'}
]

exports.handler = async function(event, context){
 return {
  statusCode: 200,
  body: JSON.stringify(items)
 }
}