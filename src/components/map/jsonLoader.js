import axios from 'axios'

export default (adCode) => {
  return new Promise((resolve, reject) => {
    axios.get('/json/' + adCode + '.json').then(data => {
      resolve(data.data)
    }).catch(e => {
      reject(e)
    })
  })
}
