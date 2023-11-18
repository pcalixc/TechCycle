import styles from "../style";
import Button from "./Button";
import Chart from "./Chart"

const CTA = () => (
  <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <section className={`w-90 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <Chart></Chart>
  </section>
  </div>

);

export default CTA;
