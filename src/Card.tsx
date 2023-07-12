import pokemon from './assets/pokemon-2.jpg';

function Card() {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={pokemon} style={{width: 300}} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
}

export default Card