"use client";

import { useEffect, useState } from 'react';

type Item = {
	id: string;
	category: string;
	title: string;
	content: string;
	headImage: string;
	contentImages: string[];
	activeLighting?: boolean;
};

export default function AdminPage() {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [editForm, setEditForm] = useState<Item | null>(null);
	const [adding, setAdding] = useState(false);
	const [newItem, setNewItem] = useState<Item>({ id: '', category: '', title: '', content: '', headImage: '', contentImages: [], activeLighting: false });

	useEffect(() => {
		fetchItems();
	}, []);

	async function fetchItems() {
		const response = await fetch('/admin/bx-publishing/api'); // Updated fetch URL
		if (response.ok) {
			const data = await response.json();
			setItems(data || []); // Assuming the API returns the items array directly
			setLoading(false);
		} else {
			console.error("Failed to fetch items");
		}
	}

	async function handleDelete(id: string) {
		const response = await fetch(`/admin/bx-publishing/api?id=${id}`, {
			method: 'DELETE',
		});
		if (response.ok) {
			setItems(prevItems => prevItems.filter(item => item.id !== id));
		} else {
			console.error("Failed to delete item");
		}
	}

	async function handleUpdate(item: Item) {
		const response = await fetch('/admin/bx-publishing/api', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(item),
		});
		if (response.ok) {
			const updatedItem = await response.json();
			setItems(prevItems => prevItems.map(it => it.id === item.id ? updatedItem : it));
			setEditForm(null);
		} else {
			console.error("Failed to update item");
		}
	}

	async function handleCreate(item: Item) {
		const response = await fetch('/admin/bx-publishing/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(item),
		});
		if (response.ok) {
			const addedItem = await response.json();
			setItems(prevItems => [...prevItems, addedItem]);
			setAdding(false);
		}
	}

	function handleEdit(item: Item) {
		setEditForm(item);
		setAdding(false);
	}

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<h1>Admin Page</h1>
			{adding ? (
				<div>
					<h2>Add New Item</h2>
					<form onSubmit={e => {
						e.preventDefault();
						handleCreate(newItem);
					}}>
						<label>Id: <input type="text" value={newItem.id} onChange={e => setNewItem({ ...newItem, id: e.target.value })} /></label>
						<label>Title: <input type="text" value={newItem.title} onChange={e => setNewItem({ ...newItem, title: e.target.value })} /></label>
						<label>Category: <input type="text" value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })} /></label>
						<label>Content: <textarea value={newItem.content} onChange={e => setNewItem({ ...newItem, content: e.target.value })} /></label>
						<label>Head Image URL: <input type="text" value={newItem.headImage} onChange={e => setNewItem({ ...newItem, headImage: e.target.value })} /></label>
						{/* Manage content images and active lighting as needed */}
						<button type="submit">Create Item</button>
						<button onClick={() => setAdding(false)}>Cancel</button>
					</form>
				</div>
			) : editForm ? (
				<div>
					<h2>Edit Item</h2>
					<form onSubmit={e => {
						e.preventDefault();
						handleUpdate(editForm);
					}}>
						<div>Id: <input type="text" value={editForm.id} onChange={e => setEditForm({ ...editForm, id: e.target.value })} /></div>
						<div>Title: <input type="text" value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} /></div>
						<div>Category: <input type="text" value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })} /></div>
						<div>Content: <textarea value={newItem.content} onChange={e => setNewItem({ ...newItem, content: e.target.value })} /></div>
						<div>Head Image URL: <input type="text" value={newItem.headImage} onChange={e => setNewItem({ ...newItem, headImage: e.target.value })} /></div>
						{/* Include other fields similar to the add form */}
						<div><button type="submit">Update Item</button></div>
						<div><button onClick={() => setEditForm(null)}>Cancel</button></div>
					</form>
				</div>
			) : (
				<div>
					<button onClick={() => setAdding(true)}>Add New Item</button>
					<table className='table-auto min-w-full'>
						<thead>
							<tr>
								<th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0'>Id</th>
								<th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0'>Title</th>
								<th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0'>Category</th>
								<th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0'>Actions</th>
								<th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0'>Actions</th>
							</tr>
						</thead>

						<tbody>
							{items.map(item => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>{item.category}</td>
									<td>
										<button onClick={() => handleEdit(item)}>Edit</button>
									</td>
									<td>
										<button onClick={() => handleDelete(item.id)}>Delete</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}