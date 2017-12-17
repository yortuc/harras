import rectangleRenderer from './systems/rectangleRenderer'

const canvas = document.querySelector('canvas')

const gameState = [
    {
        position:  { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        color: 'black'
    }, {
        position:  { x: 100, y: 100 },
        size: { width: 60, height: 60 },
        color: 'orange'
    }
]

function main(state){
    const newState = rectangleRenderer(state, canvas)
    window.requestAnimationFrame(() => main(newState))
}

main(gameState)