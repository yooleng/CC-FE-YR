// ----------------------------------------------------------------------------------
//  24-04. common-components - buttons/01
// ----------------------------------------------------------------------------------

interface IProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IProps) {
  return (
    <button style={{ backgroundColor: props.isActive ? "yellow" : "" }}>
      {props.title}
    </button>
  );
}
