import {
  mount
} from '@vue/test-utils';
import footerForm from '@/components/Footer/footer-form';

describe('Footer form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(footerForm, {
      stubs: ['ValidationObserver', 'ValidationProvider', 'modal'],
      mocks: {
        $store: {
          dispatch: () => new Promise((rs, rj) => rs())
        }
      }
    });
    wrapper.vm.$refs = { 
      checkboxes: {
        reset: jest.fn()
      },
      form: {
        reset: jest.fn()
      }
    };
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('sets the correct default data', () => {
    expect(typeof footerForm.data).toBe('function');
    const defaultData = footerForm.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
  });

  test('has a functions', () => {
    expect(
      typeof footerForm.methods.getPrivacyCheckboxState && 
      typeof footerForm.methods.getDiscountOffersCheckboxState &&
      typeof footerForm.methods.autosize
    ).toBe('function');
  });

  test('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true);
    wrapper.vm.getDiscountOffersCheckboxState(true);

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(true);
  });

  test('autosize function should add value in event key', () => {
    const event = {
      target: {
        style: {
          height: ''
        },
        scrollHeight: 100
      }
    };

    wrapper.vm.autosize(event);
    expect(event.target.style.height).toEqual('100px');
  });

  test('sendForm should add new object in $data.form', () => {
    const form = {
      'templateId': 305480,
      'variables': {
        'agreeToGetMadDevsDiscountOffers': false,
        'agreeWithPrivacyPolicy': false,
        'email': '',
        'emailTo': 'team@maddevs.io',
        'fullName': null,
        'projectDescriber': '',
        'subject': 'Marketing'
      }
    };
    expect(wrapper.vm.$data.form).toEqual(null);
    wrapper.vm.sendForm(true);
    expect(wrapper.vm.$data.form).toEqual(form);
  });

  test('should rest values in data instances', () => {
    // Set mock data for data instances
    wrapper.vm.$data.fullName = 'Name';
    wrapper.vm.$data.email = 'email@mail.com';
    wrapper.vm.$data.projectDescriber = 'Project Describer';
    wrapper.vm.$data.form = {
      value1: 'value1',
      value2: 'value2'
    };
    wrapper.vm.$data.agreeWithPrivacyPolicy = true;
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true;
    wrapper.vm.$data.isEmailSent = true;

    wrapper.vm.resetForm();
    expect(
      wrapper.vm.$data.fullName &&
      wrapper.vm.$data.email &&
      wrapper.vm.$data.form
    ).toEqual(null);
    expect(wrapper.vm.$data.projectDescriber).toEqual('');
    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers &&
      wrapper.vm.$data.isEmailSent
    ).toEqual(false);
  });
});
