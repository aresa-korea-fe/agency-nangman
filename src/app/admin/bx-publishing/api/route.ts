// app/growth/bx-publishing/api/route.ts
import { NextApiRequest } from 'next';
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

export async function POST(req: Request) {
	await db.read();
	let items = db.data?.items || [];

	const newItem: Item = JSON.parse(await req.text()).body;
	items.push(newItem);
	await db.write();
	return new Response(JSON.stringify(items), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function PUT(req: Request) {
	await db.read();
	let items = db.data?.items || [];

	const updateItem: Item = JSON.parse(await req.text()).body;
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

export async function DELETE(req: Request) {
	await db.read();
	let items = db.data?.items || [];

	const id = JSON.parse(await req.text()).query.id as string;
	const filteredItems = items.filter(item => item.id !== id);
	if (items.length > filteredItems.length) {
		items = filteredItems;
		await db.write();
		return new Response(JSON.stringify({ id, message: 'Deleted successfully' }), {
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
