import "./styles.scss";

function TitlePage(props) {
  const { title } = props;
  return (
    <div className="page__top">
      <h2>{title}</h2>
    </div>
  );
}

export default TitlePage;
