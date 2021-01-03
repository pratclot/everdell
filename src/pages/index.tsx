import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import GameBuilder from "../components/GameBuilder";

const Main: React.FC = () => {
  const [showGameBuilder, setShowGameBuilder] = useState(false);
  return (
    <div>
      <h1 className={styles.title}>Everdell</h1>
      {showGameBuilder ? (
        <div className={styles.game_builder_wrapper}>
          <GameBuilder />
        </div>
      ) : (
        <div className={styles.links}>
          <button
            className={styles.button}
            onClick={() => setShowGameBuilder(true)}
          >
            New Game
          </button>
          <a
            target="_blank"
            href="https://www.amazon.com/Everdell-Collectors-Edition-2nd-Printing/dp/B07WWJMQFW"
            className={styles.link}
          >
            Buy the Game
          </a>
          <a
            target="_blank"
            href="https://www.starling.games/everdell"
            className={styles.link}
          >
            About the Game
          </a>
          <a
            target="_blank"
            href="https://github.com/ymichael/everdell"
            className={styles.link}
          >
            Github Source
          </a>
        </div>
      )}
    </div>
  );
};

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Everdell</title>
      </Head>
      <Main />
    </div>
  );
}
