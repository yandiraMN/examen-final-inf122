import styles from "./page.module.css";
import Pokemon from "./components/pokemon"
export default function Home() {
  return (
    <main className={styles.main}>
        <Pokemon/>
    </main>
  );
}
