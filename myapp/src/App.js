// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mumbai from './pages/Mumbai';
// import WishMumbai from './components/WishMumbai';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Mumbai />} />
//         <Route path="/wishlist" element={<WishMumbai />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//App.js
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Front from './components/Front';
import SignInSignUp from './components/SignInSignUp';
// import Mumbai from './pages/Mumbai';
// import PropertyListingForm from './components/PropertyListingForm';
function App() {
  return (
    <BrowserRouter>
    {/* <Front /> */}
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/signin" element={<SignInSignUp />} />
        {/* <Route path="/mumbai" element={<Mumbai />} /> */}
        {/* <Route path="/PropertyListingForm" element={<PropertyListingForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PropertyListingForm from './components/PropertyListingForm'; // Assuming your form component is in PropertyListingForm.js
// import PropertyListings from './components/PropertyListings'; // Assuming your listings component is in PropertyListings.js

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           {/* Route for the property listing form */}
//           <Route path="/" element={<PropertyListingForm />} />
          
//           {/* Route for the property listings page */}
//           <Route path="/listings" element={<PropertyListings />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from 'react'
// import PropertyListings from './components/PropertyListings'
// function App() {
//   return (
//     <div>
//       <PropertyListings />
//     </div>
//   )
// }

// export default App
