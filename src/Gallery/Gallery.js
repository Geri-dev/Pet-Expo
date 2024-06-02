import React, { useState } from 'react';
import './gallery.css';
import Modal from './Modal';
import { useEffect } from 'react';


// Gallery component for displaying images of animals based on the selected pet
function Gallery({ selectedPet }) {

  // State variables for search results, loading state, and error message
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Function to handle search based on the selected pet
  const handleSearch = (searchQuery) => {
    setLoading(true);
    setError(null);

    let apiUrl = '';

    // Constructing API URL based on the selected pet
    if (searchQuery.toLowerCase().includes('dog')) {
      searchQuery = searchQuery.toLowerCase().replace("dog", '');
      apiUrl = `https://freetestapi.com/api/v1/dogs?search=${searchQuery}`;
    } else if (searchQuery.toLowerCase().includes('cat')) {
      searchQuery = searchQuery.toLowerCase().replace("cat", '');
      apiUrl = `https://freetestapi.com/api/v1/cats?search=${searchQuery}`;
    } else if (searchQuery.toLowerCase().includes('bird')) {
      searchQuery = searchQuery.toLowerCase().replace("bird", '');
      apiUrl = `https://freetestapi.com/api/v1/birds?search=${searchQuery}`;
    } else {
      setError('Invalid search query. Please specify what kind of animal you are searching for. Ex: doberman dog');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');


    // Fetching data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the data to inspect the structure
        setSearchResults(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
  };

  // Effect to trigger search when selectedPet changes
  useEffect(() => {
      if (selectedPet) {
        handleSearch(selectedPet);
      }
  }, [selectedPet]);


  // Rendering the search bar, loading state, and cards component
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <Cards searchResults={searchResults} />}
      
    </div>
  );
}

export default Gallery;


      

// SearchBar component for inputting search queries
function SearchBar({ onSearch }) {

  // State variable for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search when the search button is clicked
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };
  
  return (
    <div className="search-bar-gallery">
      <input
        placeholder="Search pets ..."
        className="searchInput-gallery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="searchButton-gallery" onClick={handleSearch}>Search</button>
    </div>
  );
}


/* Display cards (API) & POP-UP */

function Cards({ searchResults }) {

  // State to manage the pop-up open/close state and the selected animal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Function to handle click on a card, sets the selected animal and opens the pop-up
  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal, resets the selected animal and closes the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  return (
    <div className="cards-area">
      {searchResults.map((result, index) => (

        // Render a card for each search result, clicking on it opens the modal with the animal's details
        <div key={index} className="card" onClick={() => handleCardClick(result)}>
          <img 
            src={result.image}
            alt={result.name}
            className="card-image"
          />
          <p className="card-name">Name: {result.name}</p>
          <p className="card-origin">Origin: {result.origin}</p>
        </div>
      ))}

       {/* Render the modal component if an animal is selected */}
      {selectedAnimal && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} animal={selectedAnimal} />
      )}
    </div>
  );
}



