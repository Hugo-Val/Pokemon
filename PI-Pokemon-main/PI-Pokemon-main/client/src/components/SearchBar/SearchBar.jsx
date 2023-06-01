import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };
    
    return (
        <>
            <div>
                <input
                    type='search'
                    name='search'
                    placeholder='Search...'
                    onChange={handleInputChange}
                />
                <button onClick={() => onSearch(name)}>Search</button>
            </div>
        </>
        
    );
}