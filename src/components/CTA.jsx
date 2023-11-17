import styles from "../style";
import Button from "./Button";
import Chart from "./Chart"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <Chart></Chart>
  </section>
);

export default CTA;
