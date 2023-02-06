const Heading = (props) =>{

    console.log(props)
    return <div>
        <h1>TITOLO:{props.title}</h1>
        <p>Sottotitolo</p>
    </div>
}

//possiamo rendere dimanico il titolo partendo dal index:dandogli il title e usando prps.title 

export default Heading;