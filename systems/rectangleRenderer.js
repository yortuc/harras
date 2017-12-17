function drawRect(entity, ctx) {
    ctx.save()
    ctx.translate(entity.position.x, entity.position.y)
    ctx.fillStyle = entity.color || 'black'
    ctx.fillRect(0, 0, entity.size.width, entity.size.height)
    ctx.restore()
}

export default function rectangleRenderer(state, ctx, {width, height}) {
    ctx.clearRect(0, 0, width, height);

    state.filter(e => e.size)
        .forEach(e => drawRect(e, ctx))

    return [...state]
}