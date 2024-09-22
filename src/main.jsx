import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BooksDetails from './components/BooksDetails/BooksDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:'/',
      element: <Home></Home>,
     },
     {
      path:'/listedBooks',
      element: <ListedBooks></ListedBooks>,
     },
     {
      path:'/pagesToRead',
      element: <PagesToRead></PagesToRead>
     },
     {
      path:'/booksDetails/:id',
      element:<BooksDetails></BooksDetails>,
      loader:() => fetch('/books.json')
      .then(res =>res.json()),
     },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
