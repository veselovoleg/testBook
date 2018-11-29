import { shallowMount } from "@vue/test-utils";
import Form from "@/components/Form.vue";

describe("Form.test.js", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Form);
    });

    describe("Properties", () => {
        it("returns the string in normal order if reversed property is not true", () => {
            wrapper.setData({ inputValue: "Yoo" });
            expect(wrapper.vm.reversedInput).toBe("Yoo");
        });

        it("returns the reversed string if reversed property is true", () => {
            wrapper.setData({ inputValue: "Yoo" });
            wrapper.setProps({ reversed: true });
            expect(wrapper.vm.reversedInput).toBe("ooY");
        });
    });
});

describe("Form.test.js", () => {
    let wrapper;
    describe("Watchers - inputValue", () => {
        let spy;
        beforeAll(() => {
            spy = jest.spyOn(console, "log");
            wrapper = shallowMount(Form);
        });
        afterEach(() => {
            spy.mockClear();
        });
        it("is not called if value is empty (trimmed)", () => {
            // TODO
        });
        it("is not called if values are the same", () => {
            // TODO
        });
        it("is called with the new value in other cases", () => {
            wrapper.setData({ inputValue: "foo" });
            expect(spy).toBeCalled();
        });
    });
});