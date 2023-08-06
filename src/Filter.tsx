import { useState, useEffect } from 'react';

interface Result {
    name: string,
    url: string
}

interface Habitat {
    results: Result[]
}

function Filter({url, title} : {url:string, title:string}) {
    const [habitat, setHabitat] = useState<Habitat | null>(null);


    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data: Habitat) => {
            console.log(data);
            setHabitat(data);
        });
    }, []);

    return (
        <details className="collapse collapse-arrow bg-base-200 mb-6">
            <summary className="collapse-title text-xl font-medium">{title}</summary>
            <div className="collapse-content px-10"> 
                <div className="form-control grid grid-cols-2 gap-x-40">
                    {
                        habitat?.results?.map((h, index) => {
                            return (
                                <label className="label cursor-pointer" key={index}>
                                    <span className="label-text">{h.name.split("-").join(" ")}</span> 
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        </details>
    );
}

export default Filter;