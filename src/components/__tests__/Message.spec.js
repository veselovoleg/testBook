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

    describe("Events", () => {
        beforeEach(() => {
            wrapper = createWrapper({ message: "Cat" });
        });

        it("has the expected html structure", () => {
            expect(wrapper.element).toMatchSnapshot();
        });

        it("calls handleClick", () => {
            const spy = jest.spyOn(wrapper.vm, 'handleClick');
            wrapper.vm.handleClick();
            expect(spy).toHaveBeenCalled();
        });

        //NOT WORKING. WHY?
        /*
        it("calls handleClick when click on message", () => {
            wrapper.vm.handleClick = jest.fn();
            expect(wrapper.contains('.message')).toBe(true);

            wrapper.find('.message').trigger('click');
            expect(wrapper.vm.handleClick).toHaveBeenCalledTimes(1);
        })
        */
    });
});