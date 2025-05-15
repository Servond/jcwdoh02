import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function DeployButton({
  text,
  route,
  path,
}: {
  text: string;
  route: string;
  path: string;
}) {
  return (
    <div className={styles.ctas}>
      <a
        className={styles.primary}
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        {text}
      </a>
      <Link href={path} rel="noopener noreferrer" className={styles.secondary}>
        {route}
      </Link>
    </div>
  );
}
