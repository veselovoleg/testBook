import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue";

describe("Message.test.js", () => {
    let wrapper;
    const createWrapper = propsData => mount(Message, { propsData });

    describe("Properties", () => {
        it("has a message property", () => {
            wrapper = createWrapper({ message: "hey" });
            expect(wrapper.props("message", "hey")).toBeTruthy();
        });

        it("has no cat property", () => {
            wrapper = createWrapper({ cat: "hey" });
            expect(wrapper.props("cat", "hey")).toBeFalsy();
        });

        it("Paco is the default author", () => {
            wrapper = createWrapper({ message: "hey" });
            expect(wrapper.props("author", "Paco")).toBeTruthy();
        });
    });
});