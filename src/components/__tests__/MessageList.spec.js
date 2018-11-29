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

    it("Message component has the .message class", () => {
        expect(wrapper.find("li").classes()).toContain("message");
    });

    it("Message component has style padding-top: 10", () => {
        expect(wrapper.find(".message").attributes().style).toBe("margin-top: 10px;");
      });
});