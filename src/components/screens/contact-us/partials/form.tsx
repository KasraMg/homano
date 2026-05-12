 
import { Button } from '../../../ui/button';

const ContactUsForm = () => {
  return (
    <div>
      <p className="text-2xl font-semibold">با ما در تماس باشید</p>
      <h1 className="pt-2 pb-7 text-justify text-neutral-800"></h1>
      <form>
        <div className="xs:!flex-row flex flex-col gap-4">
          <div className="w-full">
            <label htmlFor="fullName" className="block font-semibold">
              نام و نام خانوادگی
            </label>
            <input
              id="fullName"
              placeholder="نام و نام خانوادگی"
              className="mt-1 w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none"
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="block font-semibold">
              شماره تماس
            </label>
            <input
              id="phone"
              type="tel"
              dir="rtl"
              placeholder="09120000000"
              className="mt-1 w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className='py-4'>
          <label htmlFor="subject" className="block font-semibold">
            موضوع پیام
          </label>
          <input
            id="subject"
            type="text"
            placeholder="موضوع پیام"
            className="mt-1 w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold">
            پیام
          </label>
          <textarea
            id="message"
            placeholder="توضیحات..."
            className="mt-1 h-32 w-full resize-none rounded-2xl border border-gray-300 p-3 text-sm outline-none"
          />
        </div>

        <Button
          // disabled={!isValid}
          type="submit"
          className="w-full"
          variant={'main'}
        >
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
