import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import List from '@/components/List.vue'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', '']
    const wrapper = shallowMount(List, {
      propsData: { items }
    })
    expect(wrapper.findAll('.parent-ul li')).toHaveLength(items.length)
  })

  it('has same HTML structure', () => {
    const items = ['item one', 'item two']

    const renderer = createRenderer()
    const wrapper = shallowMount(List, { propsData: { items } })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})