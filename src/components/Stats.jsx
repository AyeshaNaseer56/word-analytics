export default function Stats({ stats }) {
  return (
    <section className="stats">
      <div className="stat">
        <p className="stat__number">{stats.numberOfWords}</p>
        <h3 className="second-heading">Words</h3>
      </div>
      <div className="stat">
        <p className="stat__number">{stats.numberOfCharacters}</p>
        <h3 className="second-heading">Characters</h3>
      </div>
      <div className="stat">
        <p
          className={`stat__number ${stats.instagramCharactersLeft < 0 ? "stat__number--limit" : ""}`}
        >
          {stats.instagramCharactersLeft}
        </p>
        <h3 className="second-heading">Instagram</h3>
      </div>
      <div className="stat">
        <p
          className={`stat__number ${stats.facebookCharactersLeft < 0 ? "stat__number--limit" : ""}`}
        >
          {stats.facebookCharactersLeft}
        </p>
        <h3 className="second-heading">Facebook</h3>
      </div>
    </section>
  );
}
