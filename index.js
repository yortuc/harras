const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

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

function rectangleRenderer(state, ctx) {
    clearScene(ctx)

    state.filter(e => e.size)
        .forEach(e => drawRect(e, ctx))

    return [...state]
}

function clearScene(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRect(entity, ctx) {
    ctx.save()
    ctx.translate(entity.position.x, entity.position.y)
    ctx.fillStyle = entity.color || 'black'
    ctx.fillRect(0,0, entity.size.width, entity.size.height)
    ctx.restore()
}

function main(state){
    const newState = rectangleRenderer(state, ctx)
    window.requestAnimationFrame(() => main(newState))
}

main(gameState)