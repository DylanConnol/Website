
const Job = (props) => {
    var position = props.position;
    var number = props.number;
    var JobHeader = props.JobHeader

 if (number % 2 == 1) {
  return (
    <div style = {{width: "100%"}}>
    <h1 style = {{
        fontSize: "50px",
        // position: "absolute",
        // top: 4800 - position + number*350,
        width: 0.6*window.innerWidth,
        marginRight: "auto",
        marginLeft: 0.15* window.innerWidth,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    }}>
        {JobHeader}
    </h1>
    <h1 style = {{
        fontSize: "30px",
        // position: "absolute",
        // top: 4800 - position + number*350,
        width: 0.6*window.innerWidth,
        marginRight: "auto",
        marginLeft: 0.1* window.innerWidth,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    }}>
        {props.children}
    </h1>
    </div>
  );
}
    return (
        <div style = {{width: "100%", justifyContent: "right"}}>
            <h1 style = {{
        fontSize: "50px",
        // position: "absolute",
        // top: 4800 - position + number*350,
        width: 0.6*window.innerWidth,
        marginLeft: "auto",
        marginRight: 0.05* window.innerWidth,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    }}>
        {JobHeader}
    </h1>
        <h1 style = {{
            fontSize: "30px",
            // position: "absolute",
            // top: 4800 - position + number*350,
            width: 0.6*window.innerWidth,
            marginLeft: "auto",
            marginRight: 0.1* window.innerWidth,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
        }}>
            {props.children}
        </h1>
        </div>
    )
};

export default Job;