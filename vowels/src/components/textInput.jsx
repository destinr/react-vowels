function WordInput(props) {

    return (
        <div>
            <input
            type = "text"
            onChange ={e => props.setWord(e.target.value)}
            />
        </div>
        
    )
}

export default WordInput;