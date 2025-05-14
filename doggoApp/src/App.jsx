// import { useState, useEffect } from "react";

// // Main App Component
// export default function App() {
//   const [breeds, setBreeds] = useState([]);
//   const [selectedBreed, setSelectedBreed] = useState("");
//   const [dogImage, setDogImage] = useState("https://placecorgi.com/250");
//   const [isLoading, setIsLoading] = useState(false);
//   const [breedFact, setBreedFact] = useState("");
//   const [isVisible, setIsVisible] = useState(false);

//   // Fetch all dog breeds when component mounts
//   useEffect(() => {
//     const fetchBreeds = async () => {
//       try {
//         const response = await fetch("https://dog.ceo/api/breeds/list/all");
//         const data = await response.json();
//         const breedsObject = data.message;
//         const breedsArray = Object.keys(breedsObject);
//         setBreeds(breedsArray);
//       } catch (error) {
//         console.error("Error fetching breeds:", error);
//       }
//     };

//     fetchBreeds();
//   }, []);

//   // Fetch a random dog image when breed changes
//   useEffect(() => {
//     if (selectedBreed) {
//       fetchDogImage(selectedBreed);
//     }
//   }, [selectedBreed]);

//   // Fetch dog image and set breed fact
//   const fetchDogImage = async (breed) => {
//     setIsLoading(true);
//     setIsVisible(false);

//     try {
//       const response = await fetch(
//         `https://dog.ceo/api/breed/${breed}/images/random`
//       );
//       const data = await response.json();
//       setDogImage(data.message);
//       setBreedFact(getBreedFact(breed));

//       // Short delay to ensure image is loaded
//       setTimeout(() => {
//         setIsLoading(false);
//         setIsVisible(true);
//       }, 300);
//     } catch (error) {
//       console.error("Error fetching dog image:", error);
//       setIsLoading(false);
//     }
//   };

//   // Handle breed selection change
//   const handleBreedChange = (e) => {
//     setSelectedBreed(e.target.value);
//   };

//   // Get a random fact about the selected breed
//   const getBreedFact = (breed) => {
//     const breedFacts = {
//       affenpinscher:
//         "Affenpinschers are often called 'monkey dogs' because of their monkey-like expressions!",
//       akita:
//         "Akitas are extremely loyal and were traditionally given to newborns as a symbol of health, happiness, and longevity.",
//       beagle:
//         "Beagles have about 220 million scent receptors, making their sense of smell one of the best among dog breeds.",
//       boxer:
//         "Boxers got their name from their tendency to stand on their hind legs and 'box' with their front paws.",
//       chihuahua:
//         "Chihuahuas are the smallest dog breed in the world and are named after the Mexican state of Chihuahua.",
//       collie:
//         "Collies were made famous by the TV show 'Lassie' and are known for their intelligence and herding abilities.",
//       dachshund:
//         "Dachshunds were bred to hunt badgers - their name literally means 'badger dog' in German.",
//       dalmatian:
//         "Dalmatian puppies are born completely white and develop their spots as they grow older.",
//       doberman:
//         "Dobermans were originally bred by a tax collector who needed protection during his rounds.",
//       germanshepherd:
//         "German Shepherds have been used in military and police roles since World War I.",
//       greyhound:
//         "Greyhounds can reach speeds of up to 45 miles per hour, making them the fastest dog breed.",
//       husky:
//         "Huskies have a double-layered coat that keeps them warm in temperatures as low as -60°F.",
//       labrador:
//         "Labrador Retrievers have been the most popular dog breed in the US for over 30 years.",
//       maltese:
//         "The Maltese breed has been around for at least 28 centuries and was a favorite of royalty throughout Europe.",
//       pomeranian:
//         "Pomeranians used to be much larger sled dogs before being bred down to their current toy size.",
//       poodle:
//         "Poodles' distinctive haircut was originally designed to help them swim more efficiently while keeping vital organs warm.",
//       pug: "Pugs' facial wrinkles were originally bred to form the Chinese character for 'prince'.",
//       rottweiler:
//         "Rottweilers were used by the Romans to herd cattle and pull carts of meat to market.",
//       shihtzu:
//         "Shih Tzus were bred to be companions for Chinese royalty and were so valued they weren't sold or given away.",
//       terrier:
//         "Many terrier breeds were developed to hunt and kill vermin - the name comes from 'terra' meaning earth.",
//     };

//     // Generic facts for breeds not in our list
//     const genericFacts = [
//       `${
//         breed.charAt(0).toUpperCase() + breed.slice(1)
//       }s are known for their unique personalities and loyal companionship.`,
//       `${
//         breed.charAt(0).toUpperCase() + breed.slice(1)
//       }s make wonderful pets and have distinctive characteristics among dog breeds.`,
//       `The ${breed} has a fascinating history and has been beloved by dog enthusiasts for generations.`,
//       `${
//         breed.charAt(0).toUpperCase() + breed.slice(1)
//       }s have unique traits that make them special among canines.`,
//     ];

//     return (
//       breedFacts[breed] ||
//       genericFacts[Math.floor(Math.random() * genericFacts.length)]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center">
//       {/* Header Section */}
//       <header className="w-full bg-white shadow-lg py-4 px-6 mb-8">
//         <div className="max-w-4xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <DraggableBone />
//             <h1 className="text-3xl font-bold text-purple-700">Dog Finder</h1>
//           </div>

//           <div className="relative">
//             <select
//               value={selectedBreed}
//               onChange={handleBreedChange}
//               className="appearance-none bg-purple-100 border border-purple-300 text-purple-800 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//             >
//               <option value="">Select a breed</option>
//               {breeds.map((breed) => (
//                 <option key={breed} value={breed}>
//                   {breed.charAt(0).toUpperCase() + breed.slice(1)}
//                 </option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-700">
//               <svg
//                 className="fill-current h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="w-full max-w-4xl flex-grow flex flex-col items-center px-4">
//         <div className="relative w-full max-w-md aspect-square mb-8">
//           {/* Dog Image Container with Animation */}
//           <div
//             className={`w-full h-full rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 ${
//               isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
//             }`}
//           >
//             <img
//               src={dogImage}
//               alt={selectedBreed || "Random dog"}
//               className="w-full h-full object-cover"
//               onLoad={() => setIsVisible(true)}
//             />
//           </div>

//           {/* Loading Spinner */}
//           {isLoading && (
//             <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded-2xl">
//               <div className="animate-bounce text-4xl">🐶</div>
//             </div>
//           )}
//         </div>

//         {/* Breed Facts Card with Animation */}
//         {selectedBreed && breedFact && (
//           <div
//             className={`bg-white w-full max-w-md rounded-xl shadow-lg p-5 mb-8 transition-all duration-500 ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-4 opacity-0"
//             }`}
//           >
//             <h2 className="text-xl font-bold text-purple-700 mb-2">
//               {selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)}{" "}
//               Fun Fact:
//             </h2>
//             <p className="text-gray-700">{breedFact}</p>
//           </div>
//         )}

//         {/* Call-to-action if no breed selected */}
//         {!selectedBreed && (
//           <div className="text-center mb-8 animate-pulse">
//             <p className="text-lg text-gray-600">
//               Select a dog breed to see a picture and learn a fun fact!
//             </p>
//           </div>
//         )}

//         {/* Random Dog Button */}
//         <button
//           onClick={() => {
//             const randomBreed =
//               breeds[Math.floor(Math.random() * breeds.length)];
//             setSelectedBreed(randomBreed);
//           }}
//           className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 active:scale-95 mb-8"
//         >
//           Surprise Me!
//         </button>
//       </main>

//       {/* Footer */}
//       <footer className="w-full bg-white shadow-inner py-4 mt-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-gray-600">
//             &copy; {new Date().getFullYear()} Rahul Jaiswal | Made with{" "}
//             <span className="text-red-500 animate-pulse">❤</span>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // Draggable Bone Component
// function DraggableBone() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       setPosition({
//         x: position.x + e.movementX,
//         y: position.y + e.movementY,
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     document.removeEventListener("mousemove", handleMouseMove);
//     document.removeEventListener("mouseup", handleMouseUp);

//     // Spring animation back to original position
//     const springAnimation = () => {
//       const springStrength = 0.1;
//       const dx = 0 - position.x;
//       const dy = 0 - position.y;

//       setPosition({
//         x: position.x + dx * springStrength,
//         y: position.y + dy * springStrength,
//       });

//       if (Math.abs(position.x) > 0.5 || Math.abs(position.y) > 0.5) {
//         requestAnimationFrame(springAnimation);
//       } else {
//         setPosition({ x: 0, y: 0 });
//       }
//     };

//     requestAnimationFrame(springAnimation);
//   };

//   return (
//     <div
//       className="select-none cursor-grab active:cursor-grabbing"
//       style={{
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         transition: isDragging ? "none" : "transform 0.1s ease-out",
//       }}
//       onMouseDown={handleMouseDown}
//       onTouchStart={handleMouseDown}
//     >
//       <div className="text-3xl transform hover:rotate-12 transition-transform">
//         🍗
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import {
  Heart,
  PawPrint,
  Search,
  Shuffle,
  ChevronDown,
  X,
  RefreshCw,
  Info,
  Calendar,
  Clock,
  Download,
  Share2,
} from "lucide-react";
import _ from "lodash";

// Modern premium Dog Finder
export default function PremiumDogFinder() {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogImage, setDogImage] = useState(null);
  const [previousImages, setPreviousImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [breedFact, setBreedFact] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [selectedView, setSelectedView] = useState("discover");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [imageHistory, setImageHistory] = useState([]);
  const [factIndex, setFactIndex] = useState(0);

  // Fetch all dog breeds when component mounts
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedsObject = data.message;

        // Create a more detailed breeds array with main breeds and subbreeds
        const breedsArray = [];
        Object.keys(breedsObject).forEach((breed) => {
          if (breedsObject[breed].length === 0) {
            breedsArray.push({ id: breed, name: breed, type: "main" });
          } else {
            breedsObject[breed].forEach((subBreed) => {
              breedsArray.push({
                id: `${breed}/${subBreed}`,
                name: `${subBreed} ${breed}`,
                type: "sub",
                parent: breed,
              });
            });
            breedsArray.push({ id: breed, name: breed, type: "main" });
          }
        });

        setBreeds(breedsArray);
        setFilteredBreeds(breedsArray);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };

    // Load favorites from local storage
    const savedFavorites = localStorage.getItem("dogFinderFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Load theme preference
    const savedTheme = localStorage.getItem("dogFinderTheme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    fetchBreeds();
  }, []);

  // Save favorites to local storage when they change
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("dogFinderFavorites", JSON.stringify(favorites));
    } else {
      localStorage.removeItem("dogFinderFavorites");
    }
  }, [favorites]);

  // Filter breeds based on search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredBreeds(breeds);
      return;
    }

    const filtered = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBreeds(filtered);
  }, [searchQuery, breeds]);

  // Fetch a random dog image when breed changes
  useEffect(() => {
    if (selectedBreed) {
      fetchDogImage(selectedBreed);
    }
  }, [selectedBreed]);

  // Apply theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("dogFinderTheme", theme);
  }, [theme]);

  // Fetch dog image and set breed fact
  const fetchDogImage = async (breed) => {
    setIsLoading(true);

    try {
      // Extract the correct API path based on breed format
      let apiPath = breed;
      if (typeof breed === "object" && breed.id) {
        apiPath = breed.id;
      }

      const response = await fetch(
        `https://dog.ceo/api/breed/${apiPath}/images/random`
      );
      const data = await response.json();

      // Save previous image before updating
      if (dogImage) {
        setPreviousImages((prev) => [dogImage, ...prev].slice(0, 5));
        setImageHistory((prev) =>
          [...prev, { breed: selectedBreed, image: dogImage }].slice(0, 10)
        );
      }

      setDogImage(data.message);

      // Use lodash to get breed name for display
      const breedName = typeof breed === "object" ? breed.name : breed;
      const formattedBreedName = _.startCase(breedName.replace("/", " "));

      const facts = getBreedFact(typeof breed === "object" ? breed.id : breed);
      setBreedFact(facts);
      setFactIndex(0);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    } catch (error) {
      console.error("Error fetching dog image:", error);
      setIsLoading(false);
    }
  };

  // Handle breed selection change
  const handleBreedChange = (breed) => {
    setSelectedBreed(breed);
    setIsDropdownOpen(false);
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Toggle favorite status
  const toggleFavorite = () => {
    if (!dogImage || !selectedBreed) return;

    const favoriteItem = {
      breed: selectedBreed,
      image: dogImage,
      timestamp: new Date().toISOString(),
    };

    const isFavorited = favorites.some(
      (fav) => fav.image === dogImage && _.isEqual(fav.breed, selectedBreed)
    );

    if (isFavorited) {
      setFavorites(
        favorites.filter(
          (fav) =>
            fav.image !== dogImage || !_.isEqual(fav.breed, selectedBreed)
        )
      );
    } else {
      setFavorites([favoriteItem, ...favorites]);
    }
  };

  // Check if current dog is favorited
  const isCurrentDogFavorited = () => {
    return favorites.some(
      (fav) => fav.image === dogImage && _.isEqual(fav.breed, selectedBreed)
    );
  };

  // Get a random fact about the selected breed
  const getBreedFact = (breed) => {
    // Extract base breed name
    const baseBreed = breed.split("/")[0];

    const breedFacts = {
      affenpinscher: [
        "Affenpinschers are often called 'monkey dogs' because of their monkey-like expressions!",
        "Despite their small size, Affenpinschers are fearless and will stand up to dogs much larger than themselves.",
        "The name 'Affenpinscher' means 'monkey-like terrier' in German.",
      ],
      akita: [
        "Akitas are extremely loyal and were traditionally given to newborns as a symbol of health, happiness, and longevity.",
        "Hachiko, the famous loyal Akita, waited for his deceased owner at a train station every day for nine years.",
        "Akitas were originally used for hunting bear, boar, and deer in feudal Japan.",
      ],
      beagle: [
        "Beagles have about 220 million scent receptors, making their sense of smell one of the best among dog breeds.",
        "The name 'Beagle' may come from the French word 'begueule' meaning 'open throat' referring to their howl.",
        "Beagles have been popular in literature and pop culture, appearing in works like 'Peanuts' (Snoopy).",
      ],
      boxer: [
        "Boxers got their name from their tendency to stand on their hind legs and 'box' with their front paws.",
        "Boxers were among the first breeds used as police and military dogs in Germany.",
        "Despite their sometimes intimidating appearance, Boxers are known for being great with children.",
      ],
      chihuahua: [
        "Chihuahuas are the smallest dog breed in the world and are named after the Mexican state of Chihuahua.",
        "Some Chihuahuas have a soft spot on their skull called a molera, similar to the fontanelle in human babies.",
        "Archaeological findings suggest Chihuahuas have been around since Toltec civilization in the 9th century CE.",
      ],
      collie: [
        "Collies were made famous by the TV show 'Lassie' and are known for their intelligence and herding abilities.",
        "Queen Victoria became interested in Collies during the 1860s, which greatly increased their popularity.",
        "There are two types of Collies: rough coat (long-haired) and smooth coat (short-haired).",
      ],
      dachshund: [
        "Dachshunds were bred to hunt badgers - their name literally means 'badger dog' in German.",
        "Their distinctive body shape was developed to allow them to dig into badger burrows.",
        "During WWI, Dachshunds were called 'liberty pups' in the US to avoid the German association.",
      ],
      dalmatian: [
        "Dalmatian puppies are born completely white and develop their spots as they grow older.",
        "Dalmatians have a long history as carriage dogs, running alongside horse-drawn carriages.",
        "Their association with firehouses began when they would guard the horses that pulled fire carriages.",
      ],
      doberman: [
        "Dobermans were originally bred by a tax collector who needed protection during his rounds.",
        "Karl Friedrich Louis Dobermann, the breed's creator, was also a night watchman and dog catcher.",
        "Dobermans are known to be among the most loyal and protective breeds, with exceptional intelligence.",
      ],
      germanshepherd: [
        "German Shepherds have been used in military and police roles since World War I.",
        "The first seeing-eye dog was a German Shepherd named Buddy in 1928.",
        "German Shepherds can have up to 225 million scent receptors, making them excellent tracking dogs.",
      ],
      greyhound: [
        "Greyhounds can reach speeds of up to 45 miles per hour, making them the fastest dog breed.",
        "Despite their need for speed, Greyhounds are often called '40 mph couch potatoes' due to their love of relaxing.",
        "Greyhounds have been depicted in art for over 4,000 years and were the only breed mentioned in the Bible.",
      ],
      husky: [
        "Huskies have a double-layered coat that keeps them warm in temperatures as low as -60°F.",
        "Siberian Huskies were used by the indigenous Chukchi people of Siberia as endurance sled dogs.",
        "Huskies have unique vocalization abilities and are known for 'talking' rather than barking.",
      ],
      labrador: [
        "Labrador Retrievers have been the most popular dog breed in the US for over 30 years.",
        "Labs have webbed feet which make them excellent swimmers.",
        "Originally, they were bred to help fishermen pull in nets and retrieve fish that escaped from fishing hooks.",
      ],
      maltese: [
        "The Maltese breed has been around for at least 28 centuries and was a favorite of royalty throughout Europe.",
        "Despite their long, silky coat, Maltese dogs are considered hypoallergenic as they shed very little.",
        "Ancient Greeks built tombs for their Maltese dogs, showing how valued they were as companions.",
      ],
      pomeranian: [
        "Pomeranians used to be much larger sled dogs before being bred down to their current toy size.",
        "Queen Victoria owned a particularly small Pomeranian, which popularized the breeding of smaller Poms.",
        "Two Pomeranians were among the few survivors of the Titanic disaster.",
      ],
      poodle: [
        "Poodles' distinctive haircut was originally designed to help them swim more efficiently while keeping vital organs warm.",
        "Despite their fancy appearance, Poodles were originally water retrievers used for duck hunting.",
        "Poodles come in three sizes: standard, miniature, and toy, but all are considered the same breed.",
      ],
      pug: [
        "Pugs' facial wrinkles were originally bred to form the Chinese character for 'prince'.",
        "The breed dates back to 400 BCE and was kept as companions by Chinese emperors.",
        "A group of pugs is called a 'grumble.'",
      ],
      rottweiler: [
        "Rottweilers were used by the Romans to herd cattle and pull carts of meat to market.",
        "The breed nearly went extinct in the early 20th century before being revived by dedicated breeders.",
        "Rottweilers' intelligence ranks them as the 9th smartest dog breed according to Stanley Coren's rankings.",
      ],
      shihtzu: [
        "Shih Tzus were bred to be companions for Chinese royalty and were so valued they weren't sold or given away.",
        "The name 'Shih Tzu' means 'little lion' in Chinese.",
        "Despite their long history, Shih Tzus only arrived in the United States in the 1950s.",
      ],
      terrier: [
        "Many terrier breeds were developed to hunt and kill vermin - the name comes from 'terra' meaning earth.",
        "Terriers were bred to have high energy and determination, which helped them excel at catching rats and other pests.",
        "There are over 30 different terrier breeds recognized by major kennel clubs worldwide.",
      ],
    };

    // Generic facts for breeds not in our list
    const genericFacts = [
      `${_.startCase(
        breed.replace("/", " ")
      )}s are known for their unique personalities and loyal companionship.`,
      `${_.startCase(
        breed.replace("/", " ")
      )}s make wonderful pets and have distinctive characteristics among dog breeds.`,
      `The ${breed.replace(
        "/",
        " "
      )} has a fascinating history and has been beloved by dog enthusiasts for generations.`,
      `${_.startCase(
        breed.replace("/", " ")
      )}s have unique traits that make them special among canines.`,
    ];

    return breedFacts[baseBreed] || genericFacts;
  };

  // Get next fact about the current breed
  const showNextFact = () => {
    const facts = breedFact;
    setFactIndex((factIndex + 1) % facts.length);
  };

  // Handle random breed selection
  const selectRandomBreed = () => {
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    setSelectedBreed(randomBreed);
  };

  // Get formatted breed name for display
  const getDisplayBreedName = () => {
    if (!selectedBreed) return "";
    return typeof selectedBreed === "object"
      ? _.startCase(selectedBreed.name)
      : _.startCase(selectedBreed.replace("/", " "));
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Header Section */}
      <header
        className={`w-full ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-lg py-4 px-6 sticky top-0 z-10 transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">
              <PawPrint
                className={`h-8 w-8 ${
                  theme === "dark" ? "text-purple-400" : "text-purple-600"
                }`}
              />
            </div>
            <h1
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-purple-400" : "text-purple-700"
              } hidden sm:block`}
            >
              Premium Dog Finder
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search toggle */}
            {/* <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className={`p-2 rounded-full ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <Search className="h-5 w-5" />
            </button> */}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "hover:bg-gray-700 text-yellow-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Breed selector dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-purple-100 hover:bg-purple-200"
                } border ${
                  theme === "dark" ? "border-gray-600" : "border-purple-300"
                } ${
                  theme === "dark" ? "text-white" : "text-purple-800"
                } py-2 px-4 rounded-lg shadow-sm focus:outline-none transition-colors duration-300`}
              >
                <span>
                  {selectedBreed ? getDisplayBreedName() : "Select a breed"}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-64 max-h-96 overflow-y-auto ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } border rounded-lg shadow-xl z-20`}
                >
                  <div className="p-2 sticky top-0 bg-inherit border-b border-inherit">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search breeds..."
                      className={`w-full p-2 rounded ${
                        theme === "dark"
                          ? "bg-gray-700 text-white placeholder-gray-400"
                          : "bg-gray-100 text-gray-800 placeholder-gray-500"
                      } focus:outline-none`}
                    />
                  </div>
                  <div>
                    {filteredBreeds.map((breed) => (
                      <button
                        key={breed.id}
                        onClick={() => handleBreedChange(breed)}
                        className={`w-full text-left px-4 py-2 ${
                          theme === "dark"
                            ? "hover:bg-gray-700"
                            : "hover:bg-purple-50"
                        } ${breed.type === "sub" ? "pl-8" : ""} ${
                          typeof selectedBreed === "object" &&
                          selectedBreed.id === breed.id
                            ? theme === "dark"
                              ? "bg-gray-700"
                              : "bg-purple-100"
                            : ""
                        }`}
                      >
                        {_.startCase(breed.name)}
                      </button>
                    ))}
                    {filteredBreeds.length === 0 && (
                      <div className="px-4 py-2 text-gray-500">
                        No breeds found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search input (expandable) */}
        {showSearchInput && (
          <div
            className={`max-w-6xl mx-auto mt-4 flex items-center ${
              theme === "dark" ? "bg-gray-700" : "bg-white"
            } rounded-lg overflow-hidden transition-all duration-300`}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a breed..."
              className={`flex-grow p-3 focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white placeholder-gray-400"
                  : "bg-white text-gray-800 placeholder-gray-500"
              }`}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="p-3">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Tab navigation */}
        <div className="max-w-6xl mx-auto mt-4 flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setSelectedView("discover")}
            className={`py-2 px-4 font-medium border-b-2 transition-colors ${
              selectedView === "discover"
                ? `${
                    theme === "dark"
                      ? "border-purple-400 text-purple-400"
                      : "border-purple-600 text-purple-600"
                  }`
                : `${
                    theme === "dark"
                      ? "border-transparent text-gray-400 hover:text-gray-300"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setSelectedView("favorites")}
            className={`py-2 px-4 font-medium border-b-2 transition-colors ${
              selectedView === "favorites"
                ? `${
                    theme === "dark"
                      ? "border-purple-400 text-purple-400"
                      : "border-purple-600 text-purple-600"
                  }`
                : `${
                    theme === "dark"
                      ? "border-transparent text-gray-400 hover:text-gray-300"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`
            }`}
          >
            Favorites {favorites.length > 0 && `(${favorites.length})`}
          </button>
          <button
            onClick={() => setSelectedView("history")}
            className={`py-2 px-4 font-medium border-b-2 transition-colors ${
              selectedView === "history"
                ? `${
                    theme === "dark"
                      ? "border-purple-400 text-purple-400"
                      : "border-purple-600 text-purple-600"
                  }`
                : `${
                    theme === "dark"
                      ? "border-transparent text-gray-400 hover:text-gray-300"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`
            }`}
          >
            History
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto flex-grow px-4 py-8">
        {selectedView === "discover" && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Dog Image Container */}
            <div className="lg:w-3/5">
              <div
                className={`relative aspect-square rounded-2xl overflow-hidden shadow-xl ${
                  theme === "dark" ? "shadow-gray-800" : "shadow-gray-300"
                } mb-4`}
              >
                {dogImage ? (
                  <>
                    <img
                      src={dogImage}
                      alt={selectedBreed ? getDisplayBreedName() : "Random dog"}
                      className="w-full h-full object-cover"
                    />
                    {/* Loading overlay */}
                    {isLoading && (
                      <div
                        className={`absolute inset-0 flex items-center justify-center ${
                          theme === "dark" ? "bg-gray-900" : "bg-white"
                        } bg-opacity-70`}
                      >
                        <div className="animate-spin">
                          <RefreshCw
                            className={`h-10 w-10 ${
                              theme === "dark"
                                ? "text-purple-400"
                                : "text-purple-600"
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    className={`w-full h-full flex flex-col items-center justify-center ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <PawPrint
                      className={`h-16 w-16 ${
                        theme === "dark" ? "text-gray-700" : "text-gray-300"
                      } mb-4`}
                    />
                    <p
                      className={`text-lg ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Select a breed to view dogs
                    </p>
                  </div>
                )}

                {/* Favorite button */}
                {dogImage && !isLoading && (
                  <button
                    onClick={toggleFavorite}
                    className={`absolute top-4 right-4 p-3 rounded-full ${
                      isCurrentDogFavorited()
                        ? "bg-red-500 text-white"
                        : `${
                            theme === "dark"
                              ? "bg-gray-800 text-gray-300"
                              : "bg-white text-gray-600"
                          }`
                    } shadow-lg transition-colors duration-300`}
                  >
                    <Heart
                      className={`h-6 w-6 ${
                        isCurrentDogFavorited() ? "fill-current" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => selectedBreed && fetchDogImage(selectedBreed)}
                  disabled={!selectedBreed || isLoading}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium ${
                    !selectedBreed
                      ? `${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-500"
                            : "bg-gray-200 text-gray-400"
                        }`
                      : `${
                          theme === "dark"
                            ? "bg-purple-700 hover:bg-purple-600 text-white"
                            : "bg-purple-600 hover:bg-purple-700 text-white"
                        }`
                  } transition-colors duration-300 shadow-md`}
                >
                  <RefreshCw
                    className={`h-5 w-5 ${isLoading ? "animate-spin" : ""}`}
                  />
                  <span>Next Image</span>
                </button>
                <button
                  onClick={selectRandomBreed}
                  disabled={isLoading}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  } transition-colors duration-300 shadow-md`}
                >
                  <Shuffle className="h-5 w-5" />
                  <span>Random Breed</span>
                </button>
              </div>

              {/* Previous images carousel */}
              {previousImages.length > 0 && (
                <div className="mb-8">
                  <h3
                    className={`text-lg font-medium mb-3 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Previous Images
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                    {previousImages.map((img, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => {
                          setDogImage(img);
                          setPreviousImages(
                            previousImages.filter((_, i) => i !== index)
                          );
                        }}
                      >
                        <img
                          src={img}
                          alt="Previous dog"
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Info Panel */}
            <div className="lg:w-2/5">
              {selectedBreed && breedFact && (
                <div
                  className={`${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  } rounded-xl shadow-lg p-6 mb-6 transition-all duration-300`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2
                      className={`text-xl font-bold ${
                        theme === "dark" ? "text-purple-400" : "text-purple-700"
                      }`}
                    >
                      {getDisplayBreedName()}
                    </h2>
                    <button
                      onClick={showNextFact}
                      className={`p-2 rounded-full ${
                        theme === "dark"
                          ? "hover:bg-gray-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>

                  {/* <div className="flex gap-3 mb-4">
                    <div
                      className={`p-2 rounded-md ${
                        theme === "dark" ? "bg-gray-700" : "bg-purple-50"
                      }`}
                    >
                      <Info
                        className={`h-5 w-5 ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Info
                      </span>
                    </div>
                    <div
                      className={`p-2 rounded-md ${
                        theme === "dark" ? "bg-gray-700" : "bg-purple-50"
                      }`}
                    >
                      <Calendar
                        className={`h-5 w-5 ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        History
                      </span>
                    </div>
                    <div
                      className={`p-2 rounded-md ${
                        theme === "dark" ? "bg-gray-700" : "bg-purple-50"
                      }`}
                    >
                      <Clock
                        className={`h-5 w-5 ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Age
                      </span>
                    </div>
                    <div
                      className={`p-2 rounded-md ${
                        theme === "dark" ? "bg-gray-700" : "bg-purple-50"
                      }`}
                    >
                      <Download
                        className={`h-5 w-5 ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Download
                      </span>
                    </div>
                    <div
                      className={`p-2 rounded-md ${
                        theme === "dark" ? "bg-gray-700" : "bg-purple-50"
                      }`}
                    >
                      <Share2
                        className={`h-5 w-5 ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Share
                      </span>
                    </div>
                  </div> */}
                  <p
                    className={`text-gray-600 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {Array.isArray(breedFact)
                      ? breedFact[factIndex]
                      : breedFact}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {selectedView === "favorites" && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Favorites Section */}
            <div
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg p-6 mb-6 transition-all duration-300`}
            >
              <h2
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-purple-400" : "text-purple-700"
                } mb-4`}
              >
                Your Favorites
              </h2>
              {favorites.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {favorites.map((fav, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => {
                        setDogImage(fav.image);
                        setSelectedBreed(fav.breed);
                        setSelectedView("discover");
                      }}
                    >
                      <img
                        src={fav.image}
                        alt="Favorite dog"
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className={`text-gray-500 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  No favorites yet. Add some!
                </p>
              )}
            </div>
          </div>
        )}
        {selectedView === "history" && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* History Section */}
            <div
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg p-6 mb-6 transition-all duration-300`}
            >
              <h2
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-purple-400" : "text-purple-700"
                } mb-4`}
              >
                Image History
              </h2>
              {imageHistory.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {imageHistory.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => {
                        setDogImage(img.image);
                        setSelectedBreed(img.breed);
                        setSelectedView("discover");
                      }}
                    >
                      <img
                        src={img.image}
                        alt="History dog"
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className={`text-gray-500 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  No history yet. View some dogs!
                </p>
              )}
            </div>
          </div>
        )}
      </main>
      {/* Footer */}
      <footer
        className={`w-full ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } py-4 px-6 border-t border-gray-200 dark:border-gray-700`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; {new Date().getFullYear()} Premium Dog Finder. All rights
            reserved.
          </p>
          <p
            className={`text-xs ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } mt-1`}
          >
            Made with ❤️ by{" "}
            <a
              className="underline  hover:text-purple-500 "
              target="_blank"
              href="https://github.com/rjrahul007"
            >
              Rahul Jaiswal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
