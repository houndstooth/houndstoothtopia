import {OBJLoader} from 'threejs-full-es6'

const context = require.context('../../geometry')

const byIndex = []

const load = async () => {
    await Promise.all(
        context.keys().map((path, index) => {
            return new Promise(resolve => {
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

const geometry = {
    load,
    byIndex,
}

export {
    geometry,
}
