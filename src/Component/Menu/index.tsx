import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import { ApplicationState } from '../../store/'
import { RepositoryState } from '../../store/Menu/type'
import * as action from '../../store/Menu/action'
import Card from '../Cards/Cards';
import {WrapperContent, Main} from '../Cards/styled';

interface StateProps {
    repository: RepositoryState
}

export interface Filmes {
    titulo: string,
    genero: string,
    image: string,
    sinopse: string,
    nota?: string,
}

interface DispatchProps {
    loadRequest(): void
}

type props = StateProps & DispatchProps

const Menu: React.FC<props> = (props: props) => {
    const [filmes, setFilmes] = useState<Filmes[]>([
        {
            titulo: 'TITANIC',
            image: "https://i1.sndcdn.com/artworks-000010701653-c2ndhu-t500x500.jpg",
            genero: 'Drama',
            sinopse: 'O navio que não afundava afundou',
            nota: '10'
        },
        {
            titulo: 'Tom e Jerry',
            image: 'https://www.cartoonpics.net/data/media/9/cover_Tom_and_Jerry.jpg',
            genero: 'comedia',
            sinopse: 'Gato correndo atraz do rato',
            nota: '7.5'
        },{
            titulo: 'tubarão branco',
            image: 'https://media.fstatic.com/kCT9Wr0BNHlQm9kmJ-TrGBect14=/290x478/smart/media/movies/covers/2021/07/Great_White-361517570-large.jpg',
            genero: 'Terror',
            sinopse: 'Tubarão comendo gente',
            nota: '6.2'
        },{
            titulo: 'Contagio em alto mar',
            image: 'https://media.fstatic.com/TnEbUEysGKAmgQNH_PGr8Vqki8c=/210x312/smart/media/movies/covers/2020/03/sea-fever_poster_goldposter_com_3.jpg',
            genero: 'Ficção',
            sinopse: 'Corona no mar',
            nota: '5.9'
        },{
            titulo: 'Velozes e furiosos 9',
            image: 'https://pbs.twimg.com/media/E4GAL5zXMAgu6WE.jpg',
            genero: 'Corrida',
            sinopse: 'Mais mentiroso do que nunca',
            nota: '9'
        },{
            titulo: 'Samurai x',
            image: 'https://upload.wikimedia.org/wikipedia/pt/8/80/Rurouni_Kenshin_vol_1.jpg',
            genero: 'Drama',
            sinopse: 'Um samurai com sua espada',
            nota: '7.8'
        },{
            titulo: 'O ultimo mercenario',
            image: 'https://media.fstatic.com/AONOF6VO84yL5k3Wq5cfCTY2b0I=/290x478/smart/media/movies/covers/2021/06/MV5BNGNkZmJiZTAtY2M3MC00ZTNjLThkYmQtNmMxMTg3ZTJlNDA4XkEyXkFqcGdeQX_Yu7Hz3Z.jpg',
            genero: 'Comedia',
            sinopse: 'Mercenario no standup',
            nota: '6.3'
        },
    ]);

    const addFilm = (titulo: string, genero: string, sinopse: string, nota: string, image: string) => {
        const newFilm: Filmes = {titulo, genero, sinopse, nota, image }
        setFilmes([...filmes, newFilm]);
    }

    return (
        <Main>
            <WrapperContent>
                {filmes.map(filme => {
                    return <Card titulo={filme.titulo} image={filme.image} genero={filme.genero} sinopse={filme.sinopse} nota={filme.nota} />
                })}
                <input type="button" onClick={() => addFilm('Gente grande', 'Comedia', 'Filme da sessão tarde', '6.6', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/148/504/products/gentegrande21-1c0e6fd90ef1ee432d15479212559194-640-0.jpg')} value="Comedia"/>
                <input type="button" onClick={() => addFilm('Entidade', 'Terror', 'Filme macabro de demonio', '3.8', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/31/38/20277419.jpg')} value="terror"/>
                <input type="button" onClick={() => addFilm('A guerra do amanha', 'Ação', 'Melhor do ano', '10.0', 'https://br.web.img3.acsta.net/pictures/21/05/26/20/19/2966501.jpg')} value="Ação" />
            </WrapperContent>
         </Main>
    )
} 

const mapStateToProps = (state: ApplicationState) => ({
    repository: state.repository
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(action, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu); 
