
export default function HeadersTableCart() {

    const headersClassName = 'font-outfit font-normal text-[20px] text-[#000000]'

  return (
      <div className="w-full flex flex-nowrap gap-5 items-center">
        <div className="lg:w-1/2 flex items-center">
          <p className={headersClassName}>Products</p>
        </div>
        <div className="w-[150px] hidden lg:flex justify-center">
          <p className={headersClassName}>Price</p>
        </div>
        <div className="w-[150px] hidden lg:flex  justify-center">
          <p className={headersClassName}>Quantity</p>
        </div>
        <div className="w-[150px] hidden lg:flex  justify-center">
          <p className={headersClassName}>Total</p>
        </div>
        <div className="w-[150px] hidden lg:flex justify-center"></div>
      </div>
  );
}
