import {TextureLoader} from 'threejs-full-es6'

const context = require.context('../../texture')

const load = async () => {
    await Promise.all(
        context.keys().map(path => {
            return new Promise(resolve => {
                new TextureLoader().load(context(path), result => {
                    const name = path.replace('./', '').replace('.png', '')
                    texture[name] = result
                    resolve()
                })
            })
        })
    )
}

const texture = {
    load,
}

export {
    texture,
}
