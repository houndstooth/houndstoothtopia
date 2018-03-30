import {OBJLoader} from 'threejs-full-es6'

const context = require.context('../../geometry')

const byIndex = []

const load = async () => {
  await Promise.all(
    context.keys().map((path, index) => {
      // console.log('real path', path)
      return new Promise(resolve => {
        // console.log(conte)
        new OBJLoader().load(context(path), object => {
          const name = path.replace('./', '').replace('.obj', '')
          const result = object.children[0].geometry
          geometry[name] = result
          byIndex[index] = result
          resolve()
        })
      })
    })
  )
}

const lazyGeometry = {}

const maybeLoad = async (geometryKey) => {
  const myPath = './' + geometryKey + '.obj'
  await Promise.all(
    context.keys().map((path, index) => {
      if (path === myPath) {
        return new Promise(resolve => {
          console.log('contex tky', context.keys()[0])
          new OBJLoader().load(context(path), object => {
            // const name = path.replace('./', '').replace('.obj', '')
            const result = object.children[0].geometry
            lazyGeometry[geometryKey] = result
            // byIndex[index] = result
            // resolve()
            resolve()
          })
        })
      }
    }))
  // console.log('my path', path)


  return lazyGeometry[geometryKey]
}

const geometry = {
  load,
  maybeLoad,
  byIndex,
}

export {
  geometry,
}
