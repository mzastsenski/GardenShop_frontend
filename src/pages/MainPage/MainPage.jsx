import s from "./MainPage.module.scss";
import Categories from "../../components/Categories/Categories";
import Sale from "../../components/Sale/Sale";
import Promotions from "../../components/Promotions/Promotions";
import PromotionFirstOrder from "../../components/PromotionFirstOrder/PromotionFirstOrder";

export default function MainPage() {
  return (
    <div className={s.main_page}>
      <Sale />
      <Categories />
      <PromotionFirstOrder />
      <Promotions />
    </div>
  );
}
