import {Cards} from './styled';
import {Filmes} from '../Menu/index';


const Card: React.FC<Filmes> = ({titulo, image, genero, sinopse, nota}: Filmes) => {
  return (
    <Cards>
      <h2>{titulo}</h2>
      <img src={image} alt="cover film" />
      <div>
        <p>Genero: {genero}</p>
        <p>Nota: {nota}</p>
        <p>Sinopse: {sinopse}</p>
      </div>
      <button type="button" ><a href="magnet:?xt=urn:btih:4e861c429955886252bb5b9cf5544298b6b47f3e&dn=Samurai%20X%20-%20A%20Origem%202021%201080p%20DUAL%205.1&tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce">Download</a></button>
    </Cards>
  )
}

export default Card;