// app/growth/bx-publishing/api/route.ts
import { JSONFile, Low } from 'lowdb';
import { join } from 'path';

type Data = {
	items: Array<{
		id: string;
		category: string;
		title: string;
		content: string;
		headImage: string;
		contentImages: string[];
		activeLighting?: boolean;
	}>;
};

// 데이터 파일 위치 지정
const file = join(process.cwd(), 'data', 'bx-publishing.interface.json');
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter);

// GET 요청 처리
export async function GET() {
	await db.read();
	let items = db.data?.items || [];
	// console.log("DB Data: ", items); // 로그로 데이터 확인
	console.log("DB Data: ", JSON.stringify(items)); // 로그로 데이터 확인

	return new Response(JSON.stringify(items), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	// return res;
}
