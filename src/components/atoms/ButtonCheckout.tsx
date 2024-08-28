import { TypeProduct } from "@/app/page";


export default function ButtonCheckout() {
  return (
    <button
      type="button"
      className="bg-[#059669] rounded-[30px] flex justify-center items-center py-3 w-full hover:opacity-70"
    >
      <p className="font-outfit font-semibold text-[18px] sm:text-[20px] text-white">
        Proceed to checkout
      </p>
    </button>
  );
}
