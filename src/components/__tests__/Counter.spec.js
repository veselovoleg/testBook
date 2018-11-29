import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
    const wrapper = shallowMount(Counter)

    it('Show correct html', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })
    
    it('Has button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })

    it('Button works', () => {
        const button = wrapper.find('button')
        const span = wrapper.find('span')
        let count = wrapper.vm.count

        for(let i = 0; i < 100; i++){
            count++
            button.trigger('click')
            expect(span.text()).toBe(String(count))
            expect(wrapper.vm.count).toBe(count)
        }
    })

    
    /*
    it('has same HTML structure', () => {
        const renderer = createRenderer()
        renderer.renderToString(wrapper.vm, (err, str) => {
          if (err) throw new Error(err)
          expect(str).toMatchSnapshot()
        })
    })
    */
})