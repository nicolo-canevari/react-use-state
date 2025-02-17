export default function Accordion(props) {

    // destrutturazione delle props
    const { titolo, descrizione } = props

    // rendering jsx
    return (

        <div className="content-box">

            <h3>{titolo}</h3>
            <p>{descrizione}</p>

        </div>

    );

}