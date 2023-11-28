import { Request, Response } from "express";
import * as bookService from "../services/books";
import { Book } from "../models/book";

export const getBooks = async (req: Request, res: Response) => {
	const books = await bookService.getBooks();
	res.json(books).status(200);
};

export const getBook = async (req: Request, res: Response) => {
	const bookId = req.params.bookId;
	const book = await bookService.getBook(Number(bookId));

	if (book) {
		res.json(book).status(200);
	} else {
		res.status(404).json("Not found");
	}
};

export const saveBook = async (req: Request, res: Response) => {
	const bookToBeSaved = req.body;
	//const bookId = req.params.bookId;

	try {
		const book = await bookService.saveBook(bookToBeSaved);
		res.status(201).json(book);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}

	// try {
	// 	const existingBook = await bookService.getBook(Number(bookId));
	// 	if (existingBook) {
	// 		res.status(409).json("Book already exists");
	// 	} else {
	// 		const book = await bookService.saveBook(bookToBeSaved);
	// 		res.status(201).json(book);
	// 	}
	// } catch (error) {
	// 	res.status(400).json({ message: (error as Error).message });
	// }

	// **** more 
	
	///** this is actual data *** //{"bookId":1,"title":"The Hobbit","author":"J. R. R. Tolkien","description":"Someone finds a nice piece of jewellery while on holiday."}

	// console.log(`bookToBeSaved: ${JSON.stringify(bookToBeSaved as Book)}`);
	// console.log(`existingBook: ${JSON.stringify(existingBook as Book)}`);

};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (req: Request, res: Response) => {
	const bookUpdateData = req.body;
	const bookId = Number.parseInt(req.params.bookId);

	const book = await bookService.updateBook(bookId, bookUpdateData);
	res.status(204).json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
	const bookId = req.params.bookId;
	const book = await bookService.deleteBook(Number(bookId));

	if (book) {
		res.json(book).status(200);
	} else {
		res.status(404).json("Not found");
	}
};