jest.mock("axios", () => ({
    get: jest.fn(() => Promise.resolve({ data: [3] }))
}));

import axios from 'axios';
import { shallowMount } from "@vue/test-utils";
import Form from "@/components/Form.vue";

describe("Form.test.js", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Form);
        jest.resetModules();
        jest.clearAllMocks();
    });

    describe("Axios call", () => {
        it("Calls axios.get and checks promise result", async () => {
            const result = await wrapper.vm.onSubmit("an");
            expect(result).toEqual({ data: [3] });
            expect(wrapper.vm.results).toEqual([3]);
            expect(axios.get).toBeCalledWith(
                "https://jsonplaceholder.typicode.com/posts?q=an"
            );
        });
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

        it("is called with the new value in other cases", () => {
            wrapper.setData({ inputValue: "foo" });
            expect(spy).toBeCalled();
        });
    });
});