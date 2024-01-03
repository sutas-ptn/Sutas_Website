import { useTypewriter } from 'react-simple-typewriter'


function Typetext(){
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0
      })
    return(
        <div>
            <span>{text}</span>
        </div>
    )
}

export default Typetext;
