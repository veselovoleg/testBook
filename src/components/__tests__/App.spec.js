import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe("App.test.js", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App, {
            // Create a shallow instance of the component
            data: () => ({ messages: ['Cat'] }),
        });
    });

    it('equals messages to ["Cat"]', () => {
        // Within cmp.vm, we can access all Vue instance methods
        expect(wrapper.vm.messages).toEqual(["Cat"]);
    });
    
    it("has the expected html structure", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});