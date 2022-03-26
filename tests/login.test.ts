
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import { Quasar } from 'quasar'
import Login from '~/pages/Login.vue'

const routerPushMock = vi.fn();

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

const wrapperFactory = () => mount(Login, {
  global: {
    plugins: [Quasar]
  },
})

test('mount component', () => {
  expect(Login).toBeTruthy();

  //const wrapper = wrapperFactory();
  // const count = wrapper.get('[data-id="counter"]')

  // expect(count.text()).toContain('0')
  // console.log(wrapper.html());
})


test('mount component', async () => {
  const wrapper = wrapperFactory();
  const loginMethod = vi.spyOn(wrapper.vm, "login");
  await wrapper.get('[data-test="emailInput"]').setValue("josedanielparra05@gmail.com");
  await wrapper.get('[data-test="passInput"]').setValue("123456");
  await wrapper.get('[data-test="loginForm"]').trigger('submit');
  console.log(loginMethod);
  expect(loginMethod).toHaveBeenCalledOnce();
})