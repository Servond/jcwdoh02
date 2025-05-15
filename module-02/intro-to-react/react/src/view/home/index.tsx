import Image from "next/image";
import styles from "../../app/page.module.css";

import DeployButton from "@/component/deploy-button";
import Footer from "./component/footer";

export default function HomeView() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <DeployButton text="Home Deploy" route="Sign-In" path="/signin" />
        <Footer />
      </main>
    </div>
  );
}
