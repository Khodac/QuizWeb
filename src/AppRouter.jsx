import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage } from './pages';
import { Navbar } from './components';
// import { Footer } from './components/Footer';

export const AppRouter = () => {
	return (
		<>

		
			<Navbar />
	
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route
					path='/category/:category'
					element={<CategoryPage />}
				/>
			</Routes>
	
			{/* <Footer className="mt-auto"/> */}

		</>
	);
};



