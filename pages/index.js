import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi There. I am Recep and I'm a CE student at{" "}
          <strong>Akdeniz University</strong> . I have an inexhaustible passion
          for <strong>coding</strong>. You can reach me via e-mail without
          hesitation. <br />
          <a href="mailto:receptayyiperdogan8@gmail.com">Send email</a>
        </p>
      </section>
    </Layout>
  );
}
