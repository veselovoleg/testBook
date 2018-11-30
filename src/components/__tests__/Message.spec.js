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

        it('calls handleClick when click on message', () => {
            const handleClick = jest.fn()
            wrapper.setMethods({ handleClick })
            const el = wrapper.find('.message').trigger('click')
            expect(handleClick).toBeCalled()
        })

        it('triggers a message-clicked event when a handleClick method is called', () => {
            const stub = jest.fn()
            wrapper.vm.$on('message-clicked', stub)
            wrapper.vm.handleClick()
            expect(stub).toBeCalledWith('Cat')
        })
    });
});