import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue";
import { sinon } from "sinon";

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

    describe("Events", () => {
        beforeEach(() => {
            wrapper = createWrapper({ message: "Cat" });
        });

        it("has the expected html structure", () => {
            expect(wrapper.element).toMatchSnapshot();
        });

        it("calls handleClick when click on message", () => {
            const spy = jest.spyOn(wrapper.vm, 'handleClick');
            expect(wrapper.contains('.message')).toBe(true);
            wrapper.vm.handleClick();
            expect(spy).toHaveBeenCalled();
        });
    });
});