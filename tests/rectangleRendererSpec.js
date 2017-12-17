import sinon from 'sinon'
import rectangleRenderer from '../systems/rectangleRenderer';
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

chai.use(sinonChai);

const create2dContext = () => ({
    restore: sinon.spy(),
    clearRect: sinon.spy(),
    save: sinon.spy(),
    translate: sinon.spy(),
    fillRect: sinon.spy()
});

describe('rectangleRenderer system', () => {

    it('clears screen first', ()=> {
        const entity = {
            size: { width: 64, height: 64 },
            position: { x: 100, y: 250 }
        };

        const ctx = create2dContext();
        const scene = { width: 256, height: 411 };

        rectangleRenderer([entity], ctx, scene);

        expect(ctx.clearRect).have.been.calledWith(0, 0, scene.width, scene.height);
    })

    describe('renders an entity if has size property', () => {
        it('translates context with position', ()=> {
            const entity = {
                size: { width: 64, height: 64 },
                position: { x: 100, y: 250 }
            }

            const ctx = create2dContext()

            rectangleRenderer([entity], ctx, { width: 11, height: 44 })

            expect(ctx.translate).have.been.calledWith(
                entity.position.x,
                entity.position.y
            )
        })

        it('renders rectangle', ()=> {
            const entity = {
                size: { width: 48, height: 32 },
                position: { x: 45, y: 55 }
            }

            const ctx = create2dContext()

            rectangleRenderer([entity], ctx, { width: 55, height: 66 })

            expect(ctx.fillRect).have.been.calledWith(
                0,
                0,
                entity.size.width,
                entity.size.height
            )
        })
    })
})