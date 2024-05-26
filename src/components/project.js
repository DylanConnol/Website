
const Project = (props) => {
    var position = props.position;
    var number = props.number;

 if (number % 2 == 1) {
  return (
    <h1 style = {{
        fontSize: "50px",
        position: "absolute",
        top: 4800 - position + number*350,
        width: "800px",
        right: 0.5 * window.innerWidth - 250,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {props.children}
    </h1>
  );
}
    return (
        <h1 style = {{
            fontSize: "50px",
            position: "absolute",
            top: 4800 - position + number*350,
            width: "800px",
            right: 0.5 * window.innerWidth - 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {props.children}
        </h1>
    )
};

export default Project;