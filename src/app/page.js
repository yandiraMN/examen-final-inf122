import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Pokemon/>
        
      </div>
    </main>
  );
}
