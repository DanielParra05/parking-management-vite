
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import { Quasar } from 'quasar'
import ParkingForm from '~/pages/ParkingForm.vue'
import { createTestingPinia } from '@pinia/testing'

const routerPushMock = vi.fn();

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push: routerPushMock,
    }),
}));

const wrapperFactory = () => mount(ParkingForm, {
    global: {
        plugins: [createTestingPinia(), Quasar]
    },
})

describe('ParkingForm component', () => {
    test('mount component', () => {
        expect(ParkingForm).toBeTruthy();
    })


})