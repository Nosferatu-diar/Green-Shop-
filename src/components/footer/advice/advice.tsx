import type { FC } from "react";
// import { advice_item } from "../../utils";
import AdviceItem from "./advice-item/advice-item";
import AdvcieEmail from "./advice_email/advice_email";
import { advice_item } from "../../../utils";

const Advice: FC = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className=" flex items-start max-[500px]:flex-col gap-4">
        {advice_item.map((el) => (
          <AdviceItem key={el.id} {...el} />
        ))}
        <div className="max-[1024px]:hidden">
          <AdvcieEmail />
        </div>
      </div>
      <div className="max-[1024px]:block hidden">
        <AdvcieEmail />
      </div>
    </section>
  );
};

export default Advice;
