// app/growth/bx-publishing/api/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { JSONFile, Low } from 'lowdb';
import { join } from 'path';

type Item = {
	id: string;
	category: string;
	title: string;
	content: string;
	headImage: string;
	contentImages: string[];
	activeLighting?: boolean;
};

type Data = {
	items: Item[];
};

const file = join(process.cwd(), 'data', 'bx-publishing.interface.json');
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter);

// Initialize and load the database
async function loadDatabase() {
	await db.read();
	db.data ||= { items: [] };
	await db.write();
}

// GET 요청 처리
export async function GET() {
	await db.read();
	let items = db.data?.items || [];

	return new Response(JSON.stringify(items), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function POST(req: NextApiRequest) {
	await db.read();
	let items = db.data?.items || [];

	const newItem: Item = req.body;
	items.push(newItem);
	await db.write();
	return new Response(JSON.stringify(items), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function PUT(req: NextApiRequest) {
	await db.read();
	let items = db.data?.items || [];

	const updateItem: Item = req.body;
	const index = items.findIndex(item => item.id === updateItem.id);
	if (index !== -1) {
		items[index] = updateItem;
		await db.write();
		return new Response(JSON.stringify(updateItem), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} else {
		return new Response(JSON.stringify({ message: "Item not found" }), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

// export default async function handler(req: NextApiRequest) {
// 	// await loadDatabase();
// 	await db.read();
// 	let items = db.data?.items || [];

// 	const { method } = req;

// 	console.log(req);

// 	if (method === 'GET') {
// 		return new Response(JSON.stringify(items), {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		});
// 	} else if (method === 'POST') {
// 		const newItem: Item = req.body;
// 		items.push(newItem);
// 		await db.write();
// 		return new Response(JSON.stringify(items), {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		});
// 	} else if (method === 'PUT') {
// 		// const updateItem: Item = req.body;
// 		// const index = db.data.items.findIndex(item => item.id === updateItem.id);
// 		// if (index !== -1) {
// 		// 	db.data.items[index] = updateItem;
// 		// 	await db.write();
// 		// 	res.status(200).json(updateItem);
// 		// } else {
// 		// 	res.status(404).json({ message: "Item not found" });
// 		// }
// 	} else if (method === 'DELETE') {
// 		// const id = req.query.id as string;
// 		// const filteredItems = db.data.items.filter(item => item.id !== id);
// 		// if (db.data.items.length > filteredItems.length) {
// 		// 	db.data.items = filteredItems;
// 		// 	await db.write();
// 		// 	res.status(200).json({ id, message: 'Deleted successfully' });
// 		// } else {
// 		// 	res.status(404).json({ message: "Item not found" });
// 		// }
// 	} else {
// 		// res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
// 		// res.status(405).end(`Method ${method} Not Allowed`);
// 	}
// }
