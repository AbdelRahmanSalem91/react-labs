const CountButton = (props) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.title}
    </button>
  );
};

export default CountButton;
