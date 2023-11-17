import styles from "./style";
import { Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero } from "./components";
import Chart from "./components/Chart";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <CardDeal />
        <Chart/>
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
