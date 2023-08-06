import Filter from './Filter';

function FilterBar () {
    return (
        <div className='flex flex-col justify-center'>
            <Filter url="https://pokeapi.co/api/v2/pokemon-habitat/" title='Habitat'/>
            <Filter url="https://pokeapi.co/api/v2/egg-group/" title='Egg Group'/>
            <Filter url="https://pokeapi.co/api/v2/growth-rate/" title='Growth Rate'/>
            <Filter url="https://pokeapi.co/api/v2/pokemon-color/" title='Pokemon Color'/>
        </div>
    )
}

export default FilterBar;