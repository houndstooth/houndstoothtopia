import textureLoader from './textureLoader'

const context = require.context('../../texture')

const texture = {}

const pathToName = path => path.replace('./', '').replace('.png', '')

const loadAll = async () => {
    await Promise.all(
        context.keys().map(path => {
            return new Promise(resolve => {
                textureLoader.load(context(path).default, result => {
                    texture[pathToName(path)] = result
                    resolve()
                })
            })
        })
    )
}

export default {
    loadAll,
    texture,
}
