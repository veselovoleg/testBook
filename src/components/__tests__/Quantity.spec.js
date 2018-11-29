import QuantityComponent from '@/components/QuantityComponent'
import { mount } from '@vue/test-utils'

describe('Keyboard keys events', () => {
    const wrapper = mount(QuantityComponent)

    it('Quantity == 0 (default)', () => {
        expect(wrapper.vm.quantity).toBe(0)
    })

    it('"Up" arrow do Quantity += 1', () => {
        wrapper.trigger('keydown.up')
        expect(wrapper.vm.quantity).toBe(1)
    })

    it('"Dawn" arrow do Quantity -= 1', () => {
        wrapper.vm.quantity = 5
        wrapper.trigger('keydown.down')
        expect(wrapper.vm.quantity).toBe(4)
    })

    it('"Escape" do Quantity == 0', () => {
        wrapper.vm.quantity = 5
        wrapper.trigger('keydown.esc')
        expect(wrapper.vm.quantity).toBe(0)
    })

    it('"a" do Quantity == 13', () => {
        wrapper.trigger('keydown', {
            which: 65
        })
        expect(wrapper.vm.quantity).toBe(13)
    })
})