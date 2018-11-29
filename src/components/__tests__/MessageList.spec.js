import { mount } from "@vue/test-utils";
import MessageList from "@/components/MessageList.vue";

describe("MessageList.test.js", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(MessageList, {
            // Be aware that props is overridden using `propsData`
            propsData: {
                messages: ["Cat"]
            }
        });
    });

    it('has received ["Cat"] as the message property', () => {
        expect(wrapper.vm.messages).toEqual(["Cat"]);
    });
    it("has the expected html structure", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});