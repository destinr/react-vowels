function Vowelizer(props){
    let vowels = ['a','e','i','o','u']
    let letters = props.word.split('')

    return(
        <div>
            <span>Vowels highlighted: {letters.map(letter=> vowels.includes(letter.toLowerCase()) ? <b>{letter}</b>: letter)}</span>
        </div>
    )
}

export default Vowelizer