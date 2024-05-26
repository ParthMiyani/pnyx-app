import "../../styles/ui/borderButton.css";

function BorderButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.title ? props.title : "Submit"}
    </button>
  );
}

export default BorderButton;
