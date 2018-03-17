import {OBJLoader} from 'threejs-full-es6'

const context = require.context('../../geometry')

const load = async () => {
    await Promise.all(
        context.keys().map(path => {
            return new Promise(resolve => {
                new OBJLoader().load(context(path), object => {
                    const name = path.replace('./', '').slice(0, 8)
                    geometry[name] = object.children[0].geometry
                    resolve()
                })
            })
        })
    )
}

const geometry = {
    load,
}

export {
    geometry,
}
